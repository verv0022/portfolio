import React from "react"
import styles from "./projects.module.css"
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
            link
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

  return (
    <div className="container" id="projects-page">
      <div className="content">
        <ScrollAnimation
          animateOnce={true}
          animateIn="fadeIn"
          initiallyVisible={false}
          duration="3">
          <h1 className="title">Recent Projects</h1>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn="fadeIn"
          initiallyVisible={false}
          duration="3"
          delay="100">
          <p className="description">
            These are some projects that I've worked on:
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn="fadeIn"
          initiallyVisible={false}
          duration="3"
          delay="300">
          <div className={styles.preview}>
            {projects.map(({ node: project }) => {
              return (
                <ProjectPreviewItem
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  imageData={project.image.childImageSharp.fluid}
                  url={project.url}
                  link={project.link}
                />
              )
            })}
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation
        animateOnce={true}
        animateIn="fadeIn"
        initiallyVisible={false}
        duration="3"
        delay="100">
        <button className="navigate" onClick={() => scrollTo("#contact-page")}>
          <ScrollDownArrow />
        </button>
      </ScrollAnimation>
    </div>
  )
}

export default Projects
