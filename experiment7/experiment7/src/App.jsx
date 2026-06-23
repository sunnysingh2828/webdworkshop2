import React from "react";
import "./App.css";
import StudentCard from "./components/StudentCard";

function App() {
  const students = [
    { name: "Rahul Sharma", course: "Computer Science", marks: 85 },
    { name: "Anita Verma", course: "Information Technology", marks: 92 },
    { name: "Rohan Gupta", course: "Electronics", marks: 78 }
  ];

  return (
    <div className="app">
      <h1>Student Information</h1>
      <div className="container">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
        
      </div>
    </div>
  );
}

export default App;