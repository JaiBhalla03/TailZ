import Image from 'next/image'
import React from 'react'
import logo from '../../public/images/logo.png'

export default function Navbar() {
  return (
    <nav className='bg-white border-black border rounded-2xl py-4'>
        <div className='flex items-center px-2 font-cedarville font-bold text-2xl gap-1'>
            <Image src={logo} alt='logo' className="w-10"/>
            TailZ
        </div>
    </nav>
  )
}
