
import Navbar from './ui/navbar/navbar'
import TitleBlock from './ui/titleBlock'
import ButtonsSpace from './ui/buttonsSpace'
import ButtonsSpaceMobile from './ui/ButtonSpaceMobile'



import Footer from './ui/footer'


export default function Home() {
  

  return (
    <>
      <Navbar />
      <section className='buttonsSpaceDesktop'>
        <ButtonsSpace />
        <Footer />
      </section>
      <section className='buttonsSpaceMobile'>
        <ButtonsSpaceMobile />
      </section>
    </>
  )
}
