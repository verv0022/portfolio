import React from "react"
import "./home.css"
import ScrollDownArrow from "../scroll-down-arrow/scroll-down-arrow"
import scrollTo from "gatsby-plugin-smoothscroll"

const highlight = {
  color: "#CEA335",
}

const Home = () => (
  <div className="home-container">
    <main className="home">
      <section className="about-content">
        <div className="name-container">
          <h1 className="name">
            Hi, I'm <span style={highlight}>Brandon</span>{" "}
          </h1>
        </div>
        <p className="description">
          I'm a <span style={highlight}>developer</span> and{" "}
          <span style={highlight}>UX designer</span> with experience in{" "}
          <span style={highlight}>mobile</span> and{" "}
          <span style={highlight}>web applications</span> who is focusing on
          front-end development, with a goal of becoming a full-stack developer.
          I am currently seeking an <span style={highlight}>entry level </span>
          position.
        </p>
      </section>
    </main>
    <section className="navigate-down-container">
      <div className="navigate-down" onClick={() => scrollTo(".projects")}>
        <ScrollDownArrow />
      </div>
    </section>
  </div>
)

export default Home
