import React, { useState, useEffect } from "react";
import logo from "../assets/logodash.jpg";
import { isMobileView } from "../components/MobileSidebar";
import MobileNavBar from "../components/MobileNavBar";
import QRCode from "react-qr-code";

import {
  DashboardContainer,
  Sidebar,
  Logo,
  NavMenu,
  NavItem,
  NavLink,
  MainContent,
  Header,
  PageTitle,
  UserProfile,
  Avatar,
  UserInfo,
  Card,
  Button,
} from "../styles/DashboardStyles";

const VolunteerDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(isMobileView());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileView());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getRandomValidURL() {
    const urls = [
      "https://www.google.com",
      "https://www.github.com",
      "https://www.wikipedia.org",
      "https://www.stackoverflow.com",
      "https://www.youtube.com",
      "https://www.reddit.com",
      "https://www.linkedin.com",
      "https://www.microsoft.com",
      "https://www.apple.com",
      "https://www.amazon.com",
    ];
    const randomIndex = Math.floor(Math.random() * urls.length);
    return urls[randomIndex];
  }

  const userData = JSON.parse(localStorage.getItem("userData"));
  const user = userData?.data?.user || {};
  const userType = userData?.userType || "Volunteer";

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <Header>
              <PageTitle>Volunteer Dashboard</PageTitle>
              <UserProfile>
                <Avatar>{user.name?.charAt(0) || "U"}</Avatar>
                <UserInfo>
                  <strong>{user.email || "Anonymous"}</strong>
                  <span>{userType}</span>
                </UserInfo>
              </UserProfile>
            </Header>

            <Card style={{ marginTop: "2rem" }}>
              <h2>Link and QR Code</h2>
              <p>Share the following link with students and institutions:</p>

              <a
                href={getRandomValidURL()}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                {getRandomValidURL()}
              </a>

              <div style={{ marginTop: "1rem" }}>
                <QRCode value={getRandomValidURL()} />
              </div>
            </Card>
          </>
        );

      case "students":
        return (
          <Card>
            <h2>Manual Entry</h2>

            <div style={{ marginTop: "1.5rem" }}>
              <h3>Student Sign Up</h3>
              <form>
                <input placeholder="Student Name" />
                <br />
                <br />
                <input placeholder="Student Email" />
                <br />
                <br />
                <Button type="submit">Submit</Button>
              </form>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <h3>Institution Sign Up</h3>
              <form>
                <input placeholder="Institution Name" />
                <br />
                <br />
                <input placeholder="Contact Email" />
                <br />
                <br />
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </Card>
        );

      case "syllabus":
        return (
          <Card>
            <h2>Profile</h2>
            <p>
              <strong>Name:</strong> {user.name || "Not available"}
            </p>
            <p>
              <strong>Role:</strong> {userType}
            </p>
            <p>
              <strong>Email:</strong> {user.email || "Not available"}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone || "Not available"}
            </p>
          </Card>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <DashboardContainer>
      {isMobile ? (
        <MobileNavBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          dashboardType="volunteer"
        />
      ) : (
        <Sidebar>
          <Logo>
            <img src={logo} alt="Logo" style={{ maxWidth: "180px" }} />
            <p style={{ color: "white", fontWeight: 600 }}>Volunteer Portal</p>
          </Logo>
          <NavMenu>
            <NavItem>
              <NavLink
                active={activeTab === "dashboard"}
                onClick={() => setActiveTab("dashboard")}
              >
                <i className="fas fa-home"></i> Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={activeTab === "students"}
                onClick={() => setActiveTab("students")}
              >
                <i className="fas fa-users"></i> Manual Entry
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={activeTab === "syllabus"}
                onClick={() => setActiveTab("syllabus")}
              >
                <i className="fas fa-user"></i> Profile
              </NavLink>
            </NavItem>
            <NavItem style={{ marginTop: "2rem" }}>
              <NavLink href="/login">
                <i className="fas fa-sign-out-alt"></i> Logout
              </NavLink>
            </NavItem>
          </NavMenu>
        </Sidebar>
      )}

      <MainContent>{renderContent()}</MainContent>
    </DashboardContainer>
  );
};

export default VolunteerDashboard;
