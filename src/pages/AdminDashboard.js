import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { isMobileView } from '../components/MobileSidebar';
import MobileNavBar from '../components/MobileNavBar';
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
  Button
} from '../styles/DashboardStyles';

// Mock data for the admin dashboard
const students = [
  { id: 1, name: 'Rahul Kumar', course: 'Course 1', email: 'rahul@example.com', joinDate: '2025-01-15' },
  { id: 2, name: 'Priya Singh', course: 'Course 3', email: 'priya@example.com', joinDate: '2025-02-03' },
  { id: 3, name: 'Amit Sharma', course: 'Course 4', email: 'amit@example.com', joinDate: '2025-02-20' },
  { id: 4, name: 'Neha Gupta', course: 'Course 1', email: 'neha@example.com', joinDate: '2025-03-05' },
  { id: 5, name: 'Vijay Patel', course: 'Course 3', email: 'vijay@example.com', joinDate: '2025-03-18' }
];

const teachers = [
  { id: 1, name: 'Vikram Sharma', specialization: 'Animation Fundamentals', email: 'vikram@example.com', courses: ['Course 1'] },
  { id: 2, name: 'Priya Patel', specialization: 'Character Animation', email: 'priya.p@example.com', courses: ['Course 3'] },
  { id: 3, name: 'Arjun Mehta', specialization: 'Motion Graphics', email: 'arjun@example.com', courses: ['Course 4'] }
];

const courses = [
  { id: 1, title: 'Course 1', students: 25, teacher: 'Vikram Sharma', status: 'Active' },
  { id: 3, title: 'Course 3', students: 18, teacher: 'Priya Patel', status: 'Active' },
  { id: 4, title: 'Course 4', students: 22, teacher: 'Arjun Mehta', status: 'Active' },
  { id: 2, title: 'Course 2', students: 0, teacher: 'Unassigned', status: 'Draft' },
  { id: 5, title: 'Course 5', students: 0, teacher: 'Unassigned', status: 'Draft' }
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <>
            <Header>
              <PageTitle>Admin Dashboard</PageTitle>
              <UserProfile>
                <Avatar>RJ</Avatar>
                <UserInfo>
                  <span>Raj Joshi</span>
                  <span>System Administrator</span>
                </UserInfo>
              </UserProfile>
            </Header>
            
            <CardGrid>
              <StatCard color="255, 136, 3">
                <div className="icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="content">
                  <h3>{students.length}</h3>
                  <p>Total Students</p>
                </div>
              </StatCard>
              
              <StatCard color="76, 175, 80">
                <div className="icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <div className="content">
                  <h3>{teachers.length}</h3>
                  <p>Total Teachers</p>
                </div>
              </StatCard>
              
              <StatCard color="33, 150, 243">
                <div className="icon">
                  <i className="fas fa-book"></i>
                </div>
                <div className="content">
                  <h3>{courses.filter(course => course.status === 'Active').length}</h3>
                  <p>Active Courses</p>
                </div>
              </StatCard>
              
              <StatCard color="233, 30, 99">
                <div className="icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div className="content">
                  <h3>{courses.filter(course => course.status === 'Draft').length}</h3>
                  <p>Draft Courses</p>
                </div>
              </StatCard>
            </CardGrid>
            
            <Card>
              <CardHeader>
                <h2>Recent Activity</h2>
                <Button>View All</Button>
              </CardHeader>
              
              <div style={{ padding: '1rem 0' }}>
                <div style={{ padding: '0.75rem 1rem', borderLeft: '3px solid var(--primary-color)', marginBottom: '1rem', backgroundColor: 'rgba(255, 136, 3, 0.05)' }}>
                  <p><strong>New Student Registration:</strong> Vijay Patel joined the platform</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-medium)', marginTop: '0.25rem' }}>2 days ago</p>
                </div>
                
                <div style={{ padding: '0.75rem 1rem', borderLeft: '3px solid var(--success)', marginBottom: '1rem', backgroundColor: 'rgba(76, 175, 80, 0.05)' }}>
                  <p><strong>Course Update:</strong> Course 3 materials were updated by Priya Patel</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-medium)', marginTop: '0.25rem' }}>3 days ago</p>
                </div>
                
                <div style={{ padding: '0.75rem 1rem', borderLeft: '3px solid var(--primary-color)', marginBottom: '1rem', backgroundColor: 'rgba(255, 136, 3, 0.05)' }}>
                  <p><strong>New Student Registration:</strong> Neha Gupta joined the platform</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-medium)', marginTop: '0.25rem' }}>5 days ago</p>
                </div>
              </div>
            </Card>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
              <Card>
                <CardHeader>
                  <h2>Recent Students</h2>
                  <Button>View All</Button>
                </CardHeader>
                
                <div>
                  {students.slice(0, 3).map(student => (
                    <div key={student.id} style={{ padding: '1rem', borderBottom: '1px solid var(--gray-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>{student.name}</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--gray-medium)' }}>{student.email}</p>
                      </div>
                      <Button secondary style={{ padding: '0.25rem 0.5rem' }}>
                        <i className="fas fa-eye"></i>
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card>
                <CardHeader>
                  <h2>Recent Teachers</h2>
                  <Button>View All</Button>
                </CardHeader>
                
                <div>
                  {teachers.map(teacher => (
                    <div key={teacher.id} style={{ padding: '1rem', borderBottom: '1px solid var(--gray-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>{teacher.name}</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--gray-medium)' }}>{teacher.specialization}</p>
                      </div>
                      <Button secondary style={{ padding: '0.25rem 0.5rem' }}>
                        <i className="fas fa-eye"></i>
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </>
        );
      case 'students':
        return (
          <>
            <Header>
              <PageTitle>Student Management</PageTitle>
              <div>
                <input 
                  type="text" 
                  placeholder="Search students..." 
                  style={{ 
                    padding: '0.5rem 1rem', 
                    borderRadius: 'var(--border-radius)', 
                    border: '1px solid var(--gray-light)',
                    marginRight: '1rem'
                  }} 
                />
                <Button>
                  <i className="fas fa-plus" style={{ marginRight: '0.5rem' }}></i>
                  Add Student
                </Button>
              </div>
            </Header>
            
            <Card>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--gray-light)' }}>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Name</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Email</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Course</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Join Date</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(student => (
                      <tr key={student.id} style={{ borderBottom: '1px solid var(--gray-light)' }}>
                        <td style={{ padding: '1rem' }}>{student.name}</td>
                        <td style={{ padding: '1rem' }}>{student.email}</td>
                        <td style={{ padding: '1rem' }}>{student.course}</td>
                        <td style={{ padding: '1rem' }}>{student.joinDate}</td>
                        <td style={{ padding: '1rem' }}>
                          <Button secondary style={{ padding: '0.25rem 0.5rem', marginRight: '0.5rem' }}>
                            <i className="fas fa-edit"></i>
                          </Button>
                          <Button secondary style={{ padding: '0.25rem 0.5rem' }}>
                            <i className="fas fa-trash-alt"></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        );
      case 'teachers':
        return (
          <>
            <Header>
              <PageTitle>Teacher Management</PageTitle>
              <div>
                <input 
                  type="text" 
                  placeholder="Search teachers..." 
                  style={{ 
                    padding: '0.5rem 1rem', 
                    borderRadius: 'var(--border-radius)', 
                    border: '1px solid var(--gray-light)',
                    marginRight: '1rem'
                  }} 
                />
                <Button>
                  <i className="fas fa-plus" style={{ marginRight: '0.5rem' }}></i>
                  Add Teacher
                </Button>
              </div>
            </Header>
            
            <Card>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--gray-light)' }}>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Name</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Email</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Specialization</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Assigned Courses</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachers.map(teacher => (
                      <tr key={teacher.id} style={{ borderBottom: '1px solid var(--gray-light)' }}>
                        <td style={{ padding: '1rem' }}>{teacher.name}</td>
                        <td style={{ padding: '1rem' }}>{teacher.email}</td>
                        <td style={{ padding: '1rem' }}>{teacher.specialization}</td>
                        <td style={{ padding: '1rem' }}>{teacher.courses.join(', ')}</td>
                        <td style={{ padding: '1rem' }}>
                          <Button secondary style={{ padding: '0.25rem 0.5rem', marginRight: '0.5rem' }}>
                            <i className="fas fa-edit"></i>
                          </Button>
                          <Button secondary style={{ padding: '0.25rem 0.5rem' }}>
                            <i className="fas fa-trash-alt"></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        );
      case 'courses':
        return (
          <>
            <Header>
              <PageTitle>Course Management</PageTitle>
              <div>
                <input 
                  type="text" 
                  placeholder="Search courses..." 
                  style={{ 
                    padding: '0.5rem 1rem', 
                    borderRadius: 'var(--border-radius)', 
                    border: '1px solid var(--gray-light)',
                    marginRight: '1rem'
                  }} 
                />
                <Button>
                  <i className="fas fa-plus" style={{ marginRight: '0.5rem' }}></i>
                  Add Course
                </Button>
              </div>
            </Header>
            
            <Card>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--gray-light)' }}>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Course Title</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Assigned Teacher</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Students</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Status</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map(course => (
                      <tr key={course.id} style={{ borderBottom: '1px solid var(--gray-light)' }}>
                        <td style={{ padding: '1rem' }}>{course.title}</td>
                        <td style={{ padding: '1rem' }}>{course.teacher}</td>
                        <td style={{ padding: '1rem' }}>{course.students}</td>
                        <td style={{ padding: '1rem' }}>
                          <span style={{ 
                            padding: '0.25rem 0.75rem', 
                            borderRadius: '50px', 
                            fontSize: '0.75rem',
                            backgroundColor: course.status === 'Active' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(33, 150, 243, 0.1)',
                            color: course.status === 'Active' ? 'rgb(76, 175, 80)' : 'rgb(33, 150, 243)'
                          }}>
                            {course.status}
                          </span>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <Button secondary style={{ padding: '0.25rem 0.5rem', marginRight: '0.5rem' }}>
                            <i className="fas fa-edit"></i>
                          </Button>
                          <Button secondary style={{ padding: '0.25rem 0.5rem' }}>
                            <i className="fas fa-trash-alt"></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        );
      case 'settings':
        return (
          <>
            <Header>
              <PageTitle>System Settings</PageTitle>
            </Header>
            
            <Card>
              <CardHeader>
                <h2>General Settings</h2>
              </CardHeader>
              
              <div style={{ padding: '1rem 0' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Platform Name</label>
                  <input 
                    type="text" 
                    value="ANIMATION HUB" 
                    style={{ 
                      width: '100%',
                      padding: '0.75rem 1rem', 
                      borderRadius: 'var(--border-radius)', 
                      border: '1px solid var(--gray-light)'
                    }} 
                  />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Contact Email</label>
                  <input 
                    type="email" 
                    value="admin@animationhub.com" 
                    style={{ 
                      width: '100%',
                      padding: '0.75rem 1rem', 
                      borderRadius: 'var(--border-radius)', 
                      border: '1px solid var(--gray-light)'
                    }} 
                  />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Timezone</label>
                  <select 
                    style={{ 
                      width: '100%',
                      padding: '0.75rem 1rem', 
                      borderRadius: 'var(--border-radius)', 
                      border: '1px solid var(--gray-light)'
                    }}
                  >
                    <option>UTC+05:30 (Asia/Kolkata)</option>
                    <option>UTC+00:00 (GMT)</option>
                    <option>UTC-08:00 (America/Los_Angeles)</option>
                    <option>UTC-05:00 (America/New_York)</option>
                  </select>
                </div>
                
                <Button>Save Changes</Button>
              </div>
            </Card>
            
            <Card style={{ marginTop: '1.5rem' }}>
              <CardHeader>
                <h2>Appearance</h2>
              </CardHeader>
              
              <div style={{ padding: '1rem 0' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Primary Color</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <input 
                      type="color" 
                      value="#ff8803" 
                      style={{ 
                        width: '50px',
                        height: '50px',
                        padding: '0', 
                        border: 'none',
                        borderRadius: 'var(--border-radius)',
                        cursor: 'pointer'
                      }} 
                    />
                    <input 
                      type="text" 
                      value="#ff8803" 
                      style={{ 
                        width: '120px',
                        padding: '0.75rem 1rem', 
                        borderRadius: 'var(--border-radius)', 
                        border: '1px solid var(--gray-light)'
                      }} 
                    />
                  </div>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Logo</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      width: '100px', 
                      height: '100px', 
                      backgroundColor: 'var(--gray-light)', 
                      borderRadius: 'var(--border-radius)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gray-medium)',
                      fontSize: '2rem'
                    }}>
                      <i className="fas fa-image"></i>
                    </div>
                    <Button>Upload New Logo</Button>
                  </div>
                </div>
                
                <Button>Save Changes</Button>
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
      {isMobileView() && <MobileNavBar activeTab={activeTab} setActiveTab={setActiveTab} dashboardType="admin" />}

      {/* Desktop Sidebar (hidden on mobile) */}
      <Sidebar style={{
        display: 'flex',
        flexDirection: 'column',
        '@media (max-width:900px)': { display: 'none' },
      }}>
        <Logo>
          <img src={logo} alt="Animation Hub" style={{ maxWidth: '200px' }} />
          <p>Admin Portal</p>
        </Logo>
        <NavMenu>
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'dashboard'} 
              onClick={() => setActiveTab('dashboard')}
            >
              <i className="fas fa-home"></i>
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'students'} 
              onClick={() => setActiveTab('students')}
            >
              <i className="fas fa-users"></i>
              Students
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'teachers'} 
              onClick={() => setActiveTab('teachers')}
            >
              <i className="fas fa-chalkboard-teacher"></i>
              Teachers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'courses'} 
              onClick={() => setActiveTab('courses')}
            >
              <i className="fas fa-book"></i>
              Courses
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'settings'} 
              onClick={() => setActiveTab('settings')}
            >
              <i className="fas fa-cog"></i>
              Settings
            </NavLink>
          </NavItem>
          <NavItem style={{ marginTop: '2rem' }}>
            <NavLink href="/login">
              <i className="fas fa-sign-out-alt"></i>
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

export default AdminDashboard;
