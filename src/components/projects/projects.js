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
                fixed(width: 300, height: 200) {
                  ...GatsbyImageSharpFixed
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
      <ScrollAnimation
        className="projects-title"
        animateOnce={true}
        animateIn="slideInLeft"
        animatePreScroll={false}
        initiallyVisible={false}
      >
        <h2>Here are some of my projects...</h2>
      </ScrollAnimation>
      <section className="projects">
        <main className="projects-content">
          <section className="project-preview-container">
            {projects.map(({ node: project }) => {
              return (
                <ProjectPreviewItem
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  imageData={project.image.childImageSharp.fixed}
                  url={project.url}
                />
              )
            })}
          </section>
        </main>
      </section>
      <section className="navigate-down2" onClick={() => scrollTo(".contact")}>
        <ScrollDownArrow />
      </section>
    </div>
  )
}

export default Projects
