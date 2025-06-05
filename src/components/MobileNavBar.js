import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import altBankLogo from '../assets/altbank logo.png';

const NavBarContainer = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  z-index: 3000;
  
  @media (max-width: 900px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
  }
`;

const NavItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  outline: none;
  padding: 8px 0;
  cursor: pointer;
  color: ${props => props.active ? 'rgb(255,136,3)' : '#666'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  width: 20%;  /* Changed from 25% to accommodate 5 items */
  
  i {
    font-size: 20px;
    margin-bottom: 4px;
  }
  
  span {
    font-size: 12px;
  }
`;

const MobileNavBar = ({ activeTab, setActiveTab, dashboardType = 'student' }) => {
  // We're not using React Router in this project, so we'll use window.location
  const handleLogout = () => {
    window.location.href = '/login';
  };
  
  const handleNavClick = (tab) => {
    setActiveTab(tab);
  };
  
  // Render different navigation items based on dashboard type
  const renderNavItems = () => {
    switch (dashboardType) {
      case 'student':
        return (
          <>
            <NavItem 
              active={activeTab === 'dashboard'} 
              onClick={() => handleNavClick('dashboard')}
            >
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </NavItem>
            
            <NavItem 
              active={activeTab === 'courses'} 
              onClick={() => handleNavClick('courses')}
            >
              <i className="fas fa-book"></i>
              <span>Courses</span>
            </NavItem>
            
            {/* Community nav item removed */}
            
            <NavItem 
              active={activeTab === 'profile'} 
              onClick={() => handleNavClick('profile')}
            >
              <i className="fas fa-user"></i>
              <span>Profile</span>
            </NavItem>
            
            {/* AltBank nav item removed */}
            
            <NavItem onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </NavItem>
          </>
        );
        
      case 'teacher':
        return (
          <>
            <NavItem 
              active={activeTab === 'dashboard'} 
              onClick={() => handleNavClick('dashboard')}
            >
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </NavItem>
            
            <NavItem 
              active={activeTab === 'students'} 
              onClick={() => handleNavClick('students')}
            >
              <i className="fas fa-users"></i>
              <span>Students</span>
            </NavItem>
            
            {/* Doubts nav item removed */}
            
            <NavItem 
              active={activeTab === 'syllabus'} 
              onClick={() => handleNavClick('syllabus')}
            >
              <i className="fas fa-book"></i>
              <span>Syllabus</span>
            </NavItem>
            
            <NavItem 
              active={activeTab === 'courses'} 
              onClick={() => handleNavClick('courses')}
            >
              <i className="fas fa-video"></i>
              <span>Videos</span>
            </NavItem>
            
            <NavItem onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </NavItem>
          </>
        );
        
      case 'admin':
        return (
          <>
            <NavItem 
              active={activeTab === 'dashboard'} 
              onClick={() => handleNavClick('dashboard')}
            >
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </NavItem>
            
            <NavItem 
              active={activeTab === 'students'} 
              onClick={() => handleNavClick('students')}
            >
              <i className="fas fa-user-graduate"></i>
              <span>Students</span>
            </NavItem>
            
            <NavItem 
              active={activeTab === 'teachers'} 
              onClick={() => handleNavClick('teachers')}
            >
              <i className="fas fa-chalkboard-teacher"></i>
              <span>Teachers</span>
            </NavItem>
            
            <NavItem 
              active={activeTab === 'courses'} 
              onClick={() => handleNavClick('courses')}
            >
              <i className="fas fa-book"></i>
              <span>Courses</span>
            </NavItem>
            
            <NavItem onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </NavItem>
          </>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <NavBarContainer>
      {renderNavItems()}
    </NavBarContainer>
  );
};

export default MobileNavBar;
