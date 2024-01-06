

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
    title: string;
    elem: string;
}



export default function Button({ companyButtons, title, elem }: ButtonProps) {
    

    return (
        <>
            <div  className={styles.btn_block}>
                <div id={elem} className={styles.buttons}>
                    <button className={styles['main-button']}>
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
                    <span className={styles.btn__title}>{title}</span>
                </div>
            </div>  
        </>
    );
}