
import './App.css'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import SectionThree from './components/SectionThree'
import Navbar from './components/Navbar'
import SectionFour from './components/SectionFour'
import Footer from './components/Footer'



function App() {

  return (
    <div className='font-kulimpark h-[100%] w-[100%] overflow-hidden flex flex-col'>
      <Navbar />
      <FirstSection/>
      <SecondSection/>
      <SectionThree/>
      <SectionFour/>
      <Footer/>
    </div>

  )
}

export default App
