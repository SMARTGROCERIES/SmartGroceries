import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./Pages/FirstPage/FirstPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
