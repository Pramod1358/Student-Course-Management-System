import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Viewfaculty() {
  const [faculty, setfaculty] = useState([]);

  const fetchfaculty = async () => {
    try {
      const response = await axios.get('http://localhost:2032/viewfaculties');
      setfaculty(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchfaculty();
  }, []);

  const deletefaculty = async (email) => {
    try {
      await axios.delete(`http://localhost:2032/deletefaculty/${email}`);
      fetchfaculty();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Faculty List</h1>
      
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
  {Array.isArray(faculty) && faculty.length > 0 ? (
    faculty.map((fac, index) => (
      <tr key={index}>
        <td>{fac.fullname}</td>
        <td>{fac.gender}</td>
        <td>{fac.dateofbirth}</td>
        <td>{fac.branch}</td>
        <td>{fac.email}</td>
        <td>{fac.location}</td>
        <td>{fac.contact}</td>
        <td>
          <button onClick={() => deletefaculty(fac.email)} className='button'>Delete</button>
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