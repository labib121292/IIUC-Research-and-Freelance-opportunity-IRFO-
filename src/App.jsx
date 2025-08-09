import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./assets/HomePage";
import StudentPage from "./assets/StudentPage";
import TeacherPage from "./assets/TeacherPage";
import FacultyPage from "./assets/FacultyPage";
import AdminPage from "./assets/AdminPage";
import FreelancePage from "./assets/FreelancePage";
import ResearchPage from "./assets/ResearchPage";
import JoinPage from "./assets/JoinPage";
import { FreelanceProvider } from "./assets/FreelanceContext";
import PrivateRoute from "./assets/PrivateRoute";

export default function App() {
  return (
    <FreelanceProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/join" element={<JoinPage />} />

          {/* ✅ Protected Routes */}
          <Route
            path="/student"
            element={
              <PrivateRoute>
                <StudentPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/teacher"
            element={
              <PrivateRoute>
                <TeacherPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/faculty"
            element={
              <PrivateRoute>
                <FacultyPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />

          {/* Other public routes */}
          <Route path="/freelance" element={<FreelancePage />} />
          <Route path="/research" element={<ResearchPage />} />
        </Routes>
      </Router>
    </FreelanceProvider>
  );
}
