import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Hostel from "./pages/Hostel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hostels" element={<List />}></Route>
        <Route path="/hostels/:id" element={<Hostel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
