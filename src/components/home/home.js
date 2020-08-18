import React from "react"
import styles from "./home.module.css"
import ScrollDownArrow from "../scroll-down-arrow/scroll-down-arrow"
import scrollTo from "gatsby-plugin-smoothscroll"
import pdf from "./icons/pdf.svg"
import github from "./icons/github.svg"
import linkedin from "./icons/linkedin.svg"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"

const highlight = {
  color: "#CEA335",
}

const Home = () => (
  <div className="container" id="home-page">
    <div className={styles.content}>
      <h1 id={styles.name} className="title">
        Hi, I'm <span style={highlight}>Brandon</span>{" "}
      </h1>
      <p className={styles.description}>
        I'm a front-end <span style={highlight}>developer</span> with a good
        balance of creative and technical skills who loves learning new
        technologies. I have knowledge in{" "}
        <span style={highlight}>UX design</span> and love to develop mobile and
        web applications.
      </p>
      <div className={styles.icons}>
        {/* <ScrollAnimation
          animateOnce={true}
          animateIn="bounceInUp"
          animatePreScroll={false}> */}
        <a
          href={`https://drive.google.com/file/d/1EqlVAOuj1T2tKD0WQjvxhOH7N14BO_ld/view?usp=sharing`}>
          <img src={pdf} alt="Resume" height="50" className={styles.icon} />
        </a>
        <a href={`https://github.com/verv0022`}>
          <img src={github} alt="Github" height="50" className={styles.icon} />
        </a>
        <a href={`https://www.linkedin.com/in/brandonwv/`}>
          <img
            src={linkedin}
            alt="LinkedIn"
            height="50"
            className={styles.icon}
          />
        </a>
      </div>
    </div>
    <ScrollAnimation
      animateOnce={true}
      animateIn="fadeIn"
      initiallyVisible={false}
      animatePreScroll={true}
      offset={1000}
      duration={4}
      delay={100}>
      <button className="navigate" onClick={() => scrollTo("#toolset-page")}>
        <ScrollDownArrow />
      </button>
    </ScrollAnimation>
  </div>
)

export default Home
