
import React from 'react'
// import logo from './../assets/images/logo'
import logo from './../assets/images/logo.svg'
// import { IconName } from "react-icons/io5";
import { IoHappy } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

// import '../../src'
// import '../index.css'


function Header () {
  return (

    <div className='flex px-4 bg-white justify-between items-center rounded-none drop-shadow-2xl max-w-full max-h-full'> 

          {/* <button className='bg-white w-screen'>jhwdiuugbu</button> */}
          {/* <div className="bg-slate-600 rounded-full css-be4cg6 hover:bg-amber-900 text-white">Sign in</div> */}

        <img src={logo} alt="logo" className=' w-[110px] h-[40px]' /> dw

        <ul className=' gap-3 px-2 m-2 flex justify-end md:gap-14 cursor-pointer'>


          <HomeIcon className="h-6 w-6" />
          <li className='hover:font-bold '>Home</li>
          <li className='hover:font-bold' >About Us</li>
          <li className='hover:font-bold'>cont</li>
      
         
        </ul>
        <button className=' m-5 px-3 rounded-full bg-slate-600 text-white hover:bg-orange-400 items-center flex  '>search  <IoHappy className='ml-3'/> </button>

        {/* <button className='m-1 ml-3 px-3 rounded-full  bg-slate-100 hover:bg-orange-400 max-w-screen-sm'>  <IoLogoLinkedin className='ml-1 it'/> </button> */}
        <IoLogoLinkedin className='ml-1 it'/>

    </div>

  )
}

export default Header