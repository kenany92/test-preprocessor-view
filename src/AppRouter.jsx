import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import StudentHome from './pages/StudentHome';
import AuthLayout from './layouts/AuthLayout';
import StudentLayout from './layouts/StudentLayout';
import Login from './pages/Login';
import Submission from './pages/Submission';
import HasAuthority from './utils/HasAuthority';
import Feedback from './pages/Feedback';
import TeacherLayout from './layouts/TeacherLayout';
import Project from './pages/Project';
import ProjectCreate from './pages/ProjectCreate';
import ProjectDetail from './pages/ProjectDetail';

const AppRouter = () => {
    return (
        <Router>
            <Routes>

                <Route path='/login' element={<Login />} />

                <Route path='/' element={<Auth> <AuthLayout /> </Auth> }>

                    <Route index element={<HasAuthority></HasAuthority>} />

                    <Route path='student' element={<HasAuthority authority='student'> <StudentLayout /> </HasAuthority>}>
                        <Route path='submissions' element={<StudentHome />} />
                        <Route path='submission/new' element={<Submission />} />
                        <Route path='feedback/:id' element={<Feedback />} />
                        <Route path='project/:id' element={<ProjectDetail />} />
                    </Route>

                    <Route path='teacher' element={<HasAuthority authority='teacher'> <TeacherLayout /> </HasAuthority>}>
                        <Route index element={<Project />} />
                        <Route path='project/new' element={<ProjectCreate />} />
                        <Route path='project/:id' element={<ProjectDetail />} />
                    </Route>
                    
                </Route>

                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;