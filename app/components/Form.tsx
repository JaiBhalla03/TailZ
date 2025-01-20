"use client";

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import formImage from '../../public/images/formImage1.png';

export default function Form() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { threshold: 0.2 }); // Trigger when 20% of the text is visible

  return (
    <div className="pt-10 h-screen">
      <div className="relative w-full">
        <div className="bg-[#FABBDE] w-[30rem] p-8 absolute left-1/2 -translate-x-1/2 flex justify-center items-center">
          <motion.div
            ref={textRef}
            className="text-[3rem] font-normal"
            initial={{ opacity: 0, y: 50 }} // Start with invisible and moved down
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to visible and original position
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            DISCOVER
          </motion.div>
        </div>
        <div className='absolute top-1/3 w-full'>
            <form className='w-full mx-auto flex flex-col items-center gap-4'>
                <div className='flex w-full gap-4 justify-center'>
                    <div className='w-1/4 flex flex-col gap-4'>
                        <div className='bg-white border border-black border-1 rounded-[2.5rem] p-4 flex flex-col gap-2'>
                            <div className='text-xl  font-semibold text-gray-800 text-center'>Personal Information</div>
                            <input placeholder='Name' className='outline-none focus:ring-2 focus:ring-yellow-400 border border-black border-1 rounded-3xl py-2 text-center'/>
                            <input placeholder='Age' className='outline-none focus:ring-2 focus:ring-yellow-400 border border-black border-1 rounded-3xl py-2 text-center'/>
                            <input placeholder='Email' className='outline-none focus:ring-2 focus:ring-yellow-400 border border-black border-1 rounded-3xl py-2 text-center'/>
                            <input placeholder='Location' className='outline-none focus:ring-2 focus:ring-yellow-400 border border-black border-1 rounded-3xl py-2 text-center'/>
                        </div>
                        <div className='bg-white border border-black border-1 rounded-[2.5rem] p-4 flex flex-col gap-2'>
                            <div className='text-xl  font-semibold text-gray-800 text-center'>Experience with pets</div>
                            
                        </div>
                    </div>
                    <div className='w-2/3 flex flex-col gap-4'>
                        <div className='bg-white border border-black border-1 rounded-[2.5rem] p-4 flex flex-col gap-2'>
                            <div className='text-xl  font-semibold text-gray-800 text-center'>Lifestyle Details</div>
                            <div className='flex justify-between'>
                                <input placeholder='Free Time' className='w-[32%] outline-none focus:ring-2 focus:ring-yellow-400 border border-black border-1 rounded-3xl py-2 text-center'/>
                                <input placeholder='Living Environment' className='w-[32%] outline-none focus:ring-2 focus:ring-yellow-400 border border-black border-1 rounded-3xl py-2 text-center'/>
                                <input placeholder='Activity Level' className='w-[32%] outline-none focus:ring-2 focus:ring-yellow-400 border border-black border-1 rounded-3xl py-2 text-center'/>
                            </div>
                        </div>
                        <div className='bg-white border border-black border-1 rounded-[2.5rem] p-4'>
                          <div className='text-xl  font-semibold text-gray-800 text-center'>Family Details</div>
                          <input placeholder='Number of People is your household' className='outline-none focus:ring-2 focus:ring-yellow-400 border border-black border-1 rounded-3xl py-2 text-center'/>
                        </div>
                    </div>
                </div>
            
                <button className='hover:bg-[#a2d11f] bg-[#CCFF41] transition-all duration-300 flex items-center justify-between border border-b-4 border-black rounded-2xl p-3 px-6'>Reveal My Pet
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7733 7.31888C18.9043 7.69607 19.4431 9.40963 18.9667 11.1621C18.4947 12.9056 17.2052 14.0263 16.0698 13.6581C14.9433 13.2943 14.3956 11.5762 14.8631 9.81933C15.3261 8.07135 16.6334 6.95956 17.7733 7.31888ZM24.1641 10.5251C25.1426 11.2286 25.024 12.9368 23.9174 14.3619C22.7796 15.7825 21.0839 16.375 20.1099 15.685C19.1269 14.9904 19.2545 13.2867 20.3789 11.8706C21.4989 10.441 23.1946 9.84852 24.1641 10.5251ZM10.9286 9.03137C12.1673 9.1046 13.1536 10.5952 13.1826 12.3438C13.1534 14.0968 12.1766 15.464 10.9468 15.3952C9.71709 15.3265 8.73523 13.8494 8.73314 12.0918C8.73105 10.3343 9.73019 8.96713 10.9286 9.03137ZM27.0174 17.103C27.7854 18.0253 27.2868 19.6436 25.8766 20.6926C24.4665 21.7417 22.6954 21.8376 21.9051 20.893C21.1148 19.9483 21.6268 18.3479 23.0146 17.2765C24.4336 16.2543 26.2182 16.1539 27.0174 17.103ZM20.6907 25.9895C20.3049 26.8477 19.195 27.4544 18.2514 27.4173C16.2838 27.3476 15.1512 24.8774 13.3725 23.985C11.5938 23.0927 8.88732 23.7151 7.71329 22.1304C7.0392 21.244 7.00542 19.7726 7.60592 18.8656C8.43496 17.6145 10.3936 17.7021 11.8299 17.2032C13.7224 16.5752 15.8046 14.655 17.6012 15.5563C19.3888 16.4532 19.1659 19.2614 19.7223 21.1628C20.1674 22.751 21.359 24.5012 20.6907 25.9895Z" fill="black"/>
</svg>
            </button>
            </form>
        </div>
        <Image src={formImage} alt="formImage" className="w-full" />
      </div>
    </div>
  );
}
