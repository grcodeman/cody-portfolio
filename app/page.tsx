"use client"

import { motion } from 'framer-motion';
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">

        {/* Header Section */}
        <motion.div
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y:0}}
          transition={{duration: 0.8}}
        >
          <Header />
        </motion.div>

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
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">Experienced developer with a multitude of software projects and IT experience. My skillsets range from coding languages like <span className="text-black dark:text-white">Python, Bash, Typescript, Dart</span> to managing systems such as <span className="text-black dark:text-white">Active Directory, Linux Servers and Oracle EBS</span>.</p>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">Beyond software development and IT work, I love building side projects and am passionate in learning more about the business side of technology.</p>
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
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Aug 2025 - Present</p>
                  <p className="font-medium">IT Graduate Manager</p>
                  <p className="text-blue-600 dark:text-blue-400">WMU CAE Center</p>
                </div>
              </div>
                <ul className="text-gray-600 dark:text-gray-400 text-sm list-disc list-inside marker:text-indigo-600 space-y-1">
                  <li>Working under the IT Director to <strong>manage a team of 12+ students</strong> in facilitating IT operations and internal software development, overseeing the College of Engineering and Applied Sciences.</li>
                  <li>Managing workflows for <strong>Image Deployment, Support Ticketing, Server Room Administration, and Software Development</strong>.</li>
                  <li>Assisting in leading a campus wide <strong>rollout of Active Directory and Group Policies across 300+ endpoints</strong>.</li>
                  <li>Handling timesheets and payroll coordination, overseeing student employment and scheduling, and hiring/training new staff.</li>
                </ul>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">May 2023 - Aug 2025</p>
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
                  <p className="text-blue-600 dark:text-blue-400">Western Michigan University</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Aug 2022 - Apr 2025</p>
                  <p className="Font Medium">B.S. Computer Science</p>
                  <p className="text-blue-600 dark:text-blue-400">Western Michigan University</p>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects
                .filter((p) => p.featured)
                .map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
            </div>

            <div className="text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-500 hover:text-indigo-400 transition-colors"
              >
                View All Projects
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

          </motion.section>

          {/* Footer Section */}
          <Footer />

        </main>

      </div>
    </div>
  );
}
