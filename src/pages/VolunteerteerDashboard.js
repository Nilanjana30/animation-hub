import React, { useState } from "react";
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
  CardHeader,
  Button,
} from "../styles/DashboardStyles";

const VolunteerDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

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
          <>
            <Header>
              <PageTitle>Manual Entry</PageTitle>
            </Header>
            <Card>
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
          </>
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
      case "profile":
        const realUserData = {
          name: user.name || "User",
          email: user.email || "user@example.com",
          phone: user.phone || "Not available",
          studentId: user.studentId || "AH2023001",
          joined: user.joinedDate || "January 15, 2023",
          course: user.course || "Animation Design", // or "Not available"
        };

        const getInitials = () => {
          if (!realUserData.name) return "U";
          return realUserData.name
            .split(" ")
            .map((n) => n.charAt(0).toUpperCase())
            .join("");
        };

        const getFullName = () => realUserData.name;

        return (
          <>
            <Header>
              <PageTitle>My Profile</PageTitle>
            </Header>

            <Card>
              <div style={{ padding: "1rem 1.5rem" }}>
                <h2 style={{ marginBottom: "1.5rem" }}>Personal Information</h2>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "2rem",
                  }}
                >
                  <Avatar
                    style={{
                      width: "80px",
                      height: "80px",
                      fontSize: "2rem",
                      marginRight: "1.5rem",
                    }}
                  >
                    {getInitials()}
                  </Avatar>
                  <div>
                    <h3 style={{ marginBottom: "0.5rem" }}>{getFullName()}</h3>
                    <p style={{ color: "var(--gray-medium)" }}>
                      {userType || "Volunteer"}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.5rem",
                  }}
                >
                  <div>
                    <p style={{ fontWeight: "600" }}>Email</p>
                    <p>{realUserData.email}</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "600" }}>Phone</p>
                    <p>{realUserData.phone}</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "600" }}>Student ID</p>
                    <p>{realUserData.studentId}</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "600" }}>Joined</p>
                    <p>{realUserData.joined}</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "600" }}>Course</p>
                    <p>{realUserData.course}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <h2>Account Settings</h2>
              </CardHeader>
              <div style={{ padding: "1rem" }}>
                <Button>Change Password</Button>
                <Button style={{ marginLeft: "1rem" }}>
                  Notification Settings
                </Button>
              </div>
            </Card>
          </>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <DashboardContainer>
      {isMobileView() && (
        <MobileNavBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          dashboardType="volunteer"
        />
      )}

      <Sidebar>
        <Logo>
          <img src={logo} alt="Logo" style={{ maxWidth: "180px" }} />
          <p style={{ color: "white", fontWeight: 600, marginLeft: "25px" }}>
            Volunteer Portal
          </p>
        </Logo>
        <NavMenu>
          <NavItem>
            <NavLink
              active={activeTab === "dashboard"}
              onClick={() => setActiveTab("dashboard")}
            >
              <i className="fas fa-home "></i>{" "}
              <span style={{ marginLeft: "10px" }}>Dashboard</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeTab === "students"}
              onClick={() => setActiveTab("students")}
            >
              <i className="fas fa-users"></i>
              <span style={{ marginLeft: "10px" }}>Manual Entry</span>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              href="#"
              active={activeTab === "profile"}
              onClick={() => setActiveTab("profile")}
            >
              <i className="fas fa-user" style={{ marginRight: "10px" }}></i>
              Profile
            </NavLink>
          </NavItem>
          <NavItem style={{ marginTop: "2rem" }}>
            <NavLink href="/login">
              <i className="fas fa-sign-out-alt"></i>
              <span style={{ marginLeft: "20px" }}>Logout</span>
            </NavLink>
          </NavItem>
        </NavMenu>
      </Sidebar>

      <MainContent>{renderContent()}</MainContent>
    </DashboardContainer>
  );
};

export default VolunteerDashboard;
