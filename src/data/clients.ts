export interface Client {
  id: string;
  name: string;
  industry: string;
  logo: string;
  description: string;
  website?: string;
  partnership: 'Strategic' | 'Premium' | 'Standard';
  since: number;
  projectsCompleted: number;
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
  featured: boolean;
}

export const clients: Client[] = [
  {
    id: "1",
    name: "TechCorp Global",
    industry: "Technology",
    logo: "/api/placeholder/200/100",
    description: "Leading technology company specializing in enterprise software solutions and cloud infrastructure.",
    website: "https://techcorp.example.com",
    partnership: "Strategic",
    since: 2019,
    projectsCompleted: 15,
    testimonial: {
      text: "BraseTech has been instrumental in our digital transformation journey. Their expertise and dedication are unmatched.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp Global"
    },
    featured: true
  },
  {
    id: "2",
    name: "FinanceFirst Bank",
    industry: "Financial Services",
    logo: "/api/placeholder/200/100",
    description: "Premier financial institution providing comprehensive banking and investment services globally.",
    website: "https://financefirst.example.com",
    partnership: "Strategic",
    since: 2020,
    projectsCompleted: 12,
    testimonial: {
      text: "The mobile banking platform developed by BraseTech exceeded our expectations and transformed our customer experience.",
      author: "Michael Chen",
      position: "Head of Digital Innovation"
    },
    featured: true
  },
  {
    id: "3",
    name: "HealthPlus Medical",
    industry: "Healthcare",
    logo: "/api/placeholder/200/100",
    description: "Innovative healthcare provider focused on patient-centered care and medical technology advancement.",
    website: "https://healthplus.example.com",
    partnership: "Premium",
    since: 2021,
    projectsCompleted: 8,
    testimonial: {
      text: "BraseTech's AI-powered healthcare management system has revolutionized our patient care processes.",
      author: "Dr. Emily Rodriguez",
      position: "Chief Medical Officer"
    },
    featured: true
  },
  {
    id: "4",
    name: "RetailMax Corporation",
    industry: "Retail",
    logo: "/api/placeholder/200/100",
    description: "Global retail chain with over 500 stores worldwide, specializing in consumer electronics and lifestyle products.",
    website: "https://retailmax.example.com",
    partnership: "Strategic",
    since: 2018,
    projectsCompleted: 20,
    testimonial: {
      text: "Our e-commerce transformation with BraseTech resulted in a 300% increase in online sales.",
      author: "David Park",
      position: "VP of Digital Commerce"
    },
    featured: true
  },
  {
    id: "5",
    name: "EduLearn Academy",
    industry: "Education",
    logo: "/api/placeholder/200/100",
    description: "Progressive educational institution offering innovative online and hybrid learning programs.",
    website: "https://edulearn.example.com",
    partnership: "Premium",
    since: 2022,
    projectsCompleted: 6,
    testimonial: {
      text: "The VR-enabled learning platform has completely transformed how our students engage with course material.",
      author: "Prof. Lisa Wang",
      position: "Dean of Technology"
    },
    featured: false
  },
  {
    id: "6",
    name: "ManufacturePro Industries",
    industry: "Manufacturing",
    logo: "/api/placeholder/200/100",
    description: "Leading manufacturer of industrial equipment and automation solutions for global markets.",
    website: "https://manufacturepro.example.com",
    partnership: "Premium",
    since: 2020,
    projectsCompleted: 10,
    testimonial: {
      text: "The IoT platform implementation reduced our downtime by 70% and significantly improved efficiency.",
      author: "Robert Kim",
      position: "Operations Director"
    },
    featured: false
  },
  {
    id: "7",
    name: "LogiFlow Logistics",
    industry: "Logistics",
    logo: "/api/placeholder/200/100",
    description: "International logistics and supply chain management company serving Fortune 500 clients.",
    website: "https://logiflow.example.com",
    partnership: "Standard",
    since: 2021,
    projectsCompleted: 7,
    testimonial: {
      text: "BraseTech's supply chain optimization platform has streamlined our operations and reduced costs significantly.",
      author: "Amanda Foster",
      position: "Supply Chain Manager"
    },
    featured: false
  },
  {
    id: "8",
    name: "GreenEnergy Solutions",
    industry: "Energy",
    logo: "/api/placeholder/200/100",
    description: "Renewable energy company focused on solar and wind power solutions for commercial and residential markets.",
    website: "https://greenenergy.example.com",
    partnership: "Premium",
    since: 2022,
    projectsCompleted: 5,
    featured: false
  },
  {
    id: "9",
    name: "StartupHub Ventures",
    industry: "Venture Capital",
    logo: "/api/placeholder/200/100",
    description: "Venture capital firm investing in early-stage technology startups and providing growth support.",
    website: "https://startuphub.example.com",
    partnership: "Standard",
    since: 2023,
    projectsCompleted: 3,
    featured: false
  },
  {
    id: "10",
    name: "MediaStream Entertainment",
    industry: "Media & Entertainment",
    logo: "/api/placeholder/200/100",
    description: "Digital media company providing streaming services and content creation platforms.",
    website: "https://mediastream.example.com",
    partnership: "Standard",
    since: 2022,
    projectsCompleted: 4,
    featured: false
  },
  {
    id: "11",
    name: "AutoTech Motors",
    industry: "Automotive",
    logo: "/api/placeholder/200/100",
    description: "Automotive technology company developing connected car solutions and autonomous driving systems.",
    website: "https://autotech.example.com",
    partnership: "Premium",
    since: 2021,
    projectsCompleted: 9,
    featured: false
  },
  {
    id: "12",
    name: "CloudFirst Enterprises",
    industry: "Cloud Services",
    logo: "/api/placeholder/200/100",
    description: "Cloud infrastructure provider offering scalable solutions for businesses of all sizes.",
    website: "https://cloudfirst.example.com",
    partnership: "Strategic",
    since: 2019,
    projectsCompleted: 18,
    featured: false
  }
];

// Helper functions
export const getFeaturedClients = (): Client[] => {
  return clients.filter(client => client.featured);
};

export const getClientById = (id: string): Client | undefined => {
  return clients.find(client => client.id === id);
};

export const getClientsByIndustry = (industry: string): Client[] => {
  return clients.filter(client => client.industry === industry);
};

export const getClientsByPartnership = (partnership: Client['partnership']): Client[] => {
  return clients.filter(client => client.partnership === partnership);
};

export const getAllIndustries = (): string[] => {
  return [...new Set(clients.map(client => client.industry))];
};

export const getClientStats = () => {
  return {
    totalClients: clients.length,
    strategicPartners: clients.filter(c => c.partnership === 'Strategic').length,
    premiumClients: clients.filter(c => c.partnership === 'Premium').length,
    standardClients: clients.filter(c => c.partnership === 'Standard').length,
    totalProjects: clients.reduce((sum, client) => sum + client.projectsCompleted, 0),
    industries: getAllIndustries().length
  };
};