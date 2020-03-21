import React from "react"
import "./Projects.css"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import ProjectPreviewItem from "./project-preview-item"
import { graphql, useStaticQuery } from "gatsby"
import ScrollDownArrow from "../scroll-down-arrow/scroll-down-arrow"
import scrollTo from "gatsby-plugin-smoothscroll"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            id
            name
            description
            url
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.edges

  console.log(projects)

  return (
    <div className="projects-container">
      <div className="projects">
        <div className="projects-title">
          <ScrollAnimation
            animateOnce={true}
            animateIn="slideInLeft"
            animatePreScroll={false}
            initiallyVisible={false}
          >
            <h2>Here are some of my projects...</h2>
          </ScrollAnimation>
        </div>
        <section className="project-preview-container">
          {projects.map(({ node: project }) => {
            return (
              <ProjectPreviewItem
                key={project.id}
                name={project.name}
                description={project.description}
                imageData={project.image.childImageSharp.fluid}
                url={project.url}
              />
            )
          })}
        </section>
      </div>
      <div
        className="navigate-down2"
        onClick={() => scrollTo(".contact-container")}
      >
        <ScrollDownArrow />
      </div>
    </div>
  )
}

export default Projects
