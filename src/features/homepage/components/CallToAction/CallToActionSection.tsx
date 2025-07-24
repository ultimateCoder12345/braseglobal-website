import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CallToActionSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box py={10} sx={{
      textAlign: "center",
      background: "linear-gradient(135deg, #1976d2, #42a5f5)",
      color: "white",
      p: 5,
      borderRadius: 2,
      boxShadow: "0 10px 30px rgba(25, 118, 210, 0.15)",
    }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Ready to Transform Your Business?
      </Typography>
      <Typography variant="body1"
        sx={{
          mb: 4,
          maxWidth: 600,
          mx: "auto",
          fontSize: "1.1rem",
          opacity: 0.9
        }}>
        Let's build the future of your IT infrastructure together. Get in touch to start the conversation.
      </Typography>
      <Stack justifyContent="center" direction="row">
        <Button onClick={() => navigate("/contact")}>
          <Typography sx={{
            bgcolor: "white",
            color: "primary.main",
            "&:hover": { bgcolor: "grey.100" },
            px: 3,
            py: 1,
            fontSize: "0.95rem",
            fontWeight: 500,
            borderRadius: 2,
          }}>
            Request a Consultation
          </Typography>

        </Button>
      </Stack>
    </Box>
  );
};

export default CallToActionSection;
