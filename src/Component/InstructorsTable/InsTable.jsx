import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./InsTable.css";
import "bootstrap/dist/css/bootstrap.min.css";
import person01 from "../Images/new1.jpg"

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
      <table className="table text-center">
        <thead>
          <tr className="fs-6">
            <th>#</th>
            <th>No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Education</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Joining Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider fontz">
          {rows.map((row, idx) => {
            const statusText =
              row.num.charAt(0).toUpperCase() + row.num.slice(1);

              return (
                <tr key={idx}>
                  {/* <<<<image>>>>> */}
                  <td>
                    <img className="rounded-circle" alt="avatar1" src={person01} />
                  </td>
                  {/* <<<<No>>>>> */}
                  <td className="expand">{row.num}</td>
                  {/* <<<<Name>>>>> */}
                  <td className="expand">{row.name}</td>
                  {/* <<<<department>>>>> */}
                  <td className="expand">{row.department}</td>
                  {/* <<<<gender>>>>> */}
                  <td className="expand">{row.gender}</td>
                  {/* <<<<Education>>>>> */} 
                  <td className="expand">{row.education}</td>
                  {/* <<<<Mobile>>>>> */}
                  <td className="expand">{row.mobile}</td>
                  {/* <<<<Email>>>>> */}
                  <td className="expand">{row.email}</td>
                  {/* <<<<Joining Date>>>>> */}
                  <td className="expand">{row.joiningDate}</td>
                  
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
