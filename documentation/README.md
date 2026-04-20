# Aaryan R Londhe - Portfolio Website

A professional, responsive portfolio website showcasing cybersecurity expertise, work experience, projects, and skills. The site is optimized for both desktop and mobile devices.

## 📋 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Clean Architecture**: Separated HTML structure, CSS styling, and JavaScript functionality for easy maintenance
- **Multiple Sections**:
  - Hero section with introduction
  - About section with education details
  - Experience timeline with detailed work history
  - Projects showcase with descriptions and technologies
  - Skills and certifications section
  - Contact form with various input types
  - Professional footer with social links

- **Interactive Elements**:
  - Mobile-friendly hamburger menu
  - Smooth scrolling navigation
  - Form validation with user feedback
  - Budget range slider with live value display
  - Form data persistence using localStorage
  - Scroll animations and fade-in effects
  - Active navigation highlighting

- **Accessibility**:
  - Semantic HTML5 structure
  - ARIA-friendly form labels
  - Keyboard navigation support
  - Focus indicators for interactive elements
  - Dark mode support (system preference aware)
  - Print-friendly styles

## 📁 Project Structure

```
Portfolio Website/
├── index.html                 # Main HTML file with semantic structure
├── css/
│   ├── styles.css            # Main stylesheet with responsive design
│   └── responsive.css        # Media queries for tablets and mobile
├── js/
│   └── script.js             # Interactive features and form handling
├── assets/                   # For future images/downloads
└── README.md                 # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for better structure and accessibility
- **CSS3**: Flexbox and CSS Grid for modern layouts, transitions, and animations
- **JavaScript**: ES6 features for interactivity and form handling
- **No dependencies**: Pure vanilla HTML, CSS, and JavaScript (no frameworks required)

## 🚀 Getting Started Locally

1. **Clone or download the repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Open in your browser**:
   - Simply open `index.html` in your web browser, or
   - Use a local development server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Then visit `http://localhost:8000`

## 📦 GitHub Pages Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the **+** icon in the top right corner and select **New repository**
3. Name your repository: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
4. Choose **Public** repository
5. Click **Create repository**

### Step 2: Initialize Git and Push Your Code

```bash
# Navigate to your project directory
cd /path/to/your/Portfolio\ Website

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Add remote repository (replace yourusername with your GitHub username)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub (main branch)
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (or go to `https://github.com/yourusername/yourusername.github.io/settings`)
3. Scroll down to **Pages** section (on the left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save**

### Step 4: Access Your Website

Your portfolio will be live at: `https://yourusername.github.io`

> **Note**: It may take a few minutes for GitHub Pages to build and deploy your site. If you don't see it immediately, wait a few minutes and refresh.

## ✏️ Customization Guide

### Editing Content

1. **Personal Information** (in `index.html`):
   - Update the hero section heading and subtitle
   - Modify about section content
   - Update contact information (email, phone, LinkedIn)

2. **Experience**: Edit the timeline items in the Experience section to match your work history

3. **Projects**: Add or modify project cards with your own projects

4. **Skills**: Update the skills lists and certifications in the Skills section

5. **Colors**: Modify the color scheme in `css/styles.css`:
   - Primary color: `#667eea`
   - Secondary color: `#764ba2`
   - Accent color: `#3498db`

### Adding a Resume PDF

1. Place your resume PDF in the `assets` folder
2. Update the hero buttons or contact section with a link to download it:
   ```html
   <a href="assets/resume.pdf" class="btn btn-primary" download>Download Resume</a>
   ```

### Adding a Profile Picture

1. Add a profile image to the `assets` folder
2. Add this HTML in the About section:
   ```html
   <img src="assets/profile-photo.jpg" alt="Aaryan R Londhe" class="profile-photo">
   ```

3. Add CSS styling in `css/styles.css`:
   ```css
   .profile-photo {
       width: 200px;
       height: 200px;
       border-radius: 50%;
       object-fit: cover;
       box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
   }
   ```

## 🎨 Styling Features

- **Gradient Background**: Hero section uses a purple gradient
- **Timeline Layout**: Experience section features a vertical timeline
- **Card Design**: Projects use modern card layouts with hover effects
- **Responsive Grid**: Skills section adapts to different screen sizes
- **Form Styling**: Contact form with modern input styles and focus states

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on form elements
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast ratios meet WCAG standards
- Support for dark mode preferences
- Print-friendly styles

## 🔒 Form Security

**Note**: The contact form currently displays a success message without actually sending data. To handle form submissions:

### Option 1: Use a Third-Party Service (Recommended)

- **Formspree**: https://formspree.io/
- **Basin**: https://usebasin.com/
- **Netlify Forms**: https://www.netlify.com/products/forms/

### Option 2: Create a Backend Server

Use services like:
- Firebase Cloud Functions
- AWS Lambda
- Heroku
- Your own server

### Option 3: Email Service Integration

Use services like:
- SendGrid
- Mailgun
- AWS SES

## 🚧 Future Enhancements

- [ ] Add blog section for cybersecurity articles
- [ ] Integrate with Formspree for form submissions
- [ ] Add dark mode toggle button
- [ ] Include project filtering
- [ ] Add testimonials section
- [ ] Include case studies
- [ ] Add newsletter subscription
- [ ] Implement analytics tracking

## 📄 License

This portfolio website is open source and available for personal and commercial use.

## 📧 Contact

For questions or feedback about this portfolio:
- Email: aaryanrlondhe@gmail.com
- LinkedIn: https://linkedin.com/in/aaryanrlondhe
- Phone: +1 839-290-7009

## 🙏 Acknowledgments

- Modern CSS techniques and best practices
- Semantic HTML5 standards
- Web accessibility guidelines (WCAG)
- Responsive design principles

---

**Last Updated**: January 2026

**Status**: ✅ Ready for GitHub Pages Deployment

For more information on GitHub Pages, visit: https://pages.github.com/
