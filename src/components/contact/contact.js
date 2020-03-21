import React from "react"
import "./contact.css"

const Contact = () => (
  <div className="contact-container">
    <main className="contact">
      <section className="contact-content">
        <form
          action="https://formspree.io/your@email.com"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="text" name="name" />
          <input type="email" name="_replyto" />
          <input type="submit" value="Send" />
        </form>
      </section>
    </main>
  </div>
)

export default Contact
