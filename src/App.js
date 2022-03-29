import React from "react";
import Home from "./components/Home/Home";
import LogInForm from "./components/LogIn/LogInForm/LogInForm";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogInForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
