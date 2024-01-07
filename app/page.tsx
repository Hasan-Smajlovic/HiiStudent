"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/pages/Navigation";
import Register from "./components/pages/RegisterForm";
import HomePage from "./components/pages/HomePage";
import Jobs from "./components/pages/Jobs";
import CVPage from "./components/pages/CVPage";

const HomeLayout = () => {
  return (
    <>
      <Navigation />
      <HomePage />
      <Jobs />
      <CVPage />
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
