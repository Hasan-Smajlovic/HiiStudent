"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/pages/Navigation";
import Register from "./components/pages/RegisterForm";
import HomePage from "./components/pages/HomePage";
import Jobs from "./components/pages/Jobs";
import CVPage from "./components/pages/CVPage";
import ApplyPage from "./components/pages/ApplyPage";
import PostJobPage from "./components/pages/PostJobPage";
import AboutUsPage from "./components/pages/AboutUsPage";
import FooterPage from "./components/pages/FooterPage";

const HomeLayout = () => {
  return (
    <>
      <Navigation />
      <HomePage />
      <Jobs />
      <CVPage />
      <ApplyPage />
      <PostJobPage />
      <AboutUsPage />
      <FooterPage />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/register" element={<Register />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
