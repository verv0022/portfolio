import React from "react"
import "./Projects.css"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import ProjectPreview from "./project-preview";

const Projects = () => {

    return (
    
        <main className="projects">
            <section className="projects-content">
                <ScrollAnimation animateOnce={true} animateIn='slideInLeft' animatePreScroll={false} initiallyVisible={false}>
                    <h2 className='projects-title'>Here are some of my projects...</h2>
                </ScrollAnimation>
                <ProjectPreview/>
            </section>
        </main> 
    );
}

export default Projects