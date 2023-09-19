import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
// import "./StdTable.css";
import "bootstrap/dist/css/bootstrap.min.css";
import person01 from "../Images/new1.jpg"

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
      <table className="table text-center">
        <thead>
          <tr className="fs-6">
            <th>#</th>
            <th>Roll No</th>
            <th>Name</th>
            <th>Education</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Admission Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider fontz">
          {rows.map((row, idx) => {
            const statusText =
              row.rollNo.charAt(0).toUpperCase() + row.rollNo.slice(1);

              return (
                <tr key={idx}>
                  {/* <<<<image>>>>> */}
                  <td>
                    <img className="rounded-circle" alt="avatar1" src={person01} />
                  </td>
                  {/* <<<<Roll No>>>>> */}
                  <td className="expand">{row.rollNo}</td>
                  {/* <<<<Name>>>>> */}
                  <td className="expand">{row.name}</td>
                  {/* <<<<Education>>>>> */}
                  <td>
                  <td className="expand">{row.education}</td>
                  </td>
                  {/* <<<<Mobile>>>>> */}
                  <td>
                  <td className="expand">{row.mobile}</td>
                  </td>
                  {/* <<<<Email>>>>> */}
                  <td className="expand">{row.email}</td>
                  {/* <<<<Addmision Date>>>>> */}
                  <td className="expand">{row.admissionDate}</td>
                  
                  {/* <<<<Set delete & edit Option>>>>>> */}
                  <td className="fit">
                    <span className="actions">
                      <BsFillTrashFill
                        className="delete-btn"
                        onClick={() => deleteRow(idx)}
                      />
                      <BsFillPencilFill
                        className="edit-btn"
                        onClick={() => editRow(idx)}
                      />
                    </span>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
    // </div>
   
  );
};
