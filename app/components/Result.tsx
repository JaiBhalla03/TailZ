'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Pawtrail from './util_components/Pawtrail';
import RevealCard from './util_components/RevealCard';

export default function Result() {
  const wiggleAnimation = {
    animate: {
      x: [0, -10, 10, -10, 10, 0], // Wiggling effect along the x-axis
      rotate: [0, -10, 10, -10, 10, 0], // Slight rotation for emphasis
      transition: {
        duration: 0.6, // Duration of one wiggle cycle
        repeat: Infinity, // Repeat infinitely
        repeatDelay: 1, // Wait 3.4 seconds between wiggle cycles
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="text-white relative">
      <div className="text-[4rem] px-10 flex items-center">
        <div>YOUR FUTURE BUDDY</div>
        <div className="w-48 h-1 bg-white"></div>
      </div>
      <div className="text-[4rem] px-10 flex justify-end">
        <motion.div
          className="bg-[#111111] p-4 rounded-2xl"
          {...wiggleAnimation} // Apply the wiggle animation
        >
          IT IS A DOG
        </motion.div>
      </div>
      <div className="absolute top-[20rem]">
        <Pawtrail />
      </div>
      <div className="pt-48 pb-4">
        <RevealCard />
      </div>
    </div>
  );
}
