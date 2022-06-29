import React from 'react'
import './contact.css'

const contact = () => {
  return (
    <section>
        <div className='contact_header'>
            <h2>Contact</h2>
            <h3>Want to get in touch?</h3>
        </div>
        <form className='contact_form'>
            <input className='form_input' type='text' name='name' placeholder='Your Name' required></input>
            <input className='form_input' type='text' name='email' placeholder='Your Email' required></input>
            <textarea className='form_input' type='text' name='message' rows='7' placeholder='Type your message here' required></textarea>
        </form>
    </section>
  )
}

export default contact