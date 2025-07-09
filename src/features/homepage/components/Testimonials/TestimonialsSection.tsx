// TestimonialsSection.tsx
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { testimonials } from "../../services/data/testimonials";

const TestimonialsSection: React.FC = () => {
  return (
    <Box py={10} bgcolor="grey.100">
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight="bold">
          What Our Clients Say
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mt={2}>
          Hear from businesses who have partnered with us.
        </Typography>
      </Box>

      <Box 
        display="flex" 
        flexWrap="wrap" 
        gap={4} 
        justifyContent="center"
        px={2}
      >
        {testimonials.map((testimonial, idx) => (
          <Box 
            key={idx}
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' },
              maxWidth: { xs: '100%', md: 'calc(50% - 16px)' },
              minWidth: { xs: '100%', md: '300px' }
            }}
          >
            <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
              <Typography variant="body1" fontStyle="italic">
                "{testimonial.text}"
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" mt={4}>
                <Avatar src={testimonial.avatar} alt={testimonial.name} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.title}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialsSection;