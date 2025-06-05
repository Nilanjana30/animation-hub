import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logodash.jpg';
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
  CourseCard,
  Button
} from '../styles/DashboardStyles';

// Mock data for the teacher dashboard
const students = [
  { id: 1, name: 'Rahul Kumar', course: 'Course 1', progress: '65%', email: 'rahul@example.com' },
  { id: 2, name: 'Priya Singh', course: 'Course 3', progress: '42%', email: 'priya@example.com' },
  { id: 3, name: 'Amit Sharma', course: 'Course 4', progress: '78%', email: 'amit@example.com' },
  { id: 4, name: 'Neha Gupta', course: 'Course 1', progress: '23%', email: 'neha@example.com' },
  { id: 5, name: 'Vijay Patel', course: 'Course 3', progress: '91%', email: 'vijay@example.com' }
];

// Doubts section removed

const syllabusItems = [
  { id: 1, title: 'Course 1 - Week 1', content: 'Introduction to Animation Fundamentals', status: 'Completed' },
  { id: 2, title: 'Course 1 - Week 2', content: 'Basic Animation Techniques', status: 'In Progress' },
  { id: 3, title: 'Course 1 - Week 3', content: 'Character Design Basics', status: 'Upcoming' },
  { id: 4, title: 'Course 3 - Week 1', content: 'Advanced Animation Concepts', status: 'Completed' },
  { id: 5, title: 'Course 3 - Week 2', content: 'Rigging and Character Setup', status: 'In Progress' }
];

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [courses, setCourses] = useState([
    { id: 1, title: 'Introduction to Animation', description: 'Learn the basics of animation', thumbnail: null, videoUrl: null },
    { id: 2, title: 'Character Design', description: 'Master the art of character design', thumbnail: null, videoUrl: null },
    { id: 3, title: '3D Modeling Fundamentals', description: 'Get started with 3D modeling', thumbnail: null, videoUrl: null }
  ]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    thumbnail: null,
    thumbnailPreview: null,
    video: null,
    videoPreview: null
  });
  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);

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

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewCourse({
        ...newCourse,
        thumbnail: file,
        thumbnailPreview: URL.createObjectURL(file)
      });
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewCourse({
        ...newCourse,
        video: file,
        videoPreview: URL.createObjectURL(file)
      });
    }
  };

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    // For now, we'll just add it to our local state
    const newCourseData = {
      id: courses.length + 1,
      title: newCourse.title,
      description: newCourse.description,
      thumbnail: newCourse.thumbnailPreview,
      videoUrl: newCourse.videoPreview
    };
    
    setCourses([...courses, newCourseData]);
    setNewCourse({
      title: '',
      description: '',
      thumbnail: null,
      thumbnailPreview: null,
      video: null,
      videoPreview: null
    });
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <>
            <Header>
              <PageTitle>Teacher Dashboard</PageTitle>
              <UserProfile>
                <Avatar>{getInitials()}</Avatar>
                <UserInfo>
                  <span>{getFullName()}</span>
                  <span>Animation Instructor</span>
                </UserInfo>
              </UserProfile>
            </Header>
            
            <CardGrid>
              <StatCard color="255, 136, 3">
                <div className="icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="content">
                  <h3>5</h3>
                  <p>Total Students</p>
                </div>
              </StatCard>
              
              <StatCard color="76, 175, 80">
                <div className="icon">
                  <i className="fas fa-book"></i>
                </div>
                <div className="content">
                  <h3>3</h3>
                  <p>Active Courses</p>
                </div>
              </StatCard>
              
              {/* Doubts stat card removed */}
              
              <StatCard color="233, 30, 99">
                <div className="icon">
                  <i className="fas fa-tasks"></i>
                </div>
                <div className="content">
                  <h3>2</h3>
                  <p>Upcoming Deadlines</p>
                </div>
              </StatCard>
            </CardGrid>
            
            <Card>
              <CardHeader>
                <h2>Recent Student Activity</h2>
                <Button>View All</Button>
              </CardHeader>
              
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--gray-light)' }}>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Student</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Course</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Progress</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Last Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.slice(0, 3).map(student => (
                      <tr key={student.id} style={{ borderBottom: '1px solid var(--gray-light)' }}>
                        <td style={{ padding: '1rem' }}>{student.name}</td>
                        <td style={{ padding: '1rem' }}>{student.course}</td>
                        <td style={{ padding: '1rem' }}>
                          <div style={{ width: '100%', backgroundColor: 'var(--gray-light)', borderRadius: '4px', height: '8px' }}>
                            <div style={{ width: student.progress, backgroundColor: 'var(--primary-color)', borderRadius: '4px', height: '8px' }}></div>
                          </div>
                          <span style={{ fontSize: '0.75rem', color: 'var(--gray-medium)' }}>{student.progress}</span>
                        </td>
                        <td style={{ padding: '1rem' }}>Today</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            
            {/* Recent doubts card removed */}
          </>
        );
      case 'students':
        return (
          <>
            <Header>
              <PageTitle>Student List</PageTitle>
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
                  <i className="fas fa-filter" style={{ marginRight: '0.5rem' }}></i>
                  Filter
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
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Progress</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(student => (
                      <tr key={student.id} style={{ borderBottom: '1px solid var(--gray-light)' }}>
                        <td style={{ padding: '1rem' }}>{student.name}</td>
                        <td style={{ padding: '1rem' }}>{student.email}</td>
                        <td style={{ padding: '1rem' }}>{student.course}</td>
                        <td style={{ padding: '1rem' }}>
                          <div style={{ width: '100%', backgroundColor: 'var(--gray-light)', borderRadius: '4px', height: '8px' }}>
                            <div style={{ width: student.progress, backgroundColor: 'var(--primary-color)', borderRadius: '4px', height: '8px' }}></div>
                          </div>
                          <span style={{ fontSize: '0.75rem', color: 'var(--gray-medium)' }}>{student.progress}</span>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <Button secondary style={{ padding: '0.25rem 0.5rem', marginRight: '0.5rem' }}>
                            <i className="fas fa-eye"></i>
                          </Button>
                          <Button secondary style={{ padding: '0.25rem 0.5rem' }}>
                            <i className="fas fa-envelope"></i>
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
      // Doubts case removed
      case 'syllabus':
        return (
          <>
            <Header>
              <PageTitle>Course Syllabus</PageTitle>
              <div>
                <select 
                  style={{ 
                    padding: '0.5rem 1rem', 
                    borderRadius: 'var(--border-radius)', 
                    border: '1px solid var(--gray-light)',
                    marginRight: '1rem'
                  }}
                >
                  <option>All Courses</option>
                  <option>Course 1</option>
                  <option>Course 3</option>
                  <option>Course 4</option>
                </select>
                <Button>
                  <i className="fas fa-plus" style={{ marginRight: '0.5rem' }}></i>
                  Add Module
                </Button>
              </div>
            </Header>
            
            <Card>
              {syllabusItems.map(item => (
                <div key={item.id} style={{ padding: '1.5rem', borderBottom: '1px solid var(--gray-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '50px', 
                      fontSize: '0.75rem',
                      backgroundColor: item.status === 'Completed' ? 'rgba(76, 175, 80, 0.1)' : 
                                      item.status === 'In Progress' ? 'rgba(255, 136, 3, 0.1)' : 
                                      'rgba(33, 150, 243, 0.1)',
                      color: item.status === 'Completed' ? 'rgb(76, 175, 80)' : 
                             item.status === 'In Progress' ? 'rgb(255, 136, 3)' : 
                             'rgb(33, 150, 243)'
                    }}>
                      {item.status}
                    </span>
                    <Button secondary style={{ padding: '0.25rem 0.5rem' }}>
                      <i className="fas fa-edit"></i>
                    </Button>
                  </div>
                </div>
              ))}
            </Card>
          </>
        );
      case 'contact':
        return (
          <>
            <Header>
              <PageTitle>Contact Admin</PageTitle>
            </Header>
            
            <Card>
              <CardHeader>
                <h2>Send Message to Admin</h2>
              </CardHeader>
              
              <div style={{ padding: '1rem 0' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Subject</label>
                  <input 
                    type="text" 
                    placeholder="Enter subject" 
                    style={{ 
                      width: '100%',
                      padding: '0.75rem 1rem', 
                      borderRadius: 'var(--border-radius)', 
                      border: '1px solid var(--gray-light)'
                    }} 
                  />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                  <textarea 
                    placeholder="Type your message here..." 
                    rows="6"
                    style={{ 
                      width: '100%',
                      padding: '0.75rem 1rem', 
                      borderRadius: 'var(--border-radius)', 
                      border: '1px solid var(--gray-light)',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }} 
                  ></textarea>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Priority</label>
                  <select 
                    style={{ 
                      width: '100%',
                      padding: '0.75rem 1rem', 
                      borderRadius: 'var(--border-radius)', 
                      border: '1px solid var(--gray-light)'
                    }}
                  >
                    <option>Normal</option>
                    <option>High</option>
                    <option>Urgent</option>
                  </select>
                </div>
                
                <Button>Send Message</Button>
              </div>
            </Card>
            
            <Card>
              <CardHeader>
                <h2>Previous Communications</h2>
              </CardHeader>
              
              <div>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--gray-light)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Course Material Update</h3>
                    <span style={{ fontSize: '0.875rem', color: 'var(--gray-medium)' }}>2025-04-20</span>
                  </div>
                  <p style={{ marginBottom: '0.5rem' }}>Request for updated course materials for Course 3</p>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '50px', 
                    fontSize: '0.75rem',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    color: 'rgb(76, 175, 80)'
                  }}>
                    Resolved
                  </span>
                </div>
                
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--gray-light)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Technical Issue</h3>
                    <span style={{ fontSize: '0.875rem', color: 'var(--gray-medium)' }}>2025-04-15</span>
                  </div>
                  <p style={{ marginBottom: '0.5rem' }}>Reporting issue with video playback in Course 1</p>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '50px', 
                    fontSize: '0.75rem',
                    backgroundColor: 'rgba(255, 136, 3, 0.1)',
                    color: 'rgb(255, 136, 3)'
                  }}>
                    In Progress
                  </span>
                </div>
              </div>
            </Card>
          </>
        );
      case 'courses':
        return (
          <>
            <Header>
              <PageTitle>Course Videos</PageTitle>
              <Button onClick={() => setSelectedCourse('new')}>
                <i className="fas fa-plus"></i> Add New Course
              </Button>
            </Header>

            {selectedCourse === 'new' ? (
              <Card>
                <CardHeader>
                  <h2>Add New Course</h2>
                  <Button secondary onClick={() => setSelectedCourse(null)}>
                    <i className="fas fa-arrow-left"></i> Back to Courses
                  </Button>
                </CardHeader>
                <form onSubmit={handleCourseSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Course Title</label>
                    <input 
                      type="text" 
                      value={newCourse.title}
                      onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        borderRadius: 'var(--border-radius)', 
                        border: '1px solid var(--gray-light)' 
                      }}
                      required
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Course Description</label>
                    <textarea 
                      value={newCourse.description}
                      onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        borderRadius: 'var(--border-radius)', 
                        border: '1px solid var(--gray-light)',
                        minHeight: '100px'
                      }}
                      required
                    />
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Course Thumbnail</label>
                      <div style={{ 
                        border: '2px dashed var(--gray-light)', 
                        borderRadius: 'var(--border-radius)', 
                        padding: '1.5rem',
                        textAlign: 'center',
                        cursor: 'pointer',
                        backgroundColor: 'var(--background-light)'
                      }} onClick={() => fileInputRef.current.click()}>
                        {newCourse.thumbnailPreview ? (
                          <img 
                            src={newCourse.thumbnailPreview} 
                            alt="Thumbnail preview" 
                            style={{ maxWidth: '100%', maxHeight: '150px', borderRadius: 'var(--border-radius)' }}
                          />
                        ) : (
                          <>
                            <i className="fas fa-image" style={{ fontSize: '2rem', color: 'var(--gray-medium)', marginBottom: '0.5rem' }}></i>
                            <p>Click to upload thumbnail</p>
                          </>
                        )}
                        <input 
                          type="file" 
                          ref={fileInputRef} 
                          onChange={handleThumbnailChange} 
                          style={{ display: 'none' }}
                          accept="image/*"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Course Video</label>
                      <div style={{ 
                        border: '2px dashed var(--gray-light)', 
                        borderRadius: 'var(--border-radius)', 
                        padding: '1.5rem',
                        textAlign: 'center',
                        cursor: 'pointer',
                        backgroundColor: 'var(--background-light)'
                      }} onClick={() => videoInputRef.current.click()}>
                        {newCourse.videoPreview ? (
                          <video 
                            src={newCourse.videoPreview} 
                            controls 
                            style={{ maxWidth: '100%', maxHeight: '150px', borderRadius: 'var(--border-radius)' }}
                          />
                        ) : (
                          <>
                            <i className="fas fa-video" style={{ fontSize: '2rem', color: 'var(--gray-medium)', marginBottom: '0.5rem' }}></i>
                            <p>Click to upload video</p>
                          </>
                        )}
                        <input 
                          type="file" 
                          ref={videoInputRef} 
                          onChange={handleVideoChange} 
                          style={{ display: 'none' }}
                          accept="video/*"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Button type="submit" style={{ marginRight: '0.75rem' }}>
                    <i className="fas fa-save"></i> Save Course
                  </Button>
                  <Button type="button" secondary onClick={() => setSelectedCourse(null)}>
                    Cancel
                  </Button>
                </form>
              </Card>
            ) : selectedCourse ? (
              <Card>
                <CardHeader>
                  <h2>{courses.find(c => c.id === selectedCourse)?.title || 'Course Details'}</h2>
                  <Button secondary onClick={() => setSelectedCourse(null)}>
                    <i className="fas fa-arrow-left"></i> Back to Courses
                  </Button>
                </CardHeader>
                <div style={{ marginBottom: '1.5rem' }}>
                  <p>{courses.find(c => c.id === selectedCourse)?.description || 'No description available'}</p>
                </div>
                {courses.find(c => c.id === selectedCourse)?.videoUrl && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ marginBottom: '0.75rem' }}>Course Video</h3>
                    <video 
                      src={courses.find(c => c.id === selectedCourse)?.videoUrl} 
                      controls 
                      style={{ width: '100%', maxHeight: '70vh', borderRadius: 'var(--border-radius)' }}
                      playsInline
                    />
                  </div>
                )}
              </Card>
            ) : (
              <CardGrid style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                {courses.map(course => (
                  <CourseCard key={course.id} onClick={() => setSelectedCourse(course.id)}>
                    <div className="course-image">
                      {course.thumbnail ? (
                        <img src={course.thumbnail} alt={course.title} />
                      ) : (
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          height: '100%',
                          backgroundColor: 'var(--primary-light)',
                          color: 'var(--primary-color)'
                        }}>
                          <i className="fas fa-video" style={{ fontSize: '2rem' }}></i>
                        </div>
                      )}
                    </div>
                    <div className="course-content">
                      <h3>{course.title}</h3>
                      <p>{course.description}</p>
                      <div className="course-meta">
                        <span>
                          <i className="fas fa-play-circle" style={{ marginRight: '0.25rem' }}></i>
                          {course.videoUrl ? 'Video Available' : 'No Video'}
                        </span>
                        <Button iconOnly style={{ padding: '0.25rem' }}>
                          <i className="fas fa-edit"></i>
                        </Button>
                      </div>
                    </div>
                  </CourseCard>
                ))}
                
                <CourseCard 
                  onClick={() => setSelectedCourse('new')} 
                  style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '250px',
                    cursor: 'pointer',
                    backgroundColor: 'var(--background-light)',
                    border: '2px dashed var(--gray-light)'
                  }}
                >
                  <i className="fas fa-plus-circle" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}></i>
                  <h3>Add New Course</h3>
                </CourseCard>
              </CardGrid>
            )}
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
      {isMobileView() && <MobileNavBar activeTab={activeTab} setActiveTab={setActiveTab} dashboardType="teacher" />}

      {/* Desktop Sidebar (hidden on mobile) */}
      <Sidebar style={{
        display: 'flex',
        flexDirection: 'column',
        '@media (max-width:900px)': { display: 'none' },
      }}>
        <Logo style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem 0' }}>
          <img src={logo} alt="Animation Hub" style={{ maxWidth: '180px', marginBottom: '0.5rem' }} />
          <p style={{ textAlign: 'center', fontWeight: '600', fontSize: '1.1rem', color: 'white' }}>Teacher Portal</p>
        </Logo>
        <NavMenu style={{ width: '100%', padding: '0 0.5rem' }}>
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'dashboard'} 
              onClick={() => setActiveTab('dashboard')}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <i className="fas fa-home" style={{ marginRight: '0.75rem', width: '20px', textAlign: 'center' }}></i>
              <span>Dashboard</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'students'} 
              onClick={() => setActiveTab('students')}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <i className="fas fa-users" style={{ marginRight: '0.75rem', width: '20px', textAlign: 'center' }}></i>
              <span>Student List</span>
            </NavLink>
          </NavItem>
          {/* Doubts nav item removed */}
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'syllabus'} 
              onClick={() => setActiveTab('syllabus')}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <i className="fas fa-book" style={{ marginRight: '0.75rem', width: '20px', textAlign: 'center' }}></i>
              <span>Syllabus</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'courses'} 
              onClick={() => setActiveTab('courses')}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <i className="fas fa-video" style={{ marginRight: '0.75rem', width: '20px', textAlign: 'center' }}></i>
              <span>Course Videos</span>
            </NavLink>
          </NavItem>

          <NavItem style={{ marginTop: '2rem' }}>
            <NavLink 
              href="/login"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <i className="fas fa-sign-out-alt" style={{ marginRight: '0.75rem', width: '20px', textAlign: 'center' }}></i>
              <span>Logout</span>
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

export default TeacherDashboard;
