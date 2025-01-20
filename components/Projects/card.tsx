'use client';

import React from 'react';

const Card = ({name, description, image, tags, url}:{name:string, description:string, image:string, tags:string[], url:string}) => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-gray-800 hover:scale-105 transition-all duration-300">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img className="w-full" src={image} alt="Project image" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 font-serif">{name}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                    ))}
                </div>
            </a>
        </div>
    )
}

export default Card;