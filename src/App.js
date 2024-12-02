import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />P
      </Routes>
    </Router>
  );
}

export default App;
