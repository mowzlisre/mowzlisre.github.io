import gwLogo from "./src/assets/gwu-logo.jpg";
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
import futrr from "./src/assets/futrr.png";
import awsLogo from "./src/assets/aws.png";
import databricksLogo from "./src/assets/databricks.jpeg";
import metaLogo from "./src/assets/meta.png";
import medal from "./src/assets/medal.png";
import infosys from "./src/assets/infosys.webp";
import nvidia from "./src/assets/nvidia.jpeg";
import snowflake from "./src/assets/snowflake.png";

const data = {
  contact: {
    name: "Mowzli Sre Mohan Dass",
    initials: "MS.",
    location: "Atlanta, GA",
    tagline: "Building scalable ML systems at the intersection of data, cloud, and AI.",
    email: "mowzlisre2410@gmail.com",
    github: "https://github.com/mowzlisre",
    linkedin: "https://www.linkedin.com/in/mowzlisre/",
    instagram: "https://www.instagram.com/mowzlisre",
    resume: "https://drive.google.com/file/d/1IAxnYLpgcXLZ6GmocDCDJ21RNPJsvROL/view?usp=sharing",
    socials: [
      { label: "LinkedIn",  url: "https://www.linkedin.com/in/mowzlisre/" },
      { label: "GitHub",    url: "https://github.com/mowzlisre" },
      { label: "Instagram", url: "https://www.instagram.com/mowzlisre" },
    ],
  },

  hero: {
    bio: "AI/ML Engineer at Snowflake — designing end-to-end ML pipelines, RAG-based LLM systems, and Generative AI applications across cloud and enterprise environments. 4+ years turning data into production-grade intelligence.",
    stats: [
      { value: "4+",   label: "Years Experience" },
      { value: "30%",  label: "Model Accuracy Gain" },
      { value: "45%",  label: "Faster Deployment" },
      { value: "2nd",  label: "Meta Hackathon" },
    ],
  },

  experience: [
    {
      company: "Snowflake",
      location: "USA (Remote)",
      logo: snowflake,
      roles: [
        {
          role: "AI/ML Engineer",
          dates: "Jul 2025 - Present",
          type: "Full-time",
          stack: ["Python", "Snowflake", "SQL", "PyTorch", "TensorFlow", "FastAPI", "Docker", "Kubernetes", "MLflow", "AWS", "Azure", "LangChain", "RAG"],
          bullets: [
            "Designed and deployed scalable machine learning pipelines using Python, SQL, and Snowflake, improving data processing efficiency by 30% and reducing model training time by 25%.",
            "Built predictive and Generative AI models using PyTorch, TensorFlow, and RAG pipelines, improving forecasting accuracy by 28% and reducing manual data retrieval by 40%.",
            "Developed end-to-end ML workflows including data ingestion, feature engineering, training, deployment, and monitoring, reducing deployment time by 45%.",
            "Integrated ML models with Snowflake and developed REST APIs using FastAPI, improving real-time inference speed by 25% and reducing query latency by 35%.",
            "Implemented MLOps best practices including CI/CD, automated retraining, and model monitoring, improving model reliability by 30% and reducing production incidents by 22%."
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
      company: "NVIDIA",
      location: "India",
      logo: nvidia,
      roles: [
        {
          role: "AI/ML Engineer",
          dates: "Jun 2021 – Jul 2023",
          type: "Full-time",
          stack: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "CNN", "LSTM", "NLP", "Computer Vision", "Docker", "SQL"],
          bullets: [
            "Developed machine learning and deep learning models using Python, TensorFlow, and PyTorch, improving model accuracy by 26% for computer vision and NLP applications.",
            "Built data preprocessing and feature engineering pipelines for large-scale datasets, reducing data processing time by 35% and improving training efficiency.",
            "Designed and optimized deep learning models (CNN, LSTM) for predictive analytics and automation, improving performance by 30%.",
            "Deployed AI/ML models using Docker and cloud platforms, reducing deployment time by 40% and improving system scalability.",
            "Implemented model evaluation and monitoring frameworks, improving model performance tracking and reducing model drift by 25%.",
            "Optimized database queries and data pipelines using SQL and Python, improving data retrieval speed by 32%."
          ]
        }
      ]
    },
    {
      company: "Infosys",
      location: "India",
      logo: infosys,
      roles: [
        {
          role: "Data Scientist",
          dates: "Aug 2020 – Jun 2021",
          type: "Full-time",
          stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "SQL", "Machine Learning", "Statistical Modeling", "EDA"],
          bullets: [
            "Developed machine learning models using Python and Scikit-learn for business analytics and predictive insights, improving forecast accuracy by 24%.",
            "Performed data cleaning, preprocessing, and feature engineering on large datasets using Pandas and NumPy, reducing data inconsistencies by 30%.",
            "Built interactive dashboards and reports for stakeholders, improving data-driven decision-making and reducing reporting time by 35%.",
            "Designed SQL-based data pipelines and optimized queries, improving data retrieval performance by 28%.",
            "Conducted exploratory data analysis (EDA) and statistical modeling, identifying key business trends and improving operational efficiency by 22%.",
            "Collaborated with cross-functional teams to deploy machine learning solutions, improving workflow automation by 26%."
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
    stack: ["Django", "React Native", "iOS", "Android", "AES-256"],
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
    languages: ["Python", "R", "MATLAB", "JavaScript", "Bash", "SQL"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Neo4j", "Oracle", "SQL Server", "FAISS", "pgvector"],
    cloud: ["AWS SageMaker", "AWS EC2", "AWS S3", "AWS Lambda", "AWS Redshift", "Azure ML", "Azure AKS", "GCP Vertex AI", "Docker", "Kubernetes", "Terraform", "Apache Airflow", "MLflow"],
    ai: ["LangChain", "LangGraph", "RAG Pipelines", "Multi-Agent Orchestration", "Prompt Engineering", "FAISS", "pgvector", "LLM Fine-Tuning"],
    ml: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "HuggingFace Transformers", "BERT", "LLaMA", "Mistral 7B", "CNN", "LSTM", "LightGBM", "XGBoost", "Causal Inference", "PySpark"],
    datascience: ["Pandas", "NumPy", "OpenCV", "spaCy", "Feature Engineering", "Model Evaluation", "Cross Validation", "EDA", "Statistical Modeling"]
  },

  skillCategories: [
    {
      title: "Languages",
      emoji: "💻",
      accent: "#6C63FF",
      description: "The tools I think in",
      skills: ["Python", "R", "MATLAB", "JavaScript", "Bash", "SQL"],
    },
    {
      title: "ML & Deep Learning",
      emoji: "🧠",
      accent: "#8B5CF6",
      description: "Models, fine-tuning & inference at scale",
      skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "CNN", "LSTM", "BERT", "LLaMA", "Mistral 7B", "LightGBM", "XGBoost"],
    },
    {
      title: "Generative AI / LLM",
      emoji: "🤖",
      accent: "#EC4899",
      description: "Multi-agent AI systems & RAG pipelines",
      skills: ["LangChain", "LangGraph", "RAG Pipelines", "Multi-Agent Orchestration", "Prompt Engineering", "FAISS", "pgvector", "LLM Fine-Tuning"],
    },
    {
      title: "Cloud & MLOps",
      emoji: "☁️",
      accent: "#3B82F6",
      description: "Infrastructure, pipelines & ML deployment",
      skills: ["AWS SageMaker", "AWS EC2", "AWS S3", "AWS Lambda", "Azure ML", "GCP Vertex AI", "Docker", "Kubernetes", "Terraform", "Airflow", "MLflow", "TorchServe"],
    },
    {
      title: "Data Engineering",
      emoji: "🗄️",
      accent: "#F59E0B",
      description: "Relational, graph, vector & large-scale pipelines",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Neo4j", "Oracle", "SQL Server", "Feature Store", "Data Wrangling"],
    },
    {
      title: "Data Science",
      emoji: "📊",
      accent: "#06B6D4",
      description: "From raw data to actionable insight",
      skills: ["Pandas", "NumPy", "PySpark", "OpenCV", "spaCy", "Feature Engineering", "Causal Inference", "EDA"],
    },
    {
      title: "DevOps & CI/CD",
      emoji: "⚙️",
      accent: "#10B981",
      description: "Automated retraining, deployment & monitoring",
      skills: ["Git", "GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Data Drift Monitoring", "CI/CD Pipelines"],
    },
    {
      title: "Auth & Security",
      emoji: "🔐",
      accent: "#EF4444",
      description: "Secure, compliant access patterns",
      skills: ["OAuth", "JWT", "AWS Secrets Manager", "Azure Key Vault", "SHA256 Encryption", "AWS IAM"],
    },
  ],
};

export default data;
