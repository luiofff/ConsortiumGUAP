import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './ui/navbar/navbar'
import TitleBlock from './ui/titleBlock'

export default function Home() {
  return (
    <>
      <Navbar />
      <TitleBlock />
    </>
  )
}
