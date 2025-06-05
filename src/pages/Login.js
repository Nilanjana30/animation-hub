import React, { useState } from "react";
import {
  LoginContainer,
  LoginCard,
  Logo,
  LoginOptions,
  LoginButton,
} from "../styles/LoginStyles";
import StudentLogin from "../components/login/StudentLogin";
import TeacherLogin from "../components/login/TeacherLogin";
import SignUp from "../components/login/SignUp";
import VolunteerEntry from "../components/login/VolunteerEntry";
import logo from "../assets/logo.png";

const Login = () => {
  const [loginType, setLoginType] = useState(null);

  const buttonStyle = {
    background: "rgba(255,136,3,0.1)",
    border: "1px solid rgb(255,136,3)",
    color: "rgb(255,136,3)",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    padding: "8px 15px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
  };

  const renderLoginForm = () => {
    switch (loginType) {
      case "student":
        return <StudentLogin onBack={() => setLoginType(null)} />;
      case "teacher":
        return <TeacherLogin onBack={() => setLoginType(null)} />;
      case "volunteer":
        return <VolunteerEntry onBack={() => setLoginType(null)} />;
      case "signup":
        return <SignUp onBack={() => setLoginType(null)} />;
      default:
        return (
          <>
            <div style={{ display: "flex" }}>
              <div
                style={{ position: "absolute", top: "15px", right: "190px" }}
              >
                <button
                  onClick={() => setLoginType("teacher")}
                  style={buttonStyle}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <i
                    className="fas fa-chalkboard-teacher"
                    style={{ marginRight: "8px" }}
                  ></i>
                  Teacher Login
                </button>
              </div>
              <div style={{ position: "absolute", top: "15px", right: "20px" }}>
                <button
                  onClick={() => setLoginType("volunteer")}
                  style={buttonStyle}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <i
                    className="fas fa-user-friends"
                    style={{ marginRight: "8px" }}
                  ></i>
                  Volunteer Login
                </button>
              </div>
            </div>

            <Logo>
              <img
                src={logo}
                alt="Animation Hub"
                style={{ maxWidth: "280px", marginBottom: "1rem" }}
              />
              <p>Learning Management System</p>
            </Logo>

            <LoginOptions>
              <LoginButton primary onClick={() => setLoginType("student")}>
                Student Login
              </LoginButton>
              <LoginButton
                style={{
                  background: "rgba(255,136,3,0.15)",
                  color: "rgb(255,136,3)",
                  border: "1px solid rgb(255,136,3)",
                }}
                onClick={() => setLoginType("signup")}
              >
                Sign Up
              </LoginButton>
            </LoginOptions>
          </>
        );
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        {loginType && (
          <button
            onClick={() => setLoginType(null)}
            style={{
              position: "absolute",
              top: "15px",
              left: "20px",
              background: "transparent",
              border: "none",
              color: "rgb(255,136,3)",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            ← Back
          </button>
        )}
        {renderLoginForm()}
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
