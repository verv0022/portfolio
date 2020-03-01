import React from "react"
import "./Home.css"
import ScrollDownArrow from "../scroll-down-arrow/scroll-down-arrow"

const About = () => (

    <main className="about">

        <section className="about-content">
            <div className='name-container'>
                <h1 className='name'>Brandon Vervoort</h1>
            </div>
            <h1 className='description'>I'm a <span style={{ color: 'rgb(165, 120, 41' }}>developer</span> and <span style={{ color: 'rgb(165, 120, 41' }}>UX designer</span> with experience in mobile and web applications</h1>
        </section>
        <section className="navigate-down">
            <ScrollDownArrow />
        </section>

    </main>
)


export default About