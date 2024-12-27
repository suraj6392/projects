import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Routes, Outlet,  } from 'react-router-dom';
import './App.css';
import Signin from './component/Signin.jsx';
import SignUp from './component/SignUp';
import Home from './component/Home';
import ProtectRoute from './component/ProtectRoute';
import About from './component/About';
import Contact from './component/Contact';




function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function login(para){
    setIsAuthenticated(para)
  }

  return (
    <div >
    
      {/* <Signin/> */}
     <Router>
            <Routes>
            
                <Route path="/" element={<SignUp login={login}  />} />
                <Route
                    path="/home"
                    element={
                         <ProtectRoute isAuthenticated={isAuthenticated}>
                            <Home />
                            <Outlet/>
                       </ProtectRoute>
                    }
                   
                />
                <Route path='home'
                 element={
                 <ProtectRoute isAuthenticated={isAuthenticated}>
                  <Home/>
                 </ProtectRoute>
                 }/>
                <Route path='about'
                 element={
                  <ProtectRoute isAuthenticated={isAuthenticated}>
                  <About/>
                 </ProtectRoute>
                 }/>
                <Route path='contact'
                 element={
                  <ProtectRoute isAuthenticated={isAuthenticated}>
                  <Contact/>
                 </ProtectRoute>
                 }/>
                
            </Routes>
        </Router>
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
