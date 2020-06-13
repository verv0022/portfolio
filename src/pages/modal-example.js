import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import "../components/layout/layout.css"

const ModalExamplePage = () => (
  <ModalRoutingContext.Consumer>
    {() => (
      <div>
        <Link
          className="close"
          to="/"
          state={{
            noScroll: true,
          }}>
          X
        </Link>
        <h2>project 1</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          dignissimos corporis doloremque perspiciatis, earum sequi eum maiores
          numquam recusandae? Corporis sapiente libero dicta dignissimos nemo.
          Repudiandae libero labore cum recusandae ipsum quaerat ducimus iure?
          Ullam similique neque, ex laborum vitae ducimus dolorem omnis dolorum
          enim repudiandae eum alias voluptas quaerat saepe? Nam, voluptates
          officia. Quasi obcaecati nobis modi consectetur eius ducimus
          architecto. Asperiores, quia sapiente eveniet ad earum aut, molestias
          iusto tempore maxime delectus cumque debitis quibusdam neque,
          temporibus consequatur excepturi assumenda accusantium quos minus
          dicta quae id doloribus soluta. Ea aliquid nemo dignissimos, dolore
          consequuntur tenetur ipsum incidunt laborum.
        </p>
      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default ModalExamplePage
