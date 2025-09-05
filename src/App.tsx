import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import AboutPage from "./components/pages/about/AboutPage";
import "./App.css";

import NotFoundPage from "./components/pages/NotFoundPage";
import LayoutPage from "./components/pages/LayoutPage";
import OurWorks from "./components/pages/works/OurWorks";

import BlogDetails from "./components/pages/blog/BlogDetails";
import BlogLayout from "./components/pages/blog/BlogLayout";
import ContactUs from "./components/pages/contact/ContactUs";
import ScrollToTopAl from "./lib/ScrollToTop";

function App() {
  
  return (
    <>
      <Router>

        <ScrollToTopAl/>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUs />} />
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