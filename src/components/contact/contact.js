import React from "react"
import "./contact.css"

const Contact = () => (
  <main className="contact">
    <section className="contact-content">
      <form action="https://formspree.io/your@email.com" method="POST">
        <input type="text" name="name" />
        <input type="email" name="_replyto" />
        <input type="submit" value="Send" />
      </form>
    </section>
  </main>
)

export default Contact
