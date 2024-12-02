import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

import SignUp from './component/SignUp';



function App() {
  return (
    <div >
      <SignUp/>
    </div>
  );
}

export default App;
