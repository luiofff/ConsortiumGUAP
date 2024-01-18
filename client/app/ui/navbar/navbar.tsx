'use client'

import styles from "./navbar.module.css"
import Image from 'next/image'
import logo from '../../../public/logo.svg'
import {DropdownMenu} from '@gravity-ui/uikit';

const links = [
    { name: 'О школе', href: '/dashboard'},
    { name: 'Подразделения',href: '/dashboard/invoices' },
    { name: 'Студентам', href: '/dashboard/customers' },
    { name: 'Школьникам', href: '/dashboard/customers' },
    { name: 'Партнерам', href: '/dashboard/customers' },
    { name: 'Контакты', href: '/dashboard/customers' },
  ];

export default function Navbar() {

    const delCheck = () => {
        const elem = document.getElementById("checker") as HTMLInputElement;
        if (elem) {
            elem.checked = false;
        }
    }

    return (
        <>
           <div className={styles.nav}>
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
                        <DropdownMenu
                            renderSwitcher={(props) => (
                                
                                <button className={styles.hamburger} {...props}>
                                    <input className={styles.checkbox} type="checkbox" id='checker'/>
                                    <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
                                    <path
                                        className={`${styles.lineTop} ${styles.line}`}
                                        stroke-linecap="round"
                                        stroke-width="1"
                                        stroke="whit"
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
                            )}
                            items={[
                                {
                                    action: () => console.log('Rename'),
                                    text: 'О школе'
                                },
                                {
                                    action: () => console.log('Delete'),
                                    text: 'Подразделения'
                                },
                                {
                                    action: () => console.log('Delete'),
                                    text: 'Студентам'
                                },
                                {
                                    action: () => console.log('Delete'),
                                    text: 'Школьникам'
                                },
                                {
                                    action: () => console.log('Delete'),
                                    text: 'Партнерам'
                                },
                                {
                                    action: () => console.log('Delete'),
                                    text: 'Контакты'
                                },
                            ]}
                        />
                    </div>
           </div>
        </>
    );
}
