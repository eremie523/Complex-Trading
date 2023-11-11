import './App.css'
import Awards from './Sections/Awards'
import Footer from './Sections/Footer'
import MainSection from './Sections/MainSection'
import MapSection from './Sections/MapSection'
import Nav from './Sections/Nav'
import RequestSection from './Sections/RequestSection'
import SpecialBenefits from './Sections/SpecialBenefits'
import StrategicInvestments from './Sections/StrategicInvestments'
import Testimonies from './Sections/Testimonies'

function App() {

  return (
    <div>
      <div className='fixed z-50 bg-white dark:bg-black text-slate-700 dark:text-slate-200 top-0 w-full'>
        <Nav />
      </div>
      <div className='absolute z-5 w-full'>
        <div>
          <MainSection />
        </div>
        <div className='px-8'>
          <SpecialBenefits />
        </div>
        <div className='px-8'>
          <Awards />
        </div>
        <div className='px-8 bg-blue-200 py-16' id="services">
          <MapSection />
        </div>
        <div className='px-8 bg-blue-200 py-16'>
          <StrategicInvestments />
        </div>
        <div className='px-8 py-16'>
          <Testimonies />
        </div>
        <div className='px-8 bg-blue-900 py-16'>
          <RequestSection />
        </div>
        <div className='px-8 bg-black py-16'>
          <Footer />
        </div>
      </div> 
    </div>
  )
}

export default App
