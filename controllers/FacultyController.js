const faculty = require("../models/Faculty");
const Faculty=require("../models/Faculty")
const insertfaculty = async (request, response) => {
    try 
    {
      const input =  request.body;
      const faculty = new Faculty(input);
      await faculty.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };
  const checkfacultylogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const faculty = await Faculty.findOne(input)
       response.json(faculty)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

   
module.exports ={insertfaculty,checkfacultylogin}