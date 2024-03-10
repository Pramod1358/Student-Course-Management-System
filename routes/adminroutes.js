const AdminController= require("../controllers/AdminController")

const express = require("express")
const adminrouter = express.Router()

adminrouter.get("/viewstudents",AdminController.viewstudents)
adminrouter.get("/viewfaculties",AdminController.viewfaculties)
adminrouter.delete("/deletestudent/:email",AdminController.deletestudent)
adminrouter.post("/checkadminlogin",AdminController.checkadminlogin)
adminrouter.delete("/deletefaculty/:email",AdminController.deletefaculty)
module.exports=adminrouter