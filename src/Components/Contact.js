import React from 'react';
import '../Css/Contact.css'

const Contact = () => {
  return (
    <div className='container'>
      <div className="center">
        <h1>Contact Page</h1>
        <form>
          <div className="inputbox">
            <input type="text" required="required" autoComplete='off' />
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input type="email" required="required" autoComplete='off' />
            <span>E-mail</span>
          </div>
          <div className="inputbox">
            <input type="button" value="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;
