import React from 'react'

import { Button } from '@mui/material';
import { Send } from '@mui/icons-material';

const Contact = () => {
  
  return (
    <div className='ctr'>
  <h2 style={{  textAlign: "center",marginBottom: "1rem"}}>Contact Us</h2>
      <form action='https://formspree.io/f/xrgwgjlw' method='POST'>
        <div className="form-group">
          <label className='lbl' htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="username"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label  className='lbl' htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label  className='lbl' htmlFor="message">Message:</label>
          <textarea
            id="message"
            name='message'
            className="form-control"
            placeholder="Enter your message"
            rows="5"
            required
          />
        </div>
        <Button type='submit' variant="contained" className="butn mx-auto" endIcon={<Send />}>
  Send Message
</Button>
      </form>
    </div>
  )
}

export default Contact
