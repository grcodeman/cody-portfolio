"use client"

import Image from "next/image";
import pfp from "../public/pfp.png";
import ThemeToggle from "../components/ui/theme-toggle";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">

        <motion.header 
        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x:0}}
        transition={{duration: 0.8}}
        
        className="flex items-center justify-between mb-12">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image src={pfp} alt="profile picture" className="cursor-pointer transition-all duration-300 hover:scale-110"></Image>
          </div>
          <ThemeToggle />
        </motion.header>
      </div>
    </div>
  );
}
