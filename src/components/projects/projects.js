import React from "react"
import "./Projects.css"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import ProjectPreviewItem from "./project-preview-item"
import { graphql, useStaticQuery } from "gatsby"

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
    <section className="projects">
      <main className="projects-content">
        <ScrollAnimation
          className="projects-title"
          animateOnce={true}
          animateIn="slideInLeft"
          animatePreScroll={false}
          initiallyVisible={false}
        >
          <h2>Here are some of my projects...</h2>
        </ScrollAnimation>

        <section className="project-preview-container">
          <div className="project-preview-item-container">
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
          </div>
        </section>
      </main>
    </section>
  )
}

export default Projects
