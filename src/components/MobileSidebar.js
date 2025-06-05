import React, { useRef, useEffect } from 'react';
import { Sidebar, Logo, NavMenu, NavItem, NavLink } from '../styles/DashboardStyles';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.25);
  z-index: 1500;
  transition: opacity 0.3s;
  pointer-events: auto;
`;

const SlidingSidebar = styled(Sidebar)`
  position: fixed !important;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80vw;
  max-width: 320px;
  background: #fff;
  color: var(--text-dark);
  box-shadow: 2px 0 16px rgba(0,0,0,0.12);
  z-index: 1600;
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(.4,0,.2,1);
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  &.open {
    transform: translateX(0);
  }
`;


// Utility: detect mobile view by viewport width
export function isMobileView() {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(max-width: 900px)').matches;
  }
  return false;
}

export default function MobileSidebar({ open, onClose, activeTab, setActiveTab, logo }) {
  const startX = useRef(null);
  const sidebarRef = useRef();

  // Swipe right to open (handled by parent), swipe left to close
  useEffect(() => {
    if (!open) return;
    let touchStartX = null;
    let touchCurrentX = null;
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };
    const handleTouchMove = (e) => {
      touchCurrentX = e.touches[0].clientX;
      if (touchStartX !== null) {
        const delta = touchCurrentX - touchStartX;
        if (delta < -60) {
          onClose();
          touchStartX = null;
        }
      }
    };
    const node = sidebarRef.current;
    node && node.addEventListener('touchstart', handleTouchStart);
    node && node.addEventListener('touchmove', handleTouchMove);
    return () => {
      node && node.removeEventListener('touchstart', handleTouchStart);
      node && node.removeEventListener('touchmove', handleTouchMove);
    };
  }, [open, onClose]);

  return (
    <>
      <Overlay 
        onClick={open ? onClose : undefined} 
        style={{ 
          pointerEvents: open ? 'auto' : 'none', 
          opacity: open ? 1 : 0, 
          transition: 'opacity 0.3s',
          zIndex: 1500 
        }} 
      />
      <SlidingSidebar 
        className={open ? 'open' : ''} 
        ref={sidebarRef} 
        style={{ 
          pointerEvents: open ? 'auto' : 'none',
          zIndex: 1600 
        }}>
        <Logo>
          <img src={logo} alt="Animation Hub" style={{ maxWidth: '140px' }} />
          <p>Learning Platform</p>
        </Logo>
        <NavMenu>
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'dashboard'} 
              onClick={() => { setActiveTab('dashboard'); onClose(); }}
            >
              <i className="fas fa-home"></i>
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'courses'} 
              onClick={() => { setActiveTab('courses'); onClose(); }}
            >
              <i className="fas fa-book"></i>
              Courses
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'community'} 
              onClick={() => { setActiveTab('community'); onClose(); }}
            >
              <i className="fas fa-users"></i>
              Community
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#" 
              active={activeTab === 'profile'} 
              onClick={() => { setActiveTab('profile'); onClose(); }}
            >
              <i className="fas fa-user"></i>
              Profile
            </NavLink>
          </NavItem>
          <NavItem style={{ marginTop: '2rem' }}>
            <NavLink href="/login">
              <i className="fas fa-sign-out-alt"></i>
              Logout
            </NavLink>
          </NavItem>
        </NavMenu>
      </SlidingSidebar>
    </>
  );
}
