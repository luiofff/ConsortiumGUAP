
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './ui/navbar/navbar'
import TitleBlock from './ui/titleBlock'
import Button from './ui/button/button'





const compButtonsArray = [
  { icon: 'gaz', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'north_east-button' },
  { icon: 'gaz', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'north-button' },
  { icon: 'gaz', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'north_west-button' },
  { icon: 'gaz', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'west-button' },
  { icon: 'gaz', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'west_south-button' },
  { icon: 'gaz', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'south-button' },
  { icon: 'gaz', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'south_east-button' },
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
