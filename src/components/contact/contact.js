import React from "react"
import styles from "./contact.module.css"
import ScrollAnimation from "react-animate-on-scroll"

const Contact = () => (
  <div className={styles.container} id="contact-page">
    <div className={styles.content}>
      <ScrollAnimation
        animateOnce={true}
        animateIn="slideInLeft"
        animatePreScroll={false}
        initiallyVisible={false}>
        <h1 className="title">Contact me</h1>
      </ScrollAnimation>
      <form
        name="contact-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="John Smith" />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="youremail@domain"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" placeholder="Hello" />
        </div>
        <ul className={styles.actions}>
          <li>
            <input type="submit" value="Send Message" className="special" />
          </li>
          <li>
            <input type="reset" value="Clear" className="special" />
          </li>
        </ul>
      </form>
    </div>
  </div>
)

export default Contact
