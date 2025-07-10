import MainLayout from "../../components/layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import Home from "../../features/homepage/pages/Home";
import AboutPage from "../../features/about/pages/AboutPage";
import ServicesPage from "../../features/services/pages/ServicesPage";
import ContactPage from "../../features/contact/pages/ContactPage";
import CareersPage from "../../features/careers/pages/CareersPage";
import CaseStudiesPage from "../../features/caseStudies/pages/CaseStudiesPage";
import ClientsPage from "../../features/clients/pages/ClientsPage";

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
