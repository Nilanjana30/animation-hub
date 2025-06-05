import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import {
  FormGroup,
  Label,
  Input,
  SubmitButton,
  BackButton,
  ErrorMessage,
} from "../../styles/LoginStyles";

const VolenteerSingUp = ({ onBack }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "student", // Only student signups allowed
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
    setSuccess("");

    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userData = {
        uid: user.uid,
        firstName,
        lastName,
        email,
        userType: "student",
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem("user", JSON.stringify(userData));
      await setDoc(doc(db, "users", user.uid), userData);

      setSuccess("Account created successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <BackButton onClick={onBack}>← Back to options</BackButton>

      <div
        style={{
          maxWidth: "500px",
          margin: "40px auto",
          padding: "30px",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            marginBottom: "1.5rem",
            color: "var(--primary-color)",
            textAlign: "center",
          }}
        >
          Volenteer Sign Up
        </h2>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && (
          <div
            style={{
              color: "green",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
            <FormGroup style={{ flex: 1 }}>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </FormGroup>
            <FormGroup style={{ flex: 1 }}>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </FormGroup>
          </div>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </FormGroup>

          <div
            style={{
              marginBottom: "15px",
              padding: "10px",
              backgroundColor: "#f8f9fa",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>Note:</strong> This form is for student registration only.
              Teacher accounts are managed by administrators.
            </p>
          </div>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              required
            />
          </FormGroup>

          <SubmitButton type="submit" style={{ marginTop: "20px" }}>
            Sign Up
          </SubmitButton>
        </form>
      </div>
    </div>
  );
};

export default VolenteerSingUp;
