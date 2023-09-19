import React, { useState } from "react";
import "./Model01.css";


export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      // image:"",
      rollNo: "",
      name : "",
      education:"",
      mobile:"",
      email:"",
      admissionDate:""
      
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (
      // formState.image &&
      formState.rollNo &&
      formState.name &&
      formState.education &&
      formState.mobile &&
      formState.email &&
      formState.admissionDate
      

    ) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal01-container01"
      onClick={(e) => {
        if (e.target.className === "modal01-container01") closeModal();
      }}
    >
      <div className="modal01">
        <form>
          <div className="form-group">
            <label htmlFor="rollNo">Roll No.</label>
            <input name="rollNo" onChange={handleChange} value={formState.rollNo} />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" onChange={handleChange} value={formState.name} />
          </div>

          <div className="form-group">
            <label htmlFor="education">Education</label>
            <input name="education" onChange={handleChange} value={formState.education} />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input name="mobile" onChange={handleChange} value={formState.mobile} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name="email" onChange={handleChange} value={formState.email} />
          </div>

          <div className="form-group">
            <label htmlFor="admissionDate">Admission Date</label>
            <input name="admissionDate" onChange={handleChange} value={formState.admissionDate} />
          </div>

          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn01" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
