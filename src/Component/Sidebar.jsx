import React, { useState } from "react";
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import logo from "../Component/Images/logo.png"
import control from "../Component/Images/Control Panel.png"
import student from "../Component/Images/Students.png"
import courses from "../Component/Images/Diploma.png"
import instructors from "../Component/Images/Online Group Studying.png"
import announcements from "../Component/Images/Commercial.png"
import users from "../Component/Images/Users.png"
import permission from "../Component/Images/Diploma.png"

export default function Sidebar() {

  const [active, setActive] = useState(1);
  
  return (
    <div className=" Sidbarbg vh-100 sidebar d-flex justify-content-between flex-column p-3 py-5  ">
      <div>
        <img src={logo} alt="" />
        <hr className="text-info " />
        <ul className="nav nav-pills flex-column ">
          <li
            className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(1)}

          // <<<<<<Link Dashboard>>>>>>>>  
          >
            <Link to="/" className="text-decoration-none">
              <div className="manuItem">
              <img src={control} alt="" />
              <span className=" text-info fs-5 "><strong>Dashboard</strong></span>
              </div>
            </Link>
          </li>
          <li
            className={active === 2 ? "active nav-item p-2" : "nav-item p-2 mt-2"}
            onClick={(e) => setActive(2)}
          >

          {/* <<<<<<Link Student>>>>>>>>   */}
            <Link to="/Students" className="text-decoration-none">
            <div className="manuItem">
              <img src={student} alt="" />
              <span className="text-info fs-5">
                <strong>Students</strong>
              </span>
              </div>
            </Link>
          </li>
          <li
            className={active === 3 ? "active nav-item p-2" : "nav-item p-2 mt-2"}
            onClick={(e) => setActive(3)}
          >
            <Link to="" className="text-decoration-none">
            <div className="manuItem">
              <img src={courses} alt="" />
              <span className="text-info fs-5">
                <strong>Courses</strong>
              </span>
              </div>
            </Link>
          </li>
          <li
            className={active === 4 ? "active nav-item p-2" : "nav-item p-2 mt-2"}
            onClick={(e) => setActive(4)}
          >

          {/* <<<<<<Link Instructors>>>>>>>>   */}  
            <Link to="/Instructors" className="text-decoration-none">
            <div className="manuItem">
              <img src={instructors} alt="" />
              <span className="text-info fs-5">
                <strong>Instructors</strong>
              </span>
              </div>
            </Link>
          </li>
          <li
            className={active === 5 ? "active nav-item p-2" : "nav-item p-2 mt-2"}
            onClick={(e) => setActive(4)}
          >
            <Link to="" className="text-decoration-none ">
            <div className="manuItem">
              <img src={announcements} alt="" />
              <span className="text-info fs-5">
                <strong>Announcements</strong>
              </span>
              </div>
            </Link>
          </li>
          <li
            className={active === 6 ? "active nav-item p-2" : "nav-item p-2 mt-2"}
            onClick={(e) => setActive(4)}
          >
            <Link to="" className="text-decoration-none">
            <div className="manuItem">
              <img src={users} alt="" />
              <span className="text-info fs-5">
                <strong>Users</strong>
              </span>
              </div>
            </Link>
          </li>
          <li
            className={active === 7 ? "active nav-item p-2" : "nav-item p-2 mt-2"}
            onClick={(e) => setActive(4)}
          >
            <Link to="" className="text-decoration-none ">
            <div className="manuItem">
              <img src={permission} alt="" />
              <span className="text-info fs-5">
                <strong>Permission Roles</strong>
              </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
