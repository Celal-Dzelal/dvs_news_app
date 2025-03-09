import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import News from "../pages/News";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
