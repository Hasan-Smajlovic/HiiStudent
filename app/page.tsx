"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/pages/RegisterForm";
import HomePage from "./components/pages/HomePage";
import Jobs from "./components/pages/Jobs";
import CVPage from "./components/pages/CVPage";
import ApplyPage from "./components/pages/ApplyPage";
import PostJobPage from "./components/pages/PostJobPage";
import AboutUsPage from "./components/pages/AboutUsPage";
import Layout from "./components/pages/Layout";
import BrowseJobs from "./components/pages/BrowseJobs";

const HomeLayout = () => {
  return (
    <>
      <Layout>
        <HomePage />
        <Jobs />
        <CVPage />
        <ApplyPage />
        <PostJobPage />
        <AboutUsPage />
      </Layout>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/browseJobs" element={<BrowseJobs />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
