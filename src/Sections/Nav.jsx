import { useState } from 'react'
import favicon from '/favicon.png'
import Button from '../Components/Button'
import { hamburger } from '../assets/icons'
import SmNav from '../Components/smNav'
import LgNav from '../Components/lgNav'


const Nav = () => {
  const [smNavCurrentState, setsmNavCurrentState] = useState(false)
  const [lgNavCurrentState, setlgNavCurrentState] = useState(false)
  return (
    <section>
      <nav className="flex justify-between items-center px-16 py-8 max-sm:px-5 gap-y-0">
        <div>
          <a href="/" className='cursor-pointer flex flex-row gap-4'>
          <img src={favicon} alt="" width={45} height={50}/>
          <h3 className='text-2xl font-palanquin font-bold'>Complex Trading</h3>
          </a>
        </div>
        <div className='max-xl:hidden block'>
          <ul className='flex flex-row gap-8 font-bold poppins'>
            <li className='px-4 py-2 rounded-xl flex items-center justify-center'><a href="">Home</a></li>
            <li className='px-4 py-2 rounded-xl flex items-center justify-center'><a href="">About</a></li>
            <li className='px-4 py-2 rounded-xl flex items-center justify-center'><a href="#services">Services</a></li>
            <li className='px-4 py-2 rounded-xl flex items-center justify-center'><a href="">Contact</a></li>
            <li id='nav_btn'><a href=""><Button label={'LOGIN'} bg_color={'bg-white'} text_color={'text-red-900'}/></a></li>
            <li id='nav_btn'><a href=""><Button label={'OPEN ACCOUNT'}/></a></li>
          </ul>
        </div>
        <div className="max-xl:block hidden max-sm:hidden">
          <ul className='flex flex-row gap-8 font-bold poppins'>
            <li><a href=""><Button label={'LOGIN'} bg_color={'bg-white'} text_color={'text-slate-700'} fullWidth/></a></li>
            <li><a href=""><Button label={'OPEN ACCOUNT'} fullWidth/></a></li>
            <img src={hamburger} alt="" width={24} height={24}  onClick={() => {
              if(lgNavCurrentState){
                setlgNavCurrentState(false)
              }else{
                setlgNavCurrentState(true)
              }
            }}/>
          </ul>
        </div>
        <div className="max-sm:block hidden">
          <ul className='flex flex-row gap-8 font-bold poppins'>
            <img src={hamburger} alt="" width={24} height={24} onClick={() => {
              if(smNavCurrentState){
                setsmNavCurrentState(false)
              }else{
                setsmNavCurrentState(true)
              }
            }}/>
          </ul>
        </div>
      </nav>
      <div className={`my-4 bg-gray-100 p-4 ${smNavCurrentState ? 'navAnimation block' : 'goback hidden'}`}>
        <SmNav />
      </div>
      <div className={`my-5 bg-gray-100 p-4 ${lgNavCurrentState ? 'navAnimation block' : 'goback hidden'}`}>
        <LgNav />
      </div>
    </section>
  )
}

export default Nav