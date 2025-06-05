import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  @media (max-width: 900px) {
    display: none !important;
  }

  @media (max-width: 900px) {
    position: relative;
    width: 100vw;
    height: auto;
    min-height: 56px;
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow-y: visible;
    z-index: 100;
  }

  width: 250px;
  background-color: var(--background-dark);
  color: var(--text-light);
  padding: 2rem 0;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
`;

export const Logo = styled.div`
  padding: 0 1.5rem;
  margin-bottom: 2.5rem;
  
  h1 {
    color: var(--primary-color);
    font-size: 1.5rem;
    font-weight: 700;
  }
  
  p {
    color: var(--gray-medium);
    font-size: 0.875rem;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: ${props => props.active ? 'var(--text-light)' : 'var(--gray-medium)'};
  background-color: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  transition: var(--transition);
  
  svg {
    margin-right: 0.75rem;
    font-size: 1.25rem;
  }
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-dark)' : 'rgba(255, 255, 255, 0.05)'};
    color: var(--text-light);
  }
`;

export const MainContent = styled.div`
  flex: 1;
  margin-left: 250px;
  padding: 2rem;

  @media (max-width: 900px) {
    margin-left: 0;
    padding: 1rem 0.5rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-light);
`;

export const PageTitle = styled.h1`
  font-size: 1.75rem;
  color: var(--text-dark);
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  span:first-child {
    font-weight: 600;
    color: var(--text-dark);
  }
  
  span:last-child {
    font-size: 0.875rem;
    color: var(--gray-medium);
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  h2 {
    font-size: 1.25rem;
    color: var(--text-dark);
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const StatCard = styled.div`
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  
  .icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background-color: ${props => `rgba(${props.color}, 0.1)`};
    color: ${props => `rgb(${props.color})`};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  
  .content {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.25rem;
    }
    
    p {
      color: var(--gray-medium);
      font-size: 0.875rem;
    }
  }
`;

export const CourseCard = styled.div`
  @media (max-width: 600px) {
    .course-image {
      height: 120px;
    }
    .course-content {
      padding: 0.7rem;
    }
  }

  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
  
  .course-image {
    height: 160px;
    background-color: var(--primary-light);
    position: relative;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 5px;
      background-color: var(--success);
      width: ${props => props.progress || '0%'};
    }
  }
  
  .course-content {
    padding: 1.25rem;
    
    h3 {
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }
    
    p {
      color: var(--gray-medium);
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }
    
    .course-meta {
      display: flex;
      justify-content: space-between;
      font-size: 0.875rem;
      color: var(--text-dark);
    }
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: ${props => props.secondary ? 'white' : 'var(--primary-color)'};
  color: ${props => props.secondary ? 'var(--primary-color)' : 'white'};
  border: ${props => props.secondary ? '1px solid var(--primary-color)' : 'none'};
  border-radius: var(--border-radius);
  font-size: 0.875rem;
  font-weight: 600;
  transition: var(--transition);
  
  svg {
    margin-right: ${props => props.iconOnly ? '0' : '0.5rem'};
    font-size: ${props => props.iconOnly ? '1.25rem' : '1rem'};
  }
  
  &:hover {
    background-color: ${props => props.secondary ? 'var(--primary-light)' : 'var(--primary-dark)'};
    color: white;
  }
`;
