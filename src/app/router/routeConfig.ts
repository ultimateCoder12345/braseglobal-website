// routes.js
import CareersPage from '../../features/careers/pages/CareersPage';
import CaseStudiesPage from '../../features/caseStudies/pages/CaseStudiesPage';
import ClientsPage from '../../features/clients/pages/ClientsPage';
import ContactPage from '../../features/contact/pages/ContactPage';
import TeamPage from '../../features/team/pages/TeamPage';
import NotFoundPage from '../../features/notFound/pages/NotFoundPage';

const routes = [
  { path: '/careers', component: CareersPage, title: 'Careers' },
  { path: '/case-studies', component: CaseStudiesPage, title: 'Case Studies' },
  { path: '/clients', component: ClientsPage, title: 'Clients' },
  { path: '/team', component: TeamPage, title: 'Our Team' },
  { path: '/contact', component: ContactPage, title: 'Contact Us' },
  { path: '*', component: NotFoundPage, title: 'Page Not Found' },
];

export default routes;