

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ isAuthenticated, children }) => {
    console.log(isAuthenticated);
    
    return isAuthenticated ? children : <Navigate to="/" />;
};




export default ProtectRoute
