import React from "react"
import Header from "../components/header/header.js"
import Home from "../components/home/home.js"
import Projects from "../components/projects/projects.js"
import Contact from "../components/contact/contact.js"
import Footer from "../components/footer/footer.js"
import Toolset from "../components/toolset/toolset.js"
import Sidebar from "../components/sidebar/sidebar"
import Backdrop from "../components/backdrop/backdrop"

require("typeface-league-spartan")

class IndexPage extends React.Component {
  state = {
    isSidebarOpen: false,
  }

  hamburgerClickHandler = () => {
    this.setState(prevState => {
      return { isSidebarOpen: !prevState.isSidebarOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ isSidebarOpen: false })
  }

  render() {
    let backdrop

    if (this.state.isSidebarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div style={{ height: "100%" }}>
        <Header hamburgerClickHandler={this.hamburgerClickHandler} />
        <Sidebar show={this.state.isSidebarOpen} />
        {backdrop}
        <Home />
        <Toolset />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default IndexPage
