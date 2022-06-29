import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'tOMRgyl-KZk7jjlrW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
  return (
    <section>
        <div className='contact_header'>
            <h2>Contact</h2>
            <h3>Want to get in touch?</h3>
        </div>
        <form ref={form} onSubmit={sendEmail} className='contact_form'>
            <input className='form_input' type='text' name='name' placeholder='Your Name' required></input>
            <input className='form_input' type='text' name='email' placeholder='Your Email' required></input>
            <textarea className='form_input' type='text' name='message' rows='7' placeholder='Type your message here' required></textarea>
            <button type='submit' class='btn contact_btn'>Send message</button>
        </form>
    </section>
  )
}

export default Contact