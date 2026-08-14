import { PersonalData, Experience, Project, Certificate, Skills } from '../types';

export const personalData: PersonalData = {
  name: "Mili Moradiya",
  title: "AI & Data Science Undergraduate",
  email: "milimoradiya21@gmail.com",
  phone: "+91 90997 93020",
  linkedin: "https://linkedin.com/in/mili-moradiya-568b90278",
  github: "https://github.com/MiliMoradiya55",
  summary: "AI & Data Science undergraduate with hands-on experience building 5+ AI/ML and Data Analytics projects using Python, SQL, XGBoost, Power BI, React.js, FastAPI, and Scikit-learn. Developed predictive models with 91%+ accuracy, interactive BI dashboards, and full-stack AI applications. Passionate about machine learning, business intelligence, and scalable AI solutions."
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "CodSoft",
    role: "Machine Learning Developer Intern",
    period: "06/2026 – 07/2026",
    achievements: [
      "Developed 3 machine learning models achieving 91% prediction accuracy",
      "Processed and analyzed 10,000+ records for model training",
      "Improved model accuracy by 12% through feature engineering and hyperparameter tuning"
    ]
  },
  {
    id: 2,
    company: "Wetech Solution Pvt. Ltd.",
    role: "Flutter App Development Intern",
    period: "07/2023 – 08/2023 | Surat",
    achievements: [
      "Developed 5+ responsive mobile application screens using Flutter and Dart",
      "Integrated 4+ REST APIs for real-time data communication",
      "Fixed 20+ application bugs and improved application performance"
    ]
  },
  {
    id: 3,
    company: "Chameleon Infotech LLP",
    role: "Android App Development Intern",
    period: "09/2022 – 09/2022 | Surat",
    achievements: [
      "Improved application stability by resolving 25+ bugs through testing and debugging",
      "Performed testing and debugging, reducing application crashes by 20%",
      "Conducted functional testing across 15+ application screens, improving overall reliability"
    ]
  }
];

export const projects: Project[] = [
  // ===== ORIGINAL PROJECTS =====
  {
    id: 1,
    title: "Customer Attrition Prediction ML System",
    description: "Developed a machine learning model using XGBoost to predict customer attrition with 91% accuracy. Built Flask web application for real-time customer churn prediction and explainable AI visualizations.",
    technologies: ["Python", "Flask", "XGBoost", "SHAP", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/MiliMoradiya55/attrition-prediction"
  },
  {
    id: 2,
    title: "Explainable AI Stroke Risk Prediction System",
    description: "Built an end-to-end healthcare web application for stroke risk prediction using React.js and FastAPI. Integrated SHAP for interpretable predictions and feature importance visualization.",
    technologies: ["React.js", "FastAPI", "XGBoost", "SHAP", "SQLite", "SQLAlchemy"],
    github: "https://github.com/MiliMoradiya55/stroke-risk-prediction"
  },
  {
    id: 3,
    title: "HealthVision BI: Stroke Risk Analytics Dashboard",
    description: "Designed an interactive Power BI dashboard with KPI cards, slicers, and visualizations to analyze stroke risk factors. Performed data cleaning, modeling, and reporting.",
    technologies: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    github: "https://github.com/MiliMoradiya55/healthvision-bi"
  },
  {
    id: 4,
    title: "AI Powered Health Risk Prediction Platform",
    description: "Developed a full-stack AI healthcare platform using React.js and FastAPI for real-time disease risk prediction with personalized health recommendations.",
    technologies: ["React.js", "FastAPI", "XGBoost", "SHAP", "SQLAlchemy", "SQLite"],
    github: "https://github.com/MiliMoradiya55/health-risk-platform"
  },
  {
    id: 5,
    title: "Creative Password Generator Application",
    description: "Built a professional desktop application using Python Tkinter that generates strong, customizable passwords with real-time strength analysis and clipboard copy functionality.",
    technologies: ["Python", "Tkinter", "Random", "String", "GUI"],
    github: "https://github.com/MiliMoradiya55/Password_Generator"
  }
];

export const skills: Skills = {
  programming: ["Python", "SQL", "JavaScript", "Java", "C", "HTML", "CSS"],
  aiMl: ["Pandas", "NumPy", "XGBoost", "Scikit-learn", "TensorFlow", "PyTorch"],
  dataAnalytics: ["Power BI", "Power Query", "DAX", "Excel"],
  databases: ["SQL", "MySQL", "SQLite", "SQLAlchemy"],
  frameworks: ["FastAPI", "Flask", "React.js"],
  tools: ["Git", "GitHub", "VS Code", "Android Studio"]
};

export const certificates: Certificate[] = [
  {
    name: "Innovating with Google Cloud AI",
    platform: "Google Cloud"
  },
  {
    name: "Introduction to Career Skills in Data Analytics",
    platform: "IBM"
  },
  {
    name: "Machine Learning with Python",
    platform: "IBM Coursera"
  },
  {
    name: "Network Security",
    platform: "Great Learning"
  }
];