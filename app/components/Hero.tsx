"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import hero1 from '../../public/images/hero1.png';
import hero2 from '../../public/images/hero2.png';

export default function Hero() {
  return (
    <div>
      <div className="mt-5 flex justify-between">
        {/* Happy emoji */}
        <motion.div className="p-6 relative"
            initial={{
                opacity: 0,
                y: 20
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 0.5,
                ease: "easeInOut"
            }}
        >
          {/* Wiggle animation */}
          <motion.div
            className="flex gap-4 text-2xl font-bold font-poppins absolute top-0"
            initial={{y: 20}}
            animate={{
              x: [10, 20, 10], // Moves left and right
            }}  
            transition={{
              duration: 1, // Duration of one wiggle
              repeat: Infinity, // Infinite wiggle
              ease: "easeInOut", // Smooth easing
            }}
          >
            <div>^</div><div>^</div>         
          </motion.div>
          <div className="text-4xl font-bold font-poppins">(        _        )</div>
        </motion.div>
        {/* Heading */}
        <div className='flex flex-col'>
            <div className='flex justify-end gap-4'>
                <motion.div 
                    initial={{
                        rotate: 360,
                        opacity: 0,
                    }}
                    animate={{
                        rotate: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut'
                    }}
                    className='font-caveat text-[3.5rem] font-bold leading-[2.5rem]'>
                        your
                </motion.div>
                <motion.div 
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        delay: 0.3
                    }}
                    className='text-[10rem] leading-[8rem] font-poppins'>FUTURE
                </motion.div>
            </div>
            <div>
                <motion.div 
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        delay: 0.6
                    }}
                    className='text-[10rem] leading-[8rem] font-poppins pr-10'>PET AWAITS
                </motion.div>
            </div>
        </div>
      </div>
      <div className='flex w-full justify-end gap-8 relative mb-10'>
        {/* images */}
        <div className='flex gap-4 absolute -top-20 left-10'>
            <motion.div
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{duration: 1, delay: 0.3, ease: 'easeInOut'}}
            >
                <Image src={hero1} alt='hero1' className='w-[23rem]'/>
            </motion.div>
            <motion.div
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{duration: 1, delay: 0.6, ease: 'easeInOut'}}
             className='flex flex-col justify-end'>
                <Image src={hero2} alt='hero2' className='w-[16.5rem]'/>
            </motion.div>
        </div>
        {/* paragraph */}
        <motion.p 
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.9, ease: 'easeInOut'}}
            className='w-[30rem] pt-[4rem] pl-[1rem] text-xl'>
            Discover the perfect companion to bring joy and love into your life. 
            Tailored to your lifestyle, preferences, and personality, our tool helps you find a pet that feels like family. 
            Let us predict your next best friend today!
        </motion.p>
        {/* button */}
        <motion.div 
            initial={{x: 20, y: 20, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 1.2, ease: 'easeInOut'}}
            className='text-2xl flex flex-col justify-center'
        >
            <button className='hover:bg-gray-300 transition-all duration-300 flex items-center justify-between border border-b-4 border-black rounded-2xl p-3 px-6'>Reveal
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7733 7.31888C18.9043 7.69607 19.4431 9.40963 18.9667 11.1621C18.4947 12.9056 17.2052 14.0263 16.0698 13.6581C14.9433 13.2943 14.3956 11.5762 14.8631 9.81933C15.3261 8.07135 16.6334 6.95956 17.7733 7.31888ZM24.1641 10.5251C25.1426 11.2286 25.024 12.9368 23.9174 14.3619C22.7796 15.7825 21.0839 16.375 20.1099 15.685C19.1269 14.9904 19.2545 13.2867 20.3789 11.8706C21.4989 10.441 23.1946 9.84852 24.1641 10.5251ZM10.9286 9.03137C12.1673 9.1046 13.1536 10.5952 13.1826 12.3438C13.1534 14.0968 12.1766 15.464 10.9468 15.3952C9.71709 15.3265 8.73523 13.8494 8.73314 12.0918C8.73105 10.3343 9.73019 8.96713 10.9286 9.03137ZM27.0174 17.103C27.7854 18.0253 27.2868 19.6436 25.8766 20.6926C24.4665 21.7417 22.6954 21.8376 21.9051 20.893C21.1148 19.9483 21.6268 18.3479 23.0146 17.2765C24.4336 16.2543 26.2182 16.1539 27.0174 17.103ZM20.6907 25.9895C20.3049 26.8477 19.195 27.4544 18.2514 27.4173C16.2838 27.3476 15.1512 24.8774 13.3725 23.985C11.5938 23.0927 8.88732 23.7151 7.71329 22.1304C7.0392 21.244 7.00542 19.7726 7.60592 18.8656C8.43496 17.6145 10.3936 17.7021 11.8299 17.2032C13.7224 16.5752 15.8046 14.655 17.6012 15.5563C19.3888 16.4532 19.1659 19.2614 19.7223 21.1628C20.1674 22.751 21.359 24.5012 20.6907 25.9895Z" fill="black"/>
</svg>
            </button>
        </motion.div>
      </div>
      <div className='bg-[#CCFF41] p-2 h-20 mt-16 mb-10 rounded-2xl border border-black'>

      </div>
    </div>
  );
}
