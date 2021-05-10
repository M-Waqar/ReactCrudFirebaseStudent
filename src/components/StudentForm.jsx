import React, { useState, useEffect } from "react";
const init = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};
const StudentForm = ({ initial, addOrEdit }) => {
  const [student, setStudent] = useState(init);
  useEffect(() => {
    console.log("form loaded");
    setStudent(initial);
  }, [initial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEdit(student);
    setStudent(init);
  };

  return (
    <form className="shadow p-3" onSubmit={handleSubmit}>
      <div className="m-3">
        <h1 className="text-primary">Student Form</h1>
      </div>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          value={student.firstName}
          onChange={(e) =>
            setStudent({ ...student, firstName: e.target.value })
          }
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          value={student.lastName}
          className="form-control"
          onChange={(e) => setStudent({ ...student, lastName: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          value={student.email}
          onChange={(e) => setStudent({ ...student, email: e.target.value })}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          value={student.phone}
          onChange={(e) => setStudent({ ...student, phone: e.target.value })}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary btn-block">Add Student</button>
    </form>
  );
};

export default StudentForm;
