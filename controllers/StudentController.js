const student=require("../models/Student")

const insertstudent = async (request, response) => {
    try 
    {
      const input =  request.body;
      const students = new student(input);
      await students.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };
  const checkstudentlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const stulogin = await student.findOne(input)
       response.json(stulogin)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

   module.exports ={insertstudent,checkstudentlogin}