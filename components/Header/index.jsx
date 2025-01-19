import React from 'react';

const Header = () => {

    const tags = [
        { id: '1', label: 'About Me' },
        { id: '2', label: 'Social Media' },
        { id: '3', label: 'Projects' }
    ];

    return (
        <header className='relative py-12 h-screen flex justify-center items-center'> 
            <div className='flex flex-col items-left'>
                <span className="inline-block px-4 py-1 mb-4 text-sm border border-gray-200 rounded-full w-fit">
                    Jess (Yan Tung) Lam
                </span>

                <div className="relative">
                    <h1 className="text-9xl font-serif font-bold tracking-tight mb-8 mr-40">
                        Portfolio
                    </h1>

                    {/* Blue blob effect with circular text */}
                    <div className="absolute -top-10 right-0 w-64 h-64">
                        <div className="w-full h-full bg-blue-300/30 rounded-full blur-2xl" aria-hidden="true" />

                        {/* Circular Text */}
                        <svg
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 left-0 w-full h-full"
                        >
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 50, 50
                                    m -40, 0
                                    a 40,40 0 1,1 80,0
                                    a 40,40 0 1,1 -80,0"
                                />
                            </defs>
                            <text fill="black" fontSize="5" fontWeight="bold">
                                <textPath href="#circlePath" startOffset="45%" textAnchor="middle">
                                    UK BASED • QA ENGINEER • SOFTWARE DEVELOPMENT
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                    <span
                        key={tag.id}
                        className="px-4 py-1 text-sm border border-gray-200 rounded-full
                                hover:border-gray-400 transition-colors duration-200"
                    >
                        {tag.label}
                    </span>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;