import React from 'react';
import './index.css';
import emailjs from '@emailjs/browser';

function Form() {

  const sendEmail = (e) => {
    // e.preventDefault();
    
    // e.target is the form data!
    emailjs.sendForm('service_bkzcy1w', 'template_t5xj4m7', 'e.target', 'xN6vvKSJSx_kFYCIJ')
  }

  return (
    <section className="form-content" id="contact">
        <form onSubmit={sendEmail}>
            <h1 id="contact">Say Hi</h1>
                <div className="form-content">
                <input type="text" name="email_name" id="name" placeholder="enter your name" required />
                <input type="text" name="email" id="email" placeholder="enter valid email address" required />
                <textarea name="" id="" cols={40} rows={5} placeholder="Type your message here" required />
                </div>
				<input type="submit" id="submit" />
        </form>
      </section>
  )
}

export default Form