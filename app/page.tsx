"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin /*, FaTwitter, FaYoutube */ } from "react-icons/fa";
import Header from "../components/Header";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ProjectsJsonLd from "@/components/ProjectsJsonLd";
import { projects, Project } from "@/lib/projects";

const LANDING_PROJECTS = projects.slice(0, 6);

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <div className="text-black dark:text-white transition-colors duration-300">
      <ProjectsJsonLd projects={LANDING_PROJECTS} />
      <div className="mx-auto max-w-xl px-4 py-20">

        <Header />

        <main className="space-y-10">

          <section className="space-y-10">
          {/* Name and Information */}
          <div className="space-y-1">
            <h1 className="text-4xl font-bold">Cody Thornell</h1>
            <p className="text-gray-600 dark:text-gray-400">MBA/CS Student</p>
            <p className="text-gray-600 dark:text-gray-400">Kalamazoo, MI</p>
          </div>

          {/* Title and Description */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">IT and Software Developer</h2>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">Developer with a background in IT and a pile of side projects. My skillsets range from coding languages like <span className="text-black dark:text-white">Python, Bash, Typescript, Dart</span> to managing systems such as <span className="text-black dark:text-white">Active Directory, Linux Servers and Oracle EBS</span>.</p>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">Beyond software development and IT work, I love building side projects and am passionate in learning more about the business side of technology.</p>
          </div>

          {/* Resume and Socials */}
          <div className="flex items-center gap-3">
           {/*} <Button className="rounded-full bg-gradient-to-r from-rose-600 to-blue-700 text-white transition-transform hover:scale-105">Resume</Button> */}

            <Link href="https://github.com/grcodeman" target="_blank" aria-label="Cody Thornell on GitHub" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaGithub className="w-6 h-6" aria-hidden="true"></FaGithub>
            </Link>

            <Link href="https://www.linkedin.com/in/codythornell/" target="_blank" aria-label="Cody Thornell on LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaLinkedin className="w-6 h-6" aria-hidden="true"></FaLinkedin>
            </Link>

            {/* X and YouTube hidden for now
            <Link href="https://x.com/codythornell" target="_blank" aria-label="Cody Thornell on X" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaTwitter className="w-6 h-6" aria-hidden="true"></FaTwitter>
            </Link>

            <Link href="https://www.youtube.com/@codewcody" target="_blank" aria-label="Cody Thornell on YouTube" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaYoutube className="w-6 h-6" aria-hidden="true"></FaYoutube>
            </Link>

            */}
          </div>
          </section>

          {/* Electric Trident — Experience-row anatomy in the project-card shell; name link stretches over the card, email sits above it */}
          <div className="group relative rounded-xl border border-gray-200 bg-gray-50 p-5 transition-colors duration-300 hover:border-blue-600/60 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-400/60">
            <div className="flex items-center gap-4">
              <Image src="/companies/electric-trident.png" alt="" aria-hidden="true" width={48} height={48} className="h-12 w-12 shrink-0 rounded-full" />
              <div className="space-y-1">
                <p className="font-medium">Freelance Software Engineer</p>
                <a
                  href="https://electrictrident.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-700 decoration-blue-700/40 underline-offset-4 outline-none! group-hover:underline dark:decoration-blue-400/40 after:absolute after:inset-0 after:rounded-xl focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-blue-600 dark:text-blue-400">
                  Electric Trident
                </a>
              </div>
            </div>
            <p className="mt-4 text-sm text-pretty text-gray-600 sm:pl-16 dark:text-gray-400">
              Software consultancy I co-founded. We build custom web apps &amp; AI platforms for clients, and have 5 satisfied
              companies/<wbr />organizations in our portfolio. Reach out to{" "}
              <a
                href="mailto:cody@electrictrident.com"
                className="relative z-10 rounded-sm text-blue-700 underline decoration-blue-700/30 underline-offset-4 transition-colors hover:decoration-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400">
                cody@electrictrident.com
              </a>{" "}
              for more information.
            </p>
          </div>

          {/* Experience Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-semibold">Experience</h2>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <Link href="https://wmich.edu/" target="_blank" aria-label="Western Michigan University" className="grid h-12 w-12 shrink-0 place-items-center transition-opacity hover:opacity-70">
                  <Image src="/companies/wmu.svg" alt="" aria-hidden="true" width={40} height={40} className="h-full w-full object-contain" />
                </Link>
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Aug 2025 - Present</p>
                  <p className="font-medium">IT Graduate Manager</p>
                  <p className="text-blue-700 dark:text-blue-400">WMU CAE Center</p>
                </div>
              </div>
                <ul className="text-gray-600 dark:text-gray-400 text-sm list-disc list-outside pl-4 marker:text-blue-700 dark:marker:text-blue-400 space-y-1 sm:pl-16">
                  <li>Working under the IT Director to <strong>manage a team of 12+ students</strong> in facilitating IT operations and internal software development, overseeing the College of Engineering and Applied Sciences.</li>
                  <li>Managing workflows for <strong>Image Deployment, Support Ticketing, Server Room Administration, and Software Development</strong>.</li>
                  <li>Assisting in leading a campus wide <strong>rollout of Active Directory and Group Policies across 300+ endpoints</strong>.</li>
                  <li>Handling timesheets and payroll coordination, overseeing student employment and scheduling, and hiring/training new staff.</li>
                </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <Link href="https://wmich.edu/" target="_blank" aria-label="Western Michigan University" className="grid h-12 w-12 shrink-0 place-items-center transition-opacity hover:opacity-70">
                  <Image src="/companies/wmu.svg" alt="" aria-hidden="true" width={40} height={40} className="h-full w-full object-contain" />
                </Link>
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">May 2023 - Aug 2025</p>
                  <p className="font-medium">IT System Administrator</p>
                  <p className="text-blue-700 dark:text-blue-400">WMU CAE Center</p>
                </div>
              </div>
                <ul className="text-gray-600 dark:text-gray-400 text-sm list-disc list-outside pl-4 marker:text-blue-700 dark:marker:text-blue-400 space-y-1 sm:pl-16">
                  <li>Provided comprehensive IT support, troubleshooting and resolving issues related to computers, printers, projectors, and other tech equipment.</li>
                  <li>Assisted in <strong>managing licensing servers</strong> and worked with computer imaging to ensure streamlined installations and software configurations.</li>
                  <li>Utilized a <strong>ticket-based system</strong> for efficient task management, addressing both team and individual IT requirements.</li>
                  <li>Developed basic scripts for <strong>system checks</strong> and actively contributed to the documentation of best practices on the company&apos;s internal wiki.</li>
                </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <Link href="https://wmich.edu/" target="_blank" aria-label="Western Michigan University" className="grid h-12 w-12 shrink-0 place-items-center transition-opacity hover:opacity-70">
                  <Image src="/companies/wmu.svg" alt="" aria-hidden="true" width={40} height={40} className="h-full w-full object-contain" />
                </Link>
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Oct 2024 - Jul 2025</p>
                  <p className="font-medium">Undergraduate Research Assistant</p>
                  <p className="text-blue-700 dark:text-blue-400">Western Michigan University</p>
                </div>
              </div>
              <ul className="text-gray-600 dark:text-gray-400 text-sm list-disc list-outside pl-4 marker:text-blue-700 dark:marker:text-blue-400 space-y-1 sm:pl-16">
                <li>Contributed to multiple research projects on emerging technologies in collaboration with WMED School and partner institutions.</li>
                <li><strong>AR/MR Research:</strong> Developed a heart-anatomy lab prototype using augmented/mixed reality alongside WMED students and faculty.</li>
                <li><strong>AI/LLM Research:</strong> Built an SMS system via Africa&apos;s Talking to give the Ogiek community resource access, featuring preset menus and an LLM-powered RAG engine for custom queries.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <Link href="https://www.gentex.com/" target="_blank" aria-label="Gentex Corporation" className="grid h-12 w-12 shrink-0 place-items-center transition-opacity hover:opacity-70">
                  <Image src="/companies/gentex-black.png" alt="" aria-hidden="true" width={48} height={10} className="h-full w-full object-contain dark:hidden" />
                  <Image src="/companies/gentex-white.png" alt="" aria-hidden="true" width={48} height={10} className="h-full w-full object-contain hidden dark:block" />
                </Link>
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">May 2024 - Feb 2025</p>
                  <p className="font-medium">IT Systems Engineering Intern/Co-op</p>
                  <p className="text-blue-700 dark:text-blue-400">Gentex Corporation</p>
                </div>
              </div>
                <ul className="text-gray-600 dark:text-gray-400 text-sm list-disc list-outside pl-4 marker:text-blue-700 dark:marker:text-blue-400 space-y-1 sm:pl-16">
                  <li><strong>Developed scripts</strong> and <strong>Power BI reports</strong> for multiple IT teams, enhancing operational efficiency and data analysis.</li>
                  <li>Trained with the Oracle DBA team, performing DBA tasks on <strong>Oracle EBS</strong> systems via <strong>Linux</strong> and web interfaces, as well as assisting with database patching and cloning.</li>
                  <li>Engineered scripts and queries using <strong>Bash, SQL, PL/SQL, and Python</strong> for Linux maintenance and IT reporting needs.</li>
                  <li>Handled system requests from teams across the company, which is how I got comfortable working in Oracle EBS.</li>
                </ul>
            </div>
          </section>

          {/* Education Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-semibold">Education</h2>

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <Link href="https://wmich.edu/" target="_blank" aria-label="Western Michigan University" className="grid h-12 w-12 shrink-0 place-items-center transition-opacity hover:opacity-70">
                  <Image src="/companies/wmu.svg" alt="" aria-hidden="true" width={40} height={40} className="h-full w-full object-contain" />
                </Link>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sep 2025 - Exp May 2027</p>
                  <p className="font-medium">MBA Admitted</p>
                  <p className="text-blue-700 dark:text-blue-400">Western Michigan University</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <Link href="https://wmich.edu/" target="_blank" aria-label="Western Michigan University" className="grid h-12 w-12 shrink-0 place-items-center transition-opacity hover:opacity-70">
                  <Image src="/companies/wmu.svg" alt="" aria-hidden="true" width={40} height={40} className="h-full w-full object-contain" />
                </Link>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Aug 2022 - Apr 2025</p>
                  <p className="font-medium">B.S. Computer Science</p>
                  <p className="text-blue-700 dark:text-blue-400">Western Michigan University</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <Link href="https://www.grcc.edu/" target="_blank" aria-label="Grand Rapids Community College" className="grid h-12 w-12 shrink-0 place-items-center transition-opacity hover:opacity-70">
                  <Image src="/companies/grcc-navy.png" alt="" aria-hidden="true" width={48} height={17} className="h-full w-full object-contain dark:hidden" />
                  <Image src="/companies/grcc-white.png" alt="" aria-hidden="true" width={48} height={17} className="h-full w-full object-contain hidden dark:block" />
                </Link>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sep 2020 - May 2023</p>
                  <p className="font-medium">A.S. Computer Science</p>
                  <p className="text-blue-700 dark:text-blue-400">Grand Rapids Community College</p>
                </div>
              </div>
            </div>

            

          </section>

          {/* Projects Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-semibold">Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:relative md:left-1/2 md:-translate-x-1/2 md:w-[min(56rem,calc(100vw-3rem))]">
              {LANDING_PROJECTS.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>

            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />

            <div className="text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                View all projects
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

          </section>

        </main>

      </div>
    </div>
  );
}
