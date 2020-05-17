import React from "react"
import "../layout/layout.css"

const Sidebar = props => {
  let sidebarClasses = "side_bar"
  if (props.show) {
    sidebarClasses = "side_bar show"
  }

  return (
    <nav className={sidebarClasses}>
      <ul>
        <li>test</li>
        <li>test2</li>
      </ul>
    </nav>
  )
}

export default Sidebar
