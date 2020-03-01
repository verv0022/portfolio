import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'


const ProjectPreview = () => {

    const data = useStaticQuery(graphql`
    query ProjectsQuery {
        allProjectsJson {
          edges {
            node {
              url
              name
              description
              image
            }
          }
        }
      }
      
    `)
    const projects = data.allProjectsJson.edges;

    console.log(projects)

    return (
        <div className='project-preview'>

            {projects.map(({ node: project }) => {
                return (
                    <h1>{project.name}</h1>
                );
            })}
        </div>
    );

}


export default ProjectPreview


