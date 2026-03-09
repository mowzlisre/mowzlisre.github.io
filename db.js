import gwLogo from "./src/assets/gwu-logo.jpg";
import achaarya from "./src/assets/achaarya-tech.jpg";
import skillsafari from "./src/assets/skillsafari.png";
import gwu from "./src/assets/gwu.png";
import gce from "./src/assets/gce.png";
import neoport from "./src/assets/neoport.png";
import text2sql from "./src/assets/text2sql.png";
import quizzy from "./src/assets/quizzy.png";
import dmi from "./src/assets/dmi.png";
import taxonomy from "./src/assets/taxonomy.png";
import xray from "./src/assets/xray.png";
import next from "./src/assets/next.png";
import timeseries from "./src/assets/timeseries.png";
import tableau from "./src/assets/tableau.png";
import neovsmongo from "./src/assets/neovsmongo.png";
import fooddessert from "./src/assets/fooddessert.png";
import nyctaxi from "./src/assets/nyctaxi.png";
import schwab from "./src/assets/schwab.png";
import futrr from "./src/assets/futrr.png";
import awsLogo from "./src/assets/aws.png";
import databricksLogo from "./src/assets/databricks.jpeg";
import metaLogo from "./src/assets/meta.png";
import medal from "./src/assets/medal.png";

const data = {
  contact: {
    name: "Mowzli Sre Mohan Dass",
    initials: "MS.",
    location: "Atlanta, GA",
    tagline: "Building at the intersection of full-stack engineering, cloud infrastructure, and AI.",
    email: "mowzlisre2410@gmail.com",
    github: "https://github.com/mowzlisre",
    linkedin: "https://www.linkedin.com/in/mowzlisre/",
    instagram: "https://www.instagram.com/mowzlisre",
    resume: "https://mowzlisre.s3.ap-south-1.amazonaws.com/Mowzlisre_Mohandass_Resume.pdf",
    socials: [
      { label: "LinkedIn",  url: "https://www.linkedin.com/in/mowzlisre/" },
      { label: "GitHub",    url: "https://github.com/mowzlisre" },
      { label: "Instagram", url: "https://www.instagram.com/mowzlisre" },
    ],
  },

  hero: {
    bio: "At 21, I founded Achaarya Tech and shipped production systems for 20+ clients serving 100,000+ users. Now a Cloud Engineer at Charles Schwab — building AI pipelines, LLM systems, and full-stack infrastructure at scale.",
    stats: [
      { value: "20+",  label: "Clients" },
      { value: "100K+", label: "Users Served" },
      { value: "4+",   label: "Years Building" },
      { value: "2nd",  label: "Meta Hackathon" },
    ],
  },

  experience: [
    {
      company: "Charles Schwab",
      location: "Atlanta, GA (Remote)",
      logo: schwab,
      roles: [
        {
          role: "Cloud Engineer – AI & Data Pipelines",
          dates: "Jul 2025 – Present",
          type: "Full-time",
          stack: ["Python", "SQL", "AWS Redshift", "S3", "Lambda", "IAM", "CloudWatch", "Apache Airflow", "Terraform", "Docker", "Jenkins"],
          bullets: [
            "Designed backend services and data extraction pipelines integrating S3, RDS, and third-party APIs into AWS Redshift for ML training, analytics, and LLM grounding workflows.",
            "Built governance-as-code integrations for model metadata, lineage, and approval workflows — ensuring end-to-end auditability across AI lifecycle management systems.",
            "Engineered secure cross-service authentication using AWS IAM and Secrets Manager; automated ML pipeline provisioning with Terraform and Jenkins CI/CD.",
            "Developed monitoring integrations using Apache Airflow sensors and CloudWatch to detect data drift, model input freshness, and ingestion anomalies."
          ]
        }
      ]
    },
    {
      company: "The George Washington University",
      location: "Washington, DC, USA",
      logo: gwLogo,
      roles: [
        {
          role: "Student Academic Assistant",
          dates: "Feb 2025 – May 2025",
          type: "Part-time",
          stack: ["PostgreSQL", "SQL", "Relational Database Design"],
          bullets: [
            "Redesigned course material to emphasize relational database design and hands-on SQL labs, improving student assessment outcomes.",
            "Prepared assignments, quizzes, and assessments aligned with graduate-level database course objectives."
          ]
        },
        {
          role: "Graduate Instructional Assistant",
          dates: "Aug 2024 – Dec 2024",
          type: "Part-time",
          stack: ["NLP", "Cloud Computing", "Machine Learning", "Big Data", "PySpark"],
          bullets: [
            "Supported NLP, Cloud Computing, ML, and Big Data courses — held office hours and one-on-one sessions for graduate and undergraduate students.",
            "Collaborated with faculty to align instructional materials with course outcomes across 4 technical subjects."
          ]
        }
      ]
    },
    {
      company: "Achaarya Tech",
      location: "Chennai, India",
      logo: achaarya,
      roles: [
        {
          role: "Lead Developer, Founding Engineer",
          dates: "Jun 2021 – Jul 2023",
          type: "Full-time",
          stack: ["Python", "Django DRF", "Node.js", "React.js", "PostgreSQL", "Redis", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "RazorPay", "Stripe"],
          bullets: [
            "Co-founded and led engineering for a software agency delivering full-stack web applications to 20+ enterprise clients — systems collectively serving 100,000+ users.",
            "Designed RESTful APIs with Django DRF and Node.js backed by PostgreSQL and Redis, improving API response times by 30%.",
            "Built microservices architectures with Docker and Kubernetes (AKS); implemented CI/CD pipelines that accelerated release cycles by 60%.",
            "Integrated RazorPay and Stripe, handling 1,000+ financial transactions with OWASP-compliant security."
          ]
        }
      ]
    },
    {
      company: "Skill Safari",
      location: "Coimbatore, India",
      logo: skillsafari,
      roles: [
        {
          role: "Intern → Full Stack Engineer",
          dates: "Aug 2020 – Jun 2021",
          type: "Full-time",
          stack: ["Python", "Django", "React.js", "Redux", "Oracle", "SQL Server", "REST APIs"],
          bullets: [
            "Built a proprietary LMS with Django and React.js for student onboarding, progress tracking, and certificate generation.",
            "Optimized database schema and queries (Oracle, SQL Server), cutting load times by 40%.",
            "Delivered full-stack features end-to-end in Agile sprints; built responsive UIs with React.js and Redux."
          ]
        }
      ]
    }
  ],

  education: [
    {
      degree: "M.S. Data Science",
      institution: "The George Washington University",
      location: "Washington, DC, USA",
      graduation: "May 2025",
      logo: gwu
    },
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Government College of Engineering",
      location: "Bodinayakanur, TN, India",
      graduation: "Jul 2022",
      logo: gce
    }
  ],

  achievements: [
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      date: "Feb 2026",
      accent: "#F59E0B",
      logo: awsLogo,
    },
    {
      title: "Generative AI Fundamentals",
      issuer: "Databricks",
      date: "Feb 2026",
      accent: "#EC4899",
      logo: databricksLogo,
    },
    {
      title: "SCSP AI Expo+ Hackathon",
      issuer: "2nd Place — Meta Track",
      date: "Jul 2025",
      accent: "#3B82F6",
      logo: metaLogo,
    },
    {
      title: "Global Leaders Award",
      issuer: "$17,000 Scholarship · GWU",
      date: "2023-25",
      accent: "#6C63FF",
      logo: gwu,
    },
    {
      title: "President",
      issuer: "Industry Institution Interactive Cell, GCE Bodi",
      date: "2021–22",
      accent: "#8B5CF6",
      logo: gce,
    },
    {
      title: "Braintech Championship",
      issuer: "Winner",
      date: "2020",
      accent: "#10B981",
      logo: medal,
    },
  ],

  featured: {
    name: "Futrr",
    tagline: "Lock today. Unlock the future.",
    description:
      "A digital time capsule platform where personal memories, letters, and moments are cryptographically sealed and unlocked at a chosen future date. Built with end-to-end encryption — your content is inaccessible until the moment you choose, even to us.",
    status: "In Progress",
    stack: ["Django", "SwiftUI", "Kotlin", "AES-256"],
    accent: "#EAA646",
    github: null,
    demo: "https://futrr.app",
    logo: futrr,
  },

  projects: [
    {
      name: "NeXT Mission",
      type: "Hackathon",
      logo: next,
      accent: "#EC4899",
      description: "2nd place at Meta's AI Expo+ Hackathon. A full-stack agentic AI platform for U.S. Veterans using multi-agent LangGraph architecture with LLaMA 4, parsing DD214 discharge documents for identity extraction, skill profiling, and case routing.",
      stack: ["Django", "Vue.js", "LangGraph", "LLaMA 4", "Groq.ai", "MCP", "gRPC", "Docker"],
      github: "https://github.com/mowzlisre/next-mission",
      demo: "https://drive.google.com/drive/u/1/folders/1sObdboYzRE_3A4ik2gvsBoglvdYVrEnb"
    },
    {
      name: "Neoport",
      type: "Open Source",
      logo: neoport,
      accent: "#F59E0B",
      description: "Cross-platform ETL desktop app built with Electron.js to streamline large-scale CSV imports into Neo4j graph databases, handling 1M+ records with background Python/Pandas processing.",
      stack: ["Python", "React.js", "Electron.js", "Pandas", "Neo4j", "APOC", "Node.js"],
      github: "https://github.com/mowzlisre/neoport",
      demo: null
    },
    {
      name: "AI Study Assistant",
      type: "Capstone",
      logo: quizzy,
      accent: "#3B82F6",
      description: "Generative AI capstone app enabling personalized assessment creation in under 10 minutes. Fine-tuned Mistral-7B on SQuAD; served via FastAPI with Celery, reducing inference latency by 40%.",
      stack: ["Django", "FastAPI", "React.js", "Mistral 7B", "MongoDB", "FAISS", "Celery", "AWS EC2", "Docker"],
      github: "https://github.com/mowzlisre/quizzy-backend",
      demo: null
    },
    {
      name: "Text-2-SQL",
      type: "Academic",
      logo: text2sql,
      accent: "#10B981",
      description: "Natural language to SQL query engine that translates plain English questions into executable SQL, enabling non-technical users to query relational databases directly.",
      stack: ["Python", "FastAPI", "React.js", "PostgreSQL", "LLM"],
      github: "https://github.com/mowzlisre/Final-Project-Group-Text-SQL",
      demo: null
    },
    {
      name: "Django Model Inspector",
      type: "Open Source",
      logo: dmi,
      accent: "#8B5CF6",
      description: "Developer tool that introspects Django ORM models and auto-generates visual schema diagrams, relationship maps, and documentation — reducing onboarding time for large codebases.",
      stack: ["Python", "Django"],
      github: "https://github.com/mowzlisre/django-model-inspector",
      demo: "https://pypi.org/project/django-model-inspector/"
    },
    {
      name: "Taxonomy Classification",
      type: "Academic",
      logo: taxonomy,
      accent: "#EF4444",
      description: "Multi-label text classification pipeline for hierarchical product taxonomy using transformer-based models, achieving high accuracy across nested category trees.",
      stack: ["Python", "BERT", "Scikit-learn", "Pandas", "HuggingFace"],
      demo: "https://github.com/mowzlisre/labelWiseDjango"
    },
    {
      name: "Chest X-Ray Classification",
      type: "Academic",
      logo: xray,
      accent: "#06B6D4",
      description: "Deep learning model to classify chest X-rays into disease categories using CNNs and transfer learning, trained on the NIH ChestX-ray dataset.",
      stack: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
      demo: "https://docs.google.com/presentation/d/1u7jkEu2OppImIDv23ums4ZAlBiJtis--YJZ07a6Wrus/edit?usp=sharing"
    },
    {
      name: "Time Series Forecasting",
      type: "Academic",
      logo: timeseries,
      accent: "#F59E0B",
      description: "Scalable time series forecasting pipeline using PySpark for distributed preprocessing and LSTM models for multi-step ahead predictions on large sensor datasets.",
      stack: ["Python", "PySpark", "TensorFlow", "LSTM", "Pandas"],
      demo: "https://docs.google.com/document/d/e/2PACX-1vRHacpQ8xD6ot4YuELjYQvRVznfEwMXEF4msKb68zOTg5gCx0sYDdai6oW4OvNmlw/pub"
    },
    {
      name: "Tableau Visualization",
      type: "Academic",
      logo: tableau,
      accent: "#10B981",
      description: "Interactive Tableau dashboards analyzing public health and socioeconomic datasets, surfacing trends across demographics with drill-down filters and KPI summaries.",
      stack: ["Tableau", "SQL", "Excel"],
      github: null,
      demo: null
    },
    {
      name: "Neo4j vs MongoDB",
      type: "Academic",
      logo: neovsmongo,
      accent: "#EC4899",
      description: "Comparative performance analysis of graph (Neo4j) vs document (MongoDB) databases across traversal, aggregation, and write-heavy workloads at varying data scales.",
      stack: ["Python", "Neo4j", "MongoDB", "Cypher", "Pandas", "Matplotlib"],
      demo: "https://drive.google.com/file/d/1yaJ8gycPz4Gj-OPpEy2-Qlragol7avSu/view?usp=sharing"
    },
    {
      name: "Food Desert Analysis",
      type: "Academic",
      logo: fooddessert,
      accent: "#8B5CF6",
      description: "Geospatial analysis identifying food desert zones across U.S. counties using census and USDA data, visualized with choropleth maps and accessibility scoring.",
      stack: ["Python", "GeoPandas", "Plotly", "Pandas", "USDA API"],
      demo: "https://docs.google.com/presentation/d/1_jbRKEvlANQMnSnUBo2JKI-z2w5pXFal/edit?usp=sharing&ouid=113574726420254662620&rtpof=true&sd=true"
    },
    {
      name: "NYC Taxi Trip Analysis",
      type: "Academic",
      logo: nyctaxi,
      accent: "#3B82F6",
      description: "Large-scale EDA and predictive modeling on NYC TLC taxi trip data — analyzing fare patterns, trip durations, and demand hotspots across boroughs.",
      stack: ["Python", "PySpark", "Pandas", "Seaborn", "Scikit-learn"],
      github: "https://github.com/shanunDS/NYC-Taxi-Trip-Duration",
      demo: null
    }
  ],

  skills: {
    languages: ["Python", "JavaScript", "SQL", "Go", "Bash", "R", "C++", "Java"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Neo4j", "AWS Redshift", "Oracle", "SQL Server", "FAISS", "AlloyDB"],
    frontend: ["React.js", "Vue.js", "Electron.js", "Redux", "Chakra UI", "Material UI", "Bootstrap"],
    backend: ["Django DRF", "FastAPI", "Node.js", "Express.js", "Flask", "GraphQL", "gRPC", "REST APIs"],
    cloud: ["AWS (S3, Lambda, Redshift, IAM, EC2, CloudWatch)", "GCP (Vertex AI, Cloud Run)", "Azure (AKS)", "Terraform", "Docker", "Kubernetes", "Apache Airflow"],
    ai: ["LangChain", "LangGraph", "RAG Pipelines", "Multi-Agent Orchestration", "MCP Protocol", "FAISS", "pgvector", "Prompt Engineering"],
    ml: ["Scikit-learn", "TensorFlow", "PyTorch", "BERT", "Mistral 7B", "LSTM", "Transformers", "Causal Inference", "PySpark"]
  },

  skillCategories: [
    {
      title: "Frontend",
      emoji: "🎨",
      accent: "#10B981",
      description: "Pixel-perfect UIs that perform",
      skills: ["React.js", "Vue.js", "Electron.js", "Redux", "Chakra UI", "JavaScript", "Figma"],
    },
    {
      title: "Backend & APIs",
      emoji: "⚙️",
      accent: "#EF4444",
      description: "Robust server-side systems at scale",
      skills: ["Django DRF", "FastAPI", "Node.js", "Express.js", "Flask", "GraphQL", "REST APIs", "gRPC"],
    },
    {
      title: "Cloud & MLOps",
      emoji: "☁️",
      accent: "#3B82F6",
      description: "Infrastructure, pipelines & deployment",
      skills: ["AWS", "Terraform", "Airflow", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
    },
    {
      title: "LLM & Agents",
      emoji: "🤖",
      accent: "#EC4899",
      description: "Multi-agent AI systems & RAG pipelines",
      skills: ["LangChain", "LangGraph", "HuggingFace", "RAG Pipelines", "MCP Protocol", "FastAPI"],
    },
    {
      title: "ML & NLP",
      emoji: "🧠",
      accent: "#8B5CF6",
      description: "Models, fine-tuning & inference",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "Pandas", "PySpark"],
    },
    {
      title: "Databases",
      emoji: "🗄️",
      accent: "#F59E0B",
      description: "Relational, graph, vector & cache",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Neo4j", "Oracle", "pgvector"],
    },
    {
      title: "Languages",
      emoji: "💻",
      accent: "#6C63FF",
      description: "The tools I think in",
      skills: ["Python", "JavaScript", "Go", "C++", "R"],
    },
    {
      title: "Auth & Security",
      emoji: "🔐",
      accent: "#EF4444",
      description: "Zero-trust, compliant access patterns",
      skills: ["AWS IAM", "JWT", "OAuth 2.0", "OWASP", "Secrets Manager"],
    },
    {
      title: "Data & Analytics",
      emoji: "📊",
      accent: "#06B6D4",
      description: "From raw data to actionable insight",
      skills: ["Pandas", "PySpark", "Neo4j", "Redshift", "Plotly", "Seaborn"],
    },
  ],
};

export default data;
