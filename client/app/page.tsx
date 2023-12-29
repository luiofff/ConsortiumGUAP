
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './ui/navbar/navbar'
import TitleBlock from './ui/titleBlock'
import Button from './ui/button/button'





const compButtonsArray = [
  { icon: 'gaz', label: 'Label 2', transitionDelay: '0.2s', countBtn: 'north-button' },
  { icon: 'uiniversitu2035', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'north_east-button' },
  { icon: 'yand', label: 'Label 2', transitionDelay: '0.3s', countBtn: 'north_west-button' },
  { icon: 'megafon', label: 'Label 2', transitionDelay: '0.4s', countBtn: 'west-button' },
  { icon: 'kirov_zavod', label: 'Label 2', transitionDelay: '0s', countBtn: 'east-button' },
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
