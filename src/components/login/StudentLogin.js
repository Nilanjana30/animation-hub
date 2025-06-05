import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormGroup,
  Label,
  Input,
  SubmitButton,
  BackButton,
  ErrorMessage,
} from "../../styles/LoginStyles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const StudentLogin = ({ onBack }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // Simple validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      ).then((data) => {
        // Store user data in localStorage for immediate access
        const userData = {
          uid: data.user.uid,
          email: data.user.email,
          userType: "student", // Set userType to student
          data: data, // Store the user data object
        };
        console.log("====================================");
        console.log("userData", userData);
        console.log("====================================");
        localStorage.setItem("userData", JSON.stringify(userData));
      });
      navigate("/student/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <BackButton onClick={onBack}>← Back to options</BackButton>

      <h2 style={{ marginBottom: "1.5rem", color: "var(--primary-color)" }}>
        Student Login
      </h2>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </FormGroup>

        <SubmitButton type="submit">Login</SubmitButton>
      </form>

      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <a
          href="#"
          style={{ fontSize: "0.875rem" }}
          onClick={(e) => {
            e.preventDefault();
            setError(
              "Please contact your teacher or admin to reset your password."
            );
          }}
        >
          Forgot password?
        </a>
      </div>
    </>
  );
};

export default StudentLogin;
