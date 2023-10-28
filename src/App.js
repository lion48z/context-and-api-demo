import { useContext, useEffect } from 'react';
import './App.css';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <h1>React API Demo</h1>
    </ThemeProvider>
  );
}

export default App;
