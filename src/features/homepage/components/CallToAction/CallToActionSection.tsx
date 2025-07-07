import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CallToActionSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box py={10} textAlign="center">
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Ready to Transform Your Business?
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" maxWidth="sm" mx="auto" mb={4}>
        Let's build the future of your IT infrastructure together. Get in touch to start the conversation.
      </Typography>
      <Stack justifyContent="center" direction="row">
        <Button variant="contained" onClick={() => navigate("/contact")}>
          Request a Consultation
        </Button>
      </Stack>
    </Box>
  );
};

export default CallToActionSection;
