const student=require("../models/Student")
const faculty=require("../models/Faculty")
const admin=require("../models/Admin");

const viewstudents = async (request, response) => 
{
   try 
   {
     const students = await student.find();
     if(students.length==0)
     {
       response.send("DATA NOT FOUND");
     }
     else
     {
       response.json(students);
     }
   } 
   catch (error) 
   {
     response.status(500).send(error.message);
   }
 };
 const viewfaculties = async (request, response) => 
{
   try 
   {
     const faculties = await faculty.find()
     if(faculties.length==0)
     {
       response.send("DATA NOT FOUND");
     }
     else
     {
       response.json(faculties);
     }
   } 
   catch (error) 
   {
     response.status(500).send(error.message);
   }
 };
 const deletestudent = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const dstudent = await student.findOne({"email":email})
      if(dstudent!=null)
      {
        await student.deleteOne({"email":email})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  

  const deletefaculty = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const dfac = await faculty.findOne({"email":email})
      if(dfac!=null)
      {
        await faculty.deleteOne({"email":email})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       console.log(input)
       const af = await admin.findOne(input)
       response.json(af)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

 module.exports={viewfaculties,viewstudents,deletestudent,checkadminlogin,deletefaculty}
  