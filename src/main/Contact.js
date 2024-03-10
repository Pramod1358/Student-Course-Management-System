import React from 'react'
import image from './co.jpg';
export default function Contact() {
 
  return (
    <div className='image' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <h3 align="center"><u>Contact Us</u></h3>
      <form>
        <div>
          <label>Full Name</label>
          <input type="text" id="fullname" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label>Location</label>
          <input type="text" id="location" required />
        </div>
        <div>
          <label>Enter Subject</label>
          <textarea name="message" placeholder="Enter  message" required></textarea>
        </div>
        <div>
          <label>Contact</label>
          <input type="number" id="contact" required />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
