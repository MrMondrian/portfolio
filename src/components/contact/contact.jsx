import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_e22v4fq', 'template_satg68h', form.current, 'tOMRgyl-KZk7jjlrW')
            .then((result) => {
                const tags = document.getElementsByClassName('form_input')
                tags[0].value = '';
                tags[1].value = '';
                tags[2].value = '';
                console.log(result.text);
                alert("Message sent!")
            }, (error) => {
                console.log(error.text);
                alert("Message failed to send.\nYou can email me directly at anthonytan8@protonmail.com")
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
            <button type='submit' className='btn contact_btn'>Send message</button>
        </form>
    </section>
  )
}

export default Contact