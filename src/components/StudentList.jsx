import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import StudentForm from "./StudentForm";

const dbRef = firebase.database().ref("Contacts");
const initial = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};
const StudentList = () => {
  const [studentList, setStudentList] = useState([]);
  const [studentMain, setStudentMain] = useState(initial);
  useEffect(() => {
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const arr = [];
      for (let id in data) {
        arr.push({ ...data[id], id: id });
      }
      setStudentList(arr);
    });
  }, []);

  const handleDelete = (id) => {
    dbRef.child(id).remove();
  };

  const handleEdit = (student) => {
    setStudentMain(student);
  };

  const addOrEdit = (student) => {
    if (student.id === "") {
      dbRef.push(student).catch((err) => {
        console.log(err);
      });
    } else {
      dbRef
        .child(student.id)
        .update(student)
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="row">
      <div className="col-4">
        <StudentForm initial={studentMain} addOrEdit={addOrEdit} />
      </div>
      <div className="col-8">
        <table className="table table-border mt-3">
          <thead className="thead-dark">
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentList &&
              studentList.map((student, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {student.firstName} {student.lastName}
                    </td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>
                      <button
                        onClick={() => handleEdit(student)}
                        className="btn btn-sm btn-primary mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="btn btn-sm btn-primary mr-2"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
