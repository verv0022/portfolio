import React from "react"
import "./contact.css"

const Contact = () => (
  <div className="contact-container">
    <main className="contact">
      <section className="contact-content">
        <form name="Contact Form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="Contact Form" />
          <div>
            <label>Your Email:</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" />
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  </div>
)

export default Contact
