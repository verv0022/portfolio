import React from "react"
import "./Home.css"
import ScrollDownArrow from "../scroll-down-arrow/scroll-down-arrow"

const highlight = {
  color: "#f4b93b",
}

const Home = () => (
  <main className="about">
    <section className="about-content">
      <div className="name-container">
        <h1 className="name">
          Hi, I'm <span style={highlight}>Brandon</span>{" "}
        </h1>
      </div>
      <h1 className="description">
        I'm a <span style={highlight}>developer</span> and{" "}
        <span style={highlight}>UX designer</span> with experience in{" "}
        <span style={highlight}>mobile</span> and{" "}
        <span style={highlight}>web applications</span> who is focusing on
        front-end development, with a goal of becoming a full-stack developer. I
        am currently seeking an <span style={highlight}>entry level </span>
        position.
      </h1>
    </section>
    <section className="navigate-down">
      <ScrollDownArrow />
    </section>
  </main>
)

export default Home
