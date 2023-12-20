"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Register from "./components/RegisterForm";
import HomePage from "./components/HomePage";
import Jobs from "./components/Jobs";

const HomeLayout = () => {
  return (
    <>
      <Navigation />
      <HomePage />
      <Jobs />
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
