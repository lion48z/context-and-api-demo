import React from 'react';
import './App.css';
import {  ThemeProvider } from './context/ThemeContext';
import ToggleThemeButton from './ToggleThemeButton';
import UserInfo from './UserInfo';


function App() {
  return (
    <ThemeProvider>
      <ToggleThemeButton/>
      <h1>React API Demo</h1>
      <UserInfo />

    </ThemeProvider>
  );
}

export default App;
