import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  CheckCircle,
  Business,
  People,
  TrendingUp,
  Security,
  LinkedIn,
} from "@mui/icons-material";
import { getLeadershipTeam } from "../../../data/team";

// Company values data
const companyValues = [
  {
    icon: <Security />,
    title: "Trust & Reliability",
    description:
      "We build lasting relationships through consistent delivery and transparent communication.",
  },
  {
    icon: <TrendingUp />,
    title: "Innovation",
    description:
      "We stay ahead of technology trends to provide cutting-edge solutions.",
  },
  {
    icon: <People />,
    title: "Collaboration",
    description:
      "We work closely with our clients as partners in their success.",
  },
  {
    icon: <Business />,
    title: "Excellence",
    description: "We maintain the highest standards in everything we deliver.",
  },
];

// Company achievements
const achievements = [
  "80+ engineering team members",
  "Global presence across Australia, US and India",
  "End-to-end IT services delivery",
  "Best-of-breed technologies implementation",
  "Agile and flexible engagement models",
  "Multi-industry software development experience",
];

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  // Get leadership team from data
  const leadership = getLeadershipTeam();

  return (
    <>
      {/* Hero Section */}
      <Box
        textAlign="center"
        sx={{
          position: "relative",
          padding: { xs: "4rem 0", md: "6rem 0" },
          textAlign: "center",
          // Set the background image
          backgroundImage: 'url("/src/assets/images/AboutusImage.png")', // <-- REPLACE WITH YOUR IMAGE URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          // Create a dark overlay for text readability
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust opacity (0.0 to 1.0)
            zIndex: 1,
          },
        }}
      ><Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              paddingTop: 10,
              fontWeight: "bold",
              color: "white", // Changed color for contrast
              mb: 3,
            }}
          >
            Innovative IT consulting solutions for the digital age
          </Typography>
          {/* <Typography
            variant="h5"
            paragraph
            sx={{
              mb: 4,
              color: "grey.300", // Changed color for contrast
            }}
          >
            Innovative IT consulting solutions for the digital age
          </Typography> */}
        </Container>
      </Box>

      <Box sx={{ pt: 10, position: "relative", zIndex: 1 }}>

        <Container maxWidth="lg" sx={{ py: 1 }}>
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: '100%' }}
          >
            {/* Text Content - Left Side */}
            <Box sx={{ flex: 1, pr: { md: 4 } }}>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 0,
                  textAlign: 'justify',
                  textJustify: 'inter-character',
                  hyphens: 'auto',
                  wordSpacing: '-0.1px',
                  letterSpacing: '0.05px',
                  '&::after': {
                    content: '""',
                    display: 'inline-block',
                    width: '100%'
                  },
                }}
              >
                Brase Technologies is an innovative IT consulting firm with
                around 80+ engineering team headquartered in Sydney, Australia
                and offices in Melbourne, US and offshore development centers in
                Hyderabad, India. We provide bespoke solutions, quality manpower
                across industries and domains.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 3,
                  textAlign: 'justify',
                  textJustify: 'inter-character', // More precise than inter-word
                  hyphens: 'auto',              // Automatic hyphenation
                  wordSpacing: '-0.1px',        // Fine-tune word spacing
                  letterSpacing: '0.05px',      // Micro-adjust character spacing
                  '&::after': {                 // Force last line justification
                    content: '""',
                    display: 'inline-block',
                    width: '100%'
                  },
                }}
              >
                Brase Tech services the information technology requirements of
                companies by using best-of-breed technologies and flexible
                engagement models. We offer end-to-end IT services that can be
                quickly built and deployed to suit the client's unique industry
                requirements. We offer IT services that are highly agile and
                help clients respond quickly to changes in business dynamics.
                Our software development experience in multiple industries has
                enabled us to develop cloud softwares, mobile applications, CRM
                portals, workflow automation, large scale e-commerce
                applications, data analytics, business intelligence and
                artificial intelligence solutions.
              </Typography>
            </Box>

            {/* Image - Right Side */}
            {/* <Box sx={{
              flex: '0 0 auto',
              maxWidth: { xs: '110%', md: '80%' },
              pl: { md: 4 }
            }}> */}
            <Box
              component="img"
              src="src/assets/images/About-us-image.png"
              alt="About BraseTech"
              sx={{
                width: "100%",
                maxWidth: 500,
                height: "auto",
                borderRadius: 2,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            />
            {/* </Box> */}
          </Grid>
        </Container>

        {/* Company Values Section */}
        <Box
          sx={{
            bgcolor: "rgba(250, 250, 252, 0.9)",
            py: 8,
            backdropFilter: "blur(8px)",
          }}
        >
          <Container maxWidth="lg">
            <Box textAlign="center" sx={{ mb: 6 }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                Our Core Values
              </Typography>
              <Box
                sx={{
                  height: 4,
                  background: "linear-gradient(90deg, #1976d2, #42a5f5)",
                  borderRadius: 2,
                  width: 100,
                  mx: "auto",
                  mb: 4,
                }}
              />
            </Box>
            <Grid container spacing={4} justifyContent="center">
              {companyValues.map((value, index) => (
                <Grid item xs={6} sm={6} md={3} key={index} sx={{ display: "flex" }} {...({} as any)}>
                  <Card
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      background: "white",
                      border: "1px solid rgba(25, 118, 210, 0.1)",
                      transition: "all 0.3s ease-in-out",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 10px 25px rgba(25, 118, 210, 0.1)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, flexGrow: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mb: 3,
                          color: "primary.main",
                        }}
                      >
                        {React.cloneElement(value.icon, {
                          fontSize: "large",
                          sx: { fontSize: "2.5rem" }
                        })}
                      </Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600, mb: 2 }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Achievements Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          {/* ONE Grid container acting as a flex row */}
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold", color: "primary.main", paddingLeft: 50 }}
          >
            Our Achievements
          </Typography>
          <Typography
            sx={{ paddingLeft: 50 }}>
            <Box
              sx={{
                height: 4,
                background: "linear-gradient(90deg, #1976d2, #42a5f5)",
                borderRadius: 2,
                width: 100,
                mx: 20,
                mb: 4,
              }}
            />
          </Typography>


          <Typography
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{ fontSize: "1.1rem", mb: 4 }}
          >
            We're proud of what we've accomplished and the trust our clients place
            in us. Here are some key milestones that reflect our commitment to
            excellence.
          </Typography>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: { xs: "wrap", md: "nowrap" }   // stack on mobile, row on md+
            }}
          >
            {/* ---------- LEFT: Content ---------- */}
            <Box
              sx={{
                flex: { xs: "1 1 100%", md: "1 1 55%" }, // full width on mobile, 55% on md+
                pr: { md: 4 },                          // space between text & image
                order: { xs: 2, md: 1 }                 // keep content below image on mobile
              }}
            >
              {/* Milestone list */}
              <Paper
                elevation={0}
                sx={{
                  height: 450,
                  maxWidth: 500,
                  p: 3,
                  background: "white",
                  border: "1px solid rgba(25,118,210,0.1)",
                  borderRadius: 2,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
                }}
              >
                <List>
                  {achievements.map((achievement, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircle color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={achievement}
                        primaryTypographyProps={{ variant: "body1" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Box>

            {/* ---------- RIGHT: Image ---------- */}
            <Box
              sx={{
                flex: { xs: "1 1 100%", md: "0 0 45%" }, // full width on mobile, fixed 45% on md+
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                order: { xs: 1, md: 2 },               // show image first on mobile
                pl: { md: 4 }                          // space between image & text
              }}
            >
              <Box
                component="img"
                src="src/assets/images/Achivements1.jpg"
                alt="Our Achievements"
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              />
            </Box>
          </Grid>
        </Container>

        {/* Leadership Team Section */}
        <Box
          sx={{
            bgcolor: "rgba(250, 250, 252, 0.9)",
            py: 8,
            backdropFilter: "blur(8px)",
          }}
        >
          <Container maxWidth="lg">
            <Box textAlign="center" sx={{ mb: 6 }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                Leadership Team
              </Typography>
              <Box
                sx={{
                  height: 4,
                  background: "linear-gradient(90deg, #1976d2, #42a5f5)",
                  borderRadius: 2,
                  width: 100,
                  mx: "auto",
                  mb: 4,
                }}
              />
            </Box>
            <Grid container spacing={4} justifyContent="center">
              {leadership.map((leader) => (
                <Grid key={leader.id} item xs={12} sm={6} md={8} lg={4} {...({} as any)}
                  sx={{
                    height: '100%', // Makes all cards in a row have the same height
                    display: "flex",
                    flexDirection: "row",
                    width: '45%',
                  }}
                >
                  <Card
                    sx={{
                      height: '100%', // Makes all cards in a row have the same height
                      // display: "flex",
                      // flexDirection: "column",
                      // width: '30%',
                      textAlign: "center",
                      background: "white",
                      border: "1px solid rgba(25, 118, 210, 0.1)",
                      transition: "all 0.3s ease-in-out",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 10px 25px rgba(25, 118, 210, 0.1)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Avatar
                        src={leader.avatar}
                        alt={leader.name}
                        sx={{
                          width: 100,
                          height: 100,
                          mx: "auto",
                          mb: 3,
                          border: "3px solid",
                          borderColor: "primary.main",
                          boxShadow: "0 5px 20px rgba(25, 118, 210, 0.15)",
                        }}
                      />
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {leader.name}
                      </Typography>
                      <Chip
                        label={leader.position}
                        color="primary"
                        variant="outlined"
                        size="small"
                      // sx={{ mb: 2, borderRadius: 2 }}
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{
                          wordWrap: 'break-word',  // Ensures words break to prevent overflow
                          overflowWrap: 'break-word', // Modern alternative to wordWrap
                          whiteSpace: 'normal',   // Explicitly set (default but good practice)
                          lineHeight: 1.6,        // Maintains your original line height
                          mb: 2,                  // Maintains your original bottom margin
                          textAlign: 'justify'    // Optional: for cleaner line breaks
                        }}
                      >
                        {leader.bio}
                      </Typography>
                      <Box sx={{ mt: "auto" }}>
                        <Typography variant="caption" color="text.secondary">
                          {leader.experience} years experience •{" "}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 2,
                          }}
                        >
                          <IconButton
                            component="a"
                            href={`${leader.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={{
                              color: "#0077B5",
                              "&:hover": {
                                bgcolor: "rgba(0, 119, 181, 0.1)",
                              },
                            }}
                          >
                            <LinkedIn />
                          </IconButton>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Call to Action Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box
            sx={{
              textAlign: "center",
              background: "linear-gradient(135deg, #1976d2, #42a5f5)",
              color: "white",
              p: 5,
              borderRadius: 2,
              boxShadow: "0 10px 30px rgba(25, 118, 210, 0.15)",
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 2 }}>
              Ready to Transform Your Business?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                maxWidth: 600,
                mx: "auto",
                fontSize: "1.1rem",
                opacity: 0.9
              }}
            >
              Let's discuss how our bespoke solutions and quality engineering
              team can help you achieve your technology goals with our flexible
              engagement models.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Chip
                label="Contact Us"
                clickable
                size="medium"
                onClick={() => navigate("/contact")}
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  "&:hover": { bgcolor: "grey.100" },
                  px: 3,
                  py: 1,
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  borderRadius: 2,
                }}
              />
              <Chip
                label="View Our Services"
                clickable
                size="medium"
                variant="outlined"
                onClick={() => navigate("/services")}
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                  px: 3,
                  py: 1,
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  borderRadius: 2,
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutPage;