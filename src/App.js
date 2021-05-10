import React from "react";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="container">
      <div className="text-center text-primary mt-5">
        <h1>Student Management System</h1>
      </div>
      <StudentList />
    </div>
  );
}

export default App;
