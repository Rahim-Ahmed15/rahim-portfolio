/**
 * Chatbot Knowledge Base — Rahim Ahmed
 * MERN Stack Developer
 * -----------------------------------
 * keywords: array of words/phrases jo match honge
 * answer:   jawab (newlines ke liye \n use karein)
 * priority: high = zyada priority (generic ke liye zyada, specific ke liye kam)
 */

export const knowledge = [
  // ============================================================
  // GREETINGS
  // ============================================================
  {
    keywords: ['hi', 'hello', 'hey', 'salam', 'assalam', 'aoa', 'hy'],
    answer: "Hey! 👋 I'm Rahim's AI assistant. I can tell you about his skills, MERN stack projects, experience, or how to contact him. Ask away!",
    priority: 10,
  },
  {
    keywords: ['how are you', 'how r u', 'kaise ho', 'kya haal'],
    answer: "I'm running at 100% efficiency ⚡ — just like Rahim's code. What would you like to know about him?",
    priority: 10,
  },
  {
    keywords: ['bye', 'goodbye', 'khuda hafiz', 'see you', 'allah hafiz'],
    answer: "Goodbye! 👋 If you'd like to work with Rahim, drop a message via the Contact form. Have a great day!",
    priority: 10,
  },

  // ============================================================
  // ABOUT / INTRO
  // ============================================================
  {
    keywords: ['who are you', 'who is rahim', 'about rahim', 'about you', 'introduce', 'kaun ho', 'kon ho', 'your name', 'tell me about'],
    answer:
      "Rahim Ahmed is a Full-Stack Web Developer from Pakistan 🇵🇰 specializing in the MERN stack — React, Node.js, Express, and MongoDB. He's a BSCS student at Iqra University and has built 20+ real-world projects including a PDF to Image Converter, Wanderlust (Airbnb clone), Linkora (URL shortener), and a full MERN authentication system.",
    priority: 9,
  },
  {
    keywords: ['experience', 'years', 'how long', 'kitna experience', 'background'],
    answer:
      "Rahim has 1.5+ years of hands-on experience building production-grade web apps — from vanilla JS games to full MERN applications. He's built projects with authentication, REST APIs, MongoDB aggregation, JWT security, and even deployed apps on Vercel with MongoDB Atlas. He also actively builds and shares projects on LinkedIn and GitHub. 💼",
    priority: 9,
  },
  {
    keywords: ['location', 'where', 'city', 'country', 'kahan', 'live', 'based'],
    answer: "Rahim is based in 🇵🇰 Pakistan and works remotely with clients worldwide. He's also a Coordinator at Al Midrar Institute.",
    priority: 8,
  },
  {
    keywords: ['education', 'university', 'degree', 'student', 'bscs', 'padhai', 'iqra'],
    answer:
      "Rahim is pursuing a BS in Computer Science (BSCS) at Iqra University, Karachi. His coursework covers Data Structures, DBMS, Operating Systems, Computer Networks, Assembly Language, and Machine Learning — and he's been building real projects since his 3rd semester. 🎓",
    priority: 8,
  },
  {
    keywords: ['available', 'freelance', 'hire', 'work together', 'kaam', 'project banwana', 'open to work'],
    answer:
      "Yes! Rahim is open to freelance projects, full-time opportunities, and collaborations. Head to the Contact section below or email him directly. 📩 He replies within 24 hours.",
    priority: 9,
  },

  // ============================================================
  // SKILLS / TECH STACK
  // ============================================================
  {
    keywords: ['skills', 'tech stack', 'technologies', 'what do you know', 'expertise', 'mern', 'specialization'],
    answer:
      "Rahim's primary stack is the **MERN stack**:\n\n• Frontend: React, Vite, Tailwind CSS, Framer Motion, React Router\n• Backend: Node.js, Express.js\n• Database: MongoDB, Mongoose\n• Auth: JWT, bcrypt, Passport.js, Express-session\n• Other: Python, Flask, PyMuPDF, Pillow\n• DB tools: MySQL, SQL Server\n• Version control: Git & GitHub\n\nHe's also strong in JavaScript (ES6+), REST API design, MVC architecture, and responsive UI development.",
    priority: 9,
  },
  {
    keywords: ['react', 'reactjs', 'react.js'],
    answer:
      "React is Rahim's primary frontend framework — he's built 15+ production apps including VegeMarket (liquid glass UI e-commerce), Linkora (URL shortener), and Wanderlust. He uses hooks, Context API, React Router, and Framer Motion for smooth animations. ⚛️",
    priority: 8,
  },
  {
    keywords: ['node', 'nodejs', 'node.js', 'backend', 'server'],
    answer:
      "Rahim works extensively with Node.js + Express. He's built REST APIs with JWT auth, MVC architecture, MongoDB aggregation pipelines, pagination, filtering, and proper error handling. Examples: Expense Tracker API, Wanderlust backend, Linkora, Express User System (MySQL). 🛠️",
    priority: 8,
  },
  {
    keywords: ['mongo', 'mongodb', 'mongoose', 'database'],
    answer:
      "MongoDB is Rahim's go-to database. He uses Mongoose for schema design and has worked with aggregation pipelines, one-to-many relationships (like reviews on listings), pagination, and MongoDB Atlas for cloud hosting. He also works with MySQL and SQL Server. 🍃",
    priority: 8,
  },
  {
    keywords: ['express', 'expressjs', 'express.js'],
    answer:
      "Express.js is Rahim's primary backend framework. He's built full CRUD APIs, JWT auth flows, session-based auth (Passport.js), middleware validation, and MVC-structured apps with it. 🚂",
    priority: 7,
  },
  {
    keywords: ['tailwind', 'css', 'styling', 'design', 'ui', 'ux'],
    answer:
      "Rahim is a Tailwind CSS power user — he specializes in **modern UI trends** like Glassmorphism, Liquid Glass (Apple-inspired), and dark-theme aesthetics. His VegeMarket project features an Apple-inspired liquid glass UI. 🎨",
    priority: 8,
  },
  {
    keywords: ['typescript', 'ts'],
    answer:
      "Rahim is actively working with TypeScript for type-safe React and Node.js projects. He's strengthening this skill alongside his MERN foundation.",
    priority: 6,
  },
  {
    keywords: ['javascript', 'js', 'vanilla'],
    answer:
      "JavaScript is Rahim's core language — ES6+, async/await, Fetch API, and DOM manipulation. He's built things from Simon Says game to complex React apps using JS. He's been coding in JS since his 1st year of BSCS. ⚡",
    priority: 8,
  },
  {
    keywords: ['python', 'flask', 'pymupdf', 'pillow'],
    answer:
      "Yes! Rahim also works with Python. His most recent project was a **PDF to Image Converter** built with Python + Flask + PyMuPDF + Pillow in just 5 days. Features include multi-file upload, custom page ranges, watermarks, and a modern UI. 🐍",
    priority: 8,
  },
  {
    keywords: ['jwt', 'authentication', 'auth', 'bcrypt', 'passport'],
    answer:
      "Authentication is one of Rahim's favorite backend topics. He's implemented **JWT with HTTP-only cookies**, bcrypt password hashing, Joi validation, protected routes, React Context for auth state, and Passport.js session-based auth. Project highlight: 'Full-Stack Authentication System' (React + Node + MongoDB). 🔐",
    priority: 8,
  },

  // ============================================================
  // PROJECTS — SPECIFIC
  // ============================================================
  {
    keywords: ['projects', 'portfolio', 'work', 'built', 'samples', 'what have you made'],
    answer:
      "Rahim has built 20+ projects. Highlights:\n\n• **Wanderlust** — Airbnb-inspired listing platform (deployed on Vercel, MongoDB Atlas)\n• **PDF to Image Converter** — Flask + PyMuPDF, built in 5 days\n• **Linkora** — URL shortener with QR codes & analytics\n• **VegeMarket** — Liquid Glass UI e-commerce (React + Vite)\n• **Expense Tracker API** — Node.js + MongoDB\n• **Full-Stack Auth System** — JWT, cookies, protected routes\n• **FiniteCash** — ATM + Compiler simulation\n• **Velora** — CRUD listing platform\n• **Smart Todo App** — MERN + JWT\n• **Vulnerability Tracking System** — SQL Server DBMS\n\nScroll to the Projects section for links! 🚀",
    priority: 10,
  },
  {
    keywords: ['wanderlust', 'airbnb', 'listing platform', 'travel'],
    answer:
      "**Wanderlust** is Rahim's Airbnb-inspired listing platform — deployed live on Vercel with MongoDB Atlas. Features RESTful APIs, full CRUD for listings, review system (one-to-many), Passport.js authentication, owner-only edit/delete authorization, Joi validation, MVC architecture, and Bootstrap UI. 🌍",
    priority: 7,
  },
  {
    keywords: ['linkora', 'url shortener', 'shortener'],
    answer:
      "**Linkora** is a full-stack URL shortener with React + Vite frontend and Node + Express + MongoDB backend. Features: custom aliases, QR code generation, click analytics, duplicate URL detection, expiry dates, pagination, and proper REST API error handling. 🔗",
    priority: 7,
  },
  {
    keywords: ['vege market', 'vege market', 'grocery', 'ecommerce', 'e-commerce'],
    answer:
      "**VegeMarket** is a modern grocery e-commerce UI with an Apple-inspired **Liquid Glass** aesthetic. Built with React + Vite + Tailwind + Framer Motion. Features shopping cart, wishlist, product search, categories, login/register pages, and smooth animations. Fully responsive and ready to connect to a MERN backend. 🥬",
    priority: 7,
  },
  {
    keywords: ['expense tracker', 'expense api'],
    answer:
      "The **Expense Tracker REST API** is a Node.js + Express + MongoDB project with full CRUD, regex search, type/category filtering, sorting, pagination, monthly reports, category-wise analytics, and MongoDB aggregation pipelines. Built to strengthen backend skills. 💰",
    priority: 7,
  },
  {
    keywords: ['pdf converter', 'pdf to image', 'flask project', 'python project'],
    answer:
      "Rahim built a **PDF to Image Converter** in just 5 days from scratch! Tech: Python + Flask + PyMuPDF + Pillow + HTML/CSS/JS. Features: multi-file upload, drag & drop, JPG/PNG/WEBP output, page ranges, quality/scale control, watermarks, image previews, and a modular Flask structure. The project runs locally (not deployed yet). 🐍",
    priority: 7,
  },
  {
    keywords: ['todo', 'smart todo', 'task app'],
    answer:
      "The **Smart Todo App** is a MERN stack project focused on authentication & security — JWT, bcrypt hashing, protected routes, full CRUD, REST APIs, and React + Tailwind frontend. One of Rahim's foundational MERN projects. ✅",
    priority: 6,
  },
  {
    keywords: ['velora', 'listing app'],
    answer:
      "**Velora** is a MERN-style listing platform (Node + Express + MongoDB + EJS) with full CRUD, responsive UI, flash messages, server-side validation, and Bootstrap 5. Focused on backend routing and middleware practice. 📋",
    priority: 6,
  },
  {
    keywords: ['finitecash', 'atm', 'compiler', 'compiler construction'],
    answer:
      "**FiniteCash ATM & Compiler Lab** combines banking logic with compiler theory. Features secure login/PIN, deposits, withdrawals, transfers, and an interactive simulation of Lexical → Syntax → IR → Optimization → Code Generation pipeline. Built with HTML, CSS, JS. 🏧",
    priority: 6,
  },
  {
    keywords: ['vulnerability', 'incident tracking', 'sql server', 'dbms project'],
    answer:
      "**Vulnerability & Incident Tracking System** — a DBMS CCP project in Microsoft SQL Server. Manages CVEs, IT assets, security incidents, SLA deadlines, automated triggers, views, JOINs, transactions, and normalization up to 3NF. Teammate: Dayan Ali. 🛡️",
    priority: 6,
  },
  {
    keywords: ['hypervisor', 'operating system', 'scheduler'],
    answer:
      "The **Hypervisor Resource Scheduler** is an OS lab project simulating Weighted Fair Share CPU scheduling among VMs. Written in C (core) and JS (visualization). Prevents starvation and supports AI-based load suggestions. 🖥️",
    priority: 5,
  },
  {
    keywords: ['weather', 'weather app', 'openweathermap'],
    answer:
      "**Weather Forecast Web App** — HTML, CSS, JS with OpenWeatherMap API. Features real-time weather, city search, responsive UI, glassmorphism design, and dynamic weather icons. 🌤️",
    priority: 5,
  },
  {
    keywords: ['simon', 'simon says', 'memory game'],
    answer:
      "**Simon Says Game** — a classic memory game in vanilla JS with real-time score tracking, high score persistence, keyboard + touch support, and animated overlays. 🎮",
    priority: 5,
  },
  {
    keywords: ['clinic', 'mips', 'assembly', 'coal'],
    answer:
      "**Clinic Management System** — built in MIPS Assembly language (3rd semester COAL project). Manages patient records with linked-node memory storage, menu-driven interface, and low-level memory addressing. 💾",
    priority: 5,
  },
  {
    keywords: ['cinema', 'javafx', 'java project'],
    answer:
      "**Cinema Management System** — Java + JavaFX (SceneBuilder) with Admin Panel (add/delete movies, categorize) and Customer Dashboard (browse, book tickets). Uses file I/O for persistence. 🎬",
    priority: 5,
  },

  // ============================================================
  // SERVICES / WHAT HE DOES
  // ============================================================
  {
    keywords: ['services', 'what can you do', 'offer', 'help me with'],
    answer:
      "Rahim offers:\n\n• 🌐 **Full-stack web development** (MERN stack)\n• 🔌 **REST API development** (Node + Express + MongoDB)\n• 🔐 **Authentication systems** (JWT, sessions, protected routes)\n• 🎨 **Frontend development** (React, Tailwind, animations)\n• 🐍 **Python/Flask utilities** (like the PDF Converter)\n• ⚡ **Performance & SEO tuning**\n\nSee the Services section for details.",
    priority: 9,
  },
  {
    keywords: ['price', 'cost', 'rate', 'kitne', 'charge', 'pricing', 'fees'],
    answer:
      "Pricing depends on project scope. Small static sites start small, full MERN apps with auth + database are project-based. Send a message via the Contact form with your requirements and Rahim will get back with a quote within 24 hours. 💰",
    priority: 8,
  },
  {
    keywords: ['deploy', 'deployment', 'vercel', 'netlify', 'hosting'],
    answer:
      "Rahim is comfortable deploying on **Vercel** (Wanderlust is live there with MongoDB Atlas), **Netlify** (this portfolio), and **Render** for backends. He handles environment variables, CORS, and production-ready configurations.",
    priority: 7,
  },

  // ============================================================
  // CONTACT
  // ============================================================
  {
    keywords: ['contact', 'email', 'reach', 'message', 'rabta', 'get in touch'],
    answer:
      "You can reach Rahim via:\n• 📧 Email: rahimjameel15@gmailcom\n• 🐙 GitHub: github.com/Rahim-Ahmed15\n• 💼 LinkedIn: (search 'Rahim Ahmed Full Stack')\n\nOr just use the Contact form at the bottom of this page — he replies within 24 hours!",
    priority: 9,
  },
  {
    keywords: ['github', 'repos', 'repositories', 'code'],
    answer:
      "Rahim's GitHub is **github.com/Rahim-Ahmed15** — you'll find all his projects there: Wanderlust, Linkora, VegeMarket, PDF Converter, Smart Todo, and more. He commits regularly and keeps repos documented. 🐙",
    priority: 8,
  },
  {
    keywords: ['linkedin', 'social'],
    answer:
      "Rahim is active on LinkedIn — he shares each project he builds with details on the tech stack and what he learned. Search 'Rahim Ahmed Full Stack Developer' or click the LinkedIn icon in the footer. 💼",
    priority: 7,
  },
  {
    keywords: ['resume', 'cv', 'download'],
    answer:
      "You can request Rahim's resume by emailing rahim@example.com or by dropping a message via the Contact form. 📄",
    priority: 6,
  },
  {
    keywords: ['phone', 'call', 'number', 'whatsapp'],
    answer:
      "Rahim prefers email or the Contact form for initial conversations. For urgent requests, mention it in your message and he'll respond with contact details. 📞",
    priority: 6,
  },

  // ============================================================
  // PERSONALITY / FUN
  // ============================================================
  {
    keywords: ['hobby', 'hobbies', 'free time', 'fun', 'shauq'],
    answer:
      "When not coding, Rahim loves reading about new tech, sharing his projects on LinkedIn, and experimenting with modern UI trends like Glassmorphism and Liquid Glass. He's also volunteered as a poster designer for university events. ☕",
    priority: 5,
  },
  {
    keywords: ['favorite', 'favourite', 'language', 'best language'],
    answer:
      "Rahim's favorite is **JavaScript/TypeScript** — the versatility of writing both frontend and backend in one language is unmatched. But he also enjoys Python for scripting and tools. ⚡",
    priority: 5,
  },
  {
    keywords: ['team', 'teamwork', 'collaborate', 'group'],
    answer:
      "Rahim has worked in teams for academic projects (like the Vulnerability Tracking System with Dayan Ali) and is comfortable with Git-based collaboration, code reviews, and shared repo workflows. 🤝",
    priority: 5,
  },

  // ============================================================
  // SPECIAL
  // ============================================================
  {
    keywords: ['thank', 'thanks', 'shukriya', 'jazak'],
    answer: "You're welcome! 😊 Feel free to ask anything else about Rahim, or reach out via the Contact form if you'd like to work together.",
    priority: 10,
  },
  {
    keywords: ['help', 'what can you do', 'how to use', 'guide'],
    answer:
      "I can answer questions about Rahim's:\n• Skills & tech stack (MERN, Python, SQL)\n• Projects (Wanderlust, Linkora, VegeMarket, PDF Converter...)\n• Experience & education\n• Services & pricing\n• How to contact him\n\nJust ask naturally — e.g., 'What projects has he built?' or 'Is he available for freelance?' 💬",
    priority: 10,
  },
  {
    keywords: ['pakistan', 'pakistani', 'urdu'],
    answer: "Yes! Rahim is proudly Pakistani 🇵🇰 and works with clients globally. He's fluent in English and Urdu.",
    priority: 6,
  },
];

export const fallback =
  "Hmm, I'm not sure about that one. 🤔 Try asking about Rahim's skills, MERN projects (like Wanderlust or Linkora), his Python PDF Converter, or how to contact him. You can also drop a message via the Contact form!";
