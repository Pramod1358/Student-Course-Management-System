import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import StudentHome from './StudentHome'
import StudentCourse from './StudentCourse'
import StudentProfile from './StudentProfile'
import StudentCourseRegistration from './StudentCourseRegistration'
import StudentLogin from './StudentLogin'

export default function StudentNavbar() {
  return (
    <div>
    <nav>
      <ul>
      <Link to="/studenthome" > Home </Link>
      <Link to="//studentcourse" > courses </Link>
      <Link to="/studentprofile" > profile </Link>
      <Link to="/stucouregi">Course Registration</Link>
      </ul>
    </nav>


        <Routes>
        <Route path='/' Component={StudentLogin} exact/>
            <Route path='/studenthome' Component={StudentHome} exact/>
            <Route path='/studentcourse' Component={StudentCourse} exact/>
            <Route path='/studentprofile' Component={StudentProfile} exact/>
            <Route path='/stucouregi'  Component={StudentCourseRegistration} exact/> 
            
        </Routes>
    </div>
  )
}
