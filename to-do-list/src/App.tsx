import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Start from './pages/start';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start/>}> </Route>
    </Routes>

  );
}

export default App;
