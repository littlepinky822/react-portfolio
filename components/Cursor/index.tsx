'use client';

import React, { useEffect, useState } from "react";

const CursorDot = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        // Add mousemove event listener
        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* Blue Dot */}
            <div
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
                className="fixed w-8 h-8 bg-blue-500 rounded-full pointer-events-none 
                           transform -translate-x-1/2 -translate-y-1/2 z-50 blur-md"
            />
            {/* Hide default cursor */}
            <style>
                {`
                body {
                    cursor: none;
                }
                `}
            </style>
        </>
    );
};

export default CursorDot;
