import MainLayout from "../../components/layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import Home from "../../features/homepage/pages/Home";
import AboutPage from "../../features/about/pages/AboutPage";
import ServicesPage from "../../features/services/pages/ServicesPage";
import ServiceDetailsPage from "../../features/services/pages/ServiceDetailsPage";
import ContactPage from "../../features/contact/pages/ContactPage";
import ProductsPage from "../../features/Products/pages/ProductsPage";
import CareersPage from "../../features/careers/pages/CareersPage";
import CaseStudiesPage from "../../features/caseStudies/pages/CaseStudiesPage";
import CaseStudyDetailsPage from "../../features/caseStudies/pages/CaseStudyDetailsPage";
import TeamPage from "../../features/team/pages/TeamPage";
import TeamMemberDetailsPage from "../../features/team/pages/TeamMemberDetailsPage";
// import ClientsPage from "../../features/clients/pages/ClientsPage";

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetailsPage />} />
        {/* <Route path="/clients" element={<ClientsPage />} /> */}
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetailsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team/:id" element={<TeamMemberDetailsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
