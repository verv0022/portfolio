import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

const style = {
  color: "000000",
  margin: "5rem",
}

const Test = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div style={style}>
        {modal ? (
          <Link to={closeTo}>Close</Link>
        ) : (
          <header>
            <h1>Website Title</h1>
          </header>
        )}
        <h2>TEST</h2>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default Test
