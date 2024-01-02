
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './ui/navbar/navbar'
import TitleBlock from './ui/titleBlock'
import Button from './ui/button/button'
import ButtonsSpace from './ui/buttonsSpace'




export default function Home() {
  

  return (
    <>
      <Navbar />
      <TitleBlock />
      <ButtonsSpace />
    </>
  )
}
