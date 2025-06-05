import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import VolunteerteerDashboard from "./pages/VolunteerteerDashboard";
import VolenteerSingUp from "./components/login/VolunteerSignUp";
import VolunteerEntry from "./components/login/VolunteerEntry";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/volunteer/signup" element={<VolenteerSingUp />} />
        <Route path="/volunteer/Login" element={<VolunteerEntry />} />
        <Route
          path="/volunteer/dashboard"
          element={<VolunteerteerDashboard />}
        />
      </Routes>
    </Router>
  );
}

export default App;
