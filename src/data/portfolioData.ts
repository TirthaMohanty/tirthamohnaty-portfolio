import type {
  PersonalInfo,
  MetricCard,
  SkillCategory,
  ToolboxItem,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  ProjectCaseStudy,
  BugCard,
  QaProcessStep,
  ApiEndpointMock,
  AutomationSnippet
} from '../types';

export const personalInfo: PersonalInfo = {
  name: "Tirtha Sarathi Mohanty",
  title: "Quality Assurance Engineer | Manual & Automation Testing (Web & Mobile)",
  headline: "Breaking Bugs Before They Break Production.",
  subHeadline: "Quality Assurance Engineer with 1.7 years of hands-on experience in manual and automation testing for web and mobile applications (Android & iOS). Skilled in Selenium, Playwright, Appium, REST API testing, Database verification (SQL & MongoDB), and Locust performance testing with strong foundations in SDLC, STLC, Agile methodologies, and Python backend engineering (FastAPI & Django).",
  experienceYears: "1.7 Years",
  location: "Mohali, India",
  linkedinUrl: "https://www.linkedin.com/in/tirtha-sarathi-mohanty",
  email: "tirthasarathimohanty966@gmail.com",
  resumeUrl: "/resume.pdf", // Configurable in source
  isOpenToWork: true,
  statusText: "Open to QA Opportunities",
  testingPhilosophy: "QA is not just about finding bugs after release—it is about preventing defects early, writing clean automated test frameworks, bridging the gap between testing and backend engineering, and ensuring seamless software delivery."
};

export const metricCards: MetricCard[] = [
  {
    id: "exp",
    value: "1.7 Years",
    label: "QA Engineering Experience",
    description: "Hands-on experience in web & mobile (Android & iOS) automation",
    iconName: "ShieldCheck"
  },
  {
    id: "projects",
    value: "4+ Sanitized Case Studies",
    label: "Web & Mobile Applications",
    description: "Fictional commerce, workflow, scheduling, and media demos",
    iconName: "Layers"
  },
  {
    id: "areas",
    value: "10+ Testing Disciplines",
    label: "Testing Specializations",
    description: "Manual, Automation, API, Performance, Security, DB, UI & Agile",
    iconName: "Cpu"
  },
  {
    id: "tools",
    value: "18+ Core Tools & Frameworks",
    label: "Modern QA & Dev Stack",
    description: "Selenium, Playwright, Appium, Locust, Postman, FastAPI, Django, ZAP, MongoDB",
    iconName: "Wrench"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "testing-automation",
    title: "Testing & Test Automation",
    iconName: "Code2",
    description: "End-to-end web and mobile automation frameworks built with Python, Playwright, Selenium, and Appium.",
    skills: [
      { name: "Selenium WebDriver", proficiency: "Experienced" },
      { name: "Playwright", proficiency: "Experienced" },
      { name: "Appium (Android & iOS)", proficiency: "Hands-on" },
      { name: "Pytest Framework", proficiency: "Experienced" },
      { name: "Hybrid Automation Frameworks", proficiency: "Hands-on" },
      { name: "Page Object Model (POM)", proficiency: "Experienced" },
      { name: "Functional & Non-Functional Testing", proficiency: "Experienced" },
      { name: "Regression, Smoke & Sanity Testing", proficiency: "Experienced" },
      { name: "Cross-Browser & UI Testing", proficiency: "Experienced" },
      { name: "Manual Exploratory Testing", proficiency: "Experienced" }
    ]
  },
  {
    id: "languages-backend",
    title: "Programming & Backend Frameworks",
    iconName: "Terminal",
    description: "Strong coding capabilities in Python and JavaScript with hands-on REST API development experience.",
    skills: [
      { name: "Python", proficiency: "Experienced" },
      { name: "JavaScript", proficiency: "Hands-on" },
      { name: "HTML5 & CSS3", proficiency: "Experienced" },
      { name: "FastAPI", proficiency: "Hands-on" },
      { name: "Django", proficiency: "Hands-on" },
      { name: "Flask", proficiency: "Working Knowledge" },
      { name: "Clean Code & Refactoring", proficiency: "Experienced" }
    ]
  },
  {
    id: "api-testing",
    title: "API & Backend Validation",
    iconName: "Network",
    description: "Deep validation of RESTful microservices, Swagger docs, auth tokens, status codes, and schema contracts.",
    skills: [
      { name: "Postman & Newman", proficiency: "Experienced" },
      { name: "Hoppscotch", proficiency: "Hands-on" },
      { name: "Swagger / OpenAPI Validation", proficiency: "Experienced" },
      { name: "REST API Validation (GET/POST/PUT/PATCH/DELETE)", proficiency: "Experienced" },
      { name: "JWT & Token Authentication Testing", proficiency: "Experienced" },
      { name: "Response Schema & Status Code Testing", proficiency: "Experienced" },
      { name: "Negative & Boundary Injection", proficiency: "Experienced" }
    ]
  },
  {
    id: "performance-security",
    title: "Performance & Security Testing",
    iconName: "Gauge",
    description: "Simulating concurrent user load with Locust and auditing vulnerabilities with OWASP ZAP.",
    skills: [
      { name: "Locust (Python Load Testing)", proficiency: "Hands-on" },
      { name: "Concurrent User Simulation", proficiency: "Hands-on" },
      { name: "Throughput (RPS) & Latency Analysis", proficiency: "Hands-on" },
      { name: "P95 & P99 Response Benchmarking", proficiency: "Hands-on" },
      { name: "OWASP ZAP", proficiency: "Hands-on" },
      { name: "Authentication & Authorization Security", proficiency: "Experienced" },
      { name: "CORS & Sensitive Data Leakage Checks", proficiency: "Hands-on" }
    ]
  },
  {
    id: "database",
    title: "Database Testing & Data Integrity",
    iconName: "Database",
    description: "Validating backend records, complex queries, data migrations, and API-to-DB sync across SQL and NoSQL.",
    skills: [
      { name: "SQL Querying & Analysis", proficiency: "Experienced" },
      { name: "MongoDB", proficiency: "Hands-on" },
      { name: "DBeaver Client", proficiency: "Experienced" },
      { name: "Backend CRUD State Verification", proficiency: "Experienced" },
      { name: "API-to-Database Sync Validation", proficiency: "Experienced" }
    ]
  },
  {
    id: "tools-methodologies",
    title: "Tools, Version Control & Methodologies",
    iconName: "Sliders",
    description: "Agile sprint management, bug tracking, and Git version control across engineering teams.",
    skills: [
      { name: "Jira / Bug Tracking & Triage", proficiency: "Experienced" },
      { name: "Git & GitHub", proficiency: "Experienced" },
      { name: "Bitbucket", proficiency: "Hands-on" },
      { name: "MS Excel / Test Case Documentation", proficiency: "Experienced" },
      { name: "SDLC & STLC Best Practices", proficiency: "Experienced" },
      { name: "Agile & Scrum Methodologies", proficiency: "Experienced" }
    ]
  }
];

export const testingToolbox: ToolboxItem[] = [
  {
    id: "selenium",
    name: "Selenium WebDriver",
    category: "Automation",
    icon: "selenium",
    badge: "Core Automation",
    shortDescription: "Industry standard web automation framework for cross-browser regression testing.",
    realWorldUsage: "Developed automated test scripts using Selenium with Python, improving regression testing efficiency and validating cross-browser stability across Chrome, Firefox, and Edge.",
    highlightedSkills: ["Python", "WebDriver", "Page Object Model", "Cross-Browser"]
  },
  {
    id: "playwright",
    name: "Playwright",
    category: "Automation",
    icon: "playwright",
    badge: "Modern E2E",
    shortDescription: "Fast, modern browser automation framework for robust end-to-end web testing.",
    realWorldUsage: "Built end-to-end automated test suites with Playwright + Python, leveraging auto-waiting, storage state auth caching, and resilient test fixtures to eliminate test flakiness.",
    highlightedSkills: ["Python", "Pytest", "Storage State", "Headless Runs"]
  },
  {
    id: "appium",
    name: "Appium",
    category: "Automation",
    icon: "appium",
    badge: "Mobile QA",
    shortDescription: "Cross-platform mobile automation tool for Android and iOS applications.",
    realWorldUsage: "Executed automated and manual mobile test scenarios on real Android and iOS devices, validating native gestures, camera integration, and background persistence.",
    highlightedSkills: ["Android", "iOS", "Mobile Automation", "UI Automator"]
  },
  {
    id: "python",
    name: "Python",
    category: "Languages",
    icon: "python",
    badge: "Core Language",
    shortDescription: "Primary scripting and backend language for QA automation and REST API development.",
    realWorldUsage: "Authored automation frameworks, Pytest test runners, Locust load scripts, and built RESTful backend APIs with FastAPI, Django, and Flask.",
    highlightedSkills: ["Pytest", "FastAPI", "Django", "Locust"]
  },
  {
    id: "postman",
    name: "Postman & Hoppscotch",
    category: "API Testing",
    icon: "postman",
    badge: "API Validation",
    shortDescription: "API testing platform for contract verification and automated test runs.",
    realWorldUsage: "Conducted extensive REST API testing, validating status codes, JSON response schemas, JWT auth tokens, and negative boundary edge cases.",
    highlightedSkills: ["REST APIs", "Swagger", "JWT Auth", "Status Code Validation"]
  },
  {
    id: "fastapi-django",
    name: "FastAPI & Django",
    category: "DevOps & Backend",
    icon: "server",
    badge: "Backend Engineering",
    shortDescription: "Modern Python backend web frameworks for RESTful API services.",
    realWorldUsage: "Built RESTful APIs and backend services using FastAPI and Django, bridging the gap between quality assurance and software engineering.",
    highlightedSkills: ["REST APIs", "Python", "Pydantic", "ORM"]
  },
  {
    id: "locust",
    name: "Locust",
    category: "Performance",
    icon: "locust",
    badge: "Load Testing",
    shortDescription: "Python-based scalable performance and user concurrency testing tool.",
    realWorldUsage: "Simulated concurrent user traffic, evaluated throughput (RPS), measured P95/P99 response latencies, and identified database bottleneck queries.",
    highlightedSkills: ["Load Testing", "Concurrent Users", "Throughput", "P95 Analysis"]
  },
  {
    id: "owasp-zap",
    name: "OWASP ZAP",
    category: "Security",
    icon: "shield",
    badge: "Security Testing",
    shortDescription: "Application security scanner for detecting web vulnerabilities.",
    realWorldUsage: "Conducted security sanity scans to detect CORS misconfigurations, broken access controls, token expiration flaws, and sensitive data leakage.",
    highlightedSkills: ["DAST", "Vulnerability Scans", "Access Control", "CORS"]
  },
  {
    id: "mongodb-dbeaver",
    name: "MongoDB & DBeaver (SQL)",
    category: "Database",
    icon: "database",
    badge: "Database Testing",
    shortDescription: "NoSQL document store and universal SQL database client.",
    realWorldUsage: "Executed database validation queries in SQL via DBeaver and inspected NoSQL document collections in MongoDB to ensure API data persistence matches backend states.",
    highlightedSkills: ["SQL", "MongoDB", "CRUD Verification", "DBeaver"]
  },
  {
    id: "jira-bitbucket",
    name: "Jira & Bitbucket / Git",
    category: "Manual & Management",
    icon: "trello",
    badge: "Agile & DevOps",
    shortDescription: "Issue tracking, agile sprint management, and Git version control.",
    realWorldUsage: "Tracked and managed defects in Jira with reproducible steps, logs, and screenshots; collaborated on automation repositories using Git and Bitbucket.",
    highlightedSkills: ["Bug Tracking", "Agile Methodology", "Git", "Bitbucket"]
  }
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Quality Assurance Engineer",
    company: "Confidential Software Services Company",
    period: "June 2025 – Present",
    type: "Full-time / Core QA",
    location: "Mohali, India",
    summary: "Leading end-to-end quality assurance for web and mobile applications (Android & iOS). Executing manual and automated test suites, API verification, local load simulations, and security testing across sanitized case studies.",
    responsibilities: [
      "Performed end-to-end testing for E-commerce web and mobile applications across Android and iOS platforms.",
      "Executed manual and automated test cases using Selenium, Playwright, and Appium, improving test coverage and efficiency.",
      "Conducted REST API testing using Postman and Swagger to validate backend microservices and response schemas.",
      "Performed performance and security testing using tools like Locust and OWASP ZAP to eliminate bottlenecks before release.",
      "Collaborated with cross-functional development teams to ensure high-quality releases and production stability.",
      "Contributed to multiple confidential client projects; all public examples in this portfolio are fictionalized."
    ],
    technologies: ["Selenium", "Playwright", "Appium", "Python", "Pytest", "Postman", "Locust", "OWASP ZAP", "DBeaver", "MongoDB", "Jira", "Git"],
    achievements: [
      "Built scalable automated regression suites using Playwright and Selenium, significantly reducing regression cycle times.",
      "Uncovered account calculation race conditions and session expiration defects before release.",
      "Instituted standardized API test collections and defect reporting templates across multiple active sprint tracks."
    ]
  },
  {
    id: "exp-2",
    role: "Quality Analyst (Internship)",
    company: "Confidential Software Services Company",
    period: "Feb 2025 – May 2025",
    type: "Internship / QA & Backend",
    location: "Mohali, India",
    summary: "Designed and executed test cases for web applications across multiple testing phases. Developed Python automation scripts and built RESTful backend APIs with FastAPI and Django, bridging QA and development workflows.",
    responsibilities: [
      "Designed and executed comprehensive test cases for web applications across different testing phases (Smoke, Functional, Regression).",
      "Developed automation scripts using Selenium with Python, improving regression testing efficiency.",
      "Assisted in defect tracking, bug lifecycle management, and clear reporting using Jira.",
      "Built RESTful APIs using Python frameworks like FastAPI and Django, gaining hands-on experience in backend development workflows.",
      "Collaborated on hybrid testing frameworks and verified database CRUD state integrity."
    ],
    technologies: ["Python", "Selenium", "FastAPI", "Django", "Postman", "Jira", "SQL", "Git", "HTML5/CSS3"],
    achievements: [
      "Successfully delivered both automated test scripts and working REST API endpoints in FastAPI/Django.",
      "Achieved a 100% bug reproduction clarity rate with detailed steps and network logs in Jira."
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Chandigarh Group of Colleges, Jhanjeri",
    year: "2023",
    field: "Computer Science & Application Engineering",
    gradeOrHighlight: "Advanced Computer Applications, Software Engineering & Systems"
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Rourkela Institute of Management Services",
    year: "2021",
    field: "Computer Applications & Programming Fundamentals",
    gradeOrHighlight: "Programming Foundations, Database Management & Web Technologies"
  }
];

export const certificationsList: CertificationItem[] = [
  {
    id: "istqb",
    name: "ISTQB Certified Tester (Foundation Level)",
    issuer: "International Software Testing Qualifications Board",
    status: "In Progress",
    iconName: "Award",
    description: "Standardized international qualification covering software testing principles, test design techniques, and test management methodologies."
  }
];

export const featuredProjects: ProjectCaseStudy[] = [
  {
    id: "demo-commerce-platform",
    title: "Demo Commerce Platform",
    subtitle: "Fictional Web & Mobile Storefront",
    type: "Synthetic Case Study / Web & Mobile Application",
    featured: true,
    tagline: "Sanitized commerce case study featuring a catalog, checkout, account summaries, notifications, and multi-platform test coverage.",
    badgeColor: "emerald",
    iconName: "ShoppingBag",
    summary: "This fictional storefront demonstrates QA coverage for catalog browsing, checkout, account summaries, notifications, and delivery status across web and mobile apps.",
    role: "QA Engineer (Manual, Selenium, Playwright, Appium & API)",
    testingStrategy: [
      "Multi-layered testing strategy covering checkout funnels, demo account balances, and client state synchronization.",
      "Automated regression suite for web checkout and listing creation using Selenium and Playwright with Python.",
      "Mobile functional testing on Android and iOS devices using Appium and manual exploratory sessions.",
      "Security audit for session expiration, replay resistance, and account calculation integrity."
    ],
    responsibilities: [
      "Functional, regression, smoke, and exploratory testing across responsive web and mobile apps.",
      "Payment gateway integration testing (successful charges, failed payments, webhooks, refund flows).",
      "Synthetic account balance integrity testing for credits, debits, pending amounts, and adjustments.",
      "Notification delivery testing for updates, unread counts, and connection recovery.",
      "Security vulnerability testing with OWASP ZAP to inspect token and authorization boundaries."
    ],
    functionalTesting: [
      "Listing creation with multiple image uploads, category tagging, and rental duration constraints.",
      "Cart state persistence across session logout and multi-device logins.",
      "Delivery tracking lifecycle: Order Placed → Confirmed → Shipped → Delivered → Inspected.",
      "User ratings and dispute escalation workflows."
    ],
    automationApproach: [
      "Playwright + Python and Selenium framework with Page Object Model architecture.",
      "Storage State caching to bypass repetitive login steps during test runs.",
      "Automated test suites for listing creation, search filters, and checkout workflows."
    ],
    apiTesting: [
      "Postman collection with 40+ endpoints covering Auth, Listings, Payments, Orders, and Chat.",
      "Pre-request scripts for generating dynamic test payloads and timestamp signatures.",
      "Validation of HTTP 200/201 responses and stringent 400/401/403/422 error contracts."
    ],
    securityTesting: [
      "Validated that users cannot tamper with item prices via payload modification in checkout APIs.",
      "Verified authorization checks (IDOR) preventing users from reading or deleting other users' private chat messages.",
      "Tested access token expiration and refresh token renewal under concurrent requests."
    ],
    tools: ["Selenium", "Playwright", "Appium", "Python", "Postman", "Jira", "OWASP ZAP", "MongoDB"],
    challenges: [
      "Ensuring synthetic account totals stayed synchronized between the UI, mock callbacks, and local fixtures.",
      "Testing notification state recovery after network drops and app backgrounding on mobile devices."
    ],
    bugsDiscovered: [
      {
        title: "Account Summary Display Desync",
        description: "Fictional case: an adjustment updated the mock data store but did not emit a client notification, leaving the displayed account total stale until refresh.",
        impact: "Demonstrates validation of eventual consistency and user-facing recovery states."
      },
      {
        title: "Session Expiration in Multi-Tab Checkout",
        description: "Found that when a session expired in one tab, completing checkout in a second tab caused an unhandled 500 error instead of redirecting gracefully to re-authentication.",
        impact: "Improved checkout error handling and prevented abandoned carts."
      }
    ],
    improvements: [
      "Implemented comprehensive API contract test suites in Postman that catch payload discrepancies early.",
      "Created an automated smoke test suite executed before every staging deployment."
    ]
  },
  {
    id: "demo-workflow-platform",
    title: "Demo Workflow Platform",
    subtitle: "Fictional Order & Approval Management",
    type: "Synthetic Case Study / Workflow Application",
    featured: true,
    tagline: "Sanitized workflow case study covering order requests, configurable approvals, service records, and document checks.",
    badgeColor: "blue",
    iconName: "FileCheck",
    summary: "This fictional workflow application demonstrates testing of order requests, configurable approvals, service-provider records, document review, and spending rules.",
    role: "QA Engineer (Workflow, API, Database & Role-Based Access Control)",
    testingStrategy: [
      "Comprehensive matrix testing for multi-level approval hierarchies and fictional role permissions.",
      "Database integrity validation ensuring synthetic account updates match approval audit logs.",
      "UI design validation for complex enterprise tables, data filters, and modal approval workflows."
    ],
    responsibilities: [
      "End-to-end testing of generic order-request workflows from draft to final sign-off.",
      "Role-Based Access Control (RBAC) testing across organizational permission levels.",
      "Backend database validation using SQL queries in DBeaver to verify foreign key integrity and audit logs.",
      "API request validation for demo order generation, document matching, and service-record updates.",
      "Defect reporting and resolution verification in Jira."
    ],
    functionalTesting: [
      "Multi-tier approval workflows with conditional routing based on budget thresholds ($5k vs $50k+).",
      "Service-record setup verification with fictional document attachments.",
      "Contract expiration notification triggers and automated renewal workflows.",
      "Invoice two-way and three-way matching against purchase orders."
    ],
    automationApproach: [
      "Automated sanity suites for role permissions and order-request status transitions using Python.",
      "Data-driven testing with parameterized test datasets for multiple user tiers."
    ],
    apiTesting: [
      "Extensive API validation against synthetic service records, agreements, and line items.",
      "Tested boundary values on financial amounts and currency conversions.",
      "Verified error handling for invalid UUIDs and unauthorized department access."
    ],
    tools: ["Jira", "Postman", "DBeaver", "SQL", "Swagger", "Chrome DevTools"],
    challenges: [
      "Testing conditional approval workflows that branch using fictional spending limits and generic risk levels."
    ],
    bugsDiscovered: [
      {
        title: "Bypass in Multi-Level Approval State",
        description: "Fictional case: a low-privilege submitter could call a demo approval action directly by changing a synthetic identifier.",
        impact: "Demonstrates strict server-side authorization checks without exposing an internal workflow."
      },
      {
        title: "Invoice Line Item Rounding Mismatch",
        description: "Found floating-point calculation discrepancies between tax calculations in the UI and the backend SQL financial storage.",
        impact: "Eliminated accounting discrepancies in generated PDF invoice summaries."
      }
    ],
    improvements: [
      "Created an RBAC test matrix covering 50+ permission combinations for regression cycles.",
      "Established SQL verification scripts to quickly audit database tables after bulk actions."
    ]
  },
  {
    id: "demo-scheduling-platform",
    title: "Demo Scheduling Platform",
    subtitle: "Fictional Records & Appointment Workflow",
    type: "Synthetic Case Study / Scheduling Application",
    featured: true,
    tagline: "Sanitized scheduling case study covering generic records, appointments, form submissions, and aggregate reporting.",
    badgeColor: "purple",
    iconName: "Users",
    summary: "This fictional scheduling application demonstrates record lifecycle testing, appointment coordination, evaluation forms, and aggregate analytics.",
    role: "Automation & Performance QA Engineer",
    testingStrategy: [
      "Built end-to-end regression automation suite with Playwright and Selenium + Python + Pytest.",
      "Conducted local load simulations to evaluate demo record imports and concurrent form submissions.",
      "Comprehensive functional and API testing across generic record and appointment workflows."
    ],
    responsibilities: [
      "Authored and executed automation scripts for generic record transitions.",
      "Created local performance scenarios simulating concurrent demo sign-ins and searches.",
      "Performed API contract testing for synthetic data ingestion, status changes, and calendar sync.",
      "Verified synthetic history logs, form feedback, and score aggregation.",
      "Reported and tracked defects in Jira with complete reproduction steps and performance metrics."
    ],
    functionalTesting: [
      "Generic record stages: Created → Reviewed → Scheduled → Evaluated → Closed.",
      "Bulk synthetic document upload and parsing validation.",
      "Appointment calendar integration with timezone conversion validation.",
      "Custom evaluation rubric score calculation and feedback submission."
    ],
    automationApproach: [
      "Playwright + Python and Selenium test framework utilizing Page Object Model (POM).",
      "Dynamic test fixtures in Pytest for creating clean synthetic records per test run.",
      "Headless automated test execution with automated screenshot and trace capture on failure."
    ],
    apiTesting: [
      "Tested fictional REST endpoints for record filtering, pagination, and bulk status updates.",
      "Validated auth tokens and rate limiting on public application submission endpoints."
    ],
    performanceTesting: [
      "Simulated concurrent demo users submitting evaluation forms using local load fixtures.",
      "Measured illustrative response times under load for generic search queries.",
      "Generated Locust test reports analyzing RPS, average latency, and P95 response times."
    ],
    tools: ["Playwright", "Selenium", "Python", "Pytest", "Locust", "Postman", "Jira", "SQL", "DBeaver"],
    challenges: [
      "Simulating concurrent user loads on fictional search endpoints with generic filters.",
      "Managing test data state isolation during parallel automated test runs."
    ],
    bugsDiscovered: [
      {
        title: "Demo Search Query Performance Degradation",
        description: "Fictional case: a synthetic search dataset exposed an unindexed field as concurrency increased.",
        impact: "Demonstrates query analysis and index validation using illustrative metrics."
      },
      {
        title: "Appointment Timezone Offset Bug",
        description: "Fictional case: demo appointments created across two sample time zones shifted by one calendar day.",
        impact: "Demonstrates timezone boundary and calendar payload testing."
      }
    ],
    improvements: [
      "Integrated automated smoke tests into daily build checks.",
      "Authored performance test baselines for all core search and submission endpoints."
    ]
  },
  {
    id: "demo-media-platform",
    title: "Demo Media Platform",
    subtitle: "Fictional Media Processing App",
    type: "Synthetic Case Study / Media Application",
    featured: true,
    tagline: "Sanitized mobile case study combining file capture, upload simulation, generic media analysis, and demo reports.",
    badgeColor: "amber",
    iconName: "Video",
    summary: "This fictional media application demonstrates mobile file capture, resilient uploads, asynchronous analysis, and synthetic report generation.",
    role: "QA Engineer (Mobile, Video Processing & Functional Testing)",
    testingStrategy: [
      "Mobile device testing across different camera aspect ratios, resolutions, and OS versions (Android & iOS).",
      "Media pipeline validation from client capture to mock ingestion, processing, analysis, and report generation.",
      "UI/UX validation of playback controls, frame scrubbing, and generic analysis overlays."
    ],
    responsibilities: [
      "Tested camera recording workflows on iOS and Android devices under various lighting and orientation conditions.",
      "Validated video upload retry mechanisms, background upload persistence, and failure recovery.",
      "Conducted functional and regression testing on fictional profile settings, preferences, and activity logs.",
      "Verified report generation accuracy, comparing raw video metadata with displayed metrics.",
      "Performed UI/UX testing for video scrubber widgets and metric graphs."
    ],
    functionalTesting: [
      "Camera permission handling, resolution switching, and front/rear camera toggle.",
      "Video recording pause, resume, cancel, and auto-save workflows.",
      "Demo activity synchronization between a mobile device and mock storage.",
      "Generated synthetic progress reports and metric charts."
    ],
    automationApproach: [
      "Exploratory mobile testing coupled with automated API health checks for video upload and status polling endpoints."
    ],
    apiTesting: [
      "Tested multi-part video upload endpoints and presigned URL retrieval.",
      "Validated status polling endpoints for asynchronous video processing (Queued → Processing → Completed → Failed)."
    ],
    tools: ["Mobile Testing (Android/iOS)", "Appium", "Postman", "Jira", "MongoDB", "Chrome DevTools"],
    challenges: [
      "Testing video upload resilience on mobile devices experiencing intermittent 4G/5G signal drops.",
      "Validating frame-accurate analysis overlay synchronization during media playback."
    ],
    bugsDiscovered: [
      {
        title: "Mobile Download & Offline Cache Persistence Failure",
        description: "Fictional case: downloaded demo media was stored in temporary cache without persistence flags and was removed under memory pressure.",
        impact: "Resolved offline playback failures for users with limited connectivity."
      },
      {
        title: "Video Processing Status Polling Race Condition",
        description: "Found that rapid user navigation away from the analysis screen during video transcoding created unhandled Promise rejections and crashed the mobile app upon return.",
        impact: "Implemented graceful state cleanup and background polling listeners."
      }
    ],
    improvements: [
      "Created a standardized mobile camera & video test checklist used for all release candidate builds."
    ]
  }
];

export const bugHuntingCards: BugCard[] = [
  {
    id: "bug-1",
    title: "Demo Account Calculation Discrepancy",
    category: "Financial / Calculation",
    severity: "Critical",
    problem: "Fictional case: a displayed account total differed from a synthetic backend calculation after several rapid demo adjustments.",
    investigation: "Simulated concurrent browser actions and compared deterministic mock payloads with test database records.",
    finding: "The scenario modeled a race condition where one calculated update completed after a stale read.",
    qaImpact: "Demonstrates serialized updates and idempotency checks without using production-derived details.",
    toolsUsed: ["Postman", "DBeaver", "SQL", "Chrome DevTools"]
  },
  {
    id: "bug-2",
    title: "Access Token Expiration & Refresh Flow Race Condition",
    category: "Authentication & Session",
    severity: "High",
    problem: "When an access token expired while multiple concurrent AJAX requests were in flight, the application triggered multiple redundant refresh token calls, causing token invalidation and abrupt user logout.",
    investigation: "Throttled network connection in Chrome DevTools and triggered simultaneous dashboard API calls with an expired JWT access token.",
    finding: "The HTTP client interceptor lacked a request queue locking mechanism, allowing 4 separate refresh requests with the same refresh token, triggering reuse-detection security triggers.",
    qaImpact: "Implemented a singleton token refresh promise queue in the HTTP client, eliminating unexpected logouts and improving session stability.",
    toolsUsed: ["Playwright", "Selenium", "Postman", "OWASP ZAP", "DevTools Network"]
  },
  {
    id: "bug-3",
    title: "Real-time WebSocket Chat State Desynchronization",
    category: "Real-time & WebSockets",
    severity: "High",
    problem: "Fictional case: demo notifications sent immediately after a temporary reconnection appeared twice in one client and were absent in another.",
    investigation: "Used browser network throttling and simulated WebSocket connection drops while sending messages with unique client-side message IDs.",
    finding: "The WebSocket client lacked client-side deduplication and message ACK confirmation, sending duplicate frames without waiting for server sequence receipts.",
    qaImpact: "Demonstrates acknowledgement handling and client-side event deduplication.",
    toolsUsed: ["Chrome DevTools", "Postman WebSocket", "Appium"]
  },
  {
    id: "bug-4",
    title: "Mobile Offline Media Cache Persistence Failure",
    category: "Mobile Storage & State",
    severity: "Medium",
    problem: "Fictional case: downloaded demo media was lost when the mobile app closed or the operating system reclaimed temporary storage.",
    investigation: "Inspected device local storage directories on Android using adb and file explorers after triggering system memory pressure.",
    finding: "Downloaded media files were saved into the OS ephemeral `/cache` directory rather than the application's persistent `/files` document storage directory.",
    qaImpact: "Demonstrates offline persistence validation for synthetic media files.",
    toolsUsed: ["Android File Explorer", "MobSF", "Mobile Device Testing"]
  },
  {
    id: "bug-5",
    title: "Frontend Demo Contract vs Mock Response Mismatch",
    category: "UI / Contract Validation",
    severity: "Medium",
    problem: "Fictional status badges rendered incorrect colors and truncated long synthetic reference labels.",
    investigation: "Compared UI tokens, a fictional OpenAPI schema, and CSS constraints against generated boundary datasets.",
    finding: "The demo component expected `referenceLabel` while the mock fixture emitted `reference_label`, causing an undefined fallback.",
    qaImpact: "Demonstrates strict OpenAPI and TypeScript contract validation using synthetic fields.",
    toolsUsed: ["Swagger", "Postman", "Chrome DevTools", "DBeaver"]
  }
];

export const qaProcessSteps: QaProcessStep[] = [
  {
    step: 1,
    title: "Requirement Analysis",
    subtitle: "Understanding Business & Technical Specs",
    iconName: "FileText",
    description: "Deeply analyze user stories, acceptance criteria, wireframes, and architectural diagrams to understand functional logic and identify ambiguities early.",
    deliverables: ["Requirement Clarification Log", "Test Scope Document", "Risk Assessment Matrix"],
    keyActions: ["Review PRD & Figma designs", "Clarify ambiguous edge cases with PMs/Devs", "Define testing boundaries"]
  },
  {
    step: 2,
    title: "Test Planning",
    subtitle: "Strategy & Environment Definition",
    iconName: "Compass",
    description: "Formulate comprehensive test strategies outlining testing types, environment prerequisites, resource allocations, schedule, and entry/exit criteria.",
    deliverables: ["Master Test Plan", "Test Schedule", "Environment Setup Matrix"],
    keyActions: ["Define test tiers (Smoke, Functional, Regression)", "Allocate toolsets", "Determine test data requirements"]
  },
  {
    step: 3,
    title: "Test Case Design",
    subtitle: "Scenario Authoring & Edge Cases",
    iconName: "ListChecks",
    description: "Author detailed, repeatable test cases covering positive paths, boundary conditions, negative inputs, role permissions, and cross-browser matrices.",
    deliverables: ["Test Case Repository in Jira/MS Excel", "Traceability Matrix", "Edge Case Checklist"],
    keyActions: ["Apply Equivalence Partitioning & BVA", "Write clear preconditions & steps", "Map test cases to requirements"]
  },
  {
    step: 4,
    title: "Test Data Preparation",
    subtitle: "Realistic Mock & Seed Data",
    iconName: "Database",
    description: "Generate structured, realistic test datasets, user accounts with various permission levels, mock payment credentials, and seed records in SQL/MongoDB.",
    deliverables: ["Synthetic Datasets", "Multi-role Test Accounts", "SQL/MongoDB Seed Scripts"],
    keyActions: ["Create varied user personas", "Configure sandbox payment credentials", "Ensure zero production PII exposure"]
  },
  {
    step: 5,
    title: "Functional & UI Testing",
    subtitle: "Exploratory & Verification Execution",
    iconName: "Laptop",
    description: "Execute manual test cases, verify UI rendering, test cross-browser stability, and conduct in-depth exploratory sessions on Web and Mobile (Android & iOS).",
    deliverables: ["Execution Progress Logs", "UI Validation Audit", "Defect Reports in Jira"],
    keyActions: ["Execute core user journeys", "Audit cross-browser rendering", "Perform exploratory boundary checks"]
  },
  {
    step: 6,
    title: "API & Backend Validation",
    subtitle: "Contract, Status & Payload Testing",
    iconName: "Network",
    description: "Validate REST API endpoints in Postman/Hoppscotch, inspect Swagger schemas, verify HTTP status codes, test token authentication, and validate database persistence.",
    deliverables: ["Postman Test Collections", "API Contract Validation Report", "CRUD Verification Queries"],
    keyActions: ["Run automated Postman suites", "Verify JWT & RBAC rules", "Inspect SQL/MongoDB via DBeaver"]
  },
  {
    step: 7,
    title: "Automation Engineering",
    subtitle: "Selenium, Playwright & Appium",
    iconName: "Code2",
    description: "Develop scalable, maintainable automated test suites using Selenium, Playwright, Python, and Pytest with Page Object Models for repeatable regression suites.",
    deliverables: ["Automation Repositories in Git/Bitbucket", "POM Class Modules", "CI Test Scripts"],
    keyActions: ["Automate critical happy paths", "Implement resilient locators", "Set up storage state auth caching"]
  },
  {
    step: 8,
    title: "Performance & Load Testing",
    subtitle: "Locust Concurrency & Stress Tests",
    iconName: "Gauge",
    description: "Simulate concurrent user traffic using Locust scripts to identify server throughput thresholds, P95/P99 latency degradation, and database bottlenecks.",
    deliverables: ["Locust Test Scripts", "Throughput & Latency Charts", "Bottleneck Analysis Report"],
    keyActions: ["Simulate 50-500 concurrent users", "Monitor RPS and error rates", "Identify slow endpoints"]
  },
  {
    step: 9,
    title: "Security Verification",
    subtitle: "OWASP Sanity & Access Control",
    iconName: "ShieldAlert",
    description: "Perform baseline security scans with OWASP ZAP to audit authentication, CORS, token expiration, and PII protection.",
    deliverables: ["Vulnerability Sanity Report", "Access Control Audit", "Security Remediation Tickets"],
    keyActions: ["Test for IDOR and privilege escalation", "Check CORS and cookie flags", "Verify token revocation"]
  },
  {
    step: 10,
    title: "Defect Reporting & Triage",
    subtitle: "Clear, Actionable Bug Authoring in Jira",
    iconName: "Bug",
    description: "Author crystal-clear bug reports in Jira with exact reproduction steps, expected vs actual behavior, network logs, screenshots, and severity rankings.",
    deliverables: ["Jira Bug Tickets with Logs/Visuals", "Sprint Bug Triage Notes", "Severity-Priority Matrix"],
    keyActions: ["Isolate minimum reproducible steps", "Attach network/console logs", "Collaborate with devs on fixes"]
  },
  {
    step: 11,
    title: "Regression & Verification",
    subtitle: "Fix Validation & Impact Checks",
    iconName: "RefreshCw",
    description: "Verify resolved bugs, execute targeted and full regression suites, and ensure no side-effect defects were introduced by recent code commits.",
    deliverables: ["Regression Pass Report", "Defect Verification Status", "Release Readiness Matrix"],
    keyActions: ["Re-test fixed defects", "Run automated regression suites", "Perform side-effect smoke checks"]
  },
  {
    step: 12,
    title: "Release Sign-off",
    subtitle: "Production Deployment Validation",
    iconName: "CheckCircle",
    description: "Provide formal QA release sign-off, support production deployment with post-deployment sanity checks, and monitor live telemetry.",
    deliverables: ["QA Release Sign-off Document", "Production Sanity Checklist", "Post-Release Notes"],
    keyActions: ["Execute prod smoke tests", "Verify live critical user journeys", "Confirm telemetry stability"]
  }
];

export const mockApiEndpoints: ApiEndpointMock[] = [
  {
    id: "demo-auth-login",
    name: "Demo User Sign-in",
    method: "POST",
    path: "/api/demo/auth/login",
    description: "Simulates a sign-in request using deterministic synthetic credentials.",
    requestHeaders: {
      "Content-Type": "application/json",
      "X-Demo-Client": "portfolio-api-lab"
    },
    requestBody: {
      email: "demo.user@example.invalid",
      password: "demo-password"
    },
    responses: [
      {
        status: 200,
        statusText: "OK",
        description: "Synthetic credentials accepted by the local simulation.",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store",
          "X-Demo-Latency": "120ms"
        },
        body: {
          status: "success",
          simulation: true,
          data: {
            user: {
              id: "demo_user_001",
              name: "Demo User",
              email: "demo.user@example.invalid",
              role: "DEMO_TESTER",
              verified: true
            },
            token: "demo-token",
            expiresIn: 900
          }
        },
        assertions: [
          { check: "Status code is 200 OK", passed: true },
          { check: "Response contains a demo token placeholder", passed: true },
          { check: "User role matches DEMO_TESTER", passed: true },
          { check: "Response is marked as simulated", passed: true }
        ]
      },
      {
        status: 401,
        statusText: "Unauthorized",
        description: "Simulated rejection for an invalid demo request.",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "X-Demo-Latency": "80ms"
        },
        body: {
          status: "error",
          simulation: true,
          errorCode: "DEMO_AUTH_REJECTED",
          message: "The demo credentials were rejected.",
          timestamp: "2026-01-15T10:30:00Z"
        },
        assertions: [
          { check: "Status code is 401 Unauthorized", passed: true },
          { check: "Error code matches the demo contract", passed: true },
          { check: "No credentials are returned", passed: true }
        ]
      }
    ]
  },
  {
    id: "demo-account-balance",
    name: "Account Balance",
    method: "GET",
    path: "/api/demo/account/balance",
    description: "Returns a fixed synthetic account summary from local demo data.",
    requestHeaders: {
      "Authorization": "Bearer demo-token",
      "Accept": "application/json"
    },
    responses: [
      {
        status: 200,
        statusText: "OK",
        description: "Synthetic account data returned by the local simulation.",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
          "X-Demo-Latency": "95ms"
        },
        body: {
          status: "success",
          simulation: true,
          data: {
            accountId: "demo_account_001",
            currency: "USD",
            availableBalance: 100.00,
            pendingAmount: 25.00,
            totalBalance: 125.00,
            lastTransactionAt: "2026-01-15T10:30:00Z"
          }
        },
        assertions: [
          { check: "Status code is 200 OK", passed: true },
          { check: "availableBalance + pendingAmount equals totalBalance", passed: true },
          { check: "Currency matches ISO 4217 format", passed: true }
        ]
      },
      {
        status: 403,
        statusText: "Forbidden",
        description: "Simulated access denial for the demo account.",
        headers: {
          "Content-Type": "application/json",
          "X-Demo-Latency": "75ms"
        },
        body: {
          status: "error",
          simulation: true,
          errorCode: "DEMO_ACCESS_DENIED",
          message: "This demo scenario does not allow account access."
        },
        assertions: [
          { check: "Status code is 403 Forbidden", passed: true },
          { check: "Access denied with sanitized error payload", passed: true }
        ]
      }
    ]
  },
  {
    id: "demo-order-create",
    name: "Create Order Request",
    method: "POST",
    path: "/api/demo/orders",
    description: "Simulates creating a generic order from a fixed demo payload.",
    requestHeaders: {
      "Authorization": "Bearer demo-token",
      "Content-Type": "application/json"
    },
    requestBody: {
      productId: "demo_product_001",
      quantity: 2,
      totalAmount: 50.00,
      currency: "USD",
      items: [
        { name: "Demo Item", quantity: 2, unitPrice: 25.00 }
      ]
    },
    responses: [
      {
        status: 201,
        statusText: "Created",
        description: "Synthetic order created in browser memory.",
        headers: {
          "Content-Type": "application/json",
          "Location": "/api/demo/orders/demo_order_001",
          "X-Demo-Latency": "140ms"
        },
        body: {
          status: "success",
          simulation: true,
          data: {
            orderId: "demo_order_001",
            status: "DEMO_CREATED",
            totalAmount: 50.00,
            createdAt: "2026-01-15T10:30:00Z"
          }
        },
        assertions: [
          { check: "Status code is 201 Created", passed: true },
          { check: "Initial status is DEMO_CREATED", passed: true },
          { check: "Location header contains a demo resource path", passed: true }
        ]
      },
      {
        status: 400,
        statusText: "Bad Request",
        description: "Simulated validation error for an incomplete demo order.",
        headers: {
          "Content-Type": "application/json",
          "X-Demo-Latency": "70ms"
        },
        body: {
          status: "error",
          simulation: true,
          errorCode: "DEMO_VALIDATION_FAILED",
          details: [
            { field: "productId", issue: "A demo product identifier is required" },
            { field: "totalAmount", issue: "Total amount must be greater than 0" }
          ]
        },
        assertions: [
          { check: "Status code is 400 Bad Request", passed: true },
          { check: "Details array highlights exact offending fields", passed: true }
        ]
      }
    ]
  },
  {
    id: "demo-media-analysis",
    name: "Media Analysis",
    method: "GET",
    path: "/api/demo/media/analysis/demo_001",
    description: "Returns a deterministic analysis summary for a fictional demo asset.",
    requestHeaders: {
      "Authorization": "Bearer demo-token",
      "Accept": "application/json"
    },
    responses: [
      {
        status: 200,
        statusText: "OK",
        description: "Synthetic media analysis completed by the local simulation.",
        headers: {
          "Content-Type": "application/json",
          "X-Demo-Engine": "browser-mock",
          "X-Demo-Latency": "110ms"
        },
        body: {
          status: "success",
          simulation: true,
          data: {
            mediaId: "demo_media_001",
            state: "DEMO_ANALYSIS_COMPLETE",
            durationSeconds: 10,
            metrics: {
              qualityScore: 90,
              sampleCount: 10
            }
          }
        },
        assertions: [
          { check: "Status code is 200 OK", passed: true },
          { check: "Analysis state equals DEMO_ANALYSIS_COMPLETE", passed: true },
          { check: "qualityScore is within the 0-100 demo range", passed: true }
        ]
      },
      {
        status: 500,
        statusText: "Internal Server Error",
        description: "Simulated local processing failure.",
        headers: {
          "Content-Type": "application/json",
          "X-Demo-Latency": "160ms"
        },
        body: {
          status: "error",
          simulation: true,
          errorCode: "DEMO_MEDIA_PROCESSING_FAILED",
          message: "The synthetic media sample could not be processed."
        },
        assertions: [
          { check: "Status code is 500 Internal Server Error", passed: true },
          { check: "No implementation details are exposed", passed: true }
        ]
      }
    ]
  }
];

export const automationSnippets: AutomationSnippet[] = [
  {
    id: "e2e-playwright",
    title: "Playwright E2E Test (Python + Pytest)",
    filename: "test_checkout_flow.py",
    language: "python",
    description: "End-to-end checkout automation with authenticated storage state and explicit assertions.",
    code: `import pytest
from playwright.sync_api import Page, expect
from pages.checkout_page import CheckoutPage
from pages.marketplace_page import MarketplacePage

def test_user_can_complete_rental_checkout(page: Page):
    """
    Demo Scenario: Synthetic user selects an item,
    submits an order, and verifies the local account summary.
    """
    marketplace = MarketplacePage(page)
    checkout = CheckoutPage(page)

    # 1. Navigate to marketplace with authenticated session
    marketplace.navigate()
    expect(page).to_have_title("Demo Store | Sample Catalog")

    # 2. Search & Select Rental Item
    marketplace.search_item("Vintage Leather Jacket")
    marketplace.select_rental_duration("3 Days")
    marketplace.click_add_to_cart()

    # 3. Proceed to Checkout & Verify Order Summary
    checkout.navigate_to_cart()
    expect(checkout.order_total).to_have_text("$45.00")
    expect(checkout.deposit_amount).to_have_text("$15.00")

    # 4. Confirm Demo Payment & Verify Success Modal
    checkout.select_payment_method("DEMO_ACCOUNT")
    checkout.click_confirm_order()

    # 5. Assert confirmation & order reference
    expect(checkout.success_banner).to_be_visible()
    expect(checkout.order_status_badge).to_have_text("CONFIRMED")
`,
    testSteps: [
      "Load authenticated session via Playwright storage_state.json",
      "Navigate to marketplace & search for target inventory",
      "Select rental duration & validate UI price calculations",
      "Navigate to checkout cart & verify line item breakdown",
      "Submit order via the demo account & assert confirmation badge"
    ]
  },
  {
    id: "selenium-automation",
    title: "Selenium WebDriver (Python + POM)",
    filename: "test_selenium_login.py",
    language: "python",
    description: "Selenium WebDriver automation script using Page Object Model and explicit waits.",
    code: `import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestDemoStore(unittest.TestCase):
    def setUp(self):
        options = webdriver.ChromeOptions()
        options.add_argument("--headless=new")
        self.driver = webdriver.Chrome(options=options)
        self.driver.maximize_window()
        self.wait = WebDriverWait(self.driver, 10)

    def test_valid_user_authentication_and_dashboard_redirect(self):
        driver = self.driver
        driver.get("https://demo.example.invalid/sign-in")

        # Locate elements with explicit wait
        email_field = self.wait.until(EC.visibility_of_element_located((By.ID, "user-email")))
        password_field = driver.find_element(By.ID, "user-password")
        login_btn = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")

        email_field.send_keys("demo.user@example.invalid")
        password_field.send_keys("demo-password")
        login_btn.click()

        # Assert navigation and welcome banner
        dashboard_header = self.wait.until(
            EC.presence_of_element_located((By.XPATH, "//h1[contains(text(),'Dashboard')]"))
        )
        self.assertTrue(dashboard_header.is_displayed())

    def tearDown(self):
        self.driver.quit()
`,
    testSteps: [
      "Initialize ChromeOptions in headless mode for fast execution",
      "Apply WebDriverWait with ExpectedConditions (EC) to eliminate flakiness",
      "Execute credentials input & submit button click",
      "Assert presence of dashboard header via XPath and tearDown cleanly"
    ]
  },
  {
    id: "fastapi-backend",
    title: "FastAPI RESTful Backend Service",
    filename: "api_service.py",
    language: "python",
    description: "FastAPI RESTful endpoint with Pydantic validation, JWT security, and structured responses.",
    code: `from fastapi import FastAPI, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr
from typing import Optional

app = FastAPI(title="Local Demo API", version="1.0.0")

class UserRegisterRequest(BaseModel):
    email: EmailStr
    full_name: str
    role: str = "QA_ENGINEER"

class UserResponse(BaseModel):
    user_id: str
    email: str
    status: str

@app.post("/api/demo/users", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def register_user(payload: UserRegisterRequest):
    """
    Creates a new user record with validation and schema enforcement.
    """
    if not payload.email.endswith("@example.invalid"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Domain not authorized for enterprise registration."
        )
    return UserResponse(
        user_id="demo_user_001",
        email=payload.email,
        status="ACTIVE"
    )
`,
    testSteps: [
      "Define type-safe Pydantic request models with automatic schema validation",
      "Implement endpoint with HTTP 201 Created response status",
      "Raise HTTPException with structured error payloads for negative edge cases",
      "Automatic interactive Swagger documentation at /docs"
    ]
  },
  {
    id: "locust-load",
    title: "Locust Load Test Script",
    filename: "locustfile.py",
    language: "python",
    description: "Performance load test simulating concurrent users hitting REST endpoints.",
    code: `from locust import HttpUser, task, between
import random

class DemoUser(HttpUser):
    wait_time = between(1, 3) # Realistic human think time

    def on_start(self):
        """Authenticate user and obtain session token before load tasks."""
        response = self.client.post("/api/demo/auth/login", json={
            "email": "demo.load@example.invalid",
            "password": "demo-password"
        })
        token = response.json().get("data", {}).get("token")
        self.headers = {"Authorization": f"Bearer {token}"}

    @task(3)
    def search_catalog(self):
        """Simulates generic demo searches with sample filters."""
        skills = ["Python", "Selenium", "Playwright", "Postman", "SQL"]
        target_skill = random.choice(skills)
        self.client.get(
            f"/api/demo/catalog/search?tag={target_skill}&limit=20",
            headers=self.headers,
            name="/api/demo/catalog/search"
        )

    @task(1)
    def submit_demo_form(self):
        """Simulates concurrent fictional form submissions."""
        self.client.post(
            "/api/demo/forms/submissions",
            json={
                "recordId": "demo_record_001",
                "sampleScore": random.randint(8, 10),
                "comments": "Synthetic load-test submission."
            },
            headers=self.headers,
            name="/api/demo/forms/submissions"
        )
`,
    testSteps: [
      "Define realistic user think time between 1 and 3 seconds",
      "Authenticate once in on_start hook to obtain JWT Bearer header",
      "Simulate high-frequency demo search traffic with weight @task(3)",
      "Simulate concurrent synthetic form submissions with @task(1)"
    ]
  }
];

export const careerGoals = {
  title: "Where I'm Heading",
  subtitle: "Engineering Aspirations & Continuous Growth",
  summary: "As a Quality Assurance Engineer with dual passion for test automation and Python backend engineering (FastAPI/Django), I am expanding my capabilities across hybrid automation frameworks, distributed performance engineering, and DevSecOps quality gates.",
  pillars: [
    {
      title: "Advanced Test Automation & Frameworks",
      description: "Deepening expertise in multi-platform automation (Selenium, Playwright, Appium) with Python, building custom hybrid frameworks, and running distributed test grids.",
      icon: "Code2"
    },
    {
      title: "Backend Development & QA Bridge",
      description: "Leveraging hands-on experience in FastAPI and Django to understand backend internals, evaluate database queries, and build robust developer testing tools.",
      icon: "Terminal"
    },
    {
      title: "Performance & Reliability Engineering",
      description: "Scaling API stress testing with Locust, benchmarking P95/P99 latency thresholds, and pinpointing database connection pool saturation.",
      icon: "Gauge"
    },
    {
      title: "Security & International Certification",
      description: "Progressing toward full ISTQB certification and integrating automated OWASP ZAP security checks into daily CI/CD development pipelines.",
      icon: "ShieldAlert"
    }
  ]
};
