import type { EnglishCatalog } from './en'
import type { DeepTranslated } from '../types'

export const zhCN = {
  metadata: {
    title: 'Andrés Miguel Guzmán Cruz - Microsoft 软件工程师',
    description:
      'Andrés Miguel Guzmán Cruz - Microsoft 软件工程师。计算机系统工程师及 AI 爱好者，使用 React、TypeScript 和 C# 打造快速、易维护的 Web 体验。作品集涵盖工作经历、项目和技能。',
    socialDescription:
      'Microsoft 软件工程师。计算机系统工程师及 AI 爱好者，使用 React、TypeScript 和 C# 打造快速、易维护的 Web 体验。',
    imageAlt: 'Andrés Miguel Guzmán Cruz - Microsoft 软件工程师',
    openGraphLocale: 'zh_CN',
    jobTitle: '软件工程师',
  },
  languageMenu: {
    buttonLabel: '选择语言',
    menuLabel: '语言',
    currentLanguage: '当前语言：{language}',
    names: {
      en: '英语',
      es: '西班牙语',
      'zh-CN': '简体中文',
    },
  },
  common: {
    logoAlt: '{name} 徽标',
    copied: '已复制',
    copy: '复制{label}',
    work: '工作',
    personal: '个人',
    showDetails: '显示详情',
    hideDetails: '隐藏详情',
    links: {
      github: 'GitHub',
      frontend: '前端',
      backend: '后端',
    },
  },
  nav: {
    hero: '首页',
    about: '关于我',
    experience: '工作经历',
    projects: '项目',
    skills: '技能',
    contact: '联系',
  },
  hero: {
    role: '软件工程师 L60 @ {company}',
    tagline:
      '软件工程师，使用 React、TypeScript 和 C# 打造快速、易维护的 Web 体验。计算机系统工程师及 AI 爱好者。',
    viewProjects: '查看项目',
    getInTouch: '联系我',
  },
  about: {
    title: '关于我',
    eyebrow: '我是谁',
    missionDate: '我的目标',
    mission:
      '“我希望为这样的未来作出贡献：前沿技术广泛可及、得到普及，并促进边缘化群体的社会经济发展。”',
    education: {
      escom: {
        school: 'Escuela Superior de Cómputo, Instituto Politécnico Nacional',
        degree: '计算机系统工程学士',
        period: '2025年7月毕业',
        points: [
          '总平均成绩：9.0 / 10.0。',
          '算法俱乐部成员。',
        ],
      },
      chandigarh: {
        school: 'Chandigarh University',
        degree: '计算机科学工程（IoT）学士',
        period: '2023年2月至2023年6月',
        points: [
          '在印度旁遮普邦进行学期交换。',
          '使用 Raspberry Pi 4 构建计算机视觉项目。',
        ],
      },
    },
  },
  experience: {
    title: '工作经历与研究',
    eyebrow: '我工作过的地方',
    items: {
      microsoftEngineer: {
        role: '软件工程师',
        org: 'Microsoft（全职）',
        period: '2025年1月至今',
        summary: '使用 React + TS + MobX 进行 Web 开发，使用 C# 和 Neo4j 进行后端开发。',
        points: [
          '通过在 Web 体验中采用并发技术，为内部项目作出贡献，将加载时间缩短了 20%。',
          '将完整的 React 应用和组件迁移至更新的代码实践及内部规范，从而提升可维护性。',
          '从零开发功能，编写详细的功能规格说明，主持客户会议，并交付新的体验。',
        ],
      },
      ipnResearch: {
        role: '研究助理',
        org: 'Instituto Politécnico Nacional',
        period: '2025年3月至今',
        summary: '在机器学习领域开展研究。',
        points: [
          '协作开发面向实际应用的预测模型。',
          '与资深研究人员紧密合作，学习先进的 ML 技术和方法论。',
          '参与每周研究讨论，以深化知识并为进行中的项目作出贡献。',
        ],
      },
      banxicoIntern: {
        role: '网络安全实习生',
        org: '墨西哥银行',
        period: '2024年8月至2024年9月',
        summary: '在内部系统中发现、记录并报告漏洞。',
        points: [
          '交付数据可视化项目，展示了对 Python 和 Tableau 的熟练掌握，获得高级管理层高度赞赏。',
          '研究 CVE、NVD、OSV 和 Twitter 等平台，以识别并记录关键漏洞，增强系统安全性。',
        ],
      },
      microsoftIntern: {
        role: '软件工程实习生',
        org: 'Microsoft',
        period: '2024年2月至2024年8月',
        summary: '专注于使用 React + TS + MobX 和 SQL Server 进行 Web 开发。',
        points: [
          '使用 Neo4j 的 OData 查询优化内部项目模型，提升基于身份的请求处理效率。',
          '为新门户中的 Web 应用、API 和权限打造动态搜索界面，并集成 REST API。',
          '入选该实习项目首届学员，是拉丁美洲和墨西哥地区最优秀的候选人之一。',
        ],
      },
    },
  },
  projects: {
    title: '项目',
    eyebrow: '我打造的项目',
    items: {
      llmFineTuning: {
        title: '开放权重 LLM 微调与对比',
        period: '2026年7月',
        description:
          '在单张 RTX 5090 上使用 QDoRA 微调并基准测试 Qwen3-8B-Instruct 和 Phi-4，再将优胜模型部署为面向 CPU 优化的 ONNX 构建版本（INT4 权重 + INT8 计算）；整个流程均由 Streamlit Web 应用驱动。',
        points: [
          '使用 LLaMA-Factory，在单张 RTX 5090 上以 QDoRA（4-bit + DoRA、all-linear）微调 Qwen3-8B-Instruct 和 Phi-4，并采用相同的核心超参数进行公平对比。',
          '使用参考指标（ROUGE、BLEU、chrF）以及 Copilot-CLI 的 LLM-as-judge 评估（成对比较和参考答案评分），在留出集和生成的领域问题上评估两个模型，以数据驱动模型选择。',
          '将选定模型导出为面向 CPU 优化的 ONNX 版本（INT4 权重 + INT8 计算），用于无 GPU 的 Microsoft Dev Box，并提供可复用的 ONNX Runtime 推理 SDK。',
          '通过带有实时 GPU 作业日志和企业数据接入连接器的 Streamlit Web 应用，统筹数据接入、数据准备、训练、合并、导出、评估和推理全流程。',
        ],
      },
      localRag: {
        title: 'Local RAG',
        period: '2026年7月',
        description:
          '一款检索增强聊天应用：基于 Vite + React 前端和 FastAPI + Haystack + LanceDB 管道，按 token 流式返回有依据、附带引文的回答，并可切换生成服务提供商。',
        points: [
          '将每个知识库构建为独立的 LanceDB 表，自动生成知识库描述和示例问题，并使用 SQLite 保存会话历史。',
          '通过 SSE 逐 token 流式传输带有内联 [n] 引文和可展开来源摘录的有依据回答，并提供停止按钮。',
          '支持在运行时切换生成服务提供商（Groq、NVIDIA NIM、Google Gemini、OpenRouter、Hugging Face），同时嵌入和检索始终在本地运行。',
          '将 FastAPI 后端部署在 Azure VM 上的 Caddy 后方，并将 SPA 部署至 GitHub Pages：aguzmancruz.com/local-rag。',
        ],
      },
      oneDsa: {
        title: 'One-DSA',
        period: '2026年7月',
        description:
          '一套以 Python 为核心的 DSA 掌握系统：通过主动回忆编码练习和间隔重复，帮助掌握技术面试所需的算法模式。',
        points: [
          '构建自定义 SM-2 间隔重复调度器，采用 4 按钮评分流程，并在本地存储中持久化每张卡片的复习状态。',
          '设计四种练习类型：识别、填空、代码和语法，并提供按模式范围和混合复习的学习会话。',
          '采用 React 19 + Vite 构建快速的客户端 SPA，并使用 Shiki 提供的语法高亮，优化代码阅读体验。',
        ],
      },
      devxWorkflows: {
        title: 'DevX Workflows UI Desktop',
        period: '2026年6月',
        description:
          '封装 GitHub Copilot SDK（Agency）的 Electron 桌面应用，提供聊天 UI、设备端 RAG 知识库和项目构建功能。',
        points: [
          '基于 Electron、React 19 + Fluent UI v9 + Framer Motion 构建，支持流式 Copilot SDK 会话、计划/自动执行模式和模型选择器。',
          '实现私有的设备端 RAG（LanceDB + 通过 @huggingface/transformers 使用 MiniLM），用于跨文档和文件的索引与搜索，并支持离线语音转 Markdown。',
          '新增带有子代理编排功能的 Project Builder，以及用于管理浏览器桥接、Azure DevOps、WorkIQ 和 GitHub 服务器的 MCP 仪表板。',
        ],
      },
      exchangePlatform: {
        title: '学期交换申请平台',
        period: '2025年3月',
        description:
          '领导开发 Instituto Politécnico Nacional（IPN）的高校系统，用于管理学生出国学习申请。',
        points: [
          '领导 3 人学生团队，指导系统和架构设计。',
          '使用 pgAdmin 4、WebApi Core、React + TS 及 Bash 脚本开发，并部署至内部服务器。',
          '提升行政人员与学生群体之间的效率、协作和生产力。',
        ],
      },
      notaInsights: {
        title: 'Nota Insights',
        period: '2025年1月',
        description:
          '集成搜索引擎、内容推荐、抄袭检测、趋势分析和自动摘要功能的桌面 NLP 应用。',
        points: [
          '使用 customtkinter 和 CTkTable 开发直观的 GUI，并集成动态数据可视化工具。',
          '实现基于 BERT 的模型，利用结构化 CSV 新闻语料库生成语义文本表示。',
        ],
      },
      mobilityTimeSaver: {
        title: 'Mobility Time Saver',
        period: '2024年11月',
        description:
          '一款多平台移动端 PWA，用于生成墨西哥城（CDMX）综合交通系统内事件的报告。',
        points: [
          '使用 React + TypeScript 和 Next.js 开发直观界面，与 Java 后端交互。',
          '通过实时位置共享、报告生成和双因素身份验证（2FA）增强功能。',
          '使用政府提供的 GTFS 数据实施 OpenTripPlanner，以创建行程规划和路线地图。',
        ],
      },
      mawi: {
        title: 'Mawí Ecológica',
        period: '2024年7月',
        description:
          '为环保可持续产品品牌打造的 Shopify 电商店面：一个完整配置的在线商店，提供定制主题的商品目录、安全结账和移动优先的购物体验。',
        points: [
          '完成 Shopify 商店的全流程设置与配置，涵盖商品、集合、配送、税费和结账。',
          '使用 Liquid 定制店面主题，根据品牌标识调整版块、品牌元素和布局。',
          '构建商品目录和顺畅的结账流程，以支持线下及线上销售。',
        ],
      },
      aiNow: {
        title: 'AI-NOW SaaS Web 应用',
        period: '2024年1月',
        description: '一款集成 ChatGPT 的 SaaS 应用，支持高级用户交互和内容生成。',
        points: [
          '集成 Stripe 以实现高效支付处理，并构建安全的身份验证机制。',
          '采用包括 Next.js、React、Prisma 和 Clerk 在内的技术栈，打造可扩展且安全的平台。',
          '集成 ChatGPT 和 Replicate.ai API，以支持动态、智能的交互。',
        ],
      },
      toyStore: {
        title: '玩具店电商',
        period: '2024年1月',
        description:
          '全栈在线玩具商店，提供商品浏览、用户身份验证和购物车功能；采用单页 Angular 应用构建，由 Supabase 数据库提供支持，并部署在 Render 上。',
        points: [
          '构建响应式 Angular 单页应用，包含商品目录、购物车和用户登录流程。',
          '使用 Supabase 提供数据库、身份验证和支持店面的数据访问。',
          '将应用部署在 Render 上，提供持续托管和公开的线上 URL。',
        ],
      },
    },
  },
  skills: {
    title: '技能',
    eyebrow: '我使用的技术',
    categories: {
      programmingLanguages: '编程语言',
      languages: '语言能力',
      frontend: '前端',
      backend: '后端',
      databases: '数据库',
      cloud: '云服务',
      machineLearning: '机器学习',
      languageModels: '语言模型',
      aiTools: 'AI 工具',
      tools: '工具',
    },
    languageItems: {
      Spanish: '西班牙语',
      English: '英语',
      'Mandarin Chinese (Simplified)': '普通话',
    },
  },
  contact: {
    title: '联系我',
    eyebrow: '让我们保持联系',
    labels: {
      workEmail: '电子邮箱',
      personalEmail: 'Gmail',
      workGitHub: 'GitHub',
      personalGitHub: 'GitHub',
      linkedin: 'LinkedIn',
      website: '个人网站',
    },
  },
} as const satisfies DeepTranslated<EnglishCatalog>
