'use client'

import styles from "./navbar.module.css"
import Image from 'next/image'
import logo from '../../../public/logo.svg'
import React from "react";

const links = [
    { name: 'О школе', href: '/dashboard'},
    { name: 'Подразделения',href: '/dashboard/invoices' },
    { name: 'Студентам', href: '/dashboard/customers' },
    { name: 'Школьникам', href: '/dashboard/customers' },
    { name: 'Партнерам', href: '/dashboard/customers' },
    { name: 'Контакты', href: '/dashboard/customers' },
  ];

export default function Navbar() {

    const [toggle, setToggle] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
          const navbar = document.getElementById('navbar');
          if (navbar) {
            const scrollY = window.scrollY || window.pageYOffset;
    
            if (scrollY >= 60) {
              navbar.classList.add('bg-[#0C2A92]');
              
            } else {
              navbar.classList.remove('bg-[#0C2A92]');
              
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <>
           <div id="navbar"  className={`${styles.nav}`}>
                <div className={styles.logo_block}>
                        <Image
                            className={styles.logo}
                            src={logo}
                            alt="Logo"
                            width={180}
                            height={37}
                            priority
                        />
                    </div>
                
                    <div className={styles.nav_textBlock}>
                        {links.map((link) => {
                            return (
                            <a
                                key={link.name}
                                href={link.href}
                            >
                                <p>{link.name}</p>
                            </a>
                            );
                        })}
                    </div>
                    <div className={styles.mobile_menu}>
                        <button className={styles.hamburger} >
                                    <input className={styles.checkbox} type="checkbox" id='checker' onClick={() => (toggle ? setToggle(false) : setToggle(true))}/>
                                    <svg fill="none" viewBox="0 0 50 50" height="50" width="50" >
                                    <path
                                        className={`${styles.lineTop} ${styles.line}`}
                                        stroke-linecap="round"
                                        stroke-width="1"
                                        stroke="white"
                                        d="M6 11L44 11"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-width="2"
                                        stroke="white"
                                        d="M6 24H43"
                                        className={`${styles.lineMid} ${styles.line}`}
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-width="2"
                                        stroke="white"
                                        d="M6 37H43"
                                        className={`${styles.lineBottom} ${styles.line}`}
                                    ></path>
                                    </svg>
                        </button>
                        
                    </div>
                    
                    <div className={`${styles.nav_menu}  ${toggle ? styles.nav_menu_open : styles.nav_menu_close} `}>
                <div style={{ boxShadow: "-3px 16px 18.5px 6px #1546FA" }} className="absolute h-full w-[320px] bg-[#0C2A92] opacity-85">
                </div>
                <div className={styles.nav_menu_}>
                    <button className={styles.nav_mobile_btn}>
                        <div className={styles.text}>
                            <span className={styles.nav_mobile_btn__text}>О</span>
                            <span className={styles.nav_mobile_btn__text}>школе</span>
                        </div>
                        <div className={styles.clone}>
                            <span className={styles.nav_mobile_btn__text}>О</span>
                            <span className={styles.nav_mobile_btn__text}>школе</span>
                        </div>

                    </button>
                    <button className={styles.nav_mobile_btn}>
                        <div className={styles.text}>
                            <span className={styles.nav_mobile_btn__text}>Подразделения</span>
                            
                        </div>
                        <div className={styles.clone}>
                            <span className={styles.nav_mobile_btn__text}>Подразделения</span>
                        </div>
                    </button>
                    <button className={styles.nav_mobile_btn}>
                        <div className={styles.text}>
                            <span className={styles.nav_mobile_btn__text}>Студентам</span>
                        </div>
                        <div className={styles.clone}>
                            <span className={styles.nav_mobile_btn__text}>Студентам</span>
                        </div>
                    </button>
                    <button className={styles.nav_mobile_btn}>
                        <div className={styles.text}>
                            <span className={styles.nav_mobile_btn__text}>Школьникам</span>
                        </div>
                        <div className={styles.clone}>
                            <span className={styles.nav_mobile_btn__text}>Школьникам</span>
                        </div>
                    </button>
                    <button className={styles.nav_mobile_btn}>
                        <div className={styles.text}>
                            <span className={styles.nav_mobile_btn__text}>Партнерам</span>
                        </div>
                        <div className={styles.clone}>
                            <span className={styles.nav_mobile_btn__text}>Партнерам</span>
                        </div>
                    </button>
                    <button className={styles.nav_mobile_btn}>
                        <div className={styles.text}>
                            <span className={styles.nav_mobile_btn__text}>Контакты</span>
                        </div>
                        <div className={styles.clone}>
                            <span className={styles.nav_mobile_btn__text}>Контакты</span>
                        </div>
                    </button>
                </div>
            </div>    
           </div>
        
        </>
    );
}
