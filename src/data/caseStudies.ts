export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  duration: string;
  teamSize: number;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Digital Transformation for Global Retail Chain",
    client: "MegaRetail Corp",
    industry: "Retail",
    summary: "Complete digital transformation including e-commerce platform, inventory management, and customer analytics.",
    description: "MegaRetail Corp needed to modernize their entire technology stack to compete in the digital marketplace. We provided end-to-end digital transformation services.",
    challenge: "Legacy systems were causing operational inefficiencies, poor customer experience, and limited scalability. The client needed a modern, integrated solution.",
    solution: "We implemented a cloud-native e-commerce platform, integrated inventory management system, and advanced analytics dashboard using React, Node.js, and AWS services.",
    results: [
      "300% increase in online sales",
      "50% reduction in operational costs",
      "99.9% system uptime",
      "40% improvement in customer satisfaction"
    ],
    technologies: ["React", "Node.js", "AWS", "MongoDB", "Redis", "Docker"],
    imageUrl: "/api/placeholder/600/400",
    projectUrl: "https://example.com/case-study-1",
    duration: "8 months",
    teamSize: 12,
    featured: true
  },
  {
    id: "2",
    title: "AI-Powered Healthcare Management System",
    client: "HealthTech Solutions",
    industry: "Healthcare",
    summary: "Development of an AI-powered patient management system with predictive analytics and automated workflows.",
    description: "HealthTech Solutions required a sophisticated patient management system that could leverage AI to improve patient outcomes and operational efficiency.",
    challenge: "Manual processes were time-consuming and error-prone. The client needed intelligent automation and predictive capabilities to enhance patient care.",
    solution: "We built a comprehensive healthcare management platform with AI-powered diagnostics, automated scheduling, and predictive analytics using Python, TensorFlow, and cloud services.",
    results: [
      "60% reduction in administrative time",
      "25% improvement in diagnostic accuracy",
      "90% patient satisfaction rate",
      "35% increase in operational efficiency"
    ],
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Azure", "Docker"],
    imageUrl: "/api/placeholder/600/400",
    duration: "10 months",
    teamSize: 15,
    featured: true
  },
  {
    id: "3",
    title: "Fintech Mobile Banking Application",
    client: "NextGen Bank",
    industry: "Financial Services",
    summary: "Secure mobile banking application with advanced features including biometric authentication and real-time fraud detection.",
    description: "NextGen Bank wanted to launch a cutting-edge mobile banking app that would set new standards for security and user experience in the fintech industry.",
    challenge: "Creating a secure, user-friendly mobile banking experience while meeting strict regulatory requirements and ensuring real-time fraud detection.",
    solution: "We developed a React Native mobile app with biometric authentication, real-time transaction monitoring, and AI-powered fraud detection integrated with banking APIs.",
    results: [
      "1M+ app downloads in first 6 months",
      "99.99% transaction security rate",
      "4.8/5 app store rating",
      "45% increase in digital engagement"
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Machine Learning", "Blockchain"],
    imageUrl: "/api/placeholder/600/400",
    duration: "12 months",
    teamSize: 18,
    featured: true
  },
  {
    id: "4",
    title: "Smart Manufacturing IoT Platform",
    client: "Industrial Dynamics",
    industry: "Manufacturing",
    summary: "IoT-enabled smart manufacturing platform for real-time monitoring, predictive maintenance, and process optimization.",
    description: "Industrial Dynamics needed to modernize their manufacturing processes with IoT technology to improve efficiency and reduce downtime.",
    challenge: "Legacy manufacturing equipment lacked connectivity and real-time monitoring capabilities, leading to unexpected downtime and inefficient operations.",
    solution: "We implemented an IoT platform with sensor integration, real-time monitoring dashboard, and predictive maintenance algorithms using Azure IoT and machine learning.",
    results: [
      "70% reduction in unplanned downtime",
      "30% improvement in production efficiency",
      "50% reduction in maintenance costs",
      "Real-time visibility across all operations"
    ],
    technologies: ["Azure IoT", "Python", "React", "InfluxDB", "Machine Learning", "Edge Computing"],
    imageUrl: "/api/placeholder/600/400",
    duration: "14 months",
    teamSize: 20,
    featured: false
  },
  {
    id: "5",
    title: "E-Learning Platform with Virtual Reality",
    client: "EduTech Innovations",
    industry: "Education",
    summary: "Immersive e-learning platform combining traditional online learning with virtual reality experiences.",
    description: "EduTech Innovations wanted to revolutionize online education by incorporating virtual reality to create immersive learning experiences.",
    challenge: "Traditional e-learning platforms lacked engagement and hands-on experience. The client needed to create immersive, interactive learning environments.",
    solution: "We developed a comprehensive e-learning platform with VR integration, interactive simulations, and adaptive learning algorithms using React, WebXR, and cloud services.",
    results: [
      "85% increase in student engagement",
      "40% improvement in learning outcomes",
      "200% growth in platform usage",
      "95% student satisfaction rate"
    ],
    technologies: ["React", "WebXR", "Three.js", "Node.js", "MongoDB", "AWS"],
    imageUrl: "/api/placeholder/600/400",
    duration: "16 months",
    teamSize: 22,
    featured: false
  },
  {
    id: "6",
    title: "Supply Chain Optimization Platform",
    client: "LogiFlow Systems",
    industry: "Logistics",
    summary: "AI-driven supply chain optimization platform for route planning, inventory management, and demand forecasting.",
    description: "LogiFlow Systems required an intelligent supply chain management solution to optimize their global logistics operations and reduce costs.",
    challenge: "Complex global supply chain with multiple variables made it difficult to optimize routes, manage inventory, and predict demand accurately.",
    solution: "We built an AI-powered platform with machine learning algorithms for demand forecasting, route optimization, and automated inventory management using Python and cloud services.",
    results: [
      "25% reduction in shipping costs",
      "40% improvement in delivery times",
      "60% better demand forecast accuracy",
      "30% reduction in inventory holding costs"
    ],
    technologies: ["Python", "Machine Learning", "React", "PostgreSQL", "Google Cloud", "Kubernetes"],
    imageUrl: "/api/placeholder/600/400",
    duration: "11 months",
    teamSize: 16,
    featured: false
  }
];

// Helper functions
export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudies.filter(study => study.featured);
};

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
};

export const getCaseStudiesByIndustry = (industry: string): CaseStudy[] => {
  return caseStudies.filter(study => study.industry === industry);
};

export const getAllIndustries = (): string[] => {
  return [...new Set(caseStudies.map(study => study.industry))];
};