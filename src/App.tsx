import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
// import AboutPage from "./components/pages/about/AboutPage";
import "./App.css";
import CookieConsent from "./components/pages/CookieConsent";

import NotFoundPage from "./components/pages/NotFoundPage";
import LayoutPage from "./components/pages/LayoutPage";
import OurWorks from "./components/pages/works/OurWorks";

import BlogDetails from "./components/pages/blog/BlogDetails";
import BlogLayout from "./components/pages/blog/BlogLayout";
import ContactUs from "./components/pages/contact/ContactUs";
import Backup from "./components/pages/solutions/Backup";
import Virtualization from "./components/pages/solutions/virtualization";
import Networking from "./components/pages/solutions/networking";
import Cloud from "./components/pages/solutions/cloud";
import OurCompany from "./components/pages/about/OurCompany";
import OurCapabilities from "./components/pages/about/OurCapabilities";
import OurPeople from "./components/pages/about/OurPeople";
import Careers from "./components/pages/about/Careers";
import Automation from "./components/pages/automation/Automation";
import DevOps from "./components/pages/automation/DevOps";
import ITAutomation from "./components/pages/automation/ITAutomation";
import ResourcesBlog from "./components/pages/resources/ResourcesBlog";
import CaseStudies from "./components/pages/resources/CaseStudies";
import ScrollToTopAl from "./lib/ScrollToTop";

function App() {
  
  return (
    <>
    <>
      {/* Your existing routes/layout */}
      <CookieConsent />
    </>
      <Router>

        <ScrollToTopAl/>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<LandingPage />} />
            <Route path="/solutions/backup" element={<Backup />} />
            <Route path="/solutions/virtualization" element={<Virtualization />} />
            <Route path="/solutions/networking" element={<Networking />} />
            <Route path="/solutions/cloud" element={<Cloud />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about/our-company" element={<OurCompany />} />
            <Route path="/about/capabilities" element={<OurCapabilities />} />
            <Route path="/about/people" element={<OurPeople />} />
            <Route path="/about/careers" element={<Careers />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/automation/devops" element={<DevOps />} />
            <Route path="/automation/it" element={<ITAutomation />} />
            <Route path="/resources/blog" element={<ResourcesBlog />} />
            <Route path="/resources/case-studies" element={<CaseStudies />} />
            <Route path="/portfolio" element={<OurWorks />} />
            <Route path="/blogs" element={<BlogLayout />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          
        </Routes>
      </Router>
    </>
  );
}


export default App;