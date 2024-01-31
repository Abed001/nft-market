
import './App.css'
import FirstSection from './components/FirstSection'
import Navbar from './components/Navbar'
import SecondSection from './components/SecondSection'


function App() {

  return (
    <div className='font-kulimpark h-[100%] w-[100%] flex flex-col'>
      <Navbar />
      <FirstSection/>
      <SecondSection/>
     {/* <div className=' font-kulimpark bg-black h-[100%] w-[100%] flex flex-col lg:flex-row justify-between items-center'>
        <div className='bg-purple w-[100%]' >
        </div>
  </div>*/}
    </div>

  )
}

export default App
