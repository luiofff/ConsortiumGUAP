import React from "react"
import LabObject from "./labObject/labObject"
import styles from "./ButtonSpaceMobile.module.css"
import TitleBlock from "./titleBlock"
import Footer from "./footer"

const compButtonsArray = [
    {   
        icon: ['gaz', 'uiniversitu2035', 'yand', 'megafon', 'kirov_zavod', 'yand'],
        title: "Лаборатория технологического предпринимательства"
    },
    {
        icon: ['megafon','ptc','ublox','beza'],
        title: "Лаборатория интернета вещей"
    },
    {   
        icon: ['kuka','ni'],
        title: "Лаборатория робототехники"
    },
    {
        icon: ['coex', 'fixar'],
        title: "Лаборатория беспилотных авиационных систем"
    },
    {
        icon: ['gaz','granit','samsungIT','cloud'],
        title: "Лаборатория искусственного интеллекта"
    },
    {
        icon: ['mgbot','spb','volts','infotecs','nppkt'],
        title: "Лаборатория кибербезопасности ГУАП-Infowatch"
    },
    {
        icon: ['mars','kirov_zavod','yand'],
        title: "Лаборатория электроэнергетики"
    },
    {
        icon: ['spbficran'],
        title: "Отдел Инженерный гараж"
    },
    {
        icon: ['gaz', 'uiniversitu2035','yand','megafon','kirov_zavod'],
        title: "Лаборатория автоматизации технологических процессов"
    },
    {
        icon: ['silmash'],
        title: "Студенческое конструкторское бюро 'Силовые машины ГУАП'"
    },
    {
        icon: ['gaz', 'uiniversitu2035','yand','megafon','kirov_zavod'],
        title: "Лаборатория технологического предпринимательства"
    },
];


export default function ButtonsSpaceMobile() {
    return (
        <>  
            <main className={styles.main}>
                <section className={styles.touch__section}>
                    <TitleBlock />
                </section>
                {
                    compButtonsArray.map((obj, index) => (
                        <section className={styles.touch__section}>
                            <LabObject companyButtons={obj.icon} title={obj.title}/>
                        </section>
                    ))
                }
                <section className={styles.touch__section}>
                <Footer />
                </section>
                
            </main>
        </>
    )
}