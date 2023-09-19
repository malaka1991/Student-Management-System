import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Home from "./Home";
import Students from "./Students";
import Instructors from "./Instructors";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Main() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className="w-auto">
          <Sidebar />
        </div>
        <div className="col overfolw-auto">
          <Routes>
            <Route path="/" element={<><Navbar /><Home /></>}></Route>
            <Route path="/Students" element={<Students />}></Route>
            <Route path="/Instructors" element={<Instructors />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
