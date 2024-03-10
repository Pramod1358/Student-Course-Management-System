//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import MainNavbar from './main/MainNavbar';
import Adminnavbar from "./admin/Adminnavbar";
import FacultyNavbar from "./faculty/FacultyNavbar";
import StudentNavbar from "./student/StudentNavbar";

//import adminnavbar from './admin/adminnavbar';
function App() {
  return (
    <div className="App">
  <h2 align="center" style={{ color: 'red' }}>STUDENT COURSE MANAGEMENT SYSTEM</h2>
    <Router>
      <MainNavbar/>
      {/* <Adminnavbar/> */}
      {/* <FacultyNavbar/> */}
      {/* <StudentNavbar/> */}
      
    </Router>
    
    </div>
  );
}

export default App;
