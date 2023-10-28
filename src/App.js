import React from 'react';
import './App.css';
import {  ThemeProvider } from './context/ThemeContext';
import ToggleThemeButton from './ToggleThemeButton';

function App() {
  return (
    <ThemeProvider>
      <ToggleThemeButton/>
      <h1>React API Demo</h1>
    </ThemeProvider>
  );
}

export default App;
