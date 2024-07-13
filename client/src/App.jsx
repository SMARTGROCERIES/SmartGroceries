import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./Pages/FirstPage/FirstPage";
import SignUp from "./Pages/SignUp/SignUp";
import HomePage from "./Pages/HomePage/HomePage";
import Dashboard from "./Pages/Backend/Dashboard/Dashboard";
import { Auth } from "./Pages/Backend/Auth/Auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/intro" element={<FirstPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
