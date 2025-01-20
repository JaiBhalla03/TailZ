'use client';

import React from 'react'
import { motion } from "framer-motion";
import Paw from './util_components/Paw'

export default function Contact() {
    const pawVariants = {
        hidden: { opacity: 0}, // Initial state (hidden)
        visible: (index: number) => ({
          opacity: 1,
          transition: {
            delay: index * 0.8, // Stagger appearance
            duration: 2.4,
            repeat: Infinity, // Infinite loop
            repeatType: "reverse", // Alternate forward and backward motion
            ease: "easeInOut",
          },
        }),
      };
    
      const pawData = [
        { size: 30, color: "#999999", styles: "right-[1.5rem] bottom-[1rem]", rotate: 20 },
        { size: 30, color: "#999999", styles: "right-[3.5rem] bottom-[1rem]", rotate: 20 },
        { size: 40, color: "#777777", styles: "right-[3.5rem] bottom-[5rem]", rotate: 0 },
        { size: 40, color: "#777777", styles: "right-[6.5rem] bottom-[5rem]", rotate: 0 },
        { size: 40, color: "#444444", styles: "right-[6.5rem] bottom-[9rem]", rotate: -20 },
        { size: 40, color: "#444444", styles: "right-[9.5rem] bottom-[9rem]", rotate: -20 },
        { size: 50, color: "#222222", styles: "right-[9.5rem] bottom-[12rem]", rotate: -40 },
        { size: 50, color: "#222222", styles: "right-[12.5rem] bottom-[12rem]", rotate: -40 },
        { size: 50, color: "#000000", styles: "right-[18.5rem] bottom-[12rem]", rotate: -120 },
        { size: 50, color: "#000000", styles: "right-[21.5rem] bottom-[12rem]", rotate: -120 },
        { size: 60, color: "#444444", styles: "right-[21.5rem] bottom-[7rem]", rotate: -150 },
        { size: 60, color: "#444444", styles: "right-[24.5rem] bottom-[7rem]", rotate: -150 },
        { size: 70, color: "#888888", styles: "right-[22.5rem] bottom-[2rem]", rotate: -140 },
        { size: 70, color: "#888888", styles: "right-[25.5rem] bottom-[2rem]", rotate: -140 },
      ];
  return (
    <div>
        <div className='relative bg-[#CCFF41] px-20 w-full py-4 rounded-2xl'>
            <h1 className='text-[3rem] font-[500]'>Contact Us</h1>
            <form className='relative bg-white w-[60%] h-36 rounded-2xl border-1 border-b-4 border-r-4 border-black'>
                <textarea placeholder='Enter your query....' className='outline-none resize-none w-full h-full rounded-2xl p-2'/>
                <button className='flex items-center absolute bottom-0 right-0 p-2 font-semibold text-xl text-[#444444] hover:bg-gray-300 rounded-2xl transition-all duration-500'>
                    SHOOT
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.25 5.83325C23.7563 5.83325 22.2396 6.3145 21.3646 6.72284C20.2417 6.16867 18.9584 5.83325 17.5 5.83325C16.0417 5.83325 14.7584 6.16867 13.6355 6.72284C12.7605 6.3145 11.2438 5.83325 8.75004 5.83325C4.37504 5.83325 1.45837 17.4999 1.45837 20.4166C1.45837 21.627 3.38337 22.7353 6.03754 23.1874C6.97087 26.4541 11.375 28.9478 16.7709 29.1666V22.9249C15.9105 22.3853 14.5834 21.4083 14.5834 20.4166C14.5834 18.9583 17.5 18.9583 17.5 18.9583C17.5 18.9583 20.4167 18.9583 20.4167 20.4166C20.4167 21.4083 19.0896 22.3853 18.2292 22.9249V29.1666C23.625 28.9478 28.0292 26.4541 28.9625 23.1874C31.6167 22.7353 33.5417 21.627 33.5417 20.4166C33.5417 17.4999 30.625 5.83325 26.25 5.83325ZM6.05212 20.227C5.32296 20.052 4.75421 19.8478 4.37504 19.6874C4.73962 15.6478 7.58337 9.33325 8.82296 8.74992C9.61046 8.74992 10.2084 8.83742 10.748 8.91034C7.68546 12.2791 6.47504 17.5583 6.05212 20.227ZM13.125 17.4999C12.7383 17.4999 12.3673 17.3463 12.0938 17.0728C11.8204 16.7993 11.6667 16.4284 11.6667 16.0416C11.6667 15.2541 12.323 14.5833 13.125 14.5833C13.5118 14.5833 13.8827 14.7369 14.1562 15.0104C14.4297 15.2839 14.5834 15.6548 14.5834 16.0416C14.5834 16.8583 13.9271 17.4999 13.125 17.4999ZM21.875 17.4999C21.4883 17.4999 21.1173 17.3463 20.8438 17.0728C20.5704 16.7993 20.4167 16.4284 20.4167 16.0416C20.4167 15.2541 21.073 14.5833 21.875 14.5833C22.2618 14.5833 22.6327 14.7369 22.9062 15.0104C23.1797 15.2839 23.3334 15.6548 23.3334 16.0416C23.3334 16.8583 22.6771 17.4999 21.875 17.4999ZM28.948 20.227C28.525 17.5583 27.3146 12.2791 24.2521 8.91034C24.7917 8.83742 25.3896 8.74992 26.1771 8.74992C27.4167 9.33325 30.2605 15.6478 30.625 19.6874C30.2605 19.8478 29.6917 20.052 28.948 20.227Z" fill="#444444"/>
    </svg>
                </button>
            </form>
            {pawData.map((paw, index) => (
          <motion.div
            key={index}
            className={`absolute ${paw.styles}`}
            custom={index} // Pass index directly for staggered delay
            initial="hidden"
            animate="visible"
            variants={pawVariants}
          >
            <Paw size={paw.size} color={paw.color} rotation={paw.rotate} />
          </motion.div>
        ))}

        </div>
        <div className='py-2 text-gray-500 text-xl text-center'>
            STAR THIS PROJECT
        </div>
    </div>
    
  )
}
