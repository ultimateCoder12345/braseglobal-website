export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  bio: string;
  avatar: string;
  email: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  skills: string[];
  experience: number;
  education: string;
  certifications: string[];
  featured: boolean;
  isLeadership: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "John Smith",
    position: "Chief Executive Officer",
    department: "Leadership",
    bio: "With over 15 years in technology leadership, John drives our strategic vision and growth. He has successfully led multiple digital transformation initiatives and has a passion for innovation.",
    avatar: "/api/placeholder/300/300",
    email: "john.smith@brasetech.com",
    linkedin: "https://linkedin.com/in/johnsmith",
    twitter: "https://twitter.com/johnsmith",
    skills: ["Strategic Planning", "Business Development", "Team Leadership", "Digital Transformation"],
    experience: 15,
    education: "MBA from Stanford University, BS in Computer Science",
    certifications: ["PMP", "Certified Scrum Master"],
    featured: true,
    isLeadership: true
  },
  {
    id: "2",
    name: "Sarah Johnson",
    position: "Chief Technology Officer",
    department: "Leadership",
    bio: "Sarah leads our technical innovation and ensures we deliver world-class solutions. She has extensive experience in cloud architecture and emerging technologies.",
    avatar: "/api/placeholder/300/300",
    email: "sarah.johnson@brasetech.com",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    github: "https://github.com/sarahjohnson",
    skills: ["Cloud Architecture", "DevOps", "Machine Learning", "Technical Strategy"],
    experience: 12,
    education: "MS in Computer Science from MIT, BS in Software Engineering",
    certifications: ["AWS Solutions Architect", "Google Cloud Professional", "Azure Expert"],
    featured: true,
    isLeadership: true
  },
  {
    id: "3",
    name: "Michael Chen",
    position: "Chief Operations Officer",
    department: "Leadership",
    bio: "Michael oversees our global operations and ensures seamless project delivery. He specializes in process optimization and operational excellence.",
    avatar: "/api/placeholder/300/300",
    email: "michael.chen@brasetech.com",
    linkedin: "https://linkedin.com/in/michaelchen",
    skills: ["Operations Management", "Process Optimization", "Quality Assurance", "Project Management"],
    experience: 13,
    education: "MBA in Operations Management, BS in Industrial Engineering",
    certifications: ["Six Sigma Black Belt", "ITIL Expert", "PMP"],
    featured: true,
    isLeadership: true
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    position: "VP of Engineering",
    department: "Engineering",
    bio: "Emily leads our engineering teams and drives technical excellence across all projects. She has a strong background in full-stack development and system architecture.",
    avatar: "/api/placeholder/300/300",
    email: "emily.rodriguez@brasetech.com",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    github: "https://github.com/emilyrodriguez",
    skills: ["Full-Stack Development", "System Architecture", "Team Leadership", "Agile Methodologies"],
    experience: 10,
    education: "MS in Software Engineering, BS in Computer Science",
    certifications: ["Certified Kubernetes Administrator", "AWS Developer Associate"],
    featured: true,
    isLeadership: false
  },
  {
    id: "5",
    name: "David Park",
    position: "Senior Full Stack Developer",
    department: "Engineering",
    bio: "David is a seasoned full-stack developer with expertise in modern web technologies. He has led multiple high-impact projects and mentors junior developers.",
    avatar: "/api/placeholder/300/300",
    email: "david.park@brasetech.com",
    linkedin: "https://linkedin.com/in/davidpark",
    github: "https://github.com/davidpark",
    skills: ["React", "Node.js", "TypeScript", "Python", "AWS", "Docker"],
    experience: 8,
    education: "BS in Computer Science from UC Berkeley",
    certifications: ["AWS Solutions Architect", "Certified React Developer"],
    featured: true,
    isLeadership: false
  },
  {
    id: "6",
    name: "Lisa Wang",
    position: "UX/UI Design Lead",
    department: "Design",
    bio: "Lisa creates beautiful and intuitive user experiences that delight our clients' customers. She has a keen eye for design and deep understanding of user psychology.",
    avatar: "/api/placeholder/300/300",
    email: "lisa.wang@brasetech.com",
    linkedin: "https://linkedin.com/in/lisawang",
    skills: ["User Experience Design", "User Interface Design", "Design Systems", "Prototyping"],
    experience: 7,
    education: "MFA in Interaction Design, BA in Graphic Design",
    certifications: ["Google UX Design Certificate", "Adobe Certified Expert"],
    featured: true,
    isLeadership: false
  },
  {
    id: "7",
    name: "Robert Kim",
    position: "DevOps Engineer",
    department: "Infrastructure",
    bio: "Robert ensures our applications run smoothly in production with robust CI/CD pipelines and infrastructure automation. He's passionate about reliability and scalability.",
    avatar: "/api/placeholder/300/300",
    email: "robert.kim@brasetech.com",
    linkedin: "https://linkedin.com/in/robertkim",
    github: "https://github.com/robertkim",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "Monitoring"],
    experience: 6,
    education: "BS in Information Systems",
    certifications: ["Certified Kubernetes Administrator", "AWS DevOps Engineer", "Terraform Associate"],
    featured: false,
    isLeadership: false
  },
  {
    id: "8",
    name: "Amanda Foster",
    position: "Data Scientist",
    department: "Analytics",
    bio: "Amanda transforms data into actionable insights using machine learning and advanced analytics. She helps our clients make data-driven decisions.",
    avatar: "/api/placeholder/300/300",
    email: "amanda.foster@brasetech.com",
    linkedin: "https://linkedin.com/in/amandafoster",
    github: "https://github.com/amandafoster",
    skills: ["Machine Learning", "Python", "R", "SQL", "Data Visualization", "Statistics"],
    experience: 5,
    education: "PhD in Data Science, MS in Statistics",
    certifications: ["Google Cloud ML Engineer", "Tableau Desktop Specialist"],
    featured: false,
    isLeadership: false
  },
  {
    id: "9",
    name: "James Wilson",
    position: "Mobile App Developer",
    department: "Engineering",
    bio: "James specializes in creating high-performance mobile applications for iOS and Android. He has a passion for mobile UX and performance optimization.",
    avatar: "/api/placeholder/300/300",
    email: "james.wilson@brasetech.com",
    linkedin: "https://linkedin.com/in/jameswilson",
    github: "https://github.com/jameswilson",
    skills: ["React Native", "Swift", "Kotlin", "Flutter", "Mobile UX", "App Store Optimization"],
    experience: 6,
    education: "BS in Computer Science",
    certifications: ["Google Associate Android Developer", "Apple iOS Developer"],
    featured: false,
    isLeadership: false
  },
  {
    id: "10",
    name: "Rachel Adams",
    position: "Cybersecurity Specialist",
    department: "Security",
    bio: "Rachel protects our clients' digital assets with comprehensive security solutions. She has extensive experience in threat detection and security architecture.",
    avatar: "/api/placeholder/300/300",
    email: "rachel.adams@brasetech.com",
    linkedin: "https://linkedin.com/in/racheladams",
    skills: ["Cybersecurity", "Penetration Testing", "Security Architecture", "Compliance", "Risk Assessment"],
    experience: 8,
    education: "MS in Cybersecurity, BS in Information Technology",
    certifications: ["CISSP", "CEH", "CISM", "Security+"],
    featured: false,
    isLeadership: false
  },
  {
    id: "11",
    name: "Alex Thompson",
    position: "Product Manager",
    department: "Product",
    bio: "Alex drives product strategy and works closely with engineering teams to deliver exceptional user experiences. He has a strong background in agile methodologies.",
    avatar: "/api/placeholder/300/300",
    email: "alex.thompson@brasetech.com",
    linkedin: "https://linkedin.com/in/alexthompson",
    skills: ["Product Strategy", "Agile Methodologies", "User Research", "Market Analysis", "Roadmap Planning"],
    experience: 7,
    education: "MBA in Product Management, BS in Engineering",
    certifications: ["Certified Scrum Product Owner", "Google Analytics Certified"],
    featured: false,
    isLeadership: false
  },
  {
    id: "12",
    name: "Maria Gonzalez",
    position: "Quality Assurance Lead",
    department: "Quality Assurance",
    bio: "Maria ensures the highest quality standards across all our deliverables. She has expertise in both manual and automated testing methodologies.",
    avatar: "/api/placeholder/300/300",
    email: "maria.gonzalez@brasetech.com",
    linkedin: "https://linkedin.com/in/mariagonzalez",
    skills: ["Test Automation", "Manual Testing", "Performance Testing", "Quality Assurance", "Selenium"],
    experience: 6,
    education: "BS in Computer Science",
    certifications: ["ISTQB Advanced Level", "Selenium WebDriver"],
    featured: false,
    isLeadership: false
  }
];

// Helper functions
export const getFeaturedTeamMembers = (): TeamMember[] => {
  return teamMembers.filter(member => member.featured);
};

export const getLeadershipTeam = (): TeamMember[] => {
  return teamMembers.filter(member => member.isLeadership);
};

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id);
};

export const getTeamMembersByDepartment = (department: string): TeamMember[] => {
  return teamMembers.filter(member => member.department === department);
};

export const getAllDepartments = (): string[] => {
  return [...new Set(teamMembers.map(member => member.department))];
};

export const getTeamStats = () => {
  const totalMembers = teamMembers.length;
  const departments = getAllDepartments();
  const averageExperience = teamMembers.reduce((sum, member) => sum + member.experience, 0) / totalMembers;
  const totalCertifications = teamMembers.reduce((sum, member) => sum + member.certifications.length, 0);
  
  return {
    totalMembers,
    departments: departments.length,
    averageExperience: Math.round(averageExperience * 10) / 10,
    totalCertifications,
    leadershipCount: getLeadershipTeam().length
  };
};