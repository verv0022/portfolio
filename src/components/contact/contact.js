import React from "react"
import "./contact.css"
import ScrollAnimation from "react-animate-on-scroll"

const Contact = () => (
  <div className="contact-container">
    <section className="contact">
      <div className="contact-title">
        <ScrollAnimation
          animateOnce={true}
          animateIn="slideInLeft"
          animatePreScroll={false}
          initiallyVisible={false}
        >
          <h2>Contact me</h2>
        </ScrollAnimation>
      </div>

      <form
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="John Smith" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="youremail@domain"
          />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" placeholder="Hello" />
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" className="special" />
          </li>
          <li>
            <input type="reset" value="Clear" className="special" />
          </li>
        </ul>
      </form>
    </section>
  </div>
)

export default Contact
