
import './App.css'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import SectionThree from './components/SectionThree'
import Navbar from './components/Navbar'
import SectionFour from './components/SectionFour'
import Footer from './components/Footer'



function App() {

  return (
    <div className='font-kulimpark h-[100%] w-[100%] flex flex-col'>
      <Navbar />
      <FirstSection/>
      <SecondSection/>
      <SectionThree/>
      <SectionFour/>
      <Footer/>
     {/* <div className=' font-kulimpark bg-black h-[100%] w-[100%] flex flex-col lg:flex-row justify-between items-center'>
        <div className='bg-purple w-[100%]' >
        </div>
  </div>*/}
    </div>

  )
}

export default App
