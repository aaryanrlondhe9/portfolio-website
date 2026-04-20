# 📖 Website Content Map & Visual Guide

## Page Layout Overview

```
┌─────────────────────────────────────────────────┐
│           NAVIGATION BAR (Sticky)               │
│  Logo  [Home|About|Experience|Projects|Skills|Contact]
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                   HERO SECTION                  │
│    "Cybersecurity Professional"                 │
│  "Specializing in Threat Detection..."         │
│    [Get In Touch] [View My Work]                │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                  ABOUT SECTION                  │
│  Bio (Left)              │  Education (Right)   │
│  • Master's Degree       │  • Master's (2026)   │
│  • Passion for security  │  • Bachelor's (2024) │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│              EXPERIENCE TIMELINE                │
│                                                 │
│  May 2025 ────  PayPal (Anti-Phishing)         │
│  │              • Phishing detection system    │
│  │              • LLM training (98% accuracy)  │
│  │              • Streamlit dashboard         │
│  │                                            │
│  Dec 2023 ────  USC Aiken (SOC Analyst)       │
│  │              • Incident response            │
│  │              • Threat hunting               │
│  │              • Detection rules              │
│  │                                            │
│  Nov 2022 ────  Vulnerability Researcher       │
│                 • Fortune 500 discoveries      │
│                 • Remediation guidance         │
│                                                │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│               PROJECTS SECTION                  │
│                                                 │
│  ┌──────────────┐    ┌──────────────┐         │
│  │ Secure Drive │    │ ICS/SCADA    │         │
│  │ Antivirus    │    │ Network Sec  │         │
│  │              │    │              │         │
│  │ • Quarantine │    │ • Assessment │         │
│  │ • Hash DB    │    │ • 100 vulns  │         │
│  │              │    │              │         │
│  │ Python       │    │ Tools        │         │
│  └──────────────┘    └──────────────┘         │
│                                                 │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                SKILLS SECTION                   │
│                                                 │
│  Technical Skills:  [Python] [Bash] [Nessus]   │
│  Specializations:   [Threat Detection] [SOC]   │
│  Certifications:    • Security+                │
│                     • Network+                 │
│                     • PenTest+                 │
│                     • CCNA                     │
│                     • CySA+ (Planned)          │
│                                                 │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│               CONTACT SECTION                   │
│                                                 │
│  Contact Info (Left)  │  Contact Form (Right)  │
│  • Email              │  • Full Name *         │
│  • Phone              │  • Email *             │
│  • Location           │  • Phone               │
│  • LinkedIn           │  • Subject *           │
│                       │  • Inquiry Type        │
│                       │  • Budget Range        │
│                       │  • Message *           │
│                       │  • Subscribe checkbox  │
│                       │  [Send] [Clear]        │
│                                                 │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                  FOOTER                         │
│     © 2026 Aaryan R Londhe. All rights reserved │
│          [LinkedIn] [Email]                     │
└─────────────────────────────────────────────────┘
```

---

## Form Layout Breakdown

```
┌─ CONTACT FORM ────────────────────────────────┐
│                                                │
│  ╭─ Form Section ─────────────────────────╮   │
│  │ Full Name * ___________________          │   │
│  │ Email Address * ___________________      │   │
│  │ Phone Number ___________________         │   │
│  │ Subject * ___________________            │   │
│  ╰────────────────────────────────────────╯   │
│                                                │
│  ╭─ Advanced Fields ───────────────────────╮  │
│  │ Inquiry Type ▼ (dropdown)                │  │
│  │   - Select Type                           │  │
│  │   - Job Opportunity                       │  │
│  │   - Consulting                            │  │
│  │   - Collaboration                         │  │
│  │   - Networking                            │  │
│  │   - Other                                 │  │
│  │                                           │  │
│  │ Budget Range |━━━━━━━━━|  $0              │  │
│  │             (drag to adjust)               │  │
│  ╰───────────────────────────────────────────╯  │
│                                                │
│  ╭─ Message ─────────────────────────────────╮ │
│  │ _________________________________          │ │
│  │ _________________________________          │ │
│  │ _________________________________          │ │
│  │ _________________________________          │ │
│  ╰───────────────────────────────────────────╯ │
│                                                │
│  ☑ Subscribe to newsletter                    │
│                                                │
│  [━ Send Message ━]  [━ Clear ━]              │
│                                                │
└────────────────────────────────────────────────┘
```

---

## Mobile View Adaptation

```
Mobile (< 480px)
┌──────────────┐
│ ☰ Aaryan     │  ← Hamburger menu
└──────────────┘
│              │
│ HERO SECTION │  ← Full width
│ Cybersecurity│
│ Professional │
│ [Button]     │
│              │
├──────────────┤
│              │
│ ABOUT        │  ← Stacked vertically
│              │
│ Education    │
│ Details      │
│              │
├──────────────┤
│              │
│ EXPERIENCE   │  ← Timeline adjusted
│ (single col) │    to left side
│              │
├──────────────┤
│              │
│ PROJECTS     │  ← Single column
│ Card 1       │
│              │
│ Card 2       │
│              │
├──────────────┤
│              │
│ SKILLS       │  ← Wrapped tags
│              │
├──────────────┤
│              │
│ CONTACT      │  ← Stacked form
│ Form         │
│              │
└──────────────┘
```

---

## File Hierarchy & Purpose

```
index.html
├── <head>
│   ├── Meta tags (SEO, viewport, description)
│   ├── Title
│   └── CSS links
│
└── <body>
    ├── <nav>
    │   └── Navigation menu with links
    │
    ├── <section id="home">
    │   └── Hero / Introduction
    │
    ├── <section id="about">
    │   ├── Bio
    │   └── Education
    │
    ├── <section id="experience">
    │   └── Timeline items (3 jobs)
    │
    ├── <section id="projects">
    │   └── Project cards (2 projects)
    │
    ├── <section id="skills">
    │   ├── Technical skills
    │   ├── Specializations
    │   └── Certifications
    │
    ├── <section id="contact">
    │   ├── Contact info
    │   └── Contact form
    │
    ├── <footer>
    │   ├── Copyright
    │   └── Social links
    │
    └── <script src="js/script.js">
```

---

## CSS Organization

```
styles.css
├── RESET & BASE STYLES
├── CONTAINER & LAYOUT
├── NAVIGATION
├── HERO SECTION
├── BUTTONS
├── ABOUT SECTION
├── EXPERIENCE SECTION
├── PROJECTS SECTION
├── SKILLS SECTION
├── CONTACT SECTION
├── FORM STYLES
└── FOOTER

responsive.css
├── TABLETS (768px and below)
│   ├── Navigation adjustments
│   ├── Hero adjustments
│   ├── Timeline adjustments
│   ├── Grid adjustments
│   └── Form adjustments
│
├── MOBILE (480px and below)
│   ├── Typography sizing
│   ├── Spacing adjustments
│   ├── Button sizing
│   ├── Form field sizing
│   └── Font sizes
│
├── EXTRA LARGE SCREENS (1400px+)
├── PRINT STYLES
├── ACCESSIBILITY (prefers-reduced-motion)
└── DARK MODE (prefers-color-scheme)
```

---

## JavaScript Functionality Map

```
script.js
│
├── MOBILE MENU TOGGLE
│   ├── Toggle menu on hamburger click
│   └── Close menu on link click
│
├── FORM HANDLING
│   ├── Form submission handler
│   ├── Email validation
│   ├── Budget slider updates
│   ├── Success/error messages
│   └── Form reset
│
├── NAVIGATION
│   ├── Active link highlighting
│   └── Scroll event listeners
│
├── ANIMATIONS
│   ├── Intersection Observer
│   ├── Fade-in animations
│   └── Dynamic style injection
│
├── FORM ENHANCEMENTS
│   ├── Input validation
│   ├── Field focusing
│   └── Blur events
│
├── ACCESSIBILITY
│   ├── Keyboard navigation
│   └── Focus management
│
└── STORAGE & OPTIMIZATION
    ├── localStorage for form data
    ├── Lazy image loading
    └── Performance tracking
```

---

## Color Palette

```
Primary Colors:
┌─────────┐
│ #667eea │  Purple (Main accent)
└─────────┘

┌─────────┐
│ #764ba2 │  Dark Purple (Secondary)
└─────────┘

┌─────────┐
│ #3498db │  Blue (Accent)
└─────────┘

Neutral Colors:
┌─────────┐
│ #2c3e50 │  Dark Blue-Grey (Text)
└─────────┘

┌─────────┐
│ #ffffff │  White (Background)
└─────────┘

┌─────────┐
│ #f8f9fa │  Light Grey (Alt Background)
└─────────┘

┌─────────┐
│ #555555 │  Medium Grey (Secondary text)
└─────────┘

┌─────────┐
│ #95a5a6 │  Light Grey (Tertiary text)
└─────────┘
```

---

## Responsive Breakpoints

```
Desktop (> 768px)
├── Full navigation menu visible
├── 2-column layouts
├── Full-width timeline
└── Normal font sizes

Tablet (769px - 480px)
├── Adjusted spacing
├── Stacked components
├── Hamburger menu
└── Medium font sizes

Mobile (< 480px)
├── Single column
├── Compact spacing
├── Larger touch targets
└── Optimized font sizes
```

---

## Content Quantity Summary

| Section | Items | Type |
|---------|-------|------|
| Navigation | 6 links | Menu items |
| About | 2 | Education entries |
| Experience | 3 | Timeline items |
| Projects | 2 | Project cards |
| Skills | 9 | Technical skills |
| Specializations | 5 | Areas of expertise |
| Certifications | 5 | Credentials |
| Form Fields | 8 | Input types |
| **Total** | **40+** | **Content pieces** |

---

## File Size Analysis

```
index.html      ≈ 25 KB  (All content)
styles.css      ≈ 30 KB  (Styling)
responsive.css  ≈ 15 KB  (Mobile styles)
script.js       ≈ 15 KB  (JavaScript)
────────────────────────
Total           ≈ 85 KB  (Lightweight!)
```

---

This guide helps understand the website structure at a glance!
