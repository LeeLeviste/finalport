const resume = {
  name: "Lee Ryan Leviste",
  role: "CS Student · AI Enthusiast",
  location: "Taguig City, Philippines",
  greeting: "Hi, I'm Lee",
  about:
    "Computer Science student focused on machine learning systems, retrieval-augmented applications, and production-ready web engineering.",
  email: "lraleviste@gmail.com",
  phone: "+63 9663187746",
  internshipStatus: "Open to Internships",
  campusTag: "GDG on Campus · Mapua",
  education: {
    degree: "BS Computer Science (AI specialization)",
    school: "Mapua University",
    expectedGraduation: "2026",
    city: "Makati, Philippines"
  },
  projects: {
    featured: [
      {
        name: "Weld Defect Detection and Segmentation",
        description:
          "YOLOv12 pipeline for weld defect instance segmentation across 94,973 labeled instances, reaching mAP50 0.818 and published at ICISS 2026.",
        stack: "YOLOv12 · Roboflow · Computer Vision"
      },
      {
        name: "Childcare Disease RAG Chatbot",
        description:
          "Built a RAG chatbot over the NH Disease Handbook using Qwen3-8B and PubMedBERT embeddings with Recall@7 0.856.",
        stack: "Qwen3-8B · PubMedBERT · FAISS · Gradio"
      },
      {
        name: "Wine Quality Prediction",
        description:
          "Trained ensemble and neural models with SMOTE and feature selection, reaching 80% accuracy and F1 score of 0.82.",
        stack: "Random Forest · XGBoost · Neural Network"
      },
      {
        name: "Guarden Environmental Reporting Web App",
        description:
          "Full-stack reporting system built with React, Node.js, and TypeScript that reduced manual effort by 50%.",
        stack: "React.js · Node.js · TypeScript · SQL"
      }
    ],
    other: []
  },
  skills: {
    languages: ["Python", "TypeScript", "SQL", "React.js", "Node.js"],
    mlAi: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "HuggingFace",
      "NumPy",
      "Pandas",
      "FAISS",
      "Roboflow",
      "Gradio"
    ],
    tools: ["Git", "GitHub"]
  },
  activities: [
    {
      title: "Google Developer Groups (GDG) on Campus",
      organization: "Mapua University",
      period: "2024–Present"
    }
  ]
};

export default resume;
