import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>

      <div className='contact__container grid'>
        <div className='contact__info'>
          <h3 className="contact__title">Let's Talk!</h3>
          <p className="contact__details">Let me know what you think in email if you need to!</p>
        </div>
        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Insert Your Name'/>
            </div>
            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Insert Your email'/>
            </div>
          </div>
          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Insert Your Subject'/>
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea name="" id='' cols="30" rows="10" className="contact__form-input" placeholder='let me know what you need'></textarea>
            </div>

            <button className="btn">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact