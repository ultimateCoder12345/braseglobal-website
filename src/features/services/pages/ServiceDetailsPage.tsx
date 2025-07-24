import React from "react";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Divider,
} from "@mui/material";
import {
  ArrowBack,
  CheckCircle,
  Timeline,
  Group,
  Settings,
  TrendingUp,
  Security,
  Speed,
} from "@mui/icons-material";
import { services } from "../../homepage/services/data/services";

export const ServiceDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const service = services.find((s, index) => index.toString() === id);
  if (!service) {
    return (
      <Box
        sx={{
          pt: 10,
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Service not found</Typography>
      </Box>
    );
  }

  const IconComponent = service.icon;

  const getServiceDetails = (index: number) => {
    const commonBenefits = [
      {
        icon: <TrendingUp />,
        title: "Proven Results",
        desc: "Track record of successful implementations",
      },
      {
        icon: <Security />,
        title: "Secure & Compliant",
        desc: "Enterprise-grade security standards",
      },
      {
        icon: <Speed />,
        title: "Fast Delivery",
        desc: "Agile methodology for quick results",
      },
      {
        icon: <Group />,
        title: "Expert Team",
        desc: "Certified professionals with deep expertise",
      },
    ];

    const serviceSpecificData = {
      0: {
        overview: ["At BraseTech, we are more than just an IT service provider — we are your strategic technology partner. We specialize in comprehensive IT consulting and full-scale digital transformation services designed to align your technology investments with your business goals.", "We work closely with clients to understand their unique challenges and industry dynamics. From identifying bottlenecks in outdated systems to deploying next-gen cloud infrastructure and automation tools, we help companies transition from traditional workflows to digitally optimized ecosystems."],
        keyFeatures: ["Strategic IT Planning", "Digital Transformation", "Managed IT Services", "Process Automation"],
        process: ["Business Analysis", "Strategy Development", "Implementation Planning", "Execution & Support"],
        technologies: ["Cloud Platforms", "Enterprise Software", "Automation Tools", "Analytics Platforms"],
        outcomes: ["Improved Efficiency", "Cost Reduction", "Enhanced Security", "Scalable Infrastructure"]
      },
      1: {
        overview: ["Brase Tech provides the best-tailored cloud modernization services based on your business needs that ensure a seamless transition to a modernized cloud solution. We help you embrace a strategic approach to cloud modernization with aligned IT infrastructure with business goals, enhanced flexibility and efficiency, improved data management, and high-level security.", "Your company’s digital operations are revolutionized by our cloud operation solution. We precisely manage your cloud infrastructure to guarantee peak efficiency, safety and economy. Your cloud environment is enhanced, maintained and monitored by our knowledgeable staff, freeing you to concentrate on your primary business operations. Experience proactive issue resolution, continual optimization and seamless, round-the-clock cloud support with Brase Tech to help you succeed in the rapidly changing digital landscape. With our dedicated cloud operation services, you can improve your cloud experience."],
        keyFeatures: ["Cloud Migration", "Infrastructure Management", "Cost Optimization", "Multi-Cloud Strategy"],
        process: ["Cloud Assessment", "Migration Planning", "Implementation", "Optimization & Support"],
        technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"],
        outcomes: ["Reduced Costs", "Improved Scalability", "Enhanced Performance", "Better Disaster Recovery"]
      },
      2: {
        overview: ["In today’s data-centric environment, Artificial Intelligence (AI) and Machine Learning (ML) are essential drivers of operational intelligence and strategic decision-making. Leveraging advanced algorithms, neural networks, and data modeling techniques, businesses can automate complex tasks, enhance predictive capabilities, and deliver highly personalized experiences at scale.", "Brase Tech AI & Machine Learning Services focus on the development and deployment of intelligent systems tailored to your business objectives. Our expertise spans supervised and unsupervised learning, deep learning, natural language processing (NLP), and computer vision. From building custom ML models to integrating AI into enterprise workflows, we help organizations accelerate automation, optimize performance, and extract actionable insights from vast and varied data sources. With scalable architectures and real-time analytics, we ensure your AI initiatives are robust, secure, and ready for growth."],
        keyFeatures: ["Custom AI Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
        process: ["Data Assessment", "Model Development", "Testing & Validation", "Deployment & Monitoring"],
        technologies: ["TensorFlow", "PyTorch", "Python", "R", "Azure AI", "AWS AI Services"],
        outcomes: ["Process Automation", "Better Decision Making", "Improved Customer Experience", "Cost Savings"]
      },
      3: {
        overview: ["In today’s data-driven world, successful organizations don’t just collect data—they use it to drive meaningful outcomes. Brase Tech’s Data and Business Intelligence (BI) Services are designed to help businesses transform complex, fragmented data into clear, actionable insights that support smarter, faster decision-making.", "We offer comprehensive solutions that cover the entire data lifecycle, including data integration, warehousing, governance, and advanced analytics. Our team works closely with your organization to design custom BI frameworks that deliver real-time visibility into performance, operations, and customer behavior. With interactive dashboards, automated reporting, and predictive insights, we enable leaders to identify trends, track KPIs, and uncover new growth opportunities.", "Whether you’re modernizing legacy data systems, migrating to the cloud, or building a data strategy from the ground up, Brase Tech equips you with the tools and expertise to turn your data into a strategic advantage."],
        keyFeatures: ["Data Warehousing", "Business Intelligence", "Real-time Analytics", "Data Pipeline Development"],
        process: ["Data Discovery", "Architecture Design", "Pipeline Development", "Analytics & Reporting"],
        technologies: ["Snowflake", "Power BI", "Tableau", "Apache Spark", "Python", "SQL"],
        outcomes: ["Data-Driven Decisions", "Improved Performance", "Cost Optimization", "Better Customer Insights"]
      },
      4: {
        overview: ["In an increasingly connected world, cybersecurity is not just a technical requirement—it's a critical business priority. As cyber threats grow in complexity and frequency, organizations must take a proactive approach to protect their data, systems, and reputation.", "Brase Tech Cybersecurity Services provide comprehensive protection across your digital ecosystem. Our solutions are designed to identify vulnerabilities, prevent breaches, and respond to threats in real time. From risk assessments and compliance audits to advanced threat detection, endpoint protection, and managed security services, we help safeguard your infrastructure against evolving cyber risks. Whether you're defending sensitive customer data, securing cloud environments, or ensuring regulatory compliance, our cybersecurity expertise empowers your business to operate with confidence in a dynamic threat landscape."],
        keyFeatures: ["Threat Detection", "Data Protection", "Compliance Solutions", "Security Monitoring"],
        process: ["Security Assessment", "Implementation", "Monitoring", "Incident Response"],
        technologies: ["SIEM Tools", "Firewalls", "Encryption", "Identity Management", "Security Analytics"],
        outcomes: ["Enhanced Security", "Compliance Achievement", "Risk Reduction", "Business Continuity"]
      },
      5: {
        overview: ["A secure, reliable, and high-performing network infrastructure is the backbone of any modern enterprise. As businesses grow and adapt to digital demands, having the right network architecture becomes critical for maintaining uptime, ensuring data security, and supporting seamless connectivity.", "Brase Tech Network Solutions are designed to deliver robust, scalable, and secure network infrastructures tailored to your business needs. From enterprise LAN/WAN design and implementation to cloud networking and SD-WAN optimization, we provide end-to-end services that ensure your systems stay connected and protected. Our solutions help organizations increase operational efficiency, reduce downtime, and enable secure remote access for a distributed workforce. With proactive monitoring, threat mitigation, and performance tuning, we ensure your network supports both today’s operations and tomorrow’s innovation."],
        keyFeatures: ["Network Design", "Implementation", "Performance Optimization", "Network Security"],
        process: ["Network Assessment", "Design & Planning", "Implementation", "Monitoring & Support"],
        technologies: ["Cisco", "Juniper", "SD-WAN", "Network Security Tools", "Monitoring Solutions"],
        outcomes: ["Improved Connectivity", "Enhanced Performance", "Better Security", "Reduced Downtime"]
      }
    };

    const specifics = serviceSpecificData[index as keyof typeof serviceSpecificData] || serviceSpecificData[0];
    return { specifics, benefits: commonBenefits };
  };

  const { specifics: serviceDetails, benefits: serviceBenefits } = getServiceDetails(parseInt(id || "0"));

  return (
    <Box sx={{ pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} sx={{ mb: 3 }}>
          Back to Services
        </Button>

        {/* Hero Section */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mb: 4,
            background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
            color: "white",
            borderRadius: 3,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8} padding={2}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <IconComponent sx={{ fontSize: 50, mr: 2 }} />
                <Typography variant="h4">{service.title}</Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ lineHeight: 1.6, opacity: 0.9 }}>
                {(serviceDetails.overview as string[]).map((line: string, index: number) => (
                  <span key={index}>
                    {line}
                    {index < (serviceDetails.overview as string[]).length - 1 && <br />}
                  </span>
                ))}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                size="large"
                sx={{ bgcolor: "white", color: "primary.main", mb: 1, "&:hover": { bgcolor: "grey.200" } }}
                component={RouterLink}
                to="/contact"
              >
                Get Free Consultation
              </Button>
              <Typography variant="body2" sx={{ color: "white", opacity: 0.8 }}>
                Ready to get started? Contact us today!
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8} alignContent={"flex-start"}>
            {/* Key Features */}
            <Paper elevation={1} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ color: "primary.main", mb: 2 }}>
                Key Features
              </Typography>
              <List>
                {serviceDetails.keyFeatures.map((feature, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          {/* Process */}
          <Grid item xs={12} md={4} alignSelf={"flex-start"}>
            <Paper elevation={1} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ color: "primary.main", mb: 2, display: "flex", alignItems: "center" }}>
                <Timeline sx={{ mr: 1 }} /> Our Process
              </Typography>
              <Grid container spacing={2}>
                {serviceDetails.process.map((step, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Paper sx={{ p: 2, textAlign: "center", bgcolor: "grey.50" }}>
                      <Typography variant="h6" color="primary.main" fontWeight="bold">
                        {index + 1}
                      </Typography>
                      <Typography variant="body2">{step}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Technologies */}
          <Grid item xs={12} md={8}>
            <Paper elevation={1} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ color: "primary.main", mb: 2, display: "flex", alignItems: "center" }}>
                <Settings sx={{ mr: 1 }} /> Technologies We Use
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {serviceDetails.technologies.map((tech, index) => (
                  <Chip key={index} label={tech} variant="outlined" color="primary" />
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* Outcomes */}
          <Grid item xs={12} md={8}>
            <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ color: "primary.main", mb: 2 }}>
                Expected Outcomes
              </Typography>
              <List>
                {serviceDetails.outcomes.map((outcome, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemIcon>
                      <CheckCircle color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary={outcome} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            {/* Benefits */}
            <Paper elevation={1} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ color: "primary.main", mb: 2 }}>
                Why Choose Our Service?
              </Typography>
              {serviceBenefits.map((benefit, index) => (
                <Box key={index} sx={{ display: "flex", mb: 2 }}>
                  <Box sx={{ mr: 2, color: "primary.main" }}>{benefit.icon}</Box>
                  <Box>
                    <Typography variant="subtitle2">{benefit.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {benefit.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Paper>

            {/* CTA */}

          </Grid>
          <Paper elevation={1} sx={{ p: 3, textAlign: "center", bgcolor: "primary.main", color: "white", borderRadius: 2 }}>
            <IconComponent sx={{ fontSize: 60 }} />
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Ready to Transform Your Business?
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Get a free consultation and tailored project proposal.
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{ bgcolor: "white", color: "primary.main", mb: 1, "&:hover": { bgcolor: "grey.200" } }}
              component={RouterLink}
              to="/contact"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{ color: "white", borderColor: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}
              component={RouterLink}
              to="/case-studies"
            >
              View Success Stories
            </Button>
          </Paper>
        </Grid>
      </Container>

    </Box >
  );
};

export default ServiceDetailsPage;
