/**
 * chat.js – "Ask Anything About Me" floating AI chat widget
 * Sends user questions to AWS API Gateway → Lambda → OpenAI
 */

(function () {
  "use strict";

  // ── Replace this with your actual AWS API Gateway endpoint ──────────────
  const API_ENDPOINT = "https://9kpagzb0r2.execute-api.us-east-1.amazonaws.com/prod/chat";

  // ── DOM references ────────────────────────────────────────────────────────
  const toggle   = document.getElementById("chat-toggle");
  const frame    = document.getElementById("chat-frame");
  const closeBtn = document.getElementById("chat-close");
  const messages = document.getElementById("chat-messages");
  const input    = document.getElementById("chat-input");
  const sendBtn  = document.getElementById("chat-send");

  // ── Open / Close chat ─────────────────────────────────────────────────────
  toggle.addEventListener("click", () => {
    const isOpen = frame.classList.toggle("open");
    
    toggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen && messages.children.length === 0) {
      appendMessage("bot", "👋 Hi! I'm Aaryan's AI assistant. Ask me anything about his background, skills, or experience!");
    }
    if (isOpen) input.focus();
  });

  closeBtn.addEventListener("click", () => {
    frame.classList.remove("open");
    
    toggle.setAttribute("aria-expanded", "false");
  });

  // ── Send on button click or Enter key ────────────────────────────────────
  sendBtn.addEventListener("click", handleSend);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  // ── Core send logic ───────────────────────────────────────────────────────
  async function handleSend() {
    const question = input.value.trim();
    if (!question) return;

    input.value = "";
    sendBtn.disabled = true;
    input.disabled = true;

    appendMessage("user", question);
    const typingEl = appendMessage("bot", "⏳ Thinking...", "typing");

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      typingEl.remove();

      if (response.ok && data.answer) {
        appendMessage("bot", data.answer);
      } else {
        appendMessage("bot", "⚠️ " + (data.error || "Something went wrong. Please try again."));
      }
    } catch (err) {
      typingEl.remove();
      appendMessage("bot", "⚠️ Network error. Please check your connection and try again.");
      console.error("[Chat] Fetch error:", err);
    } finally {
      sendBtn.disabled = false;
      input.disabled = false;
      input.focus();
    }
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  function appendMessage(role, text, extraClass = "") {
    const el = document.createElement("div");
    el.className = ["chat-msg", role, extraClass].filter(Boolean).join(" ");
    el.textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    return el;
  }
})();
