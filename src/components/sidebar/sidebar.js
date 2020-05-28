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
          <div
            role="presentation"
            onClick={event => {
              scrollTo("#home-page")
              props.hide(event)
            }}>
            Home
          </div>
        </li>
        <li>
          <div
            role="presentation"
            onClick={event => {
              scrollTo("#toolset-page")
              props.hide(event)
            }}>
            Toolset
          </div>
        </li>
        <li>
          <div
            role="presentation"
            onClick={event => {
              scrollTo("#projects-page")
              props.hide(event)
            }}>
            Projects
          </div>
        </li>
        <li>
          <div
            role="presentation"
            onClick={event => {
              scrollTo("#contact-page")
              props.hide(event)
            }}>
            Contact
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
