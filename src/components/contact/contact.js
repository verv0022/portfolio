import React from "react"
import "./contact.css"

const Contact = () => (
  <div className="contact-container">
    <main className="contact">
      <section className="contact-content">
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </section>
    </main>
  </div>
)

export default Contact
