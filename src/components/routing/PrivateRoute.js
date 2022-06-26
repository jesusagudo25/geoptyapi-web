import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({Component}) => {
    const auth = localStorage.getItem('token'); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Component />  : <Navigate to="/login" />;
}

export default PrivateRoute;