'use client'

import style from "./Slider.module.css"
import CompanyLogo from "../button/image";
import React from "react";

interface ButtonProps {
    companyButtons: Array<
      string
    >;
    title: string;
}

export default function LabObject({ companyButtons, title }: ButtonProps) {

    const [companies, setCompanies] = React.useState<string[][]>([]);

    React.useEffect(() => {
        let sublists = [];

        // Iterate through the array in steps of 4
        for (let i = 0; i < companyButtons.length; i += 4) {
            // Create a sublist of 4 elements
            let sublist = companyButtons.slice(i, i + 4);
            sublists.push(sublist);
        }

        setCompanies(sublists);

    }, [companyButtons])

    return (
        <>
            <div className="w-full flex justify-between flex-col items-center gap-4">
                <div style={{ border: "1px solid #fff", background: "transparent", height:"29vh", boxShadow: "2px 2px 13px 2px #fff" }} className="w-11/12 h-full rounded-3xl p-6 flex flex-col justify-between">
                    <div className="w-full">
                        <div style={{ fontSize: "25px"}} className="w-36 font-bold text-white">{title}</div>
                    </div>
                    <div className="w-full flex justify-end ">
                        <div style={{ fontSize: "17px"}} className="flex items-center text-center font-bold text-white">Подробнее 
                        <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path fill="white" d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></div>
                    </div>
                </div>
                <div style={{ border: "1px solid #fff", height:"20vh", boxShadow: "2px 2px 13px 2px #fff" }} className="w-11/12 h-full bg-[#F7F7F7] rounded-3xl p-6 flex flex-col justify-between">
                    <div className={style.slider__block}>
                        {companies.map((company, index) => (
                            <div
                                key={index}
                                className={style.slider__item}
                            >
                                {
                                    company.map((icon, index) => (
                                        <div className="w-full flex justify-around">
                                            <CompanyLogo company={icon}/>
                                        </div>
                                       
                                    ))
                                }
                               
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div style={{ fontSize: "15px"}} className="font-bold text-[#111]">Партнеры</div>
                        <div style={{ fontSize: "17px", borderRadius:"10px"}} className="w-9 h-9  bg-[#111] grid place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="#fff" d="M475-160q4 0 8-2t6-4l328-328q12-12 17.5-27t5.5-30q0-16-5.5-30.5T817-607L647-777q-11-12-25.5-17.5T591-800q-15 0-30 5.5T534-777l-11 11 74 75q15 14 22 32t7 38q0 42-28.5 70.5T527-522q-20 0-38.5-7T456-550l-75-74-175 175q-3 3-4.5 6.5T200-435q0 8 6 14.5t14 6.5q4 0 8-2t6-4l136-136 56 56-135 136q-3 3-4.5 6.5T285-350q0 8 6 14t14 6q4 0 8-2t6-4l136-135 56 56-135 136q-3 2-4.5 6t-1.5 8q0 8 6 14t14 6q4 0 7.5-1.5t6.5-4.5l136-135 56 56-136 136q-3 3-4.5 6.5T454-180q0 8 6.5 14t14.5 6Zm-1 80q-37 0-65.5-24.5T375-166q-34-5-57-28t-28-57q-34-5-56.5-28.5T206-336q-38-5-62-33t-24-66q0-20 7.5-38.5T149-506l232-231 131 131q2 3 6 4.5t8 1.5q9 0 15-5.5t6-14.5q0-4-1.5-8t-4.5-6L398-777q-11-12-25.5-17.5T342-800q-15 0-30 5.5T285-777L144-635q-9 9-15 21t-8 24q-2 12 0 24.5t8 23.5l-58 58q-17-23-25-50.5T40-590q2-28 14-54.5T87-692l141-141q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l11 11 11-11q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l169 169q23 23 35 53t12 61q0 31-12 60.5T873-437L545-110q-14 14-32.5 22T474-80Zm-99-560Z"/></svg>
                        </div>
                    </div>
                </div>
                <div style={{ border: "1px solid #1447FB", background: "#1447FB", height:"20vh", boxShadow: "2px 2px 13px 2px #1447FB" }} className="w-11/12 h-full bg-[green] rounded-3xl p-6 flex flex-col justify-between">
                    <div className="w-full flex justify-end">
                        <div style={{ fontSize: "15px"}} className="font-bold text-white">Проекты</div>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <span style={{ fontSize: "20px", color: "#fff"}} className="font-thin">Смотреть все</span>
                        <div style={{ fontSize: "17px", borderRadius:"10px"}} className="w-9 h-9  bg-[#fff] grid place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path fill="#111" d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}