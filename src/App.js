import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import Signin from './component/Signin.jsx';

import SignUp from './component/SignUp';



function App() {
  return (
    <div >
    
      <Signin/>
    </div>
  );
}

export default App;
