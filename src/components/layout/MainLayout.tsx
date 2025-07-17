import React from "react";
import { Box } from "@mui/material";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  useScrollToTop();

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;