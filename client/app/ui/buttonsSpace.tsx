'use client'

import Button from "./button/button";

import React, { useEffect, useState } from "react";

const compButtonsArray = [
    [
        { icon: 'gaz', label: 'Label 2', transitionDelay: '0.2s', countBtn: 'north-button' },
        { icon: 'uiniversitu2035', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'north_east-button' },
        { icon: 'yand', label: 'Label 2', transitionDelay: '0.3s', countBtn: 'north_west-button' },
        { icon: 'megafon', label: 'Label 2', transitionDelay: '0.4s', countBtn: 'west-button' },
        { icon: 'kirov_zavod', label: 'Label 2', transitionDelay: '0s', countBtn: 'east-button' }
    ],
    [
        { icon: 'megafon', label: 'Label 2', transitionDelay: '0s', countBtn: 'north_west-button' },
        { icon: 'ptc', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'north-button' },
        { icon: 'ublox', label: 'Label 2', transitionDelay: '0.2s', countBtn: 'north_east-button' },
        { icon: 'beza', label: 'Label 2', transitionDelay: '0.3s', countBtn: 'east-button' }
    ],
    [
        { icon: 'kuka', label: 'Label 2', transitionDelay: '0s', countBtn: 'north_west-button' },
        { icon: 'ni', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'north-button' },
    ],
    [
        { icon: 'coex', label: 'Label 2', transitionDelay: '0s', countBtn: 'north-button' },
        { icon: 'fixar', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'north_east-button' },
    ],
    [
        { icon: 'gaz', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'west_south-button' },
        { icon: 'granit', label: 'Label 2', transitionDelay: '0s', countBtn: 'west-button' },
        { icon: 'samsungIT', label: 'Label 2', transitionDelay: '0.2s', countBtn: 'south-button' },
        { icon: 'cloud', label: 'Label 2', transitionDelay: '0.3s', countBtn: 'south_east-button' }
    ],
    [
        { icon: 'mgbot', label: 'Label 2', transitionDelay: '0s', countBtn: 'north_east-button' },
        { icon: 'spb', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'north-button' },
        { icon: 'volts', label: 'Label 2', transitionDelay: '0.2s', countBtn: 'north_west-button' },
        { icon: 'infotecs', label: 'Label 2', transitionDelay: '0.3s', countBtn: 'west-button' },
        { icon: 'nppkt', label: 'Label 2', transitionDelay: '0.4s', countBtn: 'west_south-button' }
    ],
    [
        { icon: 'mars', label: 'Label 2', transitionDelay: '0s', countBtn: 'north_east-button' },
        { icon: 'kirov_zavod', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'east-button' },
        { icon: 'yand', label: 'Label 2', transitionDelay: '0.2s', countBtn: 'south_east-button' }
    ],
    [
        { icon: 'spbficran', label: 'Label 2', transitionDelay: '0s', countBtn: 'west-button' },
    ],
    [
        { icon: 'gaz', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'east-button' },
        { icon: 'uiniversitu2035', label: 'Label 2', transitionDelay: '0s', countBtn: 'south_east-button' },
        { icon: 'yand', label: 'Label 2', transitionDelay: '0.2s', countBtn: 'north_east-button' },
        { icon: 'megafon', label: 'Label 2', transitionDelay: '0.4s', countBtn: 'north_west-button' },
        { icon: 'kirov_zavod', label: 'Label 2', transitionDelay: '0.3s', countBtn: 'north-button' }
    ],
    [
        { icon: 'silmash', label: 'Label 2', transitionDelay: '0s', countBtn: 'west-button' },
    ],
    [
        { icon: 'gaz', label: 'Label 2', transitionDelay: '0.3s', countBtn: 'south-button' },
        { icon: 'uiniversitu2035', label: 'Label 2', transitionDelay: '0.4s', countBtn: 'south_east-button' },
        { icon: 'yand', label: 'Label 2', transitionDelay: '0s', countBtn: 'north_west-button' },
        { icon: 'megafon', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'west-button' },
        { icon: 'kirov_zavod', label: 'Label 2', transitionDelay: '0.2s', countBtn: 'west_south-button' }
    ],
];

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

const Glare = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <g filter="url(#filter0_f_154_34682)">
            <circle cx="17" cy="16.999" r="10" fill="white"/>
            </g>
            <circle cx="16.5" cy="16.499" r="7.5" fill="white"/>
            <defs>
            <filter id="filter0_f_154_34682" x="0" y="-0.000976562" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_154_34682"/>
            </filter>
            </defs>
            </svg>
    )
}

const StarSpace = () => {
    const numberOfStars = 20;

    const stars = Array.from({ length: numberOfStars }).map((_, index) => (
        <div key={index} className="absolute" style={{top:Math.random() * 1500, left: Math.random() * window.innerWidth }}><Star /></div>
    ));

    const glares = Array.from({ length: numberOfStars }).map((_, index) => (
        <div key={index} className="absolute" style={{top:Math.random() * 1500, left: Math.random() * window.innerWidth }}><Glare /></div>
    ));



    return (
        <div className="absolute pt-60 w-full h-full z-0">
            {stars}
            {glares}
        </div>
    );
};

export default function ButtonsSpace() {


  return (
    <div className="flex flex-col pt-20">
        
      <div className="flex">
        <Button companyButtons={compButtonsArray[0]} title="Лаборатория технологического предпринимательства"/>
      </div>
      <div className="flex flex-row-reverse relative">
        <Button companyButtons={compButtonsArray[1]} title="Лаборатория интернета вещей"/>
      </div>
      <div className="flex">
        <Button companyButtons={compButtonsArray[2]} title="Лаборатория робототехники"/>
      </div>
      <div className="flex flex-row-reverse relative">
        <Button companyButtons={compButtonsArray[3]} title="Лаборатория беспилотных авиационных систем"/>
      </div>
      <div className="flex">
        <Button companyButtons={compButtonsArray[4]} title="Лаборатория искусственного интеллекта"/>
      </div>
      <div className="flex flex-row-reverse relative">
        <Button companyButtons={compButtonsArray[5]} title="Лаборатория кибербезопасности ГУАП-Infowatch"/>
      </div>
      <div className="flex flex-row-reverse relative pr-40 pt-10">
        <Button companyButtons={compButtonsArray[6]} title="Лаборатория электроэнергетики"/>
      </div>
      <div className="flex">
        <Button companyButtons={compButtonsArray[7]} title="Отдел Инженерный гараж"/>
      </div>
      <div className="flex flex-row-reverse relative">
        <Button companyButtons={compButtonsArray[8]} title="Лаборатория автоматизации технологических процессов"/>
      </div>
      <div className="flex">
        <Button companyButtons={compButtonsArray[9]} title="Студенческое конструкторское бюро 'Силовые машины ГУАП'"/>
      </div>
      <div className="flex flex-row-reverse relative">
        <Button companyButtons={compButtonsArray[10]} title="Лаборатория технологического предпринимательства"/>
      </div>
      <StarSpace />
    </div>
  );
}
