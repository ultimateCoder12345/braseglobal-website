import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Chip,
  Avatar,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import {
  ArrowBack,
  LinkedIn,
  Twitter,
  GitHub,
  Email,
} from "@mui/icons-material";
import { getTeamMemberById } from "../../../data/team";

export const TeamMemberDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const member = getTeamMemberById(id || "");

  if (!member) {
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
        <Typography variant="h4">Team member not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          sx={{ mb: 3 }}
        >
          Back to Team
        </Button>

        <Paper elevation={3} sx={{ p: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{ width: 200, height: 200, mx: "auto", mb: 2 }}
                />
                <Typography variant="h4" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="h6" color="primary.main" gutterBottom>
                  {member.position}
                </Typography>
                <Chip
                  label={member.department}
                  color="primary"
                  sx={{ mb: 2 }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    mb: 3,
                  }}
                >
                  <IconButton
                    component="a"
                    href={`mailto:${member.email}`}
                    sx={{ bgcolor: "primary.main", color: "white" }}
                  >
                    <Email />
                  </IconButton>
                  {member.linkedin && (
                    <IconButton
                      component="a"
                      href={member.linkedin}
                      target="_blank"
                      sx={{ bgcolor: "#0077B5", color: "white" }}
                    >
                      <LinkedIn />
                    </IconButton>
                  )}
                  {member.twitter && (
                    <IconButton
                      component="a"
                      href={member.twitter}
                      target="_blank"
                      sx={{ bgcolor: "#1DA1F2", color: "white" }}
                    >
                      <Twitter />
                    </IconButton>
                  )}
                  {member.github && (
                    <IconButton
                      component="a"
                      href={member.github}
                      target="_blank"
                      sx={{ bgcolor: "#333", color: "white" }}
                    >
                      <GitHub />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography variant="h5" gutterBottom>
                About {member.name.split(" ")[0]}
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                {member.bio}
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" gutterBottom>
                    Experience
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {member.experience} years
                  </Typography>

                  <Typography variant="h6" gutterBottom>
                    Education
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {member.education}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" gutterBottom>
                    Skills
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    {member.skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        variant="outlined"
                        color="primary"
                        size="small"
                      />
                    ))}
                  </Box>

                  <Typography variant="h6" gutterBottom>
                    Certifications
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    {member.certifications.map((cert, index) => (
                      <Typography key={index} variant="body2">
                        • {cert}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default TeamMemberDetailsPage;
