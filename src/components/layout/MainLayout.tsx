import Box from "@mui/material/Box";
import { Header } from "./Header/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box component="main">
        <Header />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
