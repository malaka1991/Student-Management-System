import React from "react";
import alarm from "../Component/Images/Alarm.png";
import bubble from "../Component/Images/Speech Bubble.png";
import togger from "../Component/Images/toggle.png";
import person from "../Component/Images/new3.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark shadow bg-white rounded ">
      <div className="container">
        <img src={togger} className="togg" alt="" />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0 navspc">
            <li className="nav-item ">
              <img src={bubble} alt="" />
            </li>
            <li className="nav-item ">
              <img src={alarm} alt="" />
            </li>
            <li className="nav-item">
              <img className="rounded-circle" alt="avatar1" src={person} />
            </li>
          </ul>
          <p className="text-primary">malaka</p>
        </div>
      </div>
    </nav>
  );
}
