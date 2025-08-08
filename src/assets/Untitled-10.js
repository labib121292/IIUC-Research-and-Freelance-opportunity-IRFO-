import React from "react";

function TeacherPage({ onBack }) {
  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <button onClick={onBack}>Back to Home</button>
    </div>
  );
}

export default TeacherPage;