import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-16 text-gray-800">
            <div className="container mx-auto px-8 max-w-5xl w-screen">
                {/* Content Wrapper */}
                <div className="flex flex-col md:flex-row items-center">
                    

                    {/* Text Content */}
                    <div className="flex">
                        {/* Image */}
                        <div className="h-48 md:w-64 md:h-64 mb-8 md:mb-0 md:mr-12 w-1/3">
                            <img
                                src="/IMG_0192.jpg"
                                alt="Jess"
                                className="w-full h-full object-cover rounded-full shadow-lg"
                            />
                        </div>

                        <div className="w-1/3 mx-8">
                            <div className="text-center md:text-left mb-12">
                                <h1 className="text-4xl font-bold font-serif mb-4">Hello!</h1>
                                <p className="text-m leading-relaxed mb-4">
                                    I'm <strong className="font-semibold">Jess</strong>, a creative web developer based in the UK. 
                                    I specialise in building visually stunning and user-friendly websites. My passion lies in crafting designs that 
                                    combine aesthetics and functionality seamlessly.
                                </p>
                                <p className="text-m leading-relaxed mb-4">
                                    With experience as a <strong className="font-semibold">QA Engineer Intern</strong>, I bring an analytical mindset 
                                    to my projects, ensuring that every detail is polished. When I'm not coding, you'll find me exploring new design trends, 
                                    improving my skills, or diving into creative problem-solving.
                                </p>
                                <p className="text-m leading-relaxed">
                                    I'm always excited to collaborate on projects that challenge me and push the boundaries of creativity. Let's build something amazing together!
                                </p>
                            </div>

                            <div className="text-center md:text-left mb-12">
                                <h1 className="text-3xl font-bold font-serif mb-4">Experience</h1>
                                <p className="text-m leading-relaxed font-bold">IDBS</p>
                                <p className="text-m leading-relaxed">Software Tester Placement</p>
                                <p className="text-sm leading-relaxed">Aug 2023 - Jul 2024</p>
                            </div>
                        </div>

                        <div className="-1/3 mx-8">
                            <div className="text-center md:text-left mb-12">
                                <h1 className="text-3xl font-bold font-serif mb-4">Education</h1>
                                <p className="text-m leading-relaxed">MSc Computing with Placement</p>
                                <p className="text-sm leading-relaxed"><strong>Cardiff University</strong> | 2022 - 2024</p>
                                <p className="text-m leading-relaxed mt-4">BSc Social Science (Sociology)</p>
                                <p className="text-sm leading-relaxed"><strong>The Chinese University of Hong Kong</strong> | 2017 - 2022</p>
                            </div>

                            <div className="text-center md:text-left mb-12">
                                <h1 className="text-3xl font-bold font-serif mb-4">Tech Stack</h1>
                                <p className="text-m leading-relaxed">HTML/CSS</p>
                                <p className="text-m leading-relaxed">Python</p>
                                <p className="text-m leading-relaxed">JavaScript</p>
                                <p className="text-m leading-relaxed">React</p>
                                <p className="text-m leading-relaxed">SQL</p>
                                <p className="text-m leading-relaxed">Docker</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
