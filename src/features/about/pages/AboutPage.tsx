import React from "react";
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
  // Get leadership team from data
  const leadership = getLeadershipTeam();

  return (
    <>
      <Box sx={{ pt: 10, position: "relative", zIndex: 1 }}>
        {/* Hero Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                mb: 3,
              }}
            >
              About Brase Technologies
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              paragraph
              sx={{ mb: 4 }}
            >
              Innovative IT consulting solutions for the digital age
            </Typography>
            <Box
              sx={{
                height: 4,
                background: "linear-gradient(90deg, #1976d2, #42a5f5)",
                borderRadius: 2,
                mb: 4,
              }}
            />
          </Box>

          <Grid container spacing={6} alignItems="center">
            <Grid>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
              >
                Brase Technologies is an innovative IT consulting firm with
                around 80+ engineering team headquartered in Sydney, Australia
                and offices in Melbourne, US and offshore development centers in
                Hyderabad, India. We provide bespoke solutions, quality manpower
                across industries and domains.
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
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
            </Grid>
            <Grid>
              <Box
                component="img"
                src="src/assets/images/About-us-image.png"
                alt="About BraseTech"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 3,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>

        {/* Company Values Section */}
        <Box
          sx={{
            bgcolor: "rgba(255,255,255,0.8)",
            py: 8,
            backdropFilter: "blur(10px)",
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
                }}
              />
            </Box>
            <Grid container spacing={4}>
              {companyValues.map((value, index) => (
                <Grid key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      textAlign: "center",
                      background: "rgba(255,255,255,0.9)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(25, 118, 210, 0.1)",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-12px)",
                        boxShadow: "0 20px 40px rgba(25, 118, 210, 0.15)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mb: 3,
                          color: "primary.main",
                        }}
                      >
                        {React.cloneElement(value.icon, { fontSize: "large" })}
                      </Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
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
          <Grid container spacing={6} alignItems="center">
            <Grid>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                Our Achievements
              </Typography>
              <Box
                sx={{
                  height: 4,
                  background: "linear-gradient(90deg, #1976d2, #42a5f5)",
                  borderRadius: 2,
                  width: 100,
                  mb: 3,
                }}
              />
              <Typography
                variant="body1"
                paragraph
                color="text.secondary"
                sx={{ fontSize: "1.1rem", mb: 4 }}
              >
                We're proud of what we've accomplished and the trust our clients
                place in us. Here are some key milestones that reflect our
                commitment to excellence.
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(25, 118, 210, 0.1)",
                  borderRadius: 3,
                }}
              >
                <List>
                  {achievements.map((achievement, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon>
                        <CheckCircle color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={achievement} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid>
              <Box
                component="img"
                src="src/assets/images/Achivements1.jpg"
                alt="Our Achievements"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 3,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>

        {/* Leadership Team Section */}
        <Box
          sx={{
            bgcolor: "rgba(255,255,255,0.8)",
            py: 8,
            backdropFilter: "blur(10px)",
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
                }}
              />
            </Box>
            <Grid container spacing={4}>
              {leadership.map((leader) => (
                <Grid key={leader.id}>
                  <Card
                    sx={{
                      textAlign: "center",
                      height: "100%",
                      background: "rgba(255,255,255,0.9)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(25, 118, 210, 0.1)",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-12px)",
                        boxShadow: "0 20px 40px rgba(25, 118, 210, 0.15)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Avatar
                        src={leader.avatar}
                        alt={leader.name}
                        sx={{
                          width: 120,
                          height: 120,
                          mx: "auto",
                          mb: 3,
                          border: "4px solid",
                          borderColor: "primary.main",
                          boxShadow: "0 8px 32px rgba(25, 118, 210, 0.2)",
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
                        sx={{ mb: 2, borderRadius: 2 }}
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{ lineHeight: 1.6 }}
                      >
                        {leader.bio}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="caption" color="text.secondary">
                          {leader.experience} years experience •{" "}
                          {leader.certifications.length} certifications
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: 3,
                        }}
                      >
                        <IconButton
                          component="a"
                          href={`${leader.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
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
              p: 6,
              borderRadius: 3,
              boxShadow: "0 20px 40px rgba(25, 118, 210, 0.2)",
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Ready to Transform Your Business?
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, maxWidth: 600, mx: "auto", fontSize: "1.1rem" }}
            >
              Let's discuss how our bespoke solutions and quality engineering
              team can help you achieve your technology goals with our flexible
              engagement models.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Chip
                label="Contact Us"
                clickable
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  "&:hover": { bgcolor: "grey.100" },
                  px: 3,
                  py: 1.5,
                  fontSize: "1rem",
                  borderRadius: 2,
                }}
              />
              <Chip
                label="View Our Services"
                clickable
                variant="outlined"
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                  px: 3,
                  py: 1.5,
                  fontSize: "1rem",
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
