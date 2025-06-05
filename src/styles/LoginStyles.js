import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 2.5rem;
  text-align: center;
  transition: var(--transition);

  @media (max-width: 600px) {
    max-width: 95vw;
    padding: 1.2rem;
    font-size: 0.95rem;
  }
`;

export const Logo = styled.div`
  margin-bottom: 2rem;
  
  h1 {
    color: var(--primary-color);
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--text-dark);
    font-size: 1rem;
  }
`;

export const LoginOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 600px) {
    gap: 0.7rem;
  }
`;

export const LoginButton = styled.button`
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.8rem 0.5rem;
    min-height: 44px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  background-color: ${props => props.primary ? 'var(--primary-color)' : 'white'};
  color: ${props => props.primary ? 'var(--text-light)' : 'var(--text-dark)'};
  border: 2px solid ${props => props.primary ? 'var(--primary-color)' : 'var(--gray-light)'};
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background-color: ${props => props.primary ? 'var(--primary-dark)' : 'var(--gray-light)'};
    transform: translateY(-2px);
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-dark);
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--gray-light);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px var(--primary-light);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  transition: var(--transition);
  margin-top: 1rem;
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  &:disabled {
    background-color: var(--gray-medium);
    cursor: not-allowed;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    color: var(--primary-dark);
  }
`;

export const ErrorMessage = styled.p`
  color: var(--error);
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;
