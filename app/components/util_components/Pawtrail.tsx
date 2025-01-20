'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Paw from './Paw';

export default function Pawtrail() {
  const pawVariants = {
    hidden: { opacity: 0 }, // Initial state (hidden)
    visible: (index: number) => ({
      opacity: [0, 1], // Immediate toggle
      transition: {
        delay: index * 0.4, // Staggered delay
        duration: 9.6, // Total duration for one cycle
        repeat: Infinity, // Infinite loop
        repeatType: 'loop', // Restart from the beginning
        times: [0, 0.5, 1], // Immediate appearance and disappearance
        ease: 'steps(2)', // Create a "step" effect for immediate toggle
      },
    }),
  };

  const pawData = [
    { size: 30, color: '#aaaaaa', styles: '-top-[1.5rem]', rotate: 60 },
    { size: 30, color: '#aaaaaa', styles: 'left-[2rem]', rotate: 60 },
    { size: 40, color: '#bbbbbb', styles: '-top-[6rem] left-[2.5rem]', rotate: 60 },
    { size: 40, color: '#bbbbbb', styles: '-top-[4rem] left-[4.5rem]', rotate: 60 },
    { size: 50, color: '#cccccc', styles: '-top-[12rem] left-[6.5rem]', rotate: 80 },
    { size: 50, color: '#cccccc', styles: '-top-[9rem] left-[8rem]', rotate: 80 },
    { size: 40, color: '#dddddd', styles: '-top-[14.5rem] left-[13rem]', rotate: 100 },
    { size: 40, color: '#dddddd', styles: '-top-[12rem] left-[13rem]', rotate: 100 },
    { size: 40, color: '#eeeeee', styles: '-top-[15.5rem] left-[20rem]', rotate: 120 },
    { size: 40, color: '#eeeeee', styles: '-top-[13rem] left-[19rem]', rotate: 120 },
    { size: 30, color: '#ffffff', styles: '-top-[13.5rem] left-[25rem]', rotate: 140 },
    { size: 30, color: '#ffffff', styles: '-top-[11rem] left-[23rem]', rotate: 140 },
  ];

  return (
    <div>
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
  );
}
