import { lazy } from 'react';

const Home = lazy(() => import('../../features/homepage/pages/Home'));
const About = lazy(() => import('../../features/about/pages/AboutPage'));
const Services = lazy(() => import('../../features/services/pages/ServicesPage'));
const ServiceDetails = lazy(() => import('../../features/services/pages/ServiceDetailsPage'));
const CaseStudies = lazy(() => import('../../features/caseStudies/pages/CaseStudiesPage'));
const CaseStudyDetails = lazy(() => import('../../features/caseStudies/pages/CaseStudyDetailsPage'));
const Team = lazy(() => import('../../features/team/pages/TeamPage'));
const TeamMemberDetails = lazy(() => import('../../features/team/pages/TeamMemberDetailsPage'));
const Careers = lazy(() => import('../../features/careers/pages/CareersPage'));
const Contact = lazy(() => import('../../features/contact/pages/ContactPage'));
const NotFound = lazy(() => import('../../features/notFound/pages/NotFoundPage'));

export const routes = [
  { path: '/', element: Home, title: 'Home' },
  { path: '/about', element: About, title: 'About Us' },
  { path: '/services', element: Services, title: 'Services' },
  { path: '/services/:id', element: ServiceDetails, title: 'Service Details' },
  { path: '/case-studies', element: CaseStudies, title: 'Case Studies' },
  { path: '/case-studies/:id', element: CaseStudyDetails, title: 'Case Study Details' },
  { path: '/team', element: Team, title: 'Our Team' },
  { path: '/team/:id', element: TeamMemberDetails, title: 'Team Member Details' },
  { path: '/careers', element: Careers, title: 'Careers' },
  { path: '/contact', element: Contact, title: 'Contact Us' },
  { path: '*', element: NotFound, title: 'Page Not Found' },
];