import json
import os
import boto3
from botocore.exceptions import ClientError
import urllib.request
import urllib.error

# ── Resume context loaded from local file bundled with Lambda ──────────────────
RESUME_FILE = os.path.join(os.path.dirname(__file__), "resume_context.txt")

def load_resume_context():
    """Load resume text from bundled file (acts as a simple local vector store)."""
    try:
        with open(RESUME_FILE, "r", encoding="utf-8") as f:
            return f.read()
    except Exception as e:
        print(f"[WARN] Could not load resume file: {e}")
        return "Resume context unavailable."

# ── Retrieve OpenAI API key from AWS Secrets Manager ──────────────────────────
def get_secret(secret_name: str, region_name: str = "us-east-1") -> str:
    """Fetch a secret string from AWS Secrets Manager."""
    client = boto3.client("secretsmanager", region_name=region_name)
    try:
        response = client.get_secret_value(SecretId=secret_name)
        secret = response.get("SecretString", "{}")
        data = json.loads(secret)
        return data.get("OPENAI_API_KEY", secret)          # support both raw & JSON
    except ClientError as e:
        error_code = e.response["Error"]["Code"]
        print(f"[ERROR] Secrets Manager ({error_code}): {e}")
        raise e

# ── Call OpenAI Chat Completion API ──────────────────────────────────────────
def call_openai(api_key: str, user_question: str, resume_context: str) -> str:
    """Send question + resume context to OpenAI and return the answer."""
    system_prompt = (
        "You are a helpful assistant answering questions about Aaryan R Londhe's "
        "professional background. Use ONLY the resume context provided below to answer. "
        "If the answer is not in the context, say 'I don't have that information.'\n\n"
        f"RESUME CONTEXT:\n{resume_context}"
    )

    payload = json.dumps({
        "model": "gpt-4o-mini",
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user",   "content": user_question}
        ],
        "max_tokens": 512,
        "temperature": 0.3
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://api.openai.com/v1/chat/completions",
        data=payload,
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}"
        },
        method="POST"
    )

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            result = json.loads(resp.read().decode("utf-8"))
            return result["choices"][0]["message"]["content"].strip()
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8")
        print(f"[ERROR] OpenAI HTTP {e.code}: {body}")
        raise Exception(f"OpenAI API error {e.code}: {body}")

# ── Lambda Handler ─────────────────────────────────────────────────────────────
def lambda_handler(event, context):
    """Main Lambda entry point — invoked by API Gateway."""

    # CORS headers for Amplify-hosted frontend
    headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST"
    }

    # Handle CORS preflight
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    try:
        # Parse incoming request body
        body = event.get("body", "{}")
        if isinstance(body, str):
            body = json.loads(body)
        user_question = body.get("question", "").strip()

        if not user_question:
            return {
                "statusCode": 400,
                "headers": headers,
                "body": json.dumps({"error": "No question provided."})
            }

        # 1️⃣  Retrieve secret from AWS Secrets Manager
        secret_name = os.environ.get("SECRET_NAME", "portfolio/openai_api_key")
        api_key = get_secret(secret_name)

        # 2️⃣  Load resume context (local file / simple vector store)
        resume_context = load_resume_context()

        # 3️⃣  Call OpenAI Chat Completion API
        answer = call_openai(api_key, user_question, resume_context)

        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps({"answer": answer})
        }

    except Exception as e:
        print(f"[ERROR] lambda_handler: {e}")
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"error": "Internal server error. Please try again."})
        }
