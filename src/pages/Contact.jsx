import React from 'react'

function Contact() {
  const handleFormSubmit = (formData) =>{
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  }
  return (
   <>
      <div className="contact-container">
          <h1>
            Contact Form
          </h1>
          <form action={handleFormSubmit}>
              <input
                type='text'
                placeholder='Enter Your Name'
                name='username'
                required
                autoComplete='false'
                className='input-container'
              >
              </input>
              <input
                type='email'
                placeholder='Enter Your Email'
                name='email'
                required
                autoComplete='false'
                className='input-container'
              >
              </input>
              <textarea
                type='text'
                placeholder='Enter your Query please'
                rows="4"
                name='message'
                required
                autoComplete='false'
                className='input-container'
              >
              </textarea>
              <button type='submit'>Send</button>
          </form>
      </div>
   </>
  )
}

export default Contact
