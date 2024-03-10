const AdminController=require("./controllers/AdminController")
const FacultyController=require("./controllers/FacultyController")
const StudentController=require("./controllers/StudentController")

const express = require("express")
const router=express.Router()

router.get("/viewstudents",AdminController.viewstudents)
router.delete("/deletefaculty",AdminController.deletefaculty)
router.delete("/deletestudent/:email",AdminController.deletestudent)
router.post("/checkadminlogin",AdminController.checkadminlogin)
router.get("/viewfaculty",AdminController.viewfaculties)


router.post("/insertstudent",StudentController.insertstudent)
router.post("/checkstudentlogin",StudentController.checkstudentlogin)

router.post("/insertfaculty",FacultyController.insertfaculty)
router.post("/checkfacultylogin",FacultyController.checkfacultylogin)