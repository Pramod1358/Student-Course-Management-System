const FacultyController=require("../controllers/FacultyController")
const express = require("express")

const facultyrouter=express.Router()

facultyrouter.post("/insertfaculty",FacultyController.insertfaculty)
facultyrouter.post("/checkfacultylogin",FacultyController.checkfacultylogin)

module.exports=facultyrouter




