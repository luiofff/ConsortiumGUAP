'use client'

import React from "react";

const Star = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
            <g filter="url(#filter0_f_154_32694)">
                <path d="M18.5 1L20.3562 16.6438L36 18.5L20.3562 20.3562L18.5 36L16.6438 20.3562L1 18.5L16.6438 16.6438L18.5 1Z" fill="white"/>
            </g>
            <defs>
                <filter id="filter0_f_154_32694" x="0" y="0" width="37" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_154_32694"/>
                </filter>
            </defs>
        </svg>
    );
};

const StarSpace = () => {
    const numberOfStars = 20;

    const getRandomPosition = () => ({
        top: Math.random() * Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        ),
        left: Math.random() * window.innerWidth
    }
    );

    const stars = Array.from({ length: numberOfStars }).map((_, index) => (
        <div key={index} className="absolute" style={getRandomPosition()}><Star /></div>
    ));

    return (
        <div className="absolute z-0  h-screen p-20">
            {stars}
        </div>
    );
};

export default StarSpace;
