import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

//AuthProvider and Protected Routes
import { AuthProvider } from "./utils/auth";
import ProtectedRoutes from "./utils/ProtectedRoutes";

//auth pages
import Login from "./pages/AuthPages/Login/Login";
import RecoverPassword from "./pages/AuthPages/RecoverPassword/RecoverPassword";
import VerificationCode from "./pages/AuthPages/VerificationCode/VerificationCode";
import ResetPassword from "./pages/AuthPages/ResetPassword/ResetPassword";
import SignUp from "./pages/AuthPages/Signup/SignUp";

//pages
import Dashboard from "./layout/Dashboard";
import Home from "./pages/Home/Home";
import Setters from "./pages/Settters/Setters";
import Team from "./pages/Team/Team";
import Profile from "./pages/Profile/Profile";
import Aboutus from "./pages/Aboutus/Aboutus";
import Settings from "./pages/Settings/Settings";
import CurrentSetter from "./pages/CurrentSetter/CurrentSetter";
import TeammateSetter from "./pages/TeammateSetter/TeammateSetter";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />

          <Route path="dashboard" element={<Dashboard />}>
            <Route path="home" element={<Home />}>
              <Route path="current-setter" element={<CurrentSetter />} />
            </Route>

            <Route path="setters" element={<Setters />} />
            <Route path="team" element={<Team />} />
            <Route path="profile" element={<Profile />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="settings" element={<Settings />} />
            <Route path="teammate" element={<TeammateSetter />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/recover-password" exaxt element={<RecoverPassword />} />
        <Route path="/verification-code" element={<VerificationCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
