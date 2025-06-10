import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth/authentication";
import Home from "./pages/home/homePage";
import BosniaPage from "./pages/sections/bosnian/bosniaPage";
import BosniaJobsPage from "./pages/jobs/bosnianJobsPage";
import BosniaInternshipsPage from "./pages/internships/bosniaInternship";
import EuropePage from "./pages/sections/europe/europePage";
import EuropeJobsPage from "./pages/jobs/europeJobsPage";
import EuropeInternshipsPage from "./pages/internships/bosniaInternship";
import AboutPage from "./pages/about/aboutPage";
import ContactPage from "./pages/contact/contactPage";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Profile from "./pages/profile/profile";
import ChatBot from "./components/chatbot";
import HelpPage from "./pages/help/helpPage"; 
import ChatRoomPage from "./pages/chatroom/chatroomPage";


// Layout component with ChatBot
const Layout = ({ children, userType }) => {
  return (
    <>
      {/* Your existing layout */}
      {children}
      
      {/* Add ChatBot at the bottom */}
      <ChatBot userType={userType || 'student'} />
    </>
  );
};

export default function App() {
  // You might want to get the userType from your auth system
  const userType = 'student'; // Default or get from auth context
  
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={
          <Layout userType={userType}>
            <Home />
          </Layout>
        } />
        <Route path="/login" element={
          <Layout userType={userType}>
            <Login />
          </Layout>
        } />
        <Route path="/signup" element={
          <Layout userType={userType}>
            <Signup />
          </Layout>
        } />
        <Route path="/profile" element={
          <Layout userType={userType}>
            <Profile />
          </Layout>
        } />
        <Route path="/bosnia" element={
          <Layout userType={userType}>
            <BosniaPage />
          </Layout>
        } />
        <Route path="/bosnia/jobs" element={
          <Layout userType={userType}>
            <BosniaJobsPage />
          </Layout>
        } />
        <Route path="/bosnia/internships" element={
          <Layout userType={userType}>
            <BosniaInternshipsPage />
          </Layout>
        } />
        <Route path="/europe" element={
          <Layout userType={userType}>
            <EuropePage />
          </Layout>
        } />
        <Route path="/europe/jobs" element={
          <Layout userType={userType}>
            <EuropeJobsPage />
          </Layout>
        } />
        <Route path="/europe/internships" element={
          <Layout userType={userType}>
            <EuropeInternshipsPage />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout userType={userType}>
            <AboutPage />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout userType={userType}>
            <ContactPage />
          </Layout>
        } />
        <Route path="/features" element={
          <Layout userType={userType}>
            <div>Features Page</div>
          </Layout>
        } />
        <Route path="/help" element={
          <Layout userType={userType}>
            <HelpPage />
          </Layout>
        } />
        <Route path="/chatroom" element={
          <Layout userType={userType}>
            <ChatRoomPage />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}