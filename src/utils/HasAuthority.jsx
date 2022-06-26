import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

/**
 * 
 * @param {{authority: string}} props 
 * @returns 
 */
const HasAuthority = (props) => {

    const { user } = useContext(AppContext); ///*'teacher';*/'student';

    if (props.authority === user) {
        return props.children
    }

    if (user === 'student') {
        return <Navigate to='/student/submissions' />
    }

    if (user === 'teacher') {
        return <Navigate to='/teacher' />
    }

    return <Navigate to='/admin' />
};

export default HasAuthority;