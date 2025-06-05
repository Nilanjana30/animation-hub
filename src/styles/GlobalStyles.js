import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: rgb(255, 136, 3);
    --primary-light: rgba(255, 136, 3, 0.8);
    --primary-dark: rgb(224, 119, 0);
    --text-dark: #333;
    --text-light: #fff;
    --background-light: #f5f5f5;
    --background-dark: #2c2c2c;
    --gray-light: #e1e1e1;
    --gray-medium: #b0b0b0;
    --success: #4caf50;
    --error: #f44336;
    --border-radius: 8px;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Segoe UI', Arial, sans-serif;
    background-color: var(--background-light);
    color: var(--text-dark);
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
  }

  a:hover {
    color: var(--primary-dark);
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
  }
  
  /* Responsive base styles */
  @media (max-width: 600px) {
    html {
      font-size: 15px;
    }
    body {
      padding: 0;
      min-width: 0;
      overflow-x: hidden;
    }
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    h4, h5, h6 {
      font-size: 1rem;
    }
  }
`;

export default GlobalStyles;
