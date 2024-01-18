'use client'

import Button from "./button/button";

import React, { useEffect, useRef } from 'react';

import StarSpace from "./StarSpace/StarSpace";

const projectsArray = [
    [
        {left: "Мобильное приложение", center: "Голосовой помощник", rigth: "Телеграмм-бот"}
    ]
]

const compButtonsArray = [
    [
        { icon: 'gaz', transitionDelay: '0.2s', countBtn: 'north-button' },
        { icon: 'uiniversitu2035', transitionDelay: '0.1s', countBtn: 'north_east-button' },
        { icon: 'yand', transitionDelay: '0.3s', countBtn: 'north_west-button' },
        { icon: 'megafon', transitionDelay: '0.4s', countBtn: 'west-button' },
        { icon: 'kirov_zavod', transitionDelay: '0s', countBtn: 'east-button' }
    ],
    [
        { icon: 'megafon', transitionDelay: '0s', countBtn: 'north_west-button' },
        { icon: 'ptc', transitionDelay: '0.1s', countBtn: 'north-button' },
        { icon: 'ublox', transitionDelay: '0.2s', countBtn: 'north_east-button' },
        { icon: 'beza', transitionDelay: '0.3s', countBtn: 'east-button' }
    ],
    [
        { icon: 'kuka', transitionDelay: '0s', countBtn: 'north_west-button' },
        { icon: 'ni', transitionDelay: '0.1s', countBtn: 'north-button' },
    ],
    [
        { icon: 'coex', transitionDelay: '0s', countBtn: 'north-button' },
        { icon: 'fixar', transitionDelay: '0.1s', countBtn: 'north_east-button' },
    ],
    [
        { icon: 'gaz', transitionDelay: '0.1s', countBtn: 'west_south-button' },
        { icon: 'granit', transitionDelay: '0s', countBtn: 'west-button' },
        { icon: 'samsungIT', transitionDelay: '0.2s', countBtn: 'south-button' },
        { icon: 'cloud', transitionDelay: '0.3s', countBtn: 'south_east-button' }
    ],
    [
        { icon: 'mgbot', transitionDelay: '0s', countBtn: 'north_east-button' },
        { icon: 'spb', transitionDelay: '0.1s', countBtn: 'north-button' },
        { icon: 'volts', transitionDelay: '0.2s', countBtn: 'north_west-button' },
        { icon: 'infotecs', transitionDelay: '0.3s', countBtn: 'west-button' },
        { icon: 'nppkt', transitionDelay: '0.4s', countBtn: 'west_south-button' }
    ],
    [
        { icon: 'mars', transitionDelay: '0s', countBtn: 'north_east-button' },
        { icon: 'kirov_zavod', transitionDelay: '0.1s', countBtn: 'east-button' },
        { icon: 'yand', transitionDelay: '0.2s', countBtn: 'south_east-button' }
    ],
    [
        { icon: 'spbficran', transitionDelay: '0s', countBtn: 'west-button' },
    ],
    [
        { icon: 'gaz', transitionDelay: '0.1s', countBtn: 'east-button' },
        { icon: 'uiniversitu2035', transitionDelay: '0s', countBtn: 'south_east-button' },
        { icon: 'yand', transitionDelay: '0.2s', countBtn: 'north_east-button' },
        { icon: 'megafon', transitionDelay: '0.4s', countBtn: 'north_west-button' },
        { icon: 'kirov_zavod', transitionDelay: '0.3s', countBtn: 'north-button' }
    ],
    [
        { icon: 'silmash', transitionDelay: '0s', countBtn: 'north-button' },
    ],
    [
        { icon: 'gaz', transitionDelay: '0.3s', countBtn: 'south-button' },
        { icon: 'uiniversitu2035', transitionDelay: '0.4s', countBtn: 'south_east-button' },
        { icon: 'yand', transitionDelay: '0s', countBtn: 'north_west-button' },
        { icon: 'megafon', transitionDelay: '0.1s', countBtn: 'west-button' },
        { icon: 'kirov_zavod', transitionDelay: '0.2s', countBtn: 'west_south-button' }
    ],
];




interface LineProps {
    startId: string;
    endId: string;
}

const Line: React.FC<LineProps> = ({ startId, endId }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
    useEffect(() => {
      if (!canvasRef.current) return;
  
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      if (!ctx) return;
  
      const startElement = document.getElementById(startId);
      const endElement = document.getElementById(endId);
  
      if (!startElement || !endElement) return;
  
      const startRect = startElement.getBoundingClientRect();
      const endRect = endElement.getBoundingClientRect();

      console.log(startRect)
  
        
      if (typeof window !== "undefined") {
        const startX = startRect.left + startRect.width / 2 + window.scrollX;
        const startY = startRect.top + startRect.height / 2 + window.scrollY;
        const endX = endRect.left + endRect.width / 2 + window.scrollX;
        const endY = endRect.top + endRect.height / 2 + window.scrollY;
        canvas.width = document.body.scrollWidth;
        canvas.height = document.body.scrollHeight;
    
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);

        ctx.strokeStyle = 'white';
        ctx.stroke();
      }

    }, [startId, endId]);
  
    return <canvas width={300} ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />;
  };




export default function ButtonsSpace() {
    const elements = ["1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10", "11"];

    const renderLines = () => {
        const lines = [];
        for (let i = 0; i < elements.length - 1; i++) {
        lines.push(<Line key={`line-${i}`} startId={elements[i]} endId={elements[i + 1]} />);
        }
        return lines;
    };
    return (
        <>
            <div className="flex flex-col pt-20 "> 
                <div className="flex pl-48 mobile:justify-center mobile:p-0 md:pl-46 sm:pl-20 ">
                    <Button projects={projectsArray[0]} elem="1"companyButtons={compButtonsArray[0]} title="Лаборатория технологического предпринимательства"/>
                </div>
                <div className="flex pr-48 mobile:justify-center mobile:p-0  flex-row-reverse relative sm:pr-20 ">
                    <Button projects={projectsArray[0]}  elem="2" companyButtons={compButtonsArray[1]} title="Лаборатория интернета вещей"/>
                </div>
                <div className="flex pl-48 mobile:justify-center mobile:p-0  sm:pl-20">
                    <Button projects={projectsArray[0]} elem="3" companyButtons={compButtonsArray[2]} title="Лаборатория робототехники"/>
                </div>
                <div className="flex pr-36 pt-16  mobile:justify-center mobile:p-0 flex-row-reverse relative sm:pr-20">
                    <Button projects={projectsArray[0]} elem="4" companyButtons={compButtonsArray[3]} title="Лаборатория беспилотных авиационных систем"/>
                </div>
                <div className="flex pl-44 mobile:justify-center mobile:p-0 sm:pt-10 pl-20">
                    <Button projects={projectsArray[0]} elem="5" companyButtons={compButtonsArray[4]} title="Лаборатория искусственного интеллекта"/>
                </div>
                <div className="flex  flex-row-reverse relative pr-44 mobile:justify-center mobile:p-0 sm:pt-10 pr-20 ">
                    <Button projects={projectsArray[0]} elem="6" companyButtons={compButtonsArray[5]} title="Лаборатория кибербезопасности ГУАП-Infowatch"/>
                </div>
                <div className="flex pr-32 pt-20 flex-row-reverse relative mobile:justify-center mobile:p-0 sm:pr-20">
                    <Button projects={projectsArray[0]} elem="7" companyButtons={compButtonsArray[6]} title="Лаборатория электроэнергетики"/>
                </div>
                <div className="flex pl-32 mobile:justify-center mobile:p-0 sm:pl-20 pt-10">
                    <Button projects={projectsArray[0]} elem="8" companyButtons={compButtonsArray[7]} title="Отдел Инженерный гараж"/>
                </div>
                <div className="flex pr-96 mobile:justify-center mobile:p-0 flex-row-reverse relative sm:pr-20 pt-10">
                    <Button projects={projectsArray[0]} elem="9" companyButtons={compButtonsArray[8]} title="Лаборатория автоматизации технологических процессов"/>
                </div>
                <div className="flex flex-row-reverse relative pr-32 mobile:justify-center mobile:p-0 sm:pr-20 pt-16">
                    <Button projects={projectsArray[0]} elem="10" companyButtons={compButtonsArray[9]} title="Студенческое конструкторское бюро 'Силовые машины ГУАП'"/>
                </div>
                <div className="flex pr-20 pb-10 justify-center relative mobile:justify-center mobile:p-0 sm:pt-16 pl-16">
                    <Button projects={projectsArray[0]} elem="11" companyButtons={compButtonsArray[10]} title="Лаборатория технологического предпринимательства"/>
                </div>
                <StarSpace />
                {renderLines()}
            </div>
        </>
    );
}
