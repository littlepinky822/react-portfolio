'use client';

import React from 'react';
import Card from './card'

const Projects = () => {

    return (
        <section id="projects" className="flex flex-col items-center justify-center gap-4 py-12 md:py-24 text-gray-800">
            <h1 className="text-4xl font-bold mb-8 font-serif">Projects</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Card 
                    name="CamTrap Hub"
                    description="My MSc dissertation project. This is an all-in-one platform for camera trap data management and processing."
                    image="/camtrap-hub.png"
                    tags={["Docker", "React", "Flask"]}
                    url="https://github.com/littlepinky822/CamTrap-Hub"
                    />
                <Card 
                    name="Portfolio Website" 
                    description="What you are seeing right now. This is my personal website to give you some idea of who I am."
                    image="/react-portfolio.png"
                    tags={["React", "Next.js", "Typescript"]}
                    url="https://github.com/littlepinky822/react-portfolio"
                    />
                <Card 
                    name="My First Portfolio"
                    description="My first website ever, I built this when I was in university. We all start somewhere." 
                    image="/flask-portfolio.png" 
                    tags={["Flask", "Python", "HTML"]}
                    url="https://github.com/littlepinky822/my-personal-website"
                />
            </div>
        </section>
    )
}

export default Projects