"use client"

import Image from "next/image";
import pfp from "../public/pfp.png";
import atom from "../public/atom.png";
import ogiek from "../public/ogiek.png";
import darts from "../public/darts.png";
import dsc from "../public/dsc.png";
import ThemeToggle from "../components/ui/theme-toggle";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube, FaBars } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">

        {/* Header Section */}
        <motion.header 
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y:0}}
        transition={{duration: 0.8}}
        
        className="flex items-center justify-between mb-12">

          {/* PFP */}
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image src={pfp} alt="profile picture" className="cursor-pointer transition-all duration-300 hover:scale-110"></Image>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-zinc-800 hover:scale-105">
              Home
            </Link>
            <Link href="/" className="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-zinc-800 hover:scale-105">
              Blog
            </Link>
            <Link href="/" className="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-zinc-800 hover:scale-105">
              Contact
            </Link>
          </nav>

          {/* Mobile Nav */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <FaBars className="w-6 h-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={4} className="md:hidden">
              <DropdownMenuItem asChild>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Button */}
          <ThemeToggle />

        </motion.header>

        <main className="space-y-10">

          <section className="space-y-10">
          {/* Name and Information */}
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

          {/* Title and Description */}
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

          {/* Resume and Socials */}
          <motion.div
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x:0}}
          transition={{duration: 0.8}}

          className="flex items-center gap-3"
          >
           {/*} <Button className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105">Resume</Button> */}

            <Link href="https://github.com/grcodeman" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaGithub className="w-6 h-6"></FaGithub>
            </Link>

            <Link href="https://www.linkedin.com/in/codythornell/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaLinkedin className="w-6 h-6"></FaLinkedin>
            </Link>

            <Link href="https://x.com/codythornell" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaTwitter className="w-6 h-6"></FaTwitter>
            </Link>

            <Link href="https://www.youtube.com/@codewcody" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaYoutube className="w-6 h-6"></FaYoutube>
            </Link>
          </motion.div>
          </section>

          {/* Experience Section */}
          <motion.section
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y:0}}
          transition={{duration: 0.8}}
          
          className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Experience</h2>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">May 2023 - Present</p>
                  <p className="font-medium">IT System Administrator</p>
                  <p className="text-blue-600 dark:text-blue-400">WMU CAE Center</p>
                </div>
              </div>
                <ul className="text-gray-600 dark:text-gray-400 text-sm list-disc list-inside marker:text-indigo-600 space-y-1">
                  <li>Provided comprehensive IT support, troubleshooting and resolving issues related to computers, printers, projectors, and other tech equipment.</li>
                  <li>Assisted in <strong>managing licensing servers</strong> and worked with computer imaging to ensure streamlined installations and software configurations.</li>
                  <li>Utilized a <strong>ticket-based system</strong> for efficient task management, addressing both team and individual IT requirements.</li>
                  <li>Developed basic scripts for <strong>system checks</strong> and actively contributed to the documentation of best practices on the company&apos;s internal wiki.</li>
                </ul>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Oct 2024 - Jul 2025</p>
                  <p className="font-medium">Undergraduate Research Assistant</p>
                  <p className="text-blue-600 dark:text-blue-400">Western Michigan University</p>
                </div>
              </div>
              <ul className="text-gray-600 dark:text-gray-400 text-sm list-disc list-inside marker:text-indigo-600 space-y-1">
                <li>Contributed to multiple research projects on emerging technologies in collaboration with WMED School and partner institutions.</li>
                <li><strong>AR/MR Research:</strong> Developed a heart-anatomy lab prototype using augmented/mixed reality alongside WMED students and faculty.</li>
                <li><strong>AI/LLM Research:</strong> Built an SMS system via Africa&apos;s Talking to give the Ogiek community resource access, featuring preset menus and an LLM-powered RAG engine for custom queries.</li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">May 2024 - Feb 2025</p>
                  <p className="font-medium">IT Systems Engineering Intern/Co-op</p>
                  <p className="text-blue-600 dark:text-blue-400">Gentex Corporation</p>
                </div>
              </div>
                <ul className="text-gray-600 dark:text-gray-400 text-sm list-disc list-inside marker:text-indigo-600 space-y-1">
                  <li><strong>Developed scripts</strong> and <strong>Power BI reports</strong> for multiple IT teams, enhancing operational efficiency and data analysis.</li>
                  <li>Trained with the Oracle DBA team, performing DBA tasks on <strong>Oracle EBS</strong> systems via <strong>Linux</strong> and web interfaces, as well as assisting with database patching and cloning.</li>
                  <li>Engineered scripts and queries using <strong>Bash, SQL, PL/SQL, and Python</strong> for Linux maintenance and IT reporting needs.</li>
                  <li>Collaborated with cross-functional teams and responded to system requests, gaining expertise in Oracle EBS systems and improving communication skills.</li>
                </ul>
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y:0}}
          transition={{duration: 0.8}}
          
          className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Education</h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sep 2025 - Exp May 2027</p>
                  <p className="Font Medium">MBA Admitted</p>
                  <p className="text-blue-600 dark:text-blue-400">Western Michigan Univeristy</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Aug 2022 - Apr 2025</p>
                  <p className="Font Medium">B.S. Computer Science</p>
                  <p className="text-blue-600 dark:text-blue-400">Western Michigan Univeristy</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sep 2020 - May 2023</p>
                  <p className="Font Medium">A.S. Computer Science</p>
                  <p className="text-blue-600 dark:text-blue-400">Grand Rapids Community College</p>
                </div>
              </div>
            </div>

            

          </motion.section>

          {/* Projects Section */}
          <motion.section
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y:0}}
          transition={{duration: 0.8}}
          
          className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Link href="https://github.com/grcodeman/sautiyaogiek" target="_blank" className="block">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={ogiek} alt="Image of medical software for AR, Mobile and Desktop devices." className="rounded-lg mb-4"/>

                    <div>
                      <h3 className="font-medium">Ogiek Messenger</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Python, Ollama, Langchain</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://github.com/grcodeman/sprintdev-partygames" target="_blank" className="block">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={darts} alt="Image of minecraft mod for darts and badges for 1st Place Hackathon win." className="rounded-lg mb-4"/>

                    <div>
                      <h3 className="font-medium">Minecraft Darts</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Hackathon, Java, Minecraft</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://drive.google.com/file/d/1XQR8a8fOhKnBW354L3MIUmQ4YsgYtl55/view" target="_blank" className="block">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={atom} alt="Image of medical software for AR, Mobile and Desktop devices." className="rounded-lg mb-4"/>

                    <div>
                      <h3 className="font-medium">ATOM Medic</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Unity, Flutter, Firebase, Hololens</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="https://github.com/grcodeman/dsc-website-fork" target="_blank" className="block">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={dsc} alt="Image of Data Science Club Website landing page." className="rounded-lg mb-4"/>

                    <div>
                      <h3 className="font-medium">DSC Website</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js, TypeScript, Tailwind CSS</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

            </div>

            <p className="text-gray-500">© 2025 Cody Thornell</p>

          </motion.section>

        </main>

      </div>
    </div>
  );
}
