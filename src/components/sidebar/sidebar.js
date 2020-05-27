import React from "react"
import "./sidebar.css"
import scrollTo from "gatsby-plugin-smoothscroll"

const Sidebar = props => {
  let sidebarClasses = "sidebar"
  if (props.show) {
    sidebarClasses = "sidebar show"
  }

  return (
    <nav className={sidebarClasses}>
      <ul>
        <li>
          <button
            className="linkTo"
            onClick={event => {
              scrollTo("#home-page")
              props.hide(event)
            }}>
            Home
          </button>
        </li>
        <li>
          <button
            className="linkTo"
            onClick={event => {
              scrollTo("#toolset-page")
              props.hide(event)
            }}>
            Toolset
          </button>
        </li>
        <li>
          <button
            className="linkTo"
            onClick={event => {
              scrollTo("#projects-page")
              props.hide(event)
            }}>
            Projects
          </button>
        </li>
        <li>
          <button
            className="linkTo"
            onClick={event => {
              scrollTo("#contact-page")
              props.hide(event)
            }}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
