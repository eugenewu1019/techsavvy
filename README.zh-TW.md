<div align="right">

**語言**: [🇺🇸 English](README.md) | [🇹🇼 繁體中文](README.zh-TW.md)

</div>

<div align="center">

# 🚀 Techsavvy | 未來IT諮詢領導品牌

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-線上演示-green.svg)](https://eugenewu1019.github.io/techsavvy/)
[![CI/CD](https://github.com/eugenewu1019/techsavvy/actions/workflows/quality.yml/badge.svg)](https://github.com/eugenewu1019/techsavvy/actions)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-歡迎貢獻-brightgreen.svg)](CONTRIBUTING.md)

**讓設計推動業務。讓技術創造規模。**

[線上演示](https://eugenewu1019.github.io/techsavvy/) · [回報問題](https://github.com/eugenewu1019/techsavvy/issues) · [功能建議](https://github.com/eugenewu1019/techsavvy/issues)

![Project Banner](IMG/hero-future.jpg)

</div>

---

## 📚 目錄

- [關於專案](#-關於專案)
- [核心特色](#-核心特色)
- [技術棧](#️-技術棧)
- [快速開始](#-快速開始)
- [專案結構](#-專案結構)
- [部署](#-部署)
- [貢獻指南](#-貢獻指南)
- [授權條款](#-授權條款)
- [聯絡方式](#-聯絡方式)
- [致謝](#-致謝)

---

## 🎯 關於專案

**Techsavvy** 是一個為現代 IT 諮詢公司量身打造的高端、未來感企業形象網站。專案設計核心在於透過精致的 UI/UX 細節，傳遞出信任感、創新力與規模化能力。

網站採用了「微光效應 (Micro-glow)」、「毛玻璃質感 (Glassmorphism)」以及流暢的滾動動畫，確保用戶在進入網站的第一時間就能感受到品牌的高端質感。

### 為什麼選擇這個專案？

- 🎨 **高端設計**：毛玻璃效果、聴光卡片、微互動效果
- 🌍 **全球化就緒**：完整的多語系支援（英文 / 中文 / 日文）
- ⚡ **高性能**：無需建置流程，使用 CDN 版 Tailwind CSS
- 🔍 **SEO 優化**：清晰的 HTML 結構和語意化標記
- 🤖 **CI/CD 自動化**：自動品質檢查和部署

---

## ✨ 核心特色

### 🌍 三語系支援
- 完整的 i18n 實作，支援即時切換語言
- 支援英文 / 繁體中文 / 日文
- LocalStorage 保存用戶偏好設定

### 🎨 高端 UI/UX 設計
- **毛玻璃導航列**：滾動時的動態透明和模糊效果
- **聰光卡片**：互動式 3D 傾斜和滑鼠跟隨光效
- **流暢動畫**：自定義 ScrollReveal 實作，吸引人的內容呈現
- **微互動**：細緻的懸停狀態、磁鐵按鈕、視差滾動效果

### 🌓 深色模式
- 完全響應式的淺色/深色主題切換
- 系統偏好自動偵測
- 主題間的平滑轉場效果

### 📱 全裝置響應
- 行動優先設計，確保所有裝置的完美體驗
- 針對桌機、平板和智慧型手機優化
- 觸控友善的互動設計

### ⚙️ CI/CD 流程
- 每次提交自動進行 HTML5 驗證
- CSS 驗證符合標準規範
- 連結檢查器確保無損壞連結
- 自動部署到 GitHub Pages

---

## 🛠️ 技術棧

### 核心技術
- **HTML5** - 語意化標記和現代 Web 標準
- **Vanilla JavaScript (ES6+)** - 無框架依賴
- **CSS3** - 自定義動畫和效果

### 樣式與 UI
- [Tailwind CSS](https://tailwindcss.com/) (CDN) - Utility-first CSS 框架
- 自定義 CSS - 進階動畫和毛玻璃效果
- [Google Fonts](https://fonts.google.com/) - Outfit & Inter 字體
- [Lucide Icons](https://lucide.dev/) - 精美的 SVG 圖示

### DevOps
- [GitHub Actions](https://github.com/features/actions) - CI/CD 自動化
- [GitHub Pages](https://pages.github.com/) - 靜態網站託管
- HTML5 Validator - 程式碼品質保證
- Link Checker - 損壞連結偵測

---

## 🚀 快速開始

### 前置需求

- 現代瀏覽器（Chrome、Firefox、Safari 或 Edge）
- （選用）用於開發的本地伺服器

### 安裝步驟

1. **複製儲存庫**
   ```bash
   git clone https://github.com/eugenewu1019/techsavvy.git
   cd techsavvy
   ```

2. **開啟 `index.html`**
   
   直接在瀏覽器中開啟檔案，或使用 Live Server。

### 開發環境

如需熱重載功能：

```bash
# 使用 VS Code Live Server 擴充套件（推薦）
# 或使用 Python 內建伺服器：
python -m http.server 8000

# 或 Node.js：
npx http-server
```

然後在瀏覽器中訪問 `http://localhost:8000`。

---

## 📂 專案結構

```text
techsavvy/
├── .github/
│   ├── workflows/
│   │   ├── quality.yml       # CI/CD 品質檢查
│   │   └── deploy.yml        # GitHub Pages 部署
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── mlc_config.json       # 連結檢查器配置
├── IMG/                      # 圖片資源
│   ├── hero-future.jpg
│   ├── portfolio-*.jpg
│   └── team-*.jpg
├── index.html                # 主 HTML 結構
├── script.js                 # 核心邏輯（i18n、動畫、主題）
├── style.css                 # 自定義動畫和覆寫
├── favicon.ico               # 網站圖示
├── LICENSE                   # MIT 授權條款
├── CONTRIBUTING.md           # 貢獻指南
├── SECURITY.md               # 安全政策
└── README.md                 # 本檔案
```

---

## 🚀 部署

### GitHub Pages（當前設定）

專案配置為自動部署到 GitHub Pages（當推送到 `main` 分支時）。

1. **啟用 GitHub Pages**
   - Settings → Pages → Source: GitHub Actions

2. **推送到 main 分支**
   ```bash
   git push origin main
   ```

3. **GitHub Actions 將自動**：
   - 執行 HTML/CSS 驗證
   - 檢查損壞連結
   - 建置並部署到 GitHub Pages

### 其他部署選項

<details>
<summary><b>Vercel</b></summary>

1. 將儲存庫匯入 Vercel
2. 無需建置設定（靜態網站）
3. 部署！

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/eugenewu1019/techsavvy)

</details>

<details>
<summary><b>Netlify</b></summary>

1. 連接儲存庫
2. 無需建置命令（靜態網站）
3. 發佈目錄：`.`（根目錄）
4. 部署！

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/eugenewu1019/techsavvy)

</details>

---

## 🤝 貢獻指南

貢獻是開源社群令人驚豔的原因！任何貢獻都將被**高度謝意**。

請閱讀我們的[貢獻指南](CONTRIBUTING.md)以了解：

- 行為準則
- 開發流程
- 如何提交 Pull Request
- 編碼標準
- Commit 訊息約定

### 貢獻者快速開始

1. Fork 專案
2. 建立功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

### 程式碼品質要求

所有 Pull Request 必須通過：
- ✅ HTML5 驗證
- ✅ CSS 驗證
- ✅ 連結檢查測試

---

## 🐛 問題回報與功能建議

發現問題或有功能想法？

- **問題回報**：[建立 Issue](https://github.com/eugenewu1019/techsavvy/issues/new)
- **功能建議**：[建立 Issue](https://github.com/eugenewu1019/techsavvy/issues/new)
- **問題討論**：[開始討論](https://github.com/eugenewu1019/techsavvy/discussions)

---

## 📝 授權條款

本專案採用 MIT 授權條款。詳見 [`LICENSE`](LICENSE) 檔案。

---

## 📬 聯絡方式

**Eugene Wu** - UI/UX 設計師與前端開發者

- LinkedIn: [@owenwuwork](https://www.linkedin.com/in/owenwuwork)
- GitHub: [@eugenewu1019](https://github.com/eugenewu1019)
- 作品集: [eugenewu1019.github.io/techsavvy](https://eugenewu1019.github.io/techsavvy/)

**專案連結**: [https://github.com/eugenewu1019/techsavvy](https://github.com/eugenewu1019/techsavvy)

**線上演示**: [https://eugenewu1019.github.io/techsavvy/](https://eugenewu1019.github.io/techsavvy/)

---

## 🙏 致謝

特別感謝：

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS 框架
- [Google Fonts](https://fonts.google.com/) - 網頁字體
- [Lucide Icons](https://lucide.dev/) - 精美圖示套件
- [GitHub Actions](https://github.com/features/actions) - CI/CD 自動化
- [Unsplash](https://unsplash.com/) - 高品質圖片

---

<div align="center">

**[⬆️ 回到頂部](#-techsavvy--未來it諮詢領導品牌)**

Made with 🚀 by [Eugene Wu](https://github.com/eugenewu1019)

© 2026 Techsavvy. All Rights Reserved.

</div>