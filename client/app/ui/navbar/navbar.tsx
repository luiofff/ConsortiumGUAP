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
                    <div className="flex flex-col">
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
                    <div style={{ zIndex: 999, justifyContent: 'end'}} className="w-full h-28 flex pr-28 pr-9">
                            <div className="gap-4 flex pl-14">
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 75 74" fill="none">
                                    <path d="M5.27188 5.20159C0 10.4032 0 18.776 0 35.52V38.48C0 55.224 0 63.5969 5.27188 68.7984C10.5437 74 19.0297 74 36 74H39C55.9703 74 64.4563 74 69.7281 68.7984C75 63.5969 75 55.224 75 38.48V35.52C75 18.776 75 10.4032 69.7281 5.20159C64.4563 0 55.9703 0 39 0H36C19.0297 0 10.5437 0 5.27188 5.20159ZM12.6562 22.5084H21.2188C21.5001 36.63 27.8124 42.6116 32.8125 43.845V22.5084H40.875V34.6875C45.8124 34.1634 51 28.6134 52.7499 22.5084H60.8124C60.1528 25.6745 58.8382 28.6722 56.9508 31.3144C55.0636 33.9564 52.6441 36.1858 49.8437 37.8634C52.9704 39.3949 55.7322 41.5639 57.9462 44.2267C60.1602 46.8897 61.7762 49.986 62.6874 53.3109H53.8125C52.9947 50.4227 51.3305 47.8374 49.0287 45.879C46.7272 43.9208 43.8906 42.6769 40.875 42.3034V53.3109H39.9062C22.8126 53.3109 13.0625 41.7484 12.6562 22.5084Z" fill="white"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="79" height="43" viewBox="0 0 109 73" fill="none">
                                    <path d="M105.832 11.5079C104.6 7.02735 100.969 3.49859 96.3594 2.30106C88.004 0.125 54.5001 0.125 54.5001 0.125C54.5001 0.125 20.9964 0.125 12.6409 2.30106C8.03123 3.49878 4.40071 7.02735 3.1685 11.5079C0.929688 19.6292 0.929688 36.5735 0.929688 36.5735C0.929688 36.5735 0.929688 53.5178 3.1685 61.6391C4.40071 66.1197 8.03123 69.5014 12.6409 70.6989C20.9964 72.875 54.5001 72.875 54.5001 72.875C54.5001 72.875 88.0038 72.875 96.3594 70.6989C100.969 69.5014 104.6 66.1197 105.832 61.6391C108.071 53.5178 108.071 36.5735 108.071 36.5735C108.071 36.5735 108.071 19.6292 105.832 11.5079ZM43.5425 51.9577V21.1893L71.5451 36.5739L43.5425 51.9577Z" fill="white"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 74 74" fill="none">
                                    <path d="M37 0C16.5654 0 0 16.5654 0 37C0 57.4346 16.5654 74 37 74C57.4346 74 74 57.4346 74 37C74 16.5654 57.4346 0 37 0ZM54.1501 25.163C53.5933 31.0136 51.184 45.2113 49.9578 51.7642C49.4392 54.5368 48.4178 55.4666 47.4292 55.5574C45.2808 55.7553 43.649 54.1376 41.5679 52.7733C38.3114 50.6387 36.4717 49.3098 33.3106 47.2268C29.6576 44.8195 32.0257 43.4969 34.1076 41.3336C34.6524 40.7677 44.1195 32.1567 44.3027 31.3756C44.3256 31.2778 44.3475 30.9131 44.1306 30.7215C43.9136 30.5299 43.595 30.5948 43.3644 30.6469C43.0379 30.7211 37.8356 34.1596 27.7576 40.9624C26.2811 41.9764 24.9436 42.4704 23.7452 42.4445C22.4241 42.416 19.8829 41.6977 17.9936 41.0834C15.6765 40.3303 13.8349 39.9321 13.9953 38.6529C14.0788 37.9865 14.9963 37.3052 16.7479 36.609C27.5342 31.9096 34.7267 28.8113 38.3254 27.3142C48.6007 23.0403 50.7358 22.2979 52.1275 22.2731C52.4336 22.268 53.118 22.3438 53.5612 22.7035C53.8561 22.9598 54.044 23.3173 54.0879 23.7055C54.163 24.1875 54.1839 24.6764 54.1501 25.163Z" fill="white"/>
                                </svg>
                            </div>
                    </div>
                </div>
            </div>    
           </div>
        
        </>
    );
}
