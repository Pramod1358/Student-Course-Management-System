import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Viewstudents() {
  const [students, setstudents] = useState([]);

  const fetchstudents = async () => {
    try {
      const response = await axios.get('http://localhost:2032/viewstudents');
      setstudents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchstudents();
  }, []);

  const deletestudent = async (email) => {
    try {
      await axios.delete(`http://localhost:2032/deletestudent/${email}`);
      fetchstudents();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Student List</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>branch</th>
              <th>Email</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(students) && students.length > 0 ? (
    students.map((student, index) => (
      <tr key={index}>
        <td>{student.fullname}</td>
        <td>{student.gender}</td>
        <td>{student.dateofbirth}</td>
        <td>{student.branch}</td>
        <td>{student.email}</td>
        <td>{student.location}</td>
        <td>{student.contact}</td>
        <td>
          <button onClick={() => deletestudent(student.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}