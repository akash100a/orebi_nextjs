'use client'
import React, { useState } from 'react'
import Container from '../app/Container'
import logo from '../public/logo.png'
import Li from './Li'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Link from 'next/link'




const navbar = () => {
  let [show,setShow] = useState(true);
  let handler = () =>{
    setShow(!show);
  }
  return (
    <>
      <nav className='py-8 bg-slate-200'>
        <Container className='relative flex items-center justify-between'>
          <div className="flex items-center w-full">
              <div className="flex items-center justify-between w-full md:block md:w-auto">
                <Link  href='/'>
                  <img src={logo} alt="aa" />
                </Link>
                <div className="hamburger md:hidden">
                  <Link className='bg-red-200' onClick={handler} href='/'>
                    {
                      show ? <GiHamburgerMenu /> : <IoCloseSharp />
                    }
                  </Link>
                </div>
              </div>
              
              <ul className={`flex gap-x-[40px] mynav w-full justify-center absolute top-full left-0 pl-[12px] z-[9999] py-2 my-2 md:static flex-col md:flex-row bg-red-400 md:bg-transparent md:opacity-100 transition-all duration-100  ${ show ? "opacity-0": "opacity-100"}`}>
                <Li className='text-[#fff] md:text-[#767676]' liText='Home' to='/home'/>
                <Li className='text-[#fff] md:text-[#767676]' liText='Shop' to='/shop'/>
                <Li className='text-[#fff] md:text-[#767676]' liText='About' to='/faq'/>
                <Li className='text-[#fff] md:text-[#767676]' liText='Contacts' to='/about'/>
                <Li className='text-[#fff] md:text-[#767676]' liText='Journal' to='/contact'/>
              </ul>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default navbar