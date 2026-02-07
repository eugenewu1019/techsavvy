<div align="right">

**Language**: [🇺🇸 English](README.md) | [🇹🇼 繁體中文](README.zh-TW.md)

</div>

<div align="center">

# 🚀 Techsavvy | Future Ready IT Consultancy

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://eugenewu1019.github.io/techsavvy/)
[![CI/CD](https://github.com/eugenewu1019/techsavvy/actions/workflows/quality.yml/badge.svg)](https://github.com/eugenewu1019/techsavvy/actions)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**Design that moves the needle. Technology that scales.**

[Live Demo](https://eugenewu1019.github.io/techsavvy/) · [Report Bug](https://github.com/eugenewu1019/techsavvy/issues) · [Request Feature](https://github.com/eugenewu1019/techsavvy/issues)

![Project Banner](IMG/hero-future.jpg)

</div>

---

## 📚 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 About The Project

**Techsavvy** is a high-end, futuristic corporate website template designed for modern IT consultancy firms. It focuses on conveying trust, innovation, and scalability through a polished UI/UX.

The site creates an immersive experience using "Micro-glow" effects, glassmorphism, and smooth scroll animations, ensuring the user feels the premium quality of the brand immediately.

### Why This Project?

- 🎨 **Premium Design**: Glassmorphism, spotlight effects, and micro-interactions
- 🌍 **Global Ready**: Full i18n support (English / Chinese / Japanese)
- ⚡ **Performance**: Zero build process, CDN-based Tailwind CSS
- 🔍 **SEO Optimized**: Clean HTML structure and semantic markup
- 🤖 **CI/CD Pipeline**: Automated quality checks and deployment

---

## ✨ Key Features

### 🌍 Trilingual Support
- Complete i18n implementation with instant language switching
- Support for English / Traditional Chinese / Japanese
- LocalStorage persistence for user preference

### 🎨 Premium UI/UX Design
- **Glassmorphism Navbar**: Dynamic transparency and blur effects on scroll
- **Spotlight Cards**: Interactive 3D tilt and mouse-following lighting effects on service cards
- **Smooth Animations**: Custom ScrollReveal implementation for engaging content entry
- **Micro-interactions**: Subtle hover states, magnetic buttons, and parallax effects

### 🌓 Dark Mode
- Fully responsive light/dark theme switching
- System preference detection
- Smooth transitions between themes

### 📱 Fully Responsive
- Mobile-first approach ensuring a flawless experience on all devices
- Optimized for desktops, tablets, and smartphones
- Touch-friendly interactions

### ⚙️ CI/CD Pipeline
- Automated HTML5 validation on every commit
- CSS validation with standard compliance
- Link checker to ensure no broken links
- Automatic deployment to GitHub Pages

---

## 🛠️ Tech Stack

### Core
- **HTML5** - Semantic markup and modern web standards
- **Vanilla JavaScript (ES6+)** - No framework dependencies
- **CSS3** - Custom animations and effects

### Styling & UI
- [Tailwind CSS](https://tailwindcss.com/) (CDN) - Utility-first CSS framework
- Custom CSS - Advanced animations and glassmorphism
- [Google Fonts](https://fonts.google.com/) - Outfit & Inter typography
- [Lucide Icons](https://lucide.dev/) - Beautiful SVG icons

### DevOps
- [GitHub Actions](https://github.com/features/actions) - CI/CD automation
- [GitHub Pages](https://pages.github.com/) - Static site hosting
- HTML5 Validator - Code quality assurance
- Link Checker - Broken link detection

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- (Optional) A local web server for development

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/eugenewu1019/techsavvy.git
   cd techsavvy
   ```

2. **Open `index.html`**
   
   Simply open the file in your browser or use a live server.

### Development

For development with hot reload:

```bash
# Using VS Code Live Server extension (recommended)
# Or use Python's built-in server:
python -m http.server 8000

# Or Node.js:
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

---

## 📂 Project Structure

```text
techsavvy/
├── .github/
│   ├── workflows/
│   │   ├── quality.yml       # CI/CD quality checks
│   │   └── deploy.yml        # GitHub Pages deployment
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── mlc_config.json       # Link checker config
├── IMG/                      # Image assets
│   ├── hero-future.jpg
│   ├── portfolio-*.jpg
│   └── team-*.jpg
├── index.html                # Main HTML structure
├── script.js                 # Core logic (i18n, animations, theme)
├── style.css                 # Custom animations & overrides
├── favicon.ico               # Site icon
├── LICENSE                   # MIT License
├── CONTRIBUTING.md           # Contribution guidelines
├── SECURITY.md               # Security policy
└── README.md                 # This file
```

---

## 🚀 Deployment

### GitHub Pages (Current Setup)

The project is configured to automatically deploy to GitHub Pages on push to `main`.

1. **Enable GitHub Pages**
   - Settings → Pages → Source: GitHub Actions

2. **Push to main branch**
   ```bash
   git push origin main
   ```

3. **GitHub Actions will automatically**:
   - Run HTML/CSS validation
   - Check for broken links
   - Build and deploy to GitHub Pages

### Alternative Deployment Options

<details>
<summary><b>Vercel</b></summary>

1. Import repository to Vercel
2. No build settings needed (static site)
3. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/eugenewu1019/techsavvy)

</details>

<details>
<summary><b>Netlify</b></summary>

1. Connect repository
2. No build command needed (static site)
3. Publish directory: `.` (root)
4. Deploy!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/eugenewu1019/techsavvy)

</details>

---

## 🤝 Contributing

Contributions are what make the open source community amazing! Any contributions you make are **greatly appreciated**.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on:

- Code of Conduct
- Development process
- How to submit pull requests
- Coding standards
- Commit message conventions

### Quick Start for Contributors

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Quality Requirements

All pull requests must pass:
- ✅ HTML5 validation
- ✅ CSS validation
- ✅ Link checker tests

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea?

- **Bug Reports**: [Create an issue](https://github.com/eugenewu1019/techsavvy/issues/new)
- **Feature Requests**: [Create an issue](https://github.com/eugenewu1019/techsavvy/issues/new)
- **Questions**: [Start a discussion](https://github.com/eugenewu1019/techsavvy/discussions)

---

## 📝 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

## 📬 Contact

**Eugene Wu** - UI/UX Designer & Frontend Developer

- LinkedIn: [@owenwuwork](https://www.linkedin.com/in/owenwuwork)
- GitHub: [@eugenewu1019](https://github.com/eugenewu1019)
- Portfolio: [eugenewu1019.github.io/techsavvy](https://eugenewu1019.github.io/techsavvy/)

**Project Link**: [https://github.com/eugenewu1019/techsavvy](https://github.com/eugenewu1019/techsavvy)

**Live Demo**: [https://eugenewu1019.github.io/techsavvy/](https://eugenewu1019.github.io/techsavvy/)

---

## 🙏 Acknowledgments

Special thanks to:

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Google Fonts](https://fonts.google.com/) - Web typography
- [Lucide Icons](https://lucide.dev/) - Beautiful icon set
- [GitHub Actions](https://github.com/features/actions) - CI/CD automation
- [Unsplash](https://unsplash.com/) - High-quality imagery

---

<div align="center">

**[⬆️ Back to top](#-techsavvy--future-ready-it-consultancy)**

Made with 🚀 by [Eugene Wu](https://github.com/eugenewu1019)

© 2026 Techsavvy. All Rights Reserved.

</div>