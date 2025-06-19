"use client"

import Image from "next/image";
import pfp from "../public/pfp.png";
import ThemeToggle from "../components/ui/theme-toggle";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

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

        <main className="space-y-10">

          <section className="space-y-10">
          <motion.div
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x:0}}
          transition={{duration: 0.8}}

          className="space-y-1"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Cody Thornell</h1>
            <p className="text-gray-600 dark:text-gray-400">MBA/CS Student</p>
            <p className="text-gray-600 dark:text-gray-400">Kalamazoo, MI</p>
          </motion.div>

          <motion.div
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x:0}}
          transition={{duration: 0.8}}

          className="space-y-3"
          >
            <h2 className="text-lg font-semibold">IT and Software Developer</h2>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">Experienced developer with a multitude of software projects and IT experience. My skillsets range from coding languages like <span className="text-black dark:text-white">Python, Typescript, Dart</span> to managing systems such as <span className="text-black dark:text-white">Linux Servers and Oracle EBS</span>.</p>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">Beyond software development and IT work, I love building side projects and am passionate for learning more about startups.</p>
          </motion.div>

          <motion.div
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x:0}}
          transition={{duration: 0.8}}

          className="flex items-center gap-3"
          >
            <Button className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105">Resume</Button>

            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaGithub className="w-6 h-6"></FaGithub>
            </Link>

            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaLinkedin className="w-6 h-6"></FaLinkedin>
            </Link>

            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaTwitter className="w-6 h-6"></FaTwitter>
            </Link>

            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaYoutube className="w-6 h-6"></FaYoutube>
            </Link>
          </motion.div>
          </section>


          <motion.section
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y:0}}
          transition={{duration: 0.8}}
          
          className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Experience</h2>
          </motion.section>

        </main>

      </div>
    </div>
  );
}
