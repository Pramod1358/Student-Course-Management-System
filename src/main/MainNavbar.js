import React from 'react'
import './style.css'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import AdminLogin from './../admin/AdminLogin';
import StudentRegistration from './../student/StudentRegistration';
import StudentLogin from './../student/StudentLogin';
import FacultyLogin from './../faculty/FacultyLogin';
import FacultyRegistration from './../faculty/FacultyRegistration';


export default function MainNavbar() {
  return (
    <div>
   <nav>
    <ul>
    <Link to="/">Home</Link>
    <Link to="/AdminLogin">Admin Login</Link>
    <Link to="/FacultyLogin">Faculty Login</Link>
    <Link to="/FacultyRegistration">Faculty Registration</Link>
    <Link to="/StudentRegistration">Student Registration</Link>
    <Link to="/StudentLogin">Student Login</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    </ul>
   </nav>

        <Routes>
        <Route path='/' element={<Home/>} exact/> 
        <Route path='/about' element={<About/>} exact/> 
        <Route path='/contact' element={<Contact/>} exact/> 
        <Route path='/AdminLogin' element={<AdminLogin/>} exact/> 
        <Route path='/StudentRegistration' element={<StudentRegistration/>} exact/> 
        <Route path='/StudentLogin' element={<StudentLogin/>} exact/> 
        <Route path='/FacultyLogin' element={<FacultyLogin/>} exact/> 
        <Route path='/FacultyRegistration' element={<FacultyRegistration/>} exact/> 
       
        </Routes>
    </div>
  )
}
