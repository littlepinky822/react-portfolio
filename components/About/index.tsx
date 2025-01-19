import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-16 text-gray-800">
            <div className="container mx-auto px-8 max-w-8xl w-screen">
                {/* Content Wrapper */}
                <div className="flex flex-col md:flex-row items-center">
                    

                    {/* Text Content */}
                    <div className="flex">
                        {/* Image */}
                        <div className="w-1/3 flex flex-col items-center justify-even gap-6">
                            <img
                                src="/IMG_0192.jpg"
                                alt="Jess"
                                className="w-full h-full object-cover rounded-full shadow-lg md:w-64 md:h-64 mb-8 md:mb-0 md:mr-12 "
                            />
                            <div className="flex flex-col items-start justify-center">
                                <span className="flex items-center w-fit gap-2 px-4 py-1 text-sm border border-gray-800 rounded-full hover:bg-gray-100 transition-colors duration-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4"
                                    >
                                        <path d="M5 19L19 5" />
                                        <path d="M5 5h14v14" />
                                    </svg>
                                    <a href="./Yan_Tung_Lam_QA_CV.pdf" target="_blank" rel="noopener noreferrer">See my CV</a>
                                </span>
                                <div id="socials" className='mt-4'>
                                    <span className="flex items-center w-fit gap-2 px-4 py-1 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"></path>
                                        </svg>
                                        <a href="https://www.linkedin.com/in/jesslam822" target="_blank" rel="noopener noreferrer">jesslam822</a>
                                    </span>
                                    <span className="flex items-center w-fit gap-2 px-4 py-1 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                                            <path d="M 25 2 C 12.311335 2 2 12.311335 2 25 C 2 37.688665 12.311335 48 25 48 C 37.688665 48 48 37.688665 48 25 C 48 12.311335 37.688665 2 25 2 z M 25 4 C 36.607335 4 46 13.392665 46 25 C 46 25.071371 45.994849 25.141688 45.994141 25.212891 C 45.354527 25.153853 44.615508 25.097776 43.675781 25.064453 C 42.347063 25.017336 40.672259 25.030987 38.773438 25.125 C 38.843852 24.634651 38.893205 24.137377 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.111237 10.947969 24.610071 11.017578 25.101562 C 9.2118173 25.017808 7.6020996 25.001668 6.3242188 25.046875 C 5.3845143 25.080118 4.6454422 25.135713 4.0058594 25.195312 C 4.0052628 25.129972 4 25.065482 4 25 C 4 13.392665 13.392665 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8847656 26.021484 C 9.5914575 26.03051 10.40146 26.068656 11.212891 26.109375 C 11.290419 26.421172 11.378822 26.727898 11.486328 27.027344 C 8.178972 27.097092 5.7047309 27.429674 4.1796875 27.714844 C 4.1152068 27.214494 4.0638483 26.710021 4.0351562 26.199219 C 5.1622058 26.092262 6.7509972 25.994233 8.8847656 26.021484 z M 41.115234 26.037109 C 43.247527 26.010033 44.835728 26.108156 45.962891 26.214844 C 45.934234 26.718328 45.883749 27.215664 45.820312 27.708984 C 44.24077 27.41921 41.699674 27.086688 38.306641 27.033203 C 38.411945 26.739677 38.499627 26.438219 38.576172 26.132812 C 39.471291 26.084833 40.344564 26.046896 41.115234 26.037109 z M 11.912109 28.019531 C 12.508849 29.215327 13.361516 30.283019 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.802734 C 10.967811 42.320535 5.6646795 36.204613 4.3320312 28.703125 C 5.8629338 28.414776 8.4265387 28.068108 11.912109 28.019531 z M 37.882812 28.027344 C 41.445538 28.05784 44.08105 28.404061 45.669922 28.697266 C 44.339047 36.201504 39.034072 42.31987 32 44.802734 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.436824 30.284907 37.287588 29.220424 37.882812 28.027344 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.398438 C 28.397408 45.789234 26.72379 46 25 46 C 23.27621 46 21.602592 45.789234 20 45.398438 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z"></path>
                                        </svg>
                                        <a href="https://github.com/littlepinky822" target="_blank" rel="noopener noreferrer">littlepinky822</a>
                                    </span>
                                    <span className="flex items-center w-fit gap-2 px-4 py-1 text-sm">
                                        <svg fill="#000000" width="24" height="24" viewBox="0 0 1920 1920">
                                            <path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fill-rule="evenodd"/>
                                        </svg>
                                        <a href="mailto:jesslam321@gmail.com">jesslam321@gmail.com</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/3 mx-8">
                            <div className="text-center md:text-left mb-12">
                                <h1 className="text-4xl font-bold font-serif mb-4">Hello! I&apos;m Jess.</h1>
                                <p className="text-m leading-relaxed mb-4">
                                    I am an aspiring software developer based in the UK, with a background in MSc Computing from Cardiff University. 
                                    During my placement year as a QA Engineer, I gained hands-on experience in Agile environments, specialising in automated testing using the Robot Framework to streamline workflows in test-driven development.
                                </p>
                                <p className="text-m leading-relaxed mb-4">
                                    My MSc dissertation focused on containerisation with Docker, where I developed a centralised platform for managing wildlife camera trap data. 
                                    This project enhanced my skills in web development, containerisation, and deploying Python and R-based applications to simplify workflows for end-users.
                                </p>
                                <p className="text-m leading-relaxed">
                                    I am eager to explore the diversed aspects of software development, testing, and DevOps opportunities where I can apply my knowledge in automation and CI/CD. Feel free to reach out for collaboration!
                                </p>
                            </div>

                            
                        </div>

                        <div className="w-1/3 mx-8">
                            <div className="text-center md:text-left mb-12">
                                <h1 className="text-3xl font-bold font-serif mb-4">Education</h1>
                                <p className="text-m leading-relaxed">MSc Computing with Placement</p>
                                <p className="text-sm leading-relaxed"><strong>Cardiff University</strong> | 2022 - 2024</p>
                                <p className="text-m leading-relaxed mt-4">BSc Social Science (Sociology Major)</p>
                                <p className="text-sm leading-relaxed"><strong>The Chinese University of Hong Kong</strong> | 2017 - 2022</p>
                            </div>

                            <div className="text-center md:text-left mb-12">
                                <h1 className="text-3xl font-bold font-serif mb-4">Experience</h1>
                                <p className="text-m leading-relaxed font-bold">IDBS, Woking</p>
                                <p className="text-m leading-relaxed">Software Tester Placement</p>
                                <p className="text-sm leading-relaxed">Aug 2023 - Jul 2024</p>
                            </div>

                            <div className="flex flex-col text-center md:text-left mb-12">
                                <h1 className="text-3xl font-bold font-serif mb-4">Tech Stack</h1>
                                <div className="flex flex-row">
                                    <div className="flex flex-col w-1/2">
                                        <p className="text-m leading-relaxed">• HTML/CSS</p>
                                        <p className="text-m leading-relaxed">• Python</p>
                                        <p className="text-m leading-relaxed">• Flask</p>
                                        <p className="text-m leading-relaxed">• JavaScript</p>
                                        <p className="text-m leading-relaxed">• Keep learning...</p>
                                    </div>
                                    <div className="flex flex-col w-1/2">
                                        <p className="text-m leading-relaxed">• React</p>
                                        <p className="text-m leading-relaxed">• SQL</p>
                                        <p className="text-m leading-relaxed">• Docker</p>
                                        <p className="text-m leading-relaxed">• AWS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
