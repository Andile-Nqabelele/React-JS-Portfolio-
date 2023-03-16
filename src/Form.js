import React, { useRef } from 'react';
import "./index.css";
import emailjs from "@emailjs/browser";


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  // e.target is the form data!
  emailjs.sendForm(
    "service_bkzcy1w",
    "template_t5xj4m7",
    e.target,
    "xN6vvKSJSx_kFYCIJ"
  ).then((result) => {
    console.log(result.text);
  }, (error) => {
    console.log(error.text);
  });

};

function Success(params) {
  alert('Email Sent!')
}


  return (
    <section className="form-content" id="contact">
      <form ref={form} onSubmit={sendEmail}>
        <h1 id="contact">Say Hi</h1>
        <div className="form-content">
          <input
            type="text"
            name="from_name"
            id="name"
            placeholder="enter your name"
            required
          />
          <input
            type="text"
            name="from_email"
            id="email"
            placeholder="enter valid email address"
            required
          />
          <textarea
            name="message"
            id=""
            cols={40}
            rows={5}
            placeholder="Type your message here"
            required
          />
        </div>
        <input type="submit" onClick={Success} id="submit" value="send" />
      </form>
    </section>
  );
}

export default ContactUs;
