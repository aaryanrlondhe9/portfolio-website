#!/bin/bash

# Portfolio Website - GitHub Pages Deployment Script
# This script helps deploy your portfolio to GitHub Pages

echo "🚀 Portfolio Website - GitHub Pages Deployment Helper"
echo "======================================================\n"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    echo "Visit: https://git-scm.com/download"
    exit 1
fi

# Check if already a git repository
if [ ! -d .git ]; then
    echo "📝 Initializing new Git repository..."
    git init
    echo "✅ Git repository initialized\n"
else
    echo "✅ Git repository already exists\n"
fi

# Get GitHub username
read -p "📧 Enter your GitHub username: " github_username

if [ -z "$github_username" ]; then
    echo "❌ GitHub username is required."
    exit 1
fi

# Construct repository URL
repo_url="https://github.com/$github_username/$github_username.github.io.git"

echo "\n📍 Repository URL: $repo_url"

# Check if remote already exists
if git remote | grep -q origin; then
    echo "⚠️  Remote 'origin' already exists. Updating...\n"
    git remote set-url origin "$repo_url"
else
    echo "➕ Adding remote origin...\n"
    git remote add origin "$repo_url"
fi

# Add all files
echo "📦 Adding files..."
git add .

# Create commit message
echo "\n✍️  Creating commit..."
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Initial commit: Portfolio website"
fi

git commit -m "$commit_msg"

# Ensure we're on main branch
echo "\n🌿 Switching to main branch..."
git branch -M main

# Push to GitHub
echo "\n⬆️  Pushing to GitHub..."
echo "This may ask for your GitHub credentials...\n"

git push -u origin main

if [ $? -eq 0 ]; then
    echo "\n✅ Successfully pushed to GitHub!"
    echo "\n🎉 Your portfolio will be live at: https://$github_username.github.io"
    echo "⏱️  (It may take a few minutes to appear)"
    echo "\n📖 Setup guide: https://pages.github.com/"
else
    echo "\n❌ Push failed. Please check your credentials and try again."
    exit 1
fi

echo "\n📋 Next steps:"
echo "1. Go to GitHub: https://github.com/$github_username/$github_username.github.io"
echo "2. Click Settings → Pages"
echo "3. Ensure 'Deploy from a branch' is selected with main branch"
echo "4. Wait a few minutes for GitHub Pages to build"
echo "5. Visit https://$github_username.github.io to see your portfolio\n"

echo "💡 To make changes:"
echo "   - Edit files locally"
echo "   - Run: git add ."
echo "   - Run: git commit -m 'Your message'"
echo "   - Run: git push origin main\n"

echo "📚 For more help, see README.md"
