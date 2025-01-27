'use client';

import React from 'react';
import Card from './card'

const Projects = () => {

    return (
        <section id="projects" className="flex flex-col items-center justify-center gap-4 py-12 md:py-24 text-gray-800">
            <h1 className="text-4xl font-bold mb-8 font-serif">Projects</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Card 
                        name="Octopus Energy IOS Widget"
                        description="A widget for the Octopus Energy Agile Tariff users to view their energy usage and costs." 
                        image="/medium_octopus_widget.jpg" 
                        tags={["JavaScript", "IOS"]}
                        url="https://github.com/littlepinky822/Octopus-Agile-Widget"
                    />
                <Card 
                    name="CamTrap Hub"
                    description="My MSc dissertation project. This is an all-in-one platform for camera trap data management and processing."
                    image="/camtrap-hub.png"
                    tags={["Docker", "React", "Flask"]}
                    url="https://git.cardiff.ac.uk/c22097859/c22097859_cmt403_dissertation"
                    />
                <Card 
                    name="Portfolio Website" 
                    description="What you are seeing right now. This is my personal website to give you some idea of who I am."
                    image="/react-portfolio.png"
                    tags={["React", "Next.js", "Typescript"]}
                    url="https://github.com/littlepinky822/react-portfolio"
                    />
            </div>
        </section>
    )
}

export default Projects