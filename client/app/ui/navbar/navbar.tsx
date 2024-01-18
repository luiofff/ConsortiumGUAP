'use client'

import styles from "./navbar.module.css"
import Image from 'next/image'
import logo from '../../../public/logo.svg'
import {DropdownMenu, Button, Icon} from '@gravity-ui/uikit';

const links = [
    { name: 'О школе', href: '/dashboard'},
    { name: 'Подразделения',href: '/dashboard/invoices' },
    { name: 'Студентам', href: '/dashboard/customers' },
    { name: 'Школьникам', href: '/dashboard/customers' },
    { name: 'Партнерам', href: '/dashboard/customers' },
    { name: 'Контакты', href: '/dashboard/customers' },
  ];

export default function Navbar() {
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
                                <Button {...props} view="flat" style={{ zIndex:999 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24"  viewBox="0 0 26 24" fill="none">
                                        <rect width="26" height="3" rx="1.5" fill="white"/>
                                        <rect y="9" width="26" height="3" rx="1.5" fill="white"/>
                                        <rect y="18" width="26" height="3" rx="1.5" fill="white"/>
                                    </svg>
                                </Button>
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
