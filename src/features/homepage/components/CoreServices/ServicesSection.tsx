import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { services } from "../../services/data/services";

const ServicesSection: React.FC = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <Box py={10} bgcolor="background.paper">
      <Box textAlign="center" mb={6}>
        <Chip label="Our Expertise" variant="outlined" />
        <Typography variant="h4" fontWeight="bold" mt={2}>
          Comprehensive IT Services
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mt={2}>
          We provide a wide range of services to meet your business needs.
        </Typography>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr", // 1 per row on mobile
          sm: "1fr 1fr", // 2 per row on small screens
          md: "1fr 1fr 1fr", // 3 per row on md and up
        }}
        gap={4}
        justifyItems="center"
      >
        {services.map((service, idx) => {
          const Icon = service.icon;
          const isFlipped = flippedIndex === idx;

          return (
            <Box
              key={idx}
              sx={{
                perspective: "1000px",
                height: "320px",
                width: "100%", // Ensures equal width in grid cell
                maxWidth: 350, // Optional: sets a max width for cards
                cursor: "pointer",
                position: "relative",
              }}
              onMouseEnter={() => !isMobile && setFlippedIndex(idx)}
              onMouseLeave={() => !isMobile && setFlippedIndex(null)}
              onClick={() => isMobile && handleFlip(idx)}
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front */}
                <Paper
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    borderRadius: 2,
                    p: 4,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  elevation={3}
                >
                  <Box mb={2}>
                    <Icon size={40} color="#1976d2" />
                  </Box>
                  <Typography variant="h6" fontWeight="bold">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {service.description}
                  </Typography>
                </Paper>

                {/* Back */}
                <Paper
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    borderRadius: 2,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                  elevation={3}
                >
                  <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                    Features:
                  </Typography>
                  <List dense>
                    {service.features.map((feature: string, i: number) => (
                      <ListItem key={i}>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </motion.div>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ServicesSection;
