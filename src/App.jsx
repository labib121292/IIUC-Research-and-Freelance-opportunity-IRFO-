import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./assets/HomePage";
import StudentPage from "./assets/StudentPage";
import TeacherPage from "./assets/TeacherPage";
import FacultyPage from "./assets/FacultyPage";
import AdminPage from "./assets/AdminPage";
import FreelancePage from "./assets/FreelancePage";
import ResearchPage from "./assets/ResearchPage";

import { FreelanceProvider } from "./assets/FreelanceContext"; // ✅ import the provider

export default function App() {
  return (
    <FreelanceProvider> {/* ✅ Wrap with global state */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/freelance" element={<FreelancePage />} />
          <Route path="/research" element={<ResearchPage />} />
        </Routes>
      </Router>
    </FreelanceProvider>
  );
}
