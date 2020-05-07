import React from "react"
import Header from "../components/header/header.js"
import Home from "../components/home/home.js"
import Projects from "../components/projects/projects.js"
import Contact from "../components/contact/contact.js"
import Footer from "../components/footer/footer.js"
import Toolset from "../components/toolset/toolset.js"

require("typeface-league-spartan")

const IndexPage = () => (
  <div>
    <Header />
    <Home />
    <Toolset />
    <Projects />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
