import React, { useState } from "react";
import logodash from "../assets/logodash.jpg";
import { isMobileView } from "../components/MobileSidebar";
import MobileNavBar from "../components/MobileNavBar";
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
  CardGrid,
  StatCard,
  CourseCard,
  Button,
} from "../styles/DashboardStyles";

const initialCourses = [
  {
    id: 1,
    title: "2D Animation Basics",
    description: "Learn principles of 2D animation",
    instructor: "Neha Gupta",
    progress: "65%",
    lessons: 12,
    completed: false,
  },
  {
    id: 2,
    title: "3D Modeling with Blender",
    description: "Modeling and rendering using Blender",
    instructor: "Amit Roy",
    progress: "90%",
    lessons: 10,
    completed: false,
  },
  {
    id: 3,
    title: "Character Rigging",
    description: "Build skeletons and rig 3D models",
    instructor: "Priya Patel",
    progress: "45%",
    lessons: 8,
    completed: false,
  },
];

const realUserData = {
  firstName: "Nilanjana",
  lastName: "Dey",
  email: "nilanjana.dey@gmail.com",
  phone: "9812110247",
  studentId: "AH2023001",
  joined: "January 15, 2023",
  course: "Animation & Design",
};

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [courses, setCourses] = useState(initialCourses);

  const getInitials = () =>
    `${realUserData.firstName.charAt(0)}${realUserData.lastName.charAt(0)}`;

  const getFullName = () =>
    `${realUserData.firstName} ${realUserData.lastName}`;

  const handleComplete = (id) => {
    const updatedCourses = courses.map((course) =>
      course.id === id ? { ...course, completed: true } : course
    );
    setCourses(updatedCourses);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <Header>
              <PageTitle>Dashboard</PageTitle>
              <UserProfile>
                <Avatar>{getInitials()}</Avatar>
                <UserInfo>
                  <span>{getFullName()}</span>
                  <span>{realUserData.email}</span>
                </UserInfo>
              </UserProfile>
            </Header>

            <CardGrid>
              <StatCard color="255, 136, 3">
                <div className="icon">
                  <i className="fas fa-book"></i>
                </div>
                <div className="content">
                  <h3>{courses.length}</h3>
                  <p>Enrolled Courses</p>
                </div>
              </StatCard>
              <StatCard color="76, 175, 80">
                <div className="icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="content">
                  <h3>8</h3>
                  <p>Completed Lessons</p>
                </div>
              </StatCard>
              <StatCard color="33, 150, 243">
                <div className="icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="content">
                  <h3>12h</h3>
                  <p>Learning Hours</p>
                </div>
              </StatCard>
              <StatCard color="233, 30, 99">
                <div className="icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="content">
                  <h3>1</h3>
                  <p>Certificates</p>
                </div>
              </StatCard>
            </CardGrid>

            <Card>
              <CardHeader>
                <h2>My Courses</h2>
              </CardHeader>
              <CardGrid>
                {courses.map((course) => (
                  <CourseCard key={course.id} progress={course.progress}>
                    <div
                      className="course-image"
                      style={{
                        backgroundColor: "rgba(255, 136, 3)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <h2 style={{ color: "white", fontSize: "2rem" }}>
                        {course.title}
                      </h2>
                    </div>
                    <div className="course-content">
                      <h3>{course.title}</h3>
                      <p>{course.description}</p>
                      <div className="course-meta">
                        <span>Instructor: {course.instructor}</span>
                        <span>{course.lessons} lessons</span>
                      </div>
                    </div>
                  </CourseCard>
                ))}
              </CardGrid>
            </Card>

            <Card>
              <CardHeader>
                <h2>Upcoming Deadlines</h2>
              </CardHeader>
              <div style={{ padding: "1rem" }}>
                <p style={{ marginLeft: "-10px" }}>
                  You have no upcoming deadlines.
                </p>
              </div>
            </Card>
          </>
        );

      case "courses":
        return (
          <>
            <Header
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <PageTitle>My Courses</PageTitle>
              <Button style={{ backgroundColor: "#ff8803", color: "#fff" }}>
                Browse All Courses
              </Button>
            </Header>

            <Card>
              <CardHeader>
                <h2>Enrolled Courses</h2>
              </CardHeader>

              <CardGrid>
                {courses.map((course) => (
                  <CourseCard key={course.id} progress={course.progress}>
                    <div
                      className="course-image"
                      style={{
                        backgroundColor: "#ff8803",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "120px",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    >
                      <h2
                        style={{
                          color: "white",
                          fontSize: "1.8rem",
                          fontWeight: 700,
                        }}
                      >
                        {course.title}
                      </h2>
                    </div>

                    <div className="course-content" style={{ padding: "1rem" }}>
                      <h3>{course.title}</h3>
                      <p style={{ color: "#9e9e9e" }}>{course.description}</p>
                      <div
                        className="course-meta"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Instructor: {course.instructor}</span>
                        <span>{course.lessons} lessons</span>
                      </div>
                    </div>
                  </CourseCard>
                ))}
              </CardGrid>
            </Card>
          </>
        );

      case "community":
        return (
          <>
            <Header>
              <PageTitle>Community</PageTitle>
              <UserProfile>
                <Avatar>{getInitials()}</Avatar>
                <UserInfo>
                  <span>{getFullName()}</span>
                  <span>{realUserData.email}</span>
                </UserInfo>
              </UserProfile>
            </Header>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <Card
                style={{
                  padding: "1.5rem",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                }}
              >
                <h2>Discussion Forums</h2>
                <p style={{ margin: "0.5rem 0 1rem" }}>
                  Connect with fellow animation enthusiasts and professionals.
                </p>
                <button
                  style={{
                    backgroundColor: "#ff8803",
                    color: "#fff",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "5px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Join Discussion
                </button>
              </Card>

              <Card
                style={{
                  padding: "1.5rem",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                }}
              >
                <h2>Student Showcase</h2>
                <p style={{ margin: "0.5rem 0 1rem" }}>
                  View and share animation projects from the Animation Hub
                  community.
                </p>
                <button
                  style={{
                    backgroundColor: "#ff8803",
                    color: "#fff",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "5px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  View Showcase
                </button>
              </Card>
            </div>
          </>
        );
      case "profile":
        return (
          <>
            <Header>
              <PageTitle>My Profile</PageTitle>
            </Header>
            <Card>
              <CardHeader>
                <h2>Personal Information</h2>
              </CardHeader>
              <div style={{ padding: "1rem 0" }}>
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
                      Animation Design Student
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
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
        return <div>Page Not Found</div>;
    }
  };

  return (
    <DashboardContainer>
      {isMobileView() && (
        <MobileNavBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          dashboardType="student"
        />
      )}

      <Sidebar>
        <Logo>
          <img
            src={logodash}
            alt="Animation Hub"
            style={{ maxWidth: "200px" }}
          />
          <p>Learning Platform</p>
        </Logo>
        <NavMenu>
          <NavItem>
            <NavLink
              href="#"
              active={activeTab === "dashboard"}
              onClick={() => setActiveTab("dashboard")}
            >
              <i className="fas fa-home" style={{ marginRight: "10px" }}></i>
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              active={activeTab === "courses"}
              onClick={() => setActiveTab("courses")}
            >
              <i className="fas fa-book" style={{ marginRight: "10px" }}></i>
              Courses
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              active={activeTab === "community"}
              onClick={() => setActiveTab("community")}
            >
              <i className="fas fa-users" style={{ marginRight: "10px" }}></i>
              Community
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
              <i
                className="fas fa-sign-out-alt"
                style={{ marginRight: "10px" }}
              ></i>
              Logout
            </NavLink>
          </NavItem>
        </NavMenu>
      </Sidebar>

      <MainContent>{renderContent()}</MainContent>
    </DashboardContainer>
  );
};

export default StudentDashboard;
