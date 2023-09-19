import React, { useState } from "react";
// import "./Model01.css";


export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      // image:"",
      num:"",
      name :"",
      department : "",
      gender : "",
      education: "",
      mobile : "",
      email : "",
      joiningDate: "",   
      
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (
      // formState.image &&
      formState.num &&
      formState.name &&
      formState.department &&
      formState.gender &&
      formState.education &&
      formState.mobile &&
      formState.email &&
      formState.joiningDate
      

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

        {/* <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              name="image"
              type="text"
              onChange={handleChange}
              value={formState.image}
            />
          </div> */}

          <div className="form-group">
            <label htmlFor="num">No.</label>
            <input name="num" onChange={handleChange} value={formState.num} />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" onChange={handleChange} value={formState.name} />
          </div>

          <div className="form-group">
            <label htmlFor="department">Department</label>
            <input name="department" onChange={handleChange} value={formState.department} />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input name="gender" onChange={handleChange} value={formState.gender} />
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
            <label htmlFor="joiningDate">Joining Date</label>
            <input name="joiningDate" onChange={handleChange} value={formState.joiningDate} />
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
