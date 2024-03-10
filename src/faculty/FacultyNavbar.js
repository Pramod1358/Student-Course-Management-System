import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import FacultyHome from './FacultyHome'
import './facultynavbar.css';
import FacultyCourses from './FacultyCourses'
import FacultyProfile from './FacultyProfile'

export default function FacultyNavbar() {
  return (
    <div>
        <nav>
            <ul>
                <Link to="/facultyhome" > Home </Link>
                <Link to="/facultycourses">Courses</Link>
                <Link to="/facultyprofile">Profile</Link>

            </ul>
        </nav>

        <Routes>
            <Route path='/facultyhome' Component={FacultyHome} exact/>
            <Route path='/facultycourses' Component={FacultyCourses} exact/>
            <Route path='/facultyprofile' Component={FacultyProfile} exact/>
        </Routes>
    </div>
  )
}
