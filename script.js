"use strict";

// CRITICAL FIX: Immediately reveal all content on page load
window.addEventListener('load', function () {
    document.querySelectorAll('.scroll-reveal').forEach(function (el) {
        el.classList.remove('reveal-hidden');
        el.classList.add('reveal-visible');
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
});

const translations = {
    en: {
        nav: [
            { label: "Home", href: "#hero" },
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Portfolio", href: "#portfolio" },
            { label: "Contact", href: "#contact" }
        ],
        hero: {
            badge: "Tech that actually moves the needle",
            slides: [
                { title: "Future", titleGradient: "Ready.", subtitle: "We don't just write code—we build the engines that power your business growth in a digital-first world.", image: "IMG/hero-future.jpg" },
                { title: "Secure", titleGradient: "Core.", subtitle: "Sleep better knowing your core is protected. We build digital fortresses that keep your business safe, 24/7.", image: "IMG/hero-security.jpg" },
                { title: "Cloud", titleGradient: "Native.", subtitle: "Ditch the legacy baggage. We make cloud migration feel like a breeze, so you can scale without the headache.", image: "IMG/hero-cloud.jpg" }
            ],
            cta: "Explore Solutions",
            ctaSecondary: "See Our Work",
            systemLoad: "System Load",
            optimizing: "Optimizing for peak performance..."
        },
        about: {
            title: "Hey, We're Techsavvy.",
            subtitle: "Innovation is in our DNA",
            description: "Started in 2020, we're not your typical IT consultants. We're the bridge between 'I have a big idea' and 'Look how well this works.' Our team of tech-obsessed strategists lives for solving the hard stuff so you can focus on winning.",
            stats: [
                { label: "Projects Delivered", value: "150+" },
                { label: "Happy Clients", value: "98%" },
                { label: "Years Experience", value: "10+" }
            ]
        },
        services: {
            title: "What We Do Best",
            subtitle: "Tech that does the heavy lifting for you",
            learnMore: "Get the lowdown",
            modal: { keyBenefitsTitle: "Why you'll love it" },
            items: [
                { id: "s1", title: "Cloud Infrastructure", description: "Flexible architecture built for whatever the future throws at you.", fullDetail: "Still battling with server maintenance? Let us take that off your plate. Whether it's AWS, Azure, or Google Cloud, we make sure your transition is smooth and your costs stay lean. We build for stability so you can scale with confidence.", benefits: ["99.99% Guaranteed Uptime", "Auto-scaling that handles the traffic for you", "Average 30% reduction in infrastructure costs"], icon: "cloud" },
                { id: "s2", title: "Cybersecurity", description: "Real protection so you can actually get some sleep.", fullDetail: "Your data is your lifeblood. We guard it with 24/7 monitoring and strict security audits. From penetration testing to setting up zero-trust walls, we've got your back. Forget about threats and focus on your business.", benefits: ["24/7 Real-time threat monitoring", "Full compliance (GDPR, SOC2) made easy", "Zero Trust setup: we trust no one but you"], icon: "shield" },
                { id: "s3", title: "Custom Software", description: "Off-the-shelf not cutting it? We'll build your perfect fit.", fullDetail: "Every great business has its own way of doing things. We don't believe in templates. Using modern tech like React and Node.js, we craft software that's as intuitive as it is powerful. Fast, clean, and built to last.", benefits: ["Agile builds: see progress in days, not months", "Works perfectly on desktop and mobile", "Designer-grade UI/UX that people actually enjoy using"], icon: "code" },
                { id: "s4", title: "Data & AI", description: "Stop guessing. Start knowing what to do next.", fullDetail: "Data is the new gold, but only if you know how to mine it. We build the dashboards and AI models that turn raw numbers into clear strategies. No more 'gut feelings'—just solid insights that drive growth.", benefits: ["AI that predicts the next big thing", "Real-time dashboards: your business at a glance", "Automate the boring stuff with smart pipelines"], icon: "cpu" }
            ]
        },
        portfolio: {
            title: "The Highlight Reel",
            subtitle: "Success Stories",
            viewProject: "Take a closer look",
            modal: {
                clientLabel: "The Partner",
                outcomeLabel: "The Result",
                overviewTitle: "The Backstory",
                overviewText: "We didn't just check boxes here. We dove deep into the business to find the real pain points and built a solution that didn't just fix the problem—it boosted the whole operation."
            },
            items: [
                { id: "p1", title: "FinTech Dashboard", category: "Web Development", imageUrl: "IMG/portfolio-fintech.jpg", description: "Real-time analytics for a global bank.", client: "Global Bank Corp", result: "Boosted processing speed by 40%. No more manual Excel nightmares." },
                { id: "p2", title: "Healthcare Cloud", category: "Cloud Services", imageUrl: "IMG/portfolio-healthcare.jpg", description: "Moving patient records safely to AWS.", client: "MediCare Plus", result: "Sliced infra costs by 30% while staying 100% compliant." },
                { id: "p3", title: "E-Commerce AI", category: "AI / ML", imageUrl: "IMG/portfolio-ecommerce.jpg", description: "A recommendation engine that's actually smart.", client: "High-Growth Startup", result: "Conversions jumped 25% in three months. Success you can see." }
            ]
        },
        testimonials: {
            title: "What They’re Saying",
            subtitle: "Don't just take our word for it",
            description: "We're proud of the partnerships we've built. Here's what some of our favorite clients have to say about the Techsavvy experience.",
            reviewsLabel: "Verified Reviews",
            items: [
                { id: "t1", quote: "Techsavvy didn't just build us a website; they built us a revenue engine. Our conversion rates doubled in a month.", name: "Sarah J.", role: "CTO, FinTech Co." },
                { id: "t2", quote: "Finally, a team that speaks human and code fluently. The best investment we made this year.", name: "Mark T.", role: "CEO, StartupInc" },
                { id: "t3", quote: "Seamless cloud migration. Zero downtime. The team at Techsavvy are true professionals.", name: "Emily R.", role: "Ops Manager, LogiCorp" }
            ]
        },
        contact: {
            title: "Let's Chat",
            subtitle: "Ready to level up?",
            description: "Whether you've got a specific project in mind or just want to explore the possibilities, we're all ears.",
            infoLabels: { visit: "Swing by", email: "Drop a line", call: "Give us a ring" },
            emailLabel: "Email Us",
            officeLabel: "Visit Us",
            callLabel: "Call Us",
            form: {
                name: "Your Name",
                email: "Email Address",
                message: "What's on your mind?",
                subjects: { general: "General Inquiry", project: "Start a Project", support: "Support" },
                submit: "Send Message",
                subject: "Subject"
            }
        },
        footer: {
            tagline: "Building the digital future, together.",
            copyright: "© 2024 Techsavvy. All rights reserved.",
            socials: "Follow Us",
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        },
        languages: {
            en: "English",
            zh: "Chinese",
            jp: "Japanese"
        },
        legal: {
            privacy: {
                title: "Privacy Policy",
                content: "At Techsavvy, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website.<br><br><strong>1. Information Collection</strong><br>We may collect information about you in a variety of ways. The information we may collect on the Site includes: Personal Data (Name, Email, etc.) and Derivative Data (IP address, browser type, etc.)<br><br><strong>2. Use of Your Information</strong><br>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to: Compile anonymous statistical data, monitor and analyze usage and trends.<br><br><strong>3. Security of Your Information</strong><br>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable."
            },
            terms: {
                title: "Terms of Service",
                content: "These Terms of Service govern your use of the Techsavvy website. By accessing or using the Site, you look to be bound by these Terms.<br><br><strong>1. Intellectual Property</strong><br>The Site and its original content, features, and functionality are owned by Techsavvy and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.<br><br><strong>2. User Representations</strong><br>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information.<br><br><strong>3. Limitations of Liability</strong><br>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site."
            }
        }
    },
    zh: {
        nav: [
            { label: "首页", href: "#hero" },
            { label: "关于我们", href: "#about" },
            { label: "服务项目", href: "#services" },
            { label: "成功案例", href: "#portfolio" },
            { label: "联系我们", href: "#contact" }
        ],
        hero: {
            badge: "重新定义 IT 標準",
            slides: [
                { title: "未来", titleGradient: "触手可及", subtitle: "我们不只是写代码，而是为您构建可扩展、安全且智能的商业引擎，让您在瞬息万变的时代保持领先。", image: "IMG/hero-future.jpg" },
                { title: "防线", titleGradient: "坚不可摧", subtitle: "用零信任架构打造您的数字堡垒。我们全天候守卫您的核心资产，让安全隐患无处遁形。", image: "IMG/hero-security.jpg" },
                { title: "云端", titleGradient: "无限可能", subtitle: "告別笨重的旧设施。通过下一代云原生技术，让您的业务像云一樣灵活輕盈，随时准备起飞。", image: "IMG/hero-cloud.jpg" }
            ],
            cta: "探索解决方案",
            ctaSecondary: "看看我们的作品",
            systemLoad: "系统负载",
            optimizing: "正在优化核心进程..."
        },
        about: {
            title: "我们是谁？",
            subtitle: "创新，写在基因里",
            description: "Techsavvy 成立于2020年，我们不只是一间 IT 咨询公司，更是您商业蓝图的架构师。我们致力于打破复杂技术与商业目标之间的厚墙。我们的团队由一群对技术狂热的工程师和战略家组成，只为提供最卓越的云端、安全与软件服务。",
            stats: [
                { label: "已交付项目", value: "150+" },
                { label: "客户满意度", value: "98%" },
                { label: "行业经验", value: "10年+" }
            ]
        },
        services: {
            title: "我们能做什么",
            subtitle: "全方位的技术火力支援",
            learnMore: "深入了解",
            modal: { keyBenefitsTitle: "为什么选择这项服务？" },
            items: [
                { id: "s1", title: "云基础设施", description: "让架构更有弹性，以此应对未来的所有挑战。", fullDetail: "还在为服务器维护头痛吗？我们提供一站式的云端战略。无论您想去 AWS、Azure 还是 Google Cloud，我们都能让迁移过程像散步一样轻松。不仅能帮您省下大笔冤枉钱，还能讓系统穩如泰山。", benefits: ["承诺 99.99% 的服务在线时间", "流量大了？系统会自动扩容，不用您操心", "平均帮客户省下 30% 的基础设施开销"], icon: "cloud" },
                { id: "s2", title: "网络安全", description: "在这个黑客横行的时代，给您最安心的睡眠。", fullDetail: "数据就是您的生命线，我们用最严苛的标准来保护它。从渗透测试到 24 小时实时监控，我们就像不知疲倦的卫兵。无论是 GDPR 还是 SOC2 合规，我们都帮您搞定，让您专注于业务，而不是担心被攻击。", benefits: ["24/7 全天候盯着威胁，反应速度极快", "完全搞定 GDPR 和 SOC2 等合规头疼事", "实施零信任架构，除了您自己，谁都不信"], icon: "shield" },
                { id: "s3", title: "定制软件开发", description: "市面上的软件不好用？我们为您量身定做一个。", fullDetail: "每一个伟大的业务都有独特的工作流。我们不套模板，而是从您的需求出发，用 React、Node.js 等现代技术栈，打磨出既好用又好看的专属应用。我们追求代码的整洁，更追求用户的爽快体验。", benefits: ["敏捷开发模式，让您更快看到雏形", "一次开发，电脑手机都能完美运行", "设计师级别的 UI/UX，用户用过都说好"], icon: "code" },
                { id: "s4", title: "数据分析与 AI", description: "别让数据睡大觉，让它们告诉您下一步该怎么走。", fullDetail: "数据是新时代的石油。我们帮您建立数据仓库，搭建酷炫的 BI 仪表板，甚至训练专属的 AI 模型。我们帮您从海量数据中挖掘出黄金，让每一次商业决策都有据可依，不再靠拍脑袋。", benefits: ["用 AI 预测未来趋势，抢占市场先机", "实时数据大屏，业务状况一目了然", "把繁琐的数据处理工作全部自动化"], icon: "cpu" }
            ]
        },
        portfolio: {
            title: "精选案例",
            subtitle: "看看我们的成绩单",
            viewProject: "查看详情",
            modal: {
                clientLabel: "客户",
                outcomeLabel: "成果",
                overviewTitle: "项目复盘",
                overviewText: "在这个项目中，我们没有简单地执行需求，而是深入业务场景，找到了客户真正的痛点。最终交付的不仅仅是一套系统，更是一次效率的飞跃。"
            },
            items: [
                { id: "p1", title: "金融科技仪表板", category: "Web 开发", imageUrl: "IMG/portfolio-fintech.jpg", description: "帮银行做了一套实时金融分析平台。", client: "全球银行集团", result: "数据处理快了 40%，员工终于不用天天加班盯着 Excel 了。" },
                { id: "p2", title: "医疗云迁移", category: "云服务", imageUrl: "IMG/portfolio-healthcare.jpg", description: "把千万级的患者记录安全搬到了 AWS 上。", client: "MediCare Plus", result: "成本砍了 30%，而且完全符合 HIPAA 那些严苛的规定。" },
                { id: "p3", title: "电商 AI 推荐系统", category: "AI / ML", imageUrl: "IMG/portfolio-ecommerce.jpg", description: "猜你喜欢？我们做的比你想的更准。", client: "新兴电商平台", result: "上线第一季度，转化率直接涨了 25%，老板笑开了花。" }
            ]
        },
        testimonials: {
            title: "客户评价",
            subtitle: "听听大家怎么说",
            items: [
                { id: "t1", quote: "说实话，Techsavvy 的团队比我想象的还要专业。他们不只是解决技术瓶颈，还教我们怎么用数据做决策。自从合作以来，我们的运营成本明显下降了，这样的战略伙伴真的很难得。", name: "Mango M. Keple", role: "执行董事" },
                { id: "t2", quote: "我很怕那种讲一堆术语但做不出东西的团队，但 Techsavvy 完全相反！沟通非常顺畅，他们对设计的理解甚至超过了我们的预期。AI 推荐功能上线后效果惊人，用户留存率的提升是实打实的。", name: "Monira T. Mishu", role: "Figma CEO" },
                { id: "t3", quote: "安全性一直是我最头疼的，但他们的零信任架构方案真的让我睡了个好觉。整个迁移过程极其平滑，业务幾乎没有中断。而且他们给的文档寫得太详细了，我手下的人接手毫无压力。", name: "Towkib M. Keple", role: "IT 主管" }
            ]
        },
        contact: {
            title: "联系我们",
            subtitle: "别犹豫，聊聊？",
            description: "无论是想咨询技术方案，还是只想交个朋友，我们都随时欢迎。",
            emailLabel: "邮件",
            officeLabel: "拜访我们",
            callLabel: "电话",
            form: {
                name: "怎么称呼您？",
                email: "您的电子邮箱",
                message: "有什么我們可以帮您的？",
                subjects: { general: "普通咨询", project: "启动项目", support: "技术支持", submit: "发送留言", subject: "主题" },
                submit: "发送留言",
                subject: "主题"
            }
        },
        footer: {
            tagline: "构筑数字未来",
            copyright: "© 2024 Techsavvy. 保留所有权利。",
            socials: "关注我们",
            privacy: "隐私政策",
            terms: "服务条款"
        },
        languages: {
            en: "英文",
            zh: "中文",
            jp: "日文"
        },
        legal: {
            privacy: {
                title: "隐私政策",
                content: "在 Techsavvy，我们非常重视您的隐私。本隐私政策说明了当您访问我们的网站时，我们如何收集、使用、披露和保护您的信息。<br><br><strong>1. 信息收集</strong><br>我们可能通过多种方式收集关于您的信息。我们可能在网站上收集的信息包括：个人数据（姓名、电子邮件等）和衍生数据（IP地址、浏览器类型等）。<br><br><strong>2. 您的信息使用</strong><br>拥有关于您的准确信息使我们能够为您提供顺畅、高效和定制化的体验。具体而言，我们可能使用通过网站收集的关于您的信息来：汇编匿名统计数据，监控和分析使用情况和趋势。<br><br><strong>3. 您的信息安全</strong><br>我们使用行政、技术和物理安全措施来帮助保护您的个人信息。虽然我们已采取合理步骤保护您提供给我们的个人信息，通过请注意，尽管我们做出了努力，但没有任何安全措施是完美或不可渗透的。"
            },
            terms: {
                title: "服务条款",
                content: "这些服务条款管理您对 Techsavvy 网站的使用。通过访问或使用本网站，您同意受这些条款的约束。<br><br><strong>1. 知识产权</strong><br>本网站及其原始内容、功能和特性归 Techsavvy 所有，并受国际版权、商标、专利、商业秘密和其他知识产权或专有权利法律的保护。<br><br><strong>2. 用户陈述</strong><br>通过使用本网站，您陈述并保证：(1) 您提交的所有注册信息都是真实、准确、最新和完整的；(2) 您将保持此类信息的准确性。<br><br><strong>3. 责任限制</strong><br>在任何情况下，我们或我们的董事、员工或代理人均不对您或任何第三方承担任何直接、间接、后果性、惩戒性、偶然性、特殊或惩罚性损害赔偿责任，包括因您使用本网站而产生的利润损失、收入损失、数据丢失或其他损害。"
            }
        }
    },
    jp: {
        nav: [
            { label: "ホーム", href: "#hero" },
            { label: "私たちについて", href: "#about" },
            { label: "サービス", href: "#services" },
            { label: "実績", href: "#portfolio" },
            { label: "お問い合わせ", href: "#contact" }
        ],
        hero: {
            badge: "次世代のIT基準",
            slides: [
                { title: "未来へ", titleGradient: "加速する。", subtitle: "ただコードを書くだけではありません。デジタルファーストの世界で、ビジネスの成長を牽引するエンジンを構築します。", image: "IMG/hero-future.jpg" },
                { title: "鉄壁の", titleGradient: "守りを。", subtitle: "ゼロトラストセキュリティで、あなたのビジネスを守り抜く。24時間365日、サイバー脅威から中核資産を保護します。", image: "IMG/hero-security.jpg" },
                { title: "クラウド", titleGradient: "ネイティブ。", subtitle: "レガシーシステムからの脱却を。スムーズなクラウド移行を実現し、ビジネスに無限の拡張性をもたらします。", image: "IMG/hero-cloud.jpg" }
            ],
            cta: "ソリューションを探る",
            ctaSecondary: "実績を見る",
            systemLoad: "システム負荷",
            optimizing: "コアプロセス最適化中..."
        },
        about: {
            title: "Techsavvyとは？",
            subtitle: "イノベーションを、あたりまえに",
            description: "Techsavvyは2020年に設立されたITコンサルティングファームです。私たちは「複雑な技術」と「ビジネスの成功」の間にある溝を埋める架け橋です。世界クラスのエンジニアと戦略家が集まり、クラウド、セキュリティ、ソフトウェア開発の分野で、期待を超える成果を提供することに情熱を注いでいます。",
            stats: [
                { label: "納品プロジェクト", value: "150+" },
                { label: "顧客満足度", value: "98%" },
                { label: "業界経験", value: "10年+" }
            ]
        },
        services: {
            title: "提供できる価値",
            subtitle: "課題解決のためのフルスタック支援",
            learnMore: "詳しく見る",
            modal: { keyBenefitsTitle: "選ばれる理由" },
            items: [
                { id: "s1", title: "クラウドインフラ", description: "将来の成長に耐えうる、柔軟な基盤を設計します。", fullDetail: "包括的なクラウド戦略と移行サービスを提供します。AWS、Azure、Google Cloudへの移行において、ダウンタイムを最小限に抑えつつ、コスト効率とセキュリティを最大化します。コンテナ技術を駆使し、ビジネスのスピードを落としません。", benefits: ["99.99%の稼働率をコミット", "アクセス急増にも自動で対応するスケーリング", "インフラコストを平均30%削減"], icon: "cloud" },
                { id: "s2", title: "サイバーセキュリティ", description: "脅威の進化より一歩先へ。盤石な守りを。", fullDetail: "デジタル資産を厳格なプロトコルで保護します。侵入テスト、24時間365日の監視、GDPRなどのコンプライアンス対応まで、セキュリティの懸念を私たちが引き受けます。ゼロトラストアーキテクチャで、隙のない安全を実現します。", benefits: ["24時間365日、脅威をリアルタイムで監視・即応", "GDPRやSOC2などの複雑な監査もフルサポート", "「誰も信用しない」ゼロトラスト設計で最高レベルの安全を"], icon: "shield" },
                { id: "s3", title: "カスタムソフトウェア", description: "既製品にはない、あなたのビジネスに最適なツールを。", fullDetail: "コンセプトからコードまで、独自のワークフローにフィットする特注ソフトウェアを開発します。ReactやNode.jsなどの最新技術を使用し、使い勝手が良く、メンテナンスしやすいアプリケーションをアジャイルに構築します。", benefits: ["アジャイル開発で、動くプロダクトを素早く提供", "Web、iOS、Androidすべてに対応するクロスプラットフォーム", "使うのが楽しくなる、ユーザー中心のUIデザイン"], icon: "code" },
                { id: "s4", title: "データ分析とAI", description: "眠っているデータから、ビジネスのヒントを発掘する。", fullDetail: "データは現代の石油です。データウェアハウスの構築から、直感的なBIダッシュボード、予測AIモデルの実装まで支援します。勘に頼る経営から、データに基づく戦略的な意思決定へとシフトさせます。", benefits: ["AI予測モデルで、市場の動向を先読み", "経営状況が一目でわかるリアルタイムダッシュボード", "面倒なデータ処理作業を自動化し、効率アップ"], icon: "cpu" }
            ]
        },
        portfolio: {
            title: "私たちの実績",
            subtitle: "成功事例のご紹介",
            viewProject: "詳細を見る",
            modal: {
                clientLabel: "クライアント",
                outcomeLabel: "成果",
                overviewTitle: "プロジェクト概要",
                overviewText: "私たちはクライアントと膝を突き合わせ、表面的な要望だけでなく真の課題を特定しました。その結果、単なるシステム導入に留まらず、ビジネスの成長を長期的に支えるソリューションを生み出すことができました。"
            },
            items: [
                { id: "p1", title: "FinTechダッシュボード", category: "Web開発", imageUrl: "../IMG/portfolio-fintech.jpg", description: "リアルタイム金融分析プラットフォーム。", client: "大手銀行グループ", result: "データの可視化により処理速度が40％向上。現場スタッフの負担が激減しました。" },
                { id: "p2", title: "医療クラウド移行", category: "クラウドサービス", imageUrl: "../IMG/portfolio-healthcare.jpg", description: "患者記録のAWSへの安全な移行プロジェクト。", client: "MediCare Plus", result: "厳しいHIPAA規制をクリアしつつ、インフラコストを30％削減することに成功。" },
                { id: "p3", title: "EコマースAIレコメンデーション", category: "AI / ML", imageUrl: "../IMG/portfolio-ecommerce.jpg", description: "ユーザーの好みを学習する製品推奨エンジン。", client: "新興スタートアップ", result: "導入后わずか3ヶ月でコンバージョン率が25％アップ。売上に直結しました。" }
            ]
        },
        testimonials: {
            title: "お客様の声",
            subtitle: "パートナーからの評価",
            items: [
                { id: "t1", quote: "古いインフラの刷新は頭の痛い問題でしたが、Techsavvyは単にクラウドに移行するだけでなく、業務フロー全体を最適化してくれました。導入以来、コストが大幅に下がりました。まさに戦略的なパートナーです。", name: "Mango M. Keple", role: "マネージングディレクター" },
                { id: "t2", quote: "レビューを書くことは稀ですが、彼らの仕事ぶりには感動しました！こちらのデザイン哲学を即座に理解し、MVPを予定より2週間も早く納品してくれました。AI機能も非常にスムーズで、ユーザーからも好評です。", name: "Monira T. Mishu", role: "Figma CEO" },
                { id: "t3", quote: "ついに、本当の意味でセキュリティを理解しているパートナーに出会えました。彼らが組んだゼロトラスト・アーキテクチャは堅牢そのもの。ドキュメントも完璧で、社内チームへの引き継ぎもスムーズでした。安心して任せられます。", name: "Towkib M. Keple", role: "ITスーパーバイザー" }
            ]
        },
        contact: {
            title: "お問い合わせ",
            subtitle: "そのアイデア、形にしませんか？",
            description: "技術的なご相談からお見積もりまで、お気軽にご連絡ください。未来を創るお手伝いをいたします。",
            emailLabel: "メール",
            officeLabel: "アクセス",
            callLabel: "お電話",
            form: {
                name: "お名前",
                email: "メールアドレス",
                message: "お問い合わせ内容",
                subjects: { general: "総合的なお問い合わせ", project: "プロジェクトについて", support: "サポート" },
                submit: "送信する",
                subject: "件名"
            }
        },
        footer: {
            tagline: "デジタルな未来を構築する",
            copyright: "© 2024 Techsavvy. All rights reserved.",
            socials: "フォローする",
            privacy: "プライバシーポリシー",
            terms: "利用規約"
        },
        languages: {
            en: "英語",
            zh: "中国語",
            jp: "日本語"
        },
        legal: {
            privacy: {
                title: "プライバシーポリシー",
                content: "Techsavvyでは、お客様のプライバシーを真剣に受け止めています。このプライバシーポリシーは、お客様が当社のウェブサイトを訪問した際に、当社がどのようにお客様の情報を収集、使用、開示、保護するかを説明するものです。<br><br><strong>1. 情報の収集</strong><br>当社は、さまざまな方法でお客様に関する情報を収集する場合があります。当社がサイト上で収集する可能性のある情報には、個人データ（氏名、電子メールなど）および派生データ（IPアドレス、ブラウザの種類など）が含まれます。<br><br><strong>2. 情報の使用</strong><br>お客様に関する正確な情報を持つことで、スムーズで効率的かつカスタマイズされた体験を提供することが可能になります。具体的には、サイトを通じて収集したお客様に関する情報を、以下の目的で使用することがあります：匿名の統計データの編集、利用状況や傾向の監視と分析。<br><br><strong>3. 情報のセキュリティ</strong><br>当社は、お客様の個人情報を保護するために、管理的、技術的、物理的なセキュリティ対策を講じています。当社はお客様から提供された個人情報を保護するために合理的な措置を講じていますが、当社の努力にもかかわらず、完全または侵入不可能なセキュリティ対策は存在しないことにご注意ください。"
            },
            terms: {
                title: "利用規約",
                content: "これらの利用規約は、Techsavvyのウェブサイトの利用を規定するものです。本サイトにアクセスまたは使用することにより、お客様はこれらの規約に拘束されることに同意したものとみなされます。<br><br><strong>1. 知的財産</strong><br>本サイトおよびそのオリジナルのコンテンツ、機能、機能性はTechsavvyに帰属し、国際的な著作権、商標、特許、営業秘密、その他の知的財産または所有権に関する法律によって保護されています。<br><br><strong>2. ユーザーの表明</strong><br>本サイトを使用することにより、お客様は以下を表明し保証するものとします：(1) お客様が送信するすべての登録情報は真実、正確、最新かつ完全であること。(2) お客様は、当該情報の正確性を維持すること。<br><br><strong>3. 責任の制限</strong><br>いかなる場合も、当社または当社の取締役、従業員、代理人は、お客様による本サイトの利用から生じる利益の損失、収益の損失、データの損失、またはその他の損害を含む、直接的、間接的、結果的、懲罰的、偶発的、特別、または懲罰的な損害について、お客様または第三者に対して責任を負わないものとします。"
            }
        }
    }
};
let currentLang = 'en';
let currentTheme = 'light';
let currentHeroSlide = 0;
let heroInterval;

document.addEventListener('DOMContentLoaded', () => {
    // Init Theme based on system or local storage
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        currentTheme = 'dark';
        document.documentElement.classList.add('dark');
    }

    // Init Language
    const savedLang = localStorage.getItem('lang');
    if (savedLang && ['en', 'zh', 'jp'].includes(savedLang)) {
        currentLang = savedLang;
    }

    // Initial Render
    updateContent();
    startHeroCarousel();
    initEventListeners();
    initScrollReveal();
    initSpotlightEffect();
    initPortfolioTilt();
    animateSystemLoad();
});

function initEventListeners() {
    // Theme Toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', currentTheme);
    });

    // Hero Carousel Navigation
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            clearInterval(heroInterval);
            const totalSlides = translations[currentLang].hero.slides.length;
            currentHeroSlide = (currentHeroSlide - 1 + totalSlides) % totalSlides;
            renderHeroSlides();
            startHeroCarousel();
        });

        nextBtn.addEventListener('click', () => {
            clearInterval(heroInterval);
            const totalSlides = translations[currentLang].hero.slides.length;
            currentHeroSlide = (currentHeroSlide + 1) % totalSlides;
            renderHeroSlides();
            startHeroCarousel();
        });
    }

    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-open');
    const mobileMenuOverlay = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    if (mobileMenuBtn && mobileMenuOverlay && mobileMenuClose) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('translate-x-full', 'opacity-0');
            mobileMenuOverlay.classList.add('translate-x-0', 'opacity-100');
            document.body.style.overflow = 'hidden';
        });

        mobileMenuClose.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('translate-x-full', 'opacity-0');
            mobileMenuOverlay.classList.remove('translate-x-0', 'opacity-100');
            document.body.style.overflow = '';
        });
    }

    // Language Dropdown
    const langBtn = document.getElementById('lang-toggle');
    const langMenu = document.getElementById('lang-dropdown');

    if (langBtn && langMenu) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langMenu.classList.contains('hidden') && !langMenu.contains(e.target)) {
                langMenu.classList.add('hidden');
            }
        });

        // Language option click handlers
        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedLang = e.currentTarget.dataset.lang.toLowerCase();
                if (['en', 'zh', 'jp'].includes(selectedLang)) {
                    currentLang = selectedLang;
                    localStorage.setItem('lang', currentLang);

                    // Close dropdown
                    langMenu.classList.add('hidden');

                    // Update content
                    updateContent();

                    // Re-render hero to update slides text immediately
                    clearInterval(heroInterval);
                    currentHeroSlide = 0;
                    renderHeroSlides();
                    startHeroCarousel();
                }
            });
        });
    }



    // Modals
    // Services
    document.querySelectorAll('.spotlight-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id; // s1, s2, s3, s4
            openServiceModal(id);
        });
    });

    // Portfolio
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id; // p1, p2, p3
            openPortfolioModal(id);
        });
    });

    // Modal Close
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalClose = document.getElementById('modal-close');

    const closeModal = () => {
        const wrapper = document.getElementById('modal-content-wrapper');
        wrapper.classList.add('scale-95', 'translate-y-12');
        wrapper.classList.remove('scale-100', 'translate-y-0');

        modalOverlay.classList.remove('opacity-100');
        modalOverlay.classList.add('opacity-0');

        setTimeout(() => {
            modalOverlay.classList.remove('flex', 'visible');
            modalOverlay.classList.add('hidden', 'invisible');
            document.body.style.overflow = '';
        }, 300);
    };

    modalBackdrop.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);

    // Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (mobileMenuOverlay) {
                    mobileMenuOverlay.classList.add('translate-x-full', 'opacity-0');
                    mobileMenuOverlay.classList.remove('translate-x-0', 'opacity-100');
                }
                document.body.style.overflow = '';

                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Footer Modals
    const privacyBtn = document.getElementById('footer-privacy');
    const termsBtn = document.getElementById('footer-terms');

    if (privacyBtn) {
        privacyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const content = translations[currentLang].legal.privacy;
            openModal(content.title, `<p class="text-slate-600 dark:text-slate-300 leading-relaxed">${content.content}</p>`);
        });
    }

    if (termsBtn) {
        termsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const content = translations[currentLang].legal.terms;
            openModal(content.title, `<p class="text-slate-600 dark:text-slate-300 leading-relaxed">${content.content}</p>`);
        });
    }
}

function updateContent() {
    const data = translations[currentLang];

    // Update all simple text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n; // e.g., "hero.badge" or "nav.0.label"
        const value = getNestedValue(data, key);
        if (value) {
            el.innerText = value;
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        const value = getNestedValue(data, key);
        if (value) el.placeholder = value;
    });

    // Update Navbar Language Display
    const currentLangLabel = document.getElementById('current-lang');
    if (currentLangLabel) {
        currentLangLabel.innerText = currentLang.toUpperCase();
    }

    // Update Desktop Language Dropdown Items State
    document.querySelectorAll('.lang-option').forEach(btn => {
        const lang = btn.dataset.lang.toLowerCase();
        const dot = btn.querySelector('span');

        if (lang === currentLang) {
            btn.classList.add('pointer-events-none', 'opacity-70');
            btn.classList.remove('hover:bg-slate-100', 'dark:hover:bg-white/5', 'cursor-pointer');
            btn.style.backgroundColor = 'transparent'; // Ensure no hover bg if it was stuck
            if (dot) {
                dot.classList.remove('bg-slate-300', 'dark:bg-slate-700');
                dot.classList.add('bg-indigo-500');
            }
        } else {
            btn.classList.remove('pointer-events-none', 'opacity-70');
            btn.classList.add('hover:bg-slate-100', 'dark:hover:bg-white/5', 'cursor-pointer');
            btn.style.backgroundColor = ''; // Reset style override
            if (dot) {
                dot.classList.add('bg-slate-300', 'dark:bg-slate-700');
                dot.classList.remove('bg-indigo-500');
            }
        }
    });

    // Update Mobile Language Buttons State
    document.querySelectorAll('.lang-option-mobile').forEach(btn => {
        const lang = btn.dataset.lang.toLowerCase();
        if (lang === currentLang) {
            btn.classList.add('bg-indigo-600', 'border-indigo-500', 'text-white', 'pointer-events-none');
            btn.classList.remove('bg-transparent', 'text-slate-500', 'dark:text-slate-400', 'border-slate-200', 'dark:border-slate-800');
        } else {
            btn.classList.remove('bg-indigo-600', 'border-indigo-500', 'text-white', 'pointer-events-none');
            btn.classList.add('bg-transparent', 'text-slate-500', 'dark:text-slate-400', 'border-slate-200', 'dark:border-slate-800');
        }
    });
}

function getNestedValue(obj, key) {
    return key.split('.').reduce((o, i) => (o ? o[i] : null), obj);
}

function startHeroCarousel() {
    renderHeroSlides();
    heroInterval = setInterval(() => {
        currentHeroSlide = (currentHeroSlide + 1) % translations[currentLang].hero.slides.length;
        renderHeroSlides();
    }, 6000);
}

function renderHeroSlides() {
    const slidesData = translations[currentLang].hero.slides;
    const slidesContainer = document.getElementById('hero-slides-container');
    if (!slidesContainer) return;

    slidesContainer.innerHTML = '';

    slidesData.forEach((slide, index) => {
        const isActive = index === currentHeroSlide;
        const slideEl = document.createElement('div');
        slideEl.className = `absolute top-0 left-0 w-full transition-all duration-700 ease-in-out transform ${isActive ? "opacity-100 translate-y-0 relative" : "opacity-0 translate-y-4 absolute pointer-events-none"}`;
        slideEl.innerHTML = `
            <h1 class="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1] transition-colors">
                ${slide.title} <br class="hidden lg:block" />
                <span class="text-gradient">${slide.titleGradient}</span>
            </h1>
            <p class="text-base sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed transition-colors">
                ${slide.subtitle}
            </p>
        `;
        slidesContainer.appendChild(slideEl);
    });

    // Update background images
    const heroImages = document.querySelectorAll('.hero-image');
    heroImages.forEach((img, idx) => {
        if (idx === currentHeroSlide) {
            img.classList.remove('opacity-0', 'scale-110', 'z-10');
            img.classList.add('opacity-100', 'scale-100', 'z-20');
        } else {
            img.classList.remove('opacity-100', 'scale-100', 'z-20');
            img.classList.add('opacity-0', 'scale-110', 'z-10');
        }
    });

    // Update Progress Bars
    const progressContainer = document.getElementById('hero-progress');
    if (progressContainer) {
        // Simple indicators
        const indicators = Array.from(progressContainer.children);
        indicators.forEach((bar, idx) => {
            // Reset animation
            const inner = bar.firstElementChild;
            if (inner) {
                inner.style.width = idx === currentHeroSlide ? '100%' : '0%';
                inner.style.transition = idx === currentHeroSlide ? 'width 6s linear' : 'none';
            }
        });
    }
}

// Scroll Reveal
function initScrollReveal() {
    // Immediately reveal all elements on page load to ensure visibility
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        el.classList.remove('reveal-hidden');
        el.classList.add('reveal-visible');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('reveal-hidden');
                entry.target.classList.add('reveal-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    // Navbar Scroll Effect with Glass Morphism
    const navbarContainer = document.getElementById('navbar-container');
    const navbar = document.getElementById('navbar');
    const logoIcons = document.querySelectorAll('.logo-icon');

    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 50;

        if (isScrolled) {
            navbar.classList.add('glass-morphism', 'shadow-2xl', 'shadow-indigo-500/10', 'rounded-full');
            navbar.classList.remove('bg-transparent', 'max-w-7xl', 'w-full');
            navbar.classList.add('w-[95%]', 'lg:w-[90%]', 'max-w-5xl', 'py-2.5', 'lg:py-3');
            navbar.classList.remove('py-2');

            navbarContainer.classList.remove('py-4', 'lg:py-8');
            navbarContainer.classList.add('py-2', 'lg:py-4');

            logoIcons.forEach(icon => {
                icon.classList.remove('text-slate-900');
                icon.classList.add('text-indigo-600');
            });
        } else {
            navbar.classList.remove('glass-morphism', 'shadow-2xl', 'shadow-indigo-500/10', 'rounded-full');
            navbar.classList.add('bg-transparent', 'max-w-7xl', 'w-full', 'py-2');
            navbar.classList.remove('w-[95%]', 'lg:w-[90%]', 'max-w-5xl', 'py-2.5', 'lg:py-3');

            navbarContainer.classList.add('py-4', 'lg:py-8');
            navbarContainer.classList.remove('py-2', 'lg:py-4');

            logoIcons.forEach(icon => {
                icon.classList.add('text-slate-900');
                icon.classList.remove('text-indigo-600');
            });
        }
    });

    // Scroll to Top
    const scrollBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.classList.remove('opacity-0', 'translate-y-16', 'pointer-events-none');
        } else {
            scrollBtn.classList.add('opacity-0', 'translate-y-16', 'pointer-events-none');
        }
    });
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function openModal(title, contentHTML) {
    const overlay = document.getElementById('modal-overlay');
    const wrapper = document.getElementById('modal-content-wrapper');
    const titleEl = document.getElementById('modal-title');
    const bodyEl = document.getElementById('modal-body');

    titleEl.innerText = title;
    bodyEl.innerHTML = contentHTML;

    overlay.classList.remove('hidden', 'invisible');
    overlay.classList.add('flex', 'visible');

    // Trigger animation
    setTimeout(() => {
        overlay.classList.remove('opacity-0');
        overlay.classList.add('opacity-100');
        wrapper.classList.remove('scale-95', 'translate-y-12');
        wrapper.classList.add('scale-100', 'translate-y-0');
    }, 10);

    document.body.style.overflow = 'hidden';
}

function openServiceModal(id) {
    const data = translations[currentLang].services.items.find(i => i.id === id);
    const benefitsTitle = translations[currentLang].services.modal.keyBenefitsTitle;

    if (!data) return;

    const html = `
        <div class="space-y-6">
            <div class="flex items-center gap-4 mb-6">
                <div class="p-3 rounded-xl bg-indigo-50 dark:bg-white/5 text-indigo-600 dark:text-indigo-400">
                    <!-- Icon placeholder, ideally assume same icon as card -->
                    <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                   <h4 class="text-xl font-bold text-slate-900 dark:text-white">${data.title}</h4>
                   <p class="text-slate-500 text-sm">${data.description}</p>
                </div>
            </div>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${data.fullDetail}</p>
            
            <div class="bg-slate-50 dark:bg-slate-950 rounded-2xl p-6">
                <h5 class="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    ${benefitsTitle}
                </h5>
                <ul class="space-y-3">
                    ${data.benefits.map(b => `<li class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>${b}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    openModal(data.title, html);
}

function openPortfolioModal(id) {
    const data = translations[currentLang].portfolio.items.find(i => i.id === id);
    const labels = translations[currentLang].portfolio.modal;

    if (!data) return;

    const html = `
        <div class="space-y-10">
            <div class="aspect-video w-full rounded-2xl overflow-hidden relative shadow-lg">
                <img src="${data.imageUrl}" alt="${data.title}" class="w-full h-full object-cover">
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div class="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                    <div class="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">${labels.clientLabel}</div>
                    <div class="font-bold text-slate-900 dark:text-white text-lg lg:text-xl">${data.client}</div>
                </div>
                 <div class="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                    <div class="text-xs font-bold text-teal-500 uppercase tracking-widest mb-3">${labels.outcomeLabel}</div>
                    <div class="font-bold text-slate-900 dark:text-white text-lg lg:text-xl leading-relaxed">${data.result}</div>
                </div>
            </div>

            <div class="pt-2">
                <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-4">${labels.overviewTitle}</h4>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-base lg:text-lg">${labels.overviewText}</p>
            </div>
        </div>
    `;
    openModal(data.title, html);
}

// Spotlight Effect for Services Section
function initSpotlightEffect() {
    const spotlightGroup = document.querySelector('.spotlight-group');
    if (!spotlightGroup) return;

    const cards = spotlightGroup.querySelectorAll('.spotlight-card');

    spotlightGroup.addEventListener('mousemove', (e) => {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// Initialize spotlight effect after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initSpotlightEffect();
    initPortfolioTilt();
});

// Portfolio 3D Tilt Effect
function initPortfolioTilt() {
    const cards = document.querySelectorAll('.portfolio-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}


// System Load Animation
function animateSystemLoad() {
    const percentageEl = document.getElementById('system-load-percentage');
    const barEl = document.getElementById('system-load-bar');

    if (!percentageEl || !barEl) return;

    let currentLoad = 0;

    // Set initial state
    percentageEl.innerText = '0%';
    barEl.style.width = '0%';

    const interval = setInterval(() => {
        // Random increment between 1 and 3
        currentLoad += Math.floor(Math.random() * 3) + 1; 

        if (currentLoad >= 100) {
            currentLoad = 100;
            clearInterval(interval);
        }

        percentageEl.innerText = currentLoad + '%';
        barEl.style.width = currentLoad + '%';

    }, 30);
}
