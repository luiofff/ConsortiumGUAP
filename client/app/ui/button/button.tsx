"use client"

import styles from "./button.module.css";
import clsx from 'clsx';
import Image from 'next/image';
import React from "react";
import CompanyLogo from "./image";

interface ButtonProps {
    companyButtons: Array<{
      icon: string;
      transitionDelay: string;
      countBtn: string;
    }>;
    projects: Array<{
        left: string;
        center: string;
        rigth: string;
    }>;
    title: string;
    elem: string;
}



export default function Button({ companyButtons, title, elem, projects }: ButtonProps) {
    const [clicked, setClick] = React.useState(false);
    const fullBtnRef = React.useRef<HTMLDivElement>(null);

    const handleClick = () => {
      setClick(true);
    };
  
    const handleClickOutside = (event: MouseEvent) => {
      if (fullBtnRef.current && !fullBtnRef.current.contains(event.target as Node)) {
        setClick(false);
      }
    };
  
    React.useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    return (
        <>
            
            { clicked ?
            
            
            (<div className={styles.btn_block}>
                <div id={elem} className="absolute grid place-items-center z-50">
                            <div ref={fullBtnRef}  className={styles.full_btn}>
                                <div className="flex flex-col gap-6 justify-center items-center mobile:gap-2 ">
                                    <span style={{ color:"#fff"}} className="flex justify-center text-center w-24 mobile:text-xs">{title}</span>
                                    <span style={{ color:"#fff" }} className="modile:text-xs">Партнеры</span>
                                    <div  className="flex gap-4 justify-center">
                                        {
                                            companyButtons.map((button, index) => (
                                                <CompanyLogo company={button.icon} />
                                            )  
                                        )
                                        }
                                    </div>
                                    <span style={{ color:"#fff" }} className="modile: text-xs">Проекты</span>
                                    {
                                        projects.map((project, index) => (
                                            <div key={index} className="flex gap-4 w-48 justify-center">
                                                <div style={{ fontSize: "0.4rem", border: "2px solid #F92D77" }} className="w-14 h-14 rounded-full grid place-items-center">
                                                    <span className="w-full text-center">{project.left}</span>
                                                </div>
                                                <div style={{ fontSize: "0.4rem", border: "2px solid #1546FA" }} className="w-14 h-14 rounded-full grid place-items-center">
                                                    <span className="w-full text-center">{project.center}</span>
                                                </div>
                                                <div style={{ fontSize: "0.4rem", border: "2px solid #15C1EC"}} className="w-14 h-14 rounded-full grid place-items-center">
                                                    <span className="w-full text-center">{project.rigth}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    
                                    <button style={{ color:"#fff" }} className="modile: text-xs">Подробнее →</button>
                                </div>
                            </div>
                        </div>
            </div>)
            :
            (<div className={styles.btn_block}>
                        <div id={elem} className={`${styles.buttons} ${!clicked ? "grid" : "hidden"}`}>
                            <button className={styles['main-button']} onClick={handleClick}>
                                <Image
                                    className={styles.button_logo}
                                    src={require("../../../public/button_logo.svg")}
                                    alt="IS_logo"
                                    width={50}
                                    height={50}
                                    priority
                                />
                            </button>
        
                            {
                                companyButtons.map((button, index) => (
                                        <button
                                            key={index}
                                            className={clsx(styles[`${button.countBtn}`], styles.button)}
                                            style={{ transitionDelay: `${button.transitionDelay}, ${button.transitionDelay}, ${button.transitionDelay}`, transitionProperty: 'translate, background, box-shadow' }}
                                            >
                                            <div className={styles.company_logo}>
                                                <CompanyLogo company={button.icon} />
                                            </div>
                                        </button>
                                    )  
                                )
                            }
                        </div>
                        <div className={styles.text_block}>
                            <span className={clsx(styles.btn__title, clicked && styles.close)}>{title}</span>
                        </div>
            </div>)}
        </>
    );
}