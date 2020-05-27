import React from "react"
import styles from "./toolset.module.css"
import ScrollDownArrow from "../scroll-down-arrow/scroll-down-arrow"
import scrollTo from "gatsby-plugin-smoothscroll"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import html from "./icons/html.svg"
import ai from "./icons/ai.svg"
import bootstrap from "./icons/bootstrap.svg"
import csharp from "./icons/c#.svg"
import cplusplus from "./icons/c++.svg"
import css from "./icons/css.svg"
import gatsby from "./icons/gatsby.svg"
import git from "./icons/git.svg"
import js from "./icons/js.svg"
import kotlin from "./icons/kotlin.svg"
import ps from "./icons/ps.svg"
import react from "./icons/react.svg"
import sass from "./icons/sass.svg"
import swift from "./icons/swift.svg"
import xd from "./icons/xd.svg"

const Toolset = () => {
  return (
    <div className="container" id="toolset-page">
      <div className="content">
        <ScrollAnimation
          animateOnce={true}
          animateIn="fadeIn"
          initiallyVisible={false}
          duration="3">
          <h1 className="title">Toolset</h1>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn="fadeIn"
          initiallyVisible={false}
          duration="3"
          delay="100">
          <p className="description">
            Here are some of the tools and technologies I have experience with:
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn="fadeIn"
          initiallyVisible={false}
          duration="3"
          delay="300">
          <div className={styles.tools}>
            <img src={html} alt="html" height="120"></img>
            <img src={css} alt="css" height="120"></img>
            <img src={js} alt="js" height="120"></img>
            <img src={sass} alt="html" height="120"></img>
            <img src={bootstrap} alt="html" height="120"></img>
            <img src={react} alt="html" height="120"></img>
            <img src={gatsby} alt="html" height="120"></img>
            <img src={ps} alt="html" height="120"></img>
            <img src={ai} alt="html" height="120"></img>
            <img src={xd} alt="html" height="120"></img>
            <img src={git} alt="html" height="120"></img>
            <img src={swift} alt="html" height="120"></img>
            <img src={kotlin} alt="html" height="120"></img>
            <img src={cplusplus} alt="html" height="120"></img>
            <img src={csharp} alt="html" height="120"></img>
          </div>
        </ScrollAnimation>
      </div>
      <div className={styles.test}>
        <ScrollAnimation
          animateOnce={true}
          animateIn="fadeIn"
          initiallyVisible={false}
          duration="3"
          delay="100">
          <button
            className="navigate"
            onClick={() => scrollTo("#projects-page")}>
            <ScrollDownArrow />
          </button>
        </ScrollAnimation>
      </div>
    </div>
  )
}
export default Toolset
