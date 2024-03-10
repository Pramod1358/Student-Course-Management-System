import React, { useState } from 'react';
import axios from 'axios';
import './student.css'



export default function StudentCourseRegistration() 
{
  //formData state variable is initialized with all required keys and empty values
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    dateofbirth: '',
    branch:'',
    email: '',
    password: '',
    location: '',
    contact: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2032/insertfaculty', formData);
      if (response.status === 200) 
      {
        //It will set all fields to ""
        setFormData({
          fullname: '',
          gender: '',
          dateofbirth: '',
          branch:'',
          email: '',
          password: '',
          location: '',
          contact: ''
        });
      }
      setMessage(response.data);
      setError(''); 
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage(''); 
    }
  };
  
  return (
    <div >
      <h3 align="center"><u>Faculty Registration</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div>
          <label>select courses</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">MSWD</option>
            <option value="male">PFSD</option>
            <option value="female">ASC</option>
            <option value="other">AOOP</option>
          </select>
        </div>
      
        
        <div>
          <label>Branch</label>
          <select id="branch" value={formData.branch} onChange={handleChange} required>
            <option value="">Select branch</option>
            <option value="cse">CSE</option>
            <option value="mech">MECH</option>
            <option value="csit">CSIT</option>
            <option value="aids">AIDS</option>
            <option value="ece">ECE</option>
          </select>
        </div>
        <div>
          <label>Contact</label>
          <input type="number" id="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <button type="submit">Register course</button>
      </form>
    </div>
  );
}