# Techsavvy | Future Ready IT Consultancy

![Project Banner](IMG/hero-future.jpg)

> **[Live Demo](https://eugenewu1019.github.io/techsavvy/)**  
> *Design that moves the needle. Technology that scales.*

[![CI/CD Pipeline](https://github.com/eugenewu1019/techsavvy/actions/workflows/quality.yml/badge.svg)](https://github.com/eugenewu1019/techsavvy/actions/workflows/quality.yml)
[![GitHub Pages](https://github.com/eugenewu1019/techsavvy/actions/workflows/deploy.yml/badge.svg)](https://github.com/eugenewu1019/techsavvy/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📖 Introduction (專案簡介)

**Techsavvy** is a high-end, futuristic corporate website template designed for modern IT consultancy firms. It focuses on conveying trust, innovation, and scalability through a polished UI/UX.

**Techsavvy** 是一個為現代 IT 諮詢公司量身打造的高端企業形象網站。專案設計核心在於透過極致的 UI/UX 細節，傳遞出信任感、創新力與規模化能力。

The site creates an immersive experience using "Micro-glow" effects, glassmorphism, and smooth scroll animations, ensuring the user feels the premium quality of the brand immediately.

網站採用了「微光效應 (Micro-glow)」、「毛玻璃質感 (Glassmorphism)」以及流暢的滾動動畫，確保用戶在進入網站的第一時間就能感受到品牌的高端質感。

## ✨ Key Features (核心特色)

-   **🌍 Bilingual Support (中英日三語系)**:
    -   Complete i18n implementation with instant language switching (English / Traditional Chinese / Japanese).
    -   完整的多語系支援（英文 / 繁體中文 / 日文），支援即時切換。

-   **🎨 Premium UI/UX Design (高端視覺設計)**:
    -   **Glassmorphism Navbar**: Dynamic transparency and blur effects on scroll.
    -   **Spotlight Cards**: Interactive 3D tilt and mouse-following lighting effects on service cards.
    -   **Smooth Animations**: Custom `ScrollReveal` implementation for engaging content entry.
    -   **Micro-interactions**: Subtle hover states, magnetic buttons, and parallax effects.

-   **🌓 Dark Mode Ready (深色模式)**:
    -   Fully responsive light/dark theme switching with system preference detection.
    -   完美支援深色/淺色模式切換，並自動偵測系統偏好。

-   **📱 Fully Responsive (全裝置響應)**:
    -   Mobile-first approach ensuring a flawless experience on all devices, from desktops to smartphones.
    -   行動優先設計，確保從桌機到手機都能擁有完美的瀏覽體驗。

-   **⚙️ CI/CD Pipeline (持續整合/部署)**:
    -   Automated HTML/CSS validation on every commit.
    -   Link checker to ensure no broken links.
    -   Automatic deployment to GitHub Pages.
    -   每次提交自動進行 HTML/CSS 驗證和連結檢查。

## 🛠️ Tech Stack (技術棧)

This project is built with a focus on performance and simplicity, utilizing modern web standards without heavy build steps.

本專案強調效能與簡潔，採用現代 Web 標準開發，無需繁重的建置流程。

-   **Core**: HTML5, Vanilla JavaScript (ES6+)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (CDN) - Rapid UI development with utility classes.
-   **Fonts**: 'Outfit' (Headings) & 'Inter' (Body) via Google Fonts.
-   **Icons**: Lucide Icons (SVG).
-   **CI/CD**: GitHub Actions
-   **Hosting**: GitHub Pages
-   **Assets**: High-quality imagery with optimized loading.

## 🚀 Getting Started (如何執行)

Since this project uses the CDN version of Tailwind CSS, no build process is required for development.

由於本專案使用 CDN 版的 Tailwind CSS，開發時無需任何建置步驟。

### Prerequisites (前置需求)

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- (Optional) A local web server for development

### Installation (安裝步驟)

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/eugenewu1019/techsavvy.git
    cd techsavvy
    ```

2.  **Open `index.html`**:
    Simply open the file in your browser or use a live server extension (e.g., Live Server in VS Code) for the best experience.
    
    直接在瀏覽器中開啟 `index.html`，或使用 VS Code 的 Live Server 擴充套件以獲得最佳預覽體驗。

### Development (開發)

For development with hot reload:

```bash
# Using VS Code Live Server extension
# Or use Python's built-in server:
python -m http.server 8000

# Or Node.js:
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## 📂 Project Structure (專案結構)

```text
techsavvy/
├── .github/
│   ├── workflows/
│   │   ├── quality.yml       # CI/CD quality checks
│   │   └── deploy.yml        # GitHub Pages deployment
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── mlc_config.json       # Link checker config
├── IMG/                      # Image assets (hero, portfolio, team)
├── index.html                # Main HTML structure
├── script.js                 # Core logic (i18n, animations, theme)
├── style.css                 # Custom animations & overrides
├── favicon.ico               # Site icon
├── LICENSE                   # MIT License
├── CONTRIBUTING.md           # Contribution guidelines
├── SECURITY.md               # Security policy
└── README.md                 # Documentation (this file)
```

## 🤝 Contributing (貢獻指南)

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

歡迎貢獻！在提交 Pull Request 之前，請先閱讀我們的[貢獻指南](CONTRIBUTING.md)。

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Quality

All pull requests must pass:
- HTML5 validation
- CSS validation
- Link checker tests

## 📄 License (授權)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

本專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案。

## 🔒 Security (安全性)

If you discover a security vulnerability, please review our [Security Policy](SECURITY.md) for reporting procedures.

如果發現安全漏洞，請查閱我們的[安全政策](SECURITY.md)以了解回報程序。

## 👨‍💻 Author (作者)

**Eugene Wu**
-   GitHub: [@eugenewu1019](https://github.com/eugenewu1019)
-   Portfolio: [eugenewu1019.github.io/techsavvy](https://eugenewu1019.github.io/techsavvy/)

## 🙏 Acknowledgments (致謝)

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Google Fonts](https://fonts.google.com/) - Web fonts
- [Unsplash](https://unsplash.com/) - High-quality images

---

<div align="center">

**[⬆ Back to Top](#techsavvy--future-ready-it-consultancy)**

*© 2026 Techsavvy. All Rights Reserved.*

Made with ❤️ by Eugene Wu

</div>