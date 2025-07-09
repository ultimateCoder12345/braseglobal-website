import { Briefcase, Cloud, Cpu, Handshake, Network, ShieldCheck } from "lucide-react";

export const services = [
  {
    title: "IT Consulting",
    description: "Expert advice to optimize your IT infrastructure and strategy.",
    icon: Briefcase,
    link: "/services#it-consulting",
    features: ['Strategic Planning', 'Technology Assessment', 'Process Optimization']
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud services to power your business.",
    icon: Cloud,
    features: ['Cloud Migration', 'Infrastructure Management', 'Cost Optimization'],
    link: "/services#cloud-solutions",
  },
  {
    title: "Digital Transformation",
    description: "Modernize your operations with cutting-edge digital technologies.",
    icon: Cpu,
    link: "/services#digital-transformation",
    features: ['Process Automation', 'Data Analytics', 'Customer Experience Enhancement']
  },
  {
    title: "Managed IT Services",
    description: "Proactive IT management and support for seamless operations.",
    icon: Handshake,
    link: "/services#managed-it",
    features: ['24/7 Monitoring', 'Incident Management', 'IT Support']
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our robust security solutions.",
    icon: ShieldCheck,
    link: "/services#cybersecurity",
    features: ['Threat Detection', 'Data Protection', 'Compliance Solutions']
  },
  {
    title: "Network Solutions",
    description: "Reliable and high-performance networking for your business.",
    icon: Network,
    link: "/services#network-solutions",
    features: ['Network Design', 'Implementation', 'Performance Optimization']
  },
];