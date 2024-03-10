const StudentController=require("../controllers/StudentController")
const express = require("express")
const studentrouter=express.Router()
studentrouter.post("/insertstudent",StudentController.insertstudent)
studentrouter.post("/checkstudentlogin",StudentController.checkstudentlogin)


module.exports=studentrouter