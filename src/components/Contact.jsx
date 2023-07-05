import React from 'react';

import "../style/contact.css"



const Contact = () => {
  
  return (
     
      
      <form 
        action="https://formspree.io/f/mgejewyd" 
        method="POST" >
        <p>Feel Free To Contact</p>
        <input 
          type="text" 
          name="username" 
          placeholder="username" 
          autoComplete="off" 
          required 
        /> 

        <input 
          type="email" 
          name="Email" 
          placeholder="Email" 
          autoComplete="off" 
          required 
        /> 
        <p>Message</p>
        <textarea 
          name="message" 
          cols="30" 
          rows="6" 
          autoComplete="off" 
          required></textarea> 

        <input type="submit" value="send" /> 
      </form> 
    
  
  );
};

export default Contact;

