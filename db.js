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

const data = {
    contact: {
      name: "Mowzli Sre Mohan Dass",
      location: "Washington, DC, USA",
      email: "mowzlisre.mohandass@gwu.edu",
      phone: "+1-202-534-5686",
      github: "https://github.com/mowzlisre",
      linkedin: "https://www.linkedin.com/in/mowzlisre/"
    },
  
    experience: [
      {
        role: "Student Academic Assistant",
        company: "The George Washington University",
        dates: "Feb 2025 – May 2025",
        type: "Part-time",
        location: "Washington, DC, USA",
        bullets: [
          "Prepare assignments, quizzes, and assessments aligned with course objectives to ensure effective learning outcomes.",
          "Redesigned course material to emphasise relational database design and hands-on labs."
        ],
        logo: gwLogo
      },
      {
        role: "Graduate Instructional Assistant",
        company: "The George Washington University",
        dates: "Aug 2024 – Dec 2024",
        type: "Part-time",
        location: "Washington, DC, USA",
        bullets: [
          "Provided academic support for undergraduate and graduate students by holding regular office hours and one-on-one sessions to clarify course concepts and resolve doubts.",
          "Collaborated with faculty to maintain alignment between instructional materials and course outcomes."
        ],
        logo: gwLogo
      },
      {
        role: "Founder, Project Lead Developer",
        company: "Achaarya Tech",
        dates: "Jul 2021 – Jan 2023",
        type: "Full-time",
        location: "Chennai, India",
        bullets: [
          "Led full SDLC with Jira & Trello agile workflows.",
          "Deployed a PWA with React, enhancing UX.",
          "Implemented OWASP-compliant security and CI/CD on Amplify, GitHub Actions & Heroku.",
          "Integrated RazorPay & Stripe, handling 1 000+ transactions."
        ],
        logo: achaarya
      },
      {
        role: "Intern – Full Stack Developer",
        company: "Skill Safari",
        dates: "Aug 2020 – Jun 2021",
        type: "Full-time",
        location: "Coimbatore, India",
        bullets: [
          "Built proprietary LMS with Django & React for student onboarding and tracking.",
          "Automated certificate generation via xhtml2pdf, Pillow & Jinja2.",
          "Optimised schema and queries, cutting DB load times by 40 %."
        ],
        logo: skillsafari
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
        degree: "B.E. Computer Science and Engg",
        institution: "Government College of Engineering",
        location: "Bodinayakanur, Tamil Nadu, India",
        graduation: "Jul 2022",
        logo: gce

      }
    ],
    projects: [
      {
        name: "NeXT Mission",
        logo: next
      },
      {
        name: "Neoport",
        logo: neoport
      },
      {
        name: "Text-2-SQL",
        logo: text2sql
      },
      {
        name: "Quizzy",
        logo: quizzy
      },
      {
        name: "Django Model Inspector",
        logo: dmi
      },
      {
        name: "Taxonomy Classification",
        logo: taxonomy
      },
      {
        name: "Chest X-Ray Classification",
        logo: xray
      },
      {
        name: "Time Series Forecasting using PySpark",
        logo: timeseries
      },
      {
        name: "Tableu Visualization",
        logo: tableau
      },
      {
        name: "Neo4j vs MongoDB",
        logo: neovsmongo
      },
      {
        name: "Food Desert Analysis",
        logo: fooddessert
      },
      {
        name: "NYC Taxi Trip Analysis",
        logo: nyctaxi
      },
    ],
    skills: {
      languages: ["Python", "Go", "JavaScript", "C++", "SQL", "Cypher", "Dart", "Java"],
      databases: ["MongoDB", "PostgreSQL", "MariaDB", "Neo4j", "Redis"],
      frontend: ["HTML", "CSS", "React", "Vue", "Sass", "Bootstrap", "Chakra UI", "Material UI"],
      backend: ["Django", "RESTful API", "Node.js", "Flask", "FastAPI", "Express.js"],
      tools: ["Tableau", "Docker", "Sentry", "Trello", "Postman", "Git", "Apache"],
      libraries: ["Pandas", "NumPy", "Matplotlib", "PyTorch", "TensorFlow", "Plotly", "Scikit-learn", "PySpark", "Seaborn", "spaCy"]
    }
  };
  
  export default data;
  