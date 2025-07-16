export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
  date: string;
  project?: string;
  industry: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "Chief Technology Officer",
    company: "TechCorp Global",
    avatar: "https://placehold.co/100x100.png",
    text: "BraseTech has been instrumental in our digital transformation journey. Their expertise in cloud solutions and their ability to understand our complex business requirements made them the perfect partner. The team delivered beyond our expectations.",
    rating: 5,
    date: "2024-01-15",
    project: "Cloud Infrastructure Modernization",
    industry: "Technology",
    featured: true
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "Head of Digital Innovation",
    company: "FinanceFirst Bank",
    avatar: "https://placehold.co/100x100.png",
    text: "The mobile banking platform developed by BraseTech exceeded our expectations and transformed our customer experience. Their attention to security and user experience is exceptional. We've seen a 300% increase in digital engagement.",
    rating: 5,
    date: "2024-02-20",
    project: "Mobile Banking Application",
    industry: "Financial Services",
    featured: true
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    position: "Chief Medical Officer",
    company: "HealthPlus Medical",
    avatar: "https://placehold.co/100x100.png",
    text: "BraseTech's AI-powered healthcare management system has revolutionized our patient care processes. The predictive analytics and automated workflows have improved our efficiency by 60% while enhancing patient outcomes.",
    rating: 5,
    date: "2024-03-10",
    project: "AI Healthcare Management System",
    industry: "Healthcare",
    featured: true
  },
  {
    id: "4",
    name: "David Park",
    position: "VP of Digital Commerce",
    company: "RetailMax Corporation",
    avatar: "https://placehold.co/100x100.png",
    text: "Our e-commerce transformation with BraseTech resulted in a 300% increase in online sales. Their team understood our retail challenges and delivered a solution that scales with our business growth.",
    rating: 5,
    date: "2023-11-25",
    project: "E-commerce Platform Development",
    industry: "Retail",
    featured: true
  },
  {
    id: "5",
    name: "Prof. Lisa Wang",
    position: "Dean of Technology",
    company: "EduLearn Academy",
    avatar: "https://placehold.co/100x100.png",
    text: "The VR-enabled learning platform has completely transformed how our students engage with course material. Student engagement increased by 85% and learning outcomes improved significantly.",
    rating: 5,
    date: "2024-01-08",
    project: "VR Learning Platform",
    industry: "Education",
    featured: false
  },
  {
    id: "6",
    name: "Robert Kim",
    position: "Operations Director",
    company: "ManufacturePro Industries",
    avatar: "https://placehold.co/100x100.png",
    text: "The IoT platform implementation reduced our downtime by 70% and significantly improved efficiency. BraseTech's expertise in industrial IoT is outstanding.",
    rating: 5,
    date: "2023-12-12",
    project: "Smart Manufacturing IoT Platform",
    industry: "Manufacturing",
    featured: false
  },
  {
    id: "7",
    name: "Amanda Foster",
    position: "Supply Chain Manager",
    company: "LogiFlow Logistics",
    avatar: "https://placehold.co/100x100.png",
    text: "BraseTech's supply chain optimization platform has streamlined our operations and reduced costs significantly. The AI-driven route optimization alone saved us 25% in shipping costs.",
    rating: 4,
    date: "2024-02-14",
    project: "Supply Chain Optimization",
    industry: "Logistics",
    featured: false
  },
  {
    id: "8",
    name: "Jennifer Martinez",
    position: "IT Director",
    company: "GreenEnergy Solutions",
    avatar: "https://placehold.co/100x100.png",
    text: "Working with BraseTech on our energy management system was a game-changer. Their understanding of renewable energy sector requirements and technical expertise delivered exceptional results.",
    rating: 5,
    date: "2024-03-22",
    project: "Energy Management System",
    industry: "Energy",
    featured: false
  },
  {
    id: "9",
    name: "Alex Thompson",
    position: "Founder & CEO",
    company: "StartupHub Ventures",
    avatar: "https://placehold.co/100x100.png",
    text: "BraseTech helped us build our portfolio management platform from the ground up. Their agile approach and technical expertise made them an invaluable partner for our startup ecosystem.",
    rating: 5,
    date: "2024-01-30",
    project: "Portfolio Management Platform",
    industry: "Venture Capital",
    featured: false
  },
  {
    id: "10",
    name: "Maria Gonzalez",
    position: "CTO",
    company: "MediaStream Entertainment",
    avatar: "https://placehold.co/100x100.png",
    text: "The streaming platform architecture designed by BraseTech handles millions of concurrent users flawlessly. Their scalability solutions are top-notch.",
    rating: 4,
    date: "2023-10-18",
    project: "Streaming Platform Architecture",
    industry: "Media & Entertainment",
    featured: false
  },
  {
    id: "11",
    name: "James Wilson",
    position: "Head of Engineering",
    company: "AutoTech Motors",
    avatar: "https://placehold.co/100x100.png",
    text: "BraseTech's expertise in automotive technology and IoT helped us develop our connected car platform. Their team's innovation and technical depth are impressive.",
    rating: 5,
    date: "2024-02-05",
    project: "Connected Car Platform",
    industry: "Automotive",
    featured: false
  },
  {
    id: "12",
    name: "Rachel Adams",
    position: "VP of Engineering",
    company: "CloudFirst Enterprises",
    avatar: "https://placehold.co/100x100.png",
    text: "BraseTech's cloud infrastructure solutions have been crucial to our growth. Their expertise in scalable architecture and DevOps practices is exceptional.",
    rating: 5,
    date: "2023-09-14",
    project: "Cloud Infrastructure Solutions",
    industry: "Cloud Services",
    featured: false
  }
];

// Helper functions
export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.featured);
};

export const getTestimonialById = (id: string): Testimonial | undefined => {
  return testimonials.find(testimonial => testimonial.id === id);
};

export const getTestimonialsByIndustry = (industry: string): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.industry === industry);
};

export const getTestimonialsByRating = (minRating: number): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.rating >= minRating);
};

export const getRecentTestimonials = (count: number = 6): Testimonial[] => {
  return testimonials
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getTestimonialStats = () => {
  const totalTestimonials = testimonials.length;
  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / totalTestimonials;
  const fiveStarCount = testimonials.filter(t => t.rating === 5).length;
  const industries = [...new Set(testimonials.map(t => t.industry))];
  
  return {
    total: totalTestimonials,
    averageRating: Math.round(averageRating * 10) / 10,
    fiveStarPercentage: Math.round((fiveStarCount / totalTestimonials) * 100),
    industries: industries.length
  };
};