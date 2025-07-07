import MainLayout from "../../components/layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../features/homepage/pages/HomePage";

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
