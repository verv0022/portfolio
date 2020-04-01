import React from "react"
import styles from "./toolset.module.css"
import ScrollDownArrow from "../scroll-down-arrow/scroll-down-arrow"
import scrollTo from "gatsby-plugin-smoothscroll"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

const Toolset = () => {
  return (
    <div className={styles.container} id="home-page">
      <div className={styles.content}>
        <ScrollAnimation
          animateOnce={true}
          animateIn="slideInLeft"
          animatePreScroll={false}
          initiallyVisible={false}>
          <h1 className="title">Toolset</h1>
        </ScrollAnimation>
        <p>Here are some tools and technologies I have experience with: </p>
      </div>
      <div className={styles.navigate}>
        <div className="navigate" onClick={() => scrollTo("#projects-page")}>
          <ScrollDownArrow />
        </div>
      </div>
    </div>
  )
}
export default Toolset
