import Button from "./Button"

const SmNav = () => {
  return (
    <section>
        <ul className={`flex flex-col gap-4 font-bold poppins`}  id="nav3">
            <li className='px-4 py-2'><a href="">Home</a></li>
            <li className='px-4 py-2'><a href="">About</a></li>
            <li className='px-4 py-2'><a href="">Contact</a></li>
            <li className='px-4 py-2'><a href="#services">Services</a></li>
            <li><a href=""><Button label={'LOGIN'} bg_color={'bg-white'} text_color={'text-slate-700'} fullWidth/></a></li>
            <li><a href=""><Button label={'OPEN ACCOUNT'} fullWidth/></a></li>
          </ul>
    </section>
  )
}

export default SmNav