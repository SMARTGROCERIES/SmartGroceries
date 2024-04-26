import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./Pages/FirstPage/FirstPage";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
