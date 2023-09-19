import React, { useState } from "react";
// import "./StdMain.css";
import { Table } from "../StudentTable/Table";
import { Modal } from "../StudentTable/Modal";

function StdMain() {
  const [modalOpen, setModalOpen] = useState(false);

  // Hard-coded table data
  const initialRows = [
    {
      // image: "",
      rollNo :"01",
      name : "Tiger Nixon",
      education : "M.COM.P.H.D",
      mobile: "012 079 0126",
      email : "sample@gmil.com",
      admissionDate: "12/09/2023",   
    },
    {
      // image: "",
      rollNo :"02",
      name : "Garrett Winters",
      education : "P.H.D",
      mobile: "222 079 0126",
      email : "sample01@gmil.com",
      admissionDate: "09/10/2019",
    },
    {
      // image: "",
      rollNo :"03",
      name : "Ashoton Cox",
      education : "M.SC",
      mobile: "712 391 0126",
      email : "sample03@gmil.com",
      admissionDate: "11/09/2020",  
    },
    {
      // image: "",
      rollNo :"04",
      name : "Cerdric Kelly",
      education : "B.Sc",
      mobile: "743 999 0126",
      email : "sample04@gmil.com",
      admissionDate: "12/09/2011",
    },
    {
      // image: "",
      rollNo :"05",
      name : "Airi Satou",
      education : "P.H.D",
      mobile: "999 079 0126",
      email : "sample05@gmil.com",
      admissionDate: "12/09/2023", 
    },
  ];

  const [rows, setRows] = useState(initialRows);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="App">

      {/* <<<<Add Button & Set onClick function>>>>>> */}
      <div className="p-3">
        <div className="d-flex">
          <div className="flex-grow-1">All Students List</div>
          <div>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className=" btncl"
            >
              +Add New
            </button>
          </div>
        </div>
      </div>
      <div className=" p-1">
        <div className="d-flex">
          <div className="flex-grow-1">
            <ul class="pagination  navspc1 ">
              <li class="page-item">
                <p>Show</p>
              </li>
              <li className="col2">
                <a class="btn dropdown-toggle "> 10</a>
              </li>
              <li class="page-item ">
                <p>entries</p>
              </li>
            </ul>
          </div>

          <div>
            <div class="row g-3 align-items-center">
              <div class="col-auto">
                <label for="search" class="col-form-label">
                  Search
                </label>
              </div>
              <div class="col-auto">
                <input
                  type="text"
                  id="search"
                  class="form-control"
                  aria-describedby="search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default StdMain;
