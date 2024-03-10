import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './admin.css'
import adminhome from './adminhome';
import Viewstudents from './Viewstudents';
import Viewfaculty from './Viewfaculty';


export default function Adminnavbar() 
{
  return (
    <div>

    <nav>
     <ul>
     <Link to="/adminhome">Home</Link>
     <Link to="/viewstudents">View students</Link>
     <Link to="/viewfaculty">View faculty</Link>

     </ul>
     </nav>

         <Routes>
         <Route path="/adminhome" Component={adminhome} exact/>
         <Route path="/viewstudents" Component={Viewstudents} exact/>
         <Route path="/viewfaculty" Component={Viewfaculty} exact/>

        </Routes>

    </div>
  )
}