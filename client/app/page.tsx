
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './ui/navbar/navbar'
import TitleBlock from './ui/titleBlock'
import Button from './ui/button/button'





const compButtonsArray = [
  { icon: 'gaz', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'twitter-button' },
  { icon: 'yand', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'discord-button' },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <TitleBlock />
      <div className={styles.content_space}>
        <Button companyButtons={compButtonsArray}/>
      </div>
    </>
  )
}
