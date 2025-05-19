import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth/authentication";
import Home from "./pages/home/homePage";
import BosniaPage from "./pages/sections/bosnian/bosniaPage";
import BosniaJobsPage from "./pages/jobs/bosnianJobsPage"; // You'll need to create this
import BosniaInternshipsPage from "./pages/internships/bosniaInternship"; // You'll need to create this
import EuropePage from "./pages/sections/europe/europePage";
import EuropeJobsPage from "./pages/jobs/bosnianJobsPage"; // Create this
import EuropeInternshipsPage from "./pages/internships/bosniaInternship"; // Create this
import AboutPage from "./pages/about/aboutPage";
import ContactPage from "./pages/contact/contactPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bosnia" element={<BosniaPage />} />
        <Route path="/bosnia/jobs" element={<BosniaJobsPage />} />
        <Route path="/bosnia/internships" element={<BosniaInternshipsPage />} />
        <Route path="/europe" element={<EuropePage />} />
        <Route path="/europe/jobs" element={<EuropeJobsPage />} />
        <Route path="/europe/internships" element={<EuropeInternshipsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}
