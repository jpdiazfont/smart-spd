import {  useLocation, useNavigate } from 'react-router-dom';
import './navbar.scss'
import { TbAspectRatioFilled,   TbLogin,   TbLogin2,   TbLogout,   TbNotification, TbSmartHome,  TbUserHexagon } from "react-icons/tb";

const Navbar = (props:{layout:string})=>{
  const location = useLocation()
  const navigation = useNavigate();
  const handleClick = (to:string) =>{
    navigation(`/${to}`)
  }
  return (
    <>
      <div id="navbar" className="bg-slate-200 z-10 sticky top-0">
        <div className='container mx-auto flex items-center'>
          <div className='w-1/6 md:w-1/4'>
            <img src="smart-spd.png" className="logo hidden md:block" />
            <img src="logo.png" className="logo block md:hidden" />
          </div>
          <div className={`${props.layout === 'master'? 'w-3/6': '3/5' } md:w-2/4 drop-shadow-md bg-slate-300 text-slate-800 flex justify-center p-1 rounded-full`}>
            {
              props.layout === 'master' ? 
                <>
                  <div onClick={()=> {handleClick('dashboard')}} className={`navbar-option inline-flex items-baseline ${location.pathname === '/dashboard' && 'active'} mx-1 md:mx-2 p-2 rounded-full`}>
                    <TbAspectRatioFilled className='self-center w-5 h-5 rounded-full mx-1'/>
                    {
                      location.pathname === '/dashboard' && <span className='hidden md:block'>Dashboard</span>
                    }
                  </div>
                </>
              :
                <>
                  <div onClick={()=> {handleClick('')}} className={`navbar-option hover:bg-slate-600 hover:text-white transition-all inline-flex items-baseline ${location.pathname === '/' && 'active'} mx-1 md:mx-2 p-2 rounded-full`}>
                    <TbSmartHome className='self-center w-5 h-5 rounded-full mx-1'/>
                    <span className='hidden md:block'>Home</span>
                  </div>
                  <div onClick={()=> {handleClick('auth')}} className={`navbar-option hover:bg-slate-600 hover:text-white transition-all inline-flex items-baseline ${location.pathname === '/auth' && 'active'} mx-1 md:mx-2 p-2 rounded-full`}>
                    <TbLogin className='self-center w-5 h-5 rounded-full mx-1'/>
                    <span>Sing in</span>
                  </div>
                  <div onClick={()=> {handleClick('register')}} className={`navbar-option hover:bg-slate-600 hover:text-white transition-all inline-flex items-baseline ${location.pathname === '/register' && 'active'} mx-1 md:mx-2 p-2 rounded-full`}>
                    <TbLogin2 className='self-center w-5 h-5 rounded-full mx-1'/>
                    <span>Sing up</span>
                  </div>
                </>
            }
          </div>
          <div className='w-2/6 md:w-1/4 flex justify-end'>
            {
              props.layout === 'master' ? 
                <>
                  <div className='navbar-bubble hover:bg-slate-600 transition-all drop-shadow-md inline-flex mx-1 md:mx-2 rounded-full bg-slate-300'>
                    <TbNotification className='text-white icon-center text-2xl'/>
                  </div>
                  <div className='navbar-bubble hover:bg-slate-600 transition-all drop-shadow-md inline-flex mx-1 md:mx-2 rounded-full bg-slate-300'>
                    <TbUserHexagon className='text-white icon-center text-2xl'/>
                  </div>
                  <div onClick={()=> {handleClick('')}} className='navbar-bubble hover:bg-slate-600 transition-all drop-shadow-md inline-flex mx-1 md:mx-2 rounded-full bg-slate-300'>
                    <TbLogout className='text-white icon-center text-2xl'/>
                  </div>
                
                </>
              : null
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar