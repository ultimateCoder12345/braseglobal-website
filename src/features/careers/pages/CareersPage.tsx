import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Work,
  LocationOn,
  Schedule,
  AttachMoney,
  Send,
  CheckCircle,
  People,
  School,
  TrendingUp,
  Favorite,
  Coffee,
  Flight,
} from "@mui/icons-material";

// Job openings data
const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "5+ years",
    //salary: '$120,000 - $160,000',
    description:
      "We are looking for a senior full stack developer to join our growing engineering team.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of experience in full stack development",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong problem-solving and communication skills",
    ],
    responsibilities: [
      "Design and develop scalable web applications",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
      "Participate in code reviews and technical discussions",
      "Contribute to architectural decisions",
    ],
    benefits: ["Health Insurance", "Remote Work", "401k", "Stock Options"],
  },
  {
    id: 2,
    title: "Business Development Excutive",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    experience: "3+ years",
    //salary: "$80,000 - $110,000",
    description:
      "Join our design team to create beautiful and intuitive user experiences.",
    requirements: [
      "Bachelor's degree in Design, HCI, or related field",
      "3+ years of UX/UI design experience",
      "Proficiency in Figma, Sketch, or Adobe Creative Suite",
      "Strong portfolio demonstrating design thinking",
      "Experience with user research and testing",
    ],
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with developers and product managers",
      "Maintain design systems and style guides",
      "Present design concepts to stakeholders",
    ],
    benefits: [
      "Health Insurance",
      "Flexible Hours",
      "Professional Development",
      "Creative Budget",
    ],
  }
];

// Company benefits
const companyBenefits = [
  {
    icon: <Favorite />,
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance, dental, vision, and wellness programs.",
  },
  {
    icon: <TrendingUp />,
    title: "Career Growth",
    description:
      "Professional development opportunities, mentorship, and clear career paths.",
  },
  {
    icon: <Coffee />,
    title: "Work-Life Balance",
    description:
      "Flexible hours, remote work options, and unlimited PTO policy.",
  },
  {
    icon: <Flight />,
    title: "Perks & Benefits",
    description:
      "Stock options, learning budget, team events, and travel opportunities.",
  },
];

interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter: string;
  resume: File | null;
}

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<
    (typeof jobOpenings)[0] | null
  >(null);
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null,
  });

  const handleJobClick = (job: (typeof jobOpenings)[0]) => {
    setSelectedJob(job);
  };

  const handleApplyClick = (job: (typeof jobOpenings)[0]) => {
    setApplicationData((prev) => ({ ...prev, position: job.title }));
    setApplicationOpen(true);
  };

  const handleApplicationSubmit = () => {
    // Handle application submission
    console.log("Application submitted:", applicationData);
    setApplicationOpen(false);
    setApplicationData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      coverLetter: "",
      resume: null,
    });
  };

  return (
    <>
      <Box sx={{ pt: 10, position: "relative", zIndex: 1 }}>
        {" "}
        {/* Account for fixed header */}
        {/* Hero Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              Join Our Team
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Build the future of technology with us
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto" }}>
              At BraseTech, we're passionate about creating innovative solutions
              that make a difference. Join our diverse team of talented
              professionals and help shape the future of technology while
              growing your career in a supportive and dynamic environment.
            </Typography>
          </Box>
        </Container>
        {/* Company Benefits */}
        <Box sx={{ bgcolor: "grey.50", py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{ mb: 6 }}
            >
              Why Work With Us?
            </Typography>
            <Grid container spacing={4}>
              {companyBenefits.map((benefit, index) => (
                <Grid key={index} xs={12} sm={6} md={3}>
                  <Card
                    sx={{
                      height: "100%",
                      textAlign: "center",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 4,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mb: 2,
                          color: "primary.main",
                        }}
                      >
                        {React.cloneElement(benefit.icon, {
                          fontSize: "large",
                        })}
                      </Box>
                      <Typography variant="h6" gutterBottom>
                        {benefit.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {benefit.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        {/* Job Openings */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Current Openings
          </Typography>

          <Grid container spacing={4}>
            {jobOpenings.map((job) => (
              <Grid key={job.id} xs={12} md={6}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Typography variant="h5" component="h3" gutterBottom>
                        {job.title}
                      </Typography>
                      <Chip
                        label={job.department}
                        color="primary"
                        size="small"
                      />
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {job.description}
                    </Typography>

                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                    >
                      <Chip
                        icon={<LocationOn />}
                        label={job.location}
                        variant="outlined"
                        size="small"
                      />
                      <Chip
                        icon={<Schedule />}
                        label={job.type}
                        variant="outlined"
                        size="small"
                      />
                      <Chip
                        icon={<Work />}
                        label={job.experience}
                        variant="outlined"
                        size="small"
                      />
                      {/*<Chip
                      //  icon={<AttachMoney />}
                      //  label={job.salary}
                      //  variant="outlined"
                       // size="small"
                     // /> */}
                    </Box>

                    {/*<Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.5,
                        mb: 3,
                      }}
                    >
                      {job.benefits.map((benefit, index) => (
                        <Chip
                          key={index}
                          label={benefit}
                          size="small"
                          color="secondary"
                          variant="outlined"
                        />
                      ))}
                    </Box>*/}

                    <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
                      <Button
                        variant="outlined"
                        onClick={() => handleJobClick(job)}
                        sx={{ flex: 1 }}
                      >
                        View Details
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<Send />}
                        onClick={() => handleApplyClick(job)}
                        sx={{ flex: 1 }}
                      >
                        Apply Now
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Job Details Dialog */}
        <Dialog
          open={!!selectedJob}
          onClose={() => setSelectedJob(null)}
          maxWidth="md"
          fullWidth
        >
          {selectedJob && (
            <>
              <DialogTitle>
                <Typography variant="h4">{selectedJob.title}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {selectedJob.department} • {selectedJob.location}
                </Typography>
              </DialogTitle>
              <DialogContent>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" paragraph>
                    {selectedJob.description}
                  </Typography>

                  <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Requirements:
                  </Typography>
                  <List>
                    {selectedJob.requirements.map((req, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <CheckCircle color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={req} />
                      </ListItem>
                    ))}
                  </List>

                  <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Responsibilities:
                  </Typography>
                  <List>
                    {selectedJob.responsibilities.map((resp, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <CheckCircle color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary={resp} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setSelectedJob(null)}>Close</Button>
                <Button
                  variant="contained"
                  startIcon={<Send />}
                  onClick={() => {
                    handleApplyClick(selectedJob);
                    setSelectedJob(null);
                  }}
                >
                  Apply for this Position
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
        {/* Application Dialog */}
        <Dialog
          open={applicationOpen}
          onClose={() => setApplicationOpen(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>Apply for Position</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  value={applicationData.firstName}
                  onChange={(e) =>
                    setApplicationData((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  required
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  value={applicationData.lastName}
                  onChange={(e) =>
                    setApplicationData((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                  required
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={applicationData.email}
                  onChange={(e) =>
                    setApplicationData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  required
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Phone"
                  value={applicationData.phone}
                  onChange={(e) =>
                    setApplicationData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                />
              </Grid>
              <Grid xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Years of Experience</InputLabel>
                  <Select
                    value={applicationData.experience}
                    onChange={(e) =>
                      setApplicationData((prev) => ({
                        ...prev,
                        experience: e.target.value,
                      }))
                    }
                    label="Years of Experience"
                  >
                    <MenuItem value="0-1">0-1 years</MenuItem>
                    <MenuItem value="2-3">2-3 years</MenuItem>
                    <MenuItem value="4-5">4-5 years</MenuItem>
                    <MenuItem value="6-10">6-10 years</MenuItem>
                    <MenuItem value="10+">10+ years</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Cover Letter"
                  multiline
                  rows={4}
                  value={applicationData.coverLetter}
                  onChange={(e) =>
                    setApplicationData((prev) => ({
                      ...prev,
                      coverLetter: e.target.value,
                    }))
                  }
                  placeholder="Tell us why you're interested in this position..."
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setApplicationOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={handleApplicationSubmit}>
              Submit Application
            </Button>
          </DialogActions>
        </Dialog>
        {/* Company Culture Section */}
        <Box sx={{ bgcolor: "primary.main", color: "white", py: 8 }}>
          <Container maxWidth="lg">
            <Box textAlign="center">
              <Typography variant="h3" gutterBottom>
                Our Culture
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, maxWidth: 800, mx: "auto" }}
              >
                We believe in fostering an inclusive, collaborative environment
                where everyone can thrive. Our team is our greatest asset, and
                we're committed to supporting each other's growth and success.
              </Typography>
              <Grid container spacing={4} sx={{ mt: 2 }}>
                <Grid xs={12} md={4}>
                  <People sx={{ fontSize: 60, mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Collaborative Team
                  </Typography>
                  <Typography variant="body2">
                    Work with talented individuals from diverse backgrounds
                  </Typography>
                </Grid>
                <Grid xs={12} md={4}>
                  <School sx={{ fontSize: 60, mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Continuous Learning
                  </Typography>
                  <Typography variant="body2">
                    Access to training, conferences, and skill development
                    programs
                  </Typography>
                </Grid>
                <Grid xs={12} md={4}>
                  <TrendingUp sx={{ fontSize: 60, mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Growth Opportunities
                  </Typography>
                  <Typography variant="body2">
                    Clear career paths and opportunities for advancement
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default CareersPage;
