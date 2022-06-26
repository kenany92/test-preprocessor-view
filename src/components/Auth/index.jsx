import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * 
 * @param {{auth: boolean}} props 
 * @returns 
 */
const Auth = (props) => {
    const isAuth = true;

    if (isAuth) {
        return props.children;
    }

    return <Navigate to='/login' />;
};

export default Auth;