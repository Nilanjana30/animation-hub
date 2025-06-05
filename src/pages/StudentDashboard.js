import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import logodash from '../assets/logodash.jpg';
import altBankLogo from '../assets/altbank logo.png';
import { isMobileView } from '../components/MobileSidebar';
import MobileNavBar from '../components/MobileNavBar';
import { FormGroup, Label, Input } from '../styles/LoginStyles';
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
  Button
} from '../styles/DashboardStyles';

// Mock data for the dashboard
const courses = [
  {
    id: 1,
    title: 'Course 1',
    description: 'Animation course description',
    instructor: 'Neha Gupta',
    progress: '65%',
    lessons: 12,
    image: 'https://via.placeholder.com/300x160?text=Course+1'
  },
  {
    id: 3,
    title: 'Course 3',
    description: 'Animation course description',
    instructor: 'Priya Patel',
    progress: '30%',
    lessons: 15,
    image: 'https://via.placeholder.com/300x160?text=Course+3'
  },
  {
    id: 4,
    title: 'Course 4',
    description: 'Animation course description',
    instructor: 'Arjun Mehta',
    progress: '80%',
    lessons: 10,
    image: 'https://via.placeholder.com/300x160?text=Course+4'
  }
];

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  // Bank account states removed
  
  useEffect(() => {
    // Get user data from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);
  
  // Generate initials for avatar
  const getInitials = () => {
    if (!userData || !userData.firstName || !userData.lastName) return 'U';
    return `${userData.firstName.charAt(0)}${userData.lastName.charAt(0)}`;
  };
  
  // Get full name
  const getFullName = () => {
    if (!userData || !userData.firstName || !userData.lastName) return 'User';
    return `${userData.firstName} ${userData.lastName}`;
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <>
            <Header>
              <PageTitle>Dashboard</PageTitle>
              <UserProfile>
                <Avatar>{getInitials()}</Avatar>
                <UserInfo>
                  <span>{getFullName()}</span>
                  <span>Animation Design</span>
                </UserInfo>
              </UserProfile>
            </Header>
            
            <CardGrid>
              <StatCard color="255, 136, 3">
                <div className="icon">
                  <i className="fas fa-book"></i>
                </div>
                <div className="content">
                  <h3>4</h3>
                  <p>Enrolled Courses</p>
                </div>
              </StatCard>
              
              <StatCard color="76, 175, 80">
                <div className="icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="content">
                  <h3>12</h3>
                  <p>Completed Lessons</p>
                </div>
              </StatCard>
              
              <StatCard color="33, 150, 243">
                <div className="icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="content">
                  <h3>24h</h3>
                  <p>Learning Hours</p>
                </div>
              </StatCard>
              
              <StatCard color="233, 30, 99">
                <div className="icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="content">
                  <h3>2</h3>
                  <p>Certificates</p>
                </div>
              </StatCard>
            </CardGrid>
            
            <Card>
              <CardHeader>
                <h2>My Courses</h2>
                <Button>View All</Button>
              </CardHeader>
              
              <CardGrid>
                {courses.map(course => (
                  <CourseCard key={course.id} progress={course.progress}>
                    <div className="course-image" style={{ backgroundColor: 'var(--primary-color)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <h2 style={{ color: 'white', fontSize: '2rem' }}>{course.title}</h2>
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
              
              <div>
                <p style={{ color: 'var(--gray-medium)', padding: '1rem 0' }}>
                  You have no upcoming deadlines.
                </p>
              </div>
            </Card>
          </>
        );
      case 'courses':
        return (
          <>
            <Header>
              <PageTitle>My Courses</PageTitle>
              <Button>
                Browse All Courses
              </Button>
            </Header>
            
            <Card>
              <CardHeader>
                <h2>Enrolled Courses</h2>
              </CardHeader>
              
              <CardGrid>
                {courses.map(course => (
                  <CourseCard key={course.id} progress={course.progress}>
                    <div className="course-image" style={{ backgroundColor: 'var(--primary-color)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <h2 style={{ color: 'white', fontSize: '2rem' }}>{course.title}</h2>
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
          </>
        );
      case 'profile':
        return (
          <>
            <Header>
              <PageTitle>My Profile</PageTitle>
            </Header>
            
            <Card>
              <CardHeader>
                <h2>Personal Information</h2>
              </CardHeader>
              
              <div style={{ padding: '1rem 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                  <Avatar style={{ width: '80px', height: '80px', fontSize: '2rem', marginRight: '1.5rem' }}>{getInitials()}</Avatar>
                  <div>
                    <h3 style={{ marginBottom: '0.5rem' }}>{getFullName()}</h3>
                    <p style={{ color: 'var(--gray-medium)' }}>Animation Design Student</p>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Email</p>
                    <p style={{ color: 'var(--gray-medium)' }}>{userData?.email || 'user@example.com'}</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Phone</p>
                    <p style={{ color: 'var(--gray-medium)' }}>9812110247</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Student ID</p>
                    <p style={{ color: 'var(--gray-medium)' }}>AH2023001</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Joined</p>
                    <p style={{ color: 'var(--gray-medium)' }}>January 15, 2023</p>
                  </div>
                </div>
                
                <Button style={{ marginTop: '1.5rem' }}>
                  Edit Profile
                </Button>
              </div>
            </Card>
            
            <Card>
              <CardHeader>
                <h2>Account Settings</h2>
              </CardHeader>
              
              <div style={{ padding: '1rem 0' }}>
                <Button secondary style={{ marginRight: '1rem' }}>
                  Change Password
                </Button>
                <Button secondary>
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
      {/* Hamburger icon for mobile only */}
      {/* Mobile navigation bar - only visible on mobile */}
      {isMobileView() && <MobileNavBar activeTab={activeTab} setActiveTab={setActiveTab} dashboardType="student" />}

      {/* Desktop Sidebar (hidden on mobile) */}
      <Sidebar style={{
        display: 'flex',
        flexDirection: 'column',
        '@media (max-width:900px)': { display: 'none' },
      }}>
        <Logo>
          <img src={logodash} alt="Animation Hub" style={{ maxWidth: '200px' }} />
          <p>Learning Platform</p>
        </Logo>
        <NavMenu>
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'dashboard'} 
              onClick={() => setActiveTab('dashboard')}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <i className="fas fa-home" style={{ width: '24px', textAlign: 'center', marginRight: '10px' }}></i>
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'courses'} 
              onClick={() => setActiveTab('courses')}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <i className="fas fa-book" style={{ width: '24px', textAlign: 'center', marginRight: '10px' }}></i>
              Courses
            </NavLink>
          </NavItem>
          {/* Community nav item removed */}
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'profile'} 
              onClick={() => setActiveTab('profile')}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <i className="fas fa-user" style={{ width: '24px', textAlign: 'center', marginRight: '10px' }}></i>
              Profile
            </NavLink>
          </NavItem>
          {/* AltBank Account nav item removed */}
          <NavItem style={{ marginTop: '2rem' }}>
            <NavLink href="/login" style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-sign-out-alt" style={{ width: '24px', textAlign: 'center', marginRight: '10px' }}></i>
              Logout
            </NavLink>
          </NavItem>
        </NavMenu>
      </Sidebar>
      {/* No mobile sidebar - using bottom nav bar instead */}
      <MainContent>
        {renderContent()}
      </MainContent>
    </DashboardContainer>
  );
};

export default StudentDashboard;
