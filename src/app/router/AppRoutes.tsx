import MainLayout from "../../components/layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import Home from "../../features/homepage/pages/Home";

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
