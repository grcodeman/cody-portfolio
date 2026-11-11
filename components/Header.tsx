"use client"

import Image from "next/image";
import pfp from "../public/pfp.png";
import ThemeToggle from "./ui/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const NAV_LINK = "px-3 py-1 rounded transition-colors hover:bg-gray-100 dark:hover:bg-zinc-800 aria-[current=page]:bg-gray-100 dark:aria-[current=page]:bg-zinc-800";

export default function Header() {
  const pathname = usePathname();
  const current = (href: string) =>
    (href === "/" ? pathname === "/" : pathname.startsWith(href)) ? "page" : undefined;

  return (
    <header className="flex items-center justify-between mb-12">
      {/* PFP */}
      <Link
        href="/"
        aria-label="Cody Thornell - home"
        className="block w-20 h-20 rounded-full overflow-hidden"
      >
        <Image src={pfp} alt="" aria-hidden="true" width={80} height={80} priority className="transition-transform duration-300 hover:scale-110" />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-4">
        <Link href="/" aria-current={current("/")} className={NAV_LINK}>
          Home
        </Link>
        <Link href="/projects" aria-current={current("/projects")} className={NAV_LINK}>
          Projects
        </Link>
        {/* Blog hidden until there are posts (route parked at app/_blog)
        <Link href="/blog" aria-current={current("/blog")} className={NAV_LINK}>
          Blog
        </Link>
        */}
        <Link href="/contact" aria-current={current("/contact")} className={NAV_LINK}>
          Contact
        </Link>
      </nav>

      {/* Mobile Nav */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="md:hidden" aria-label="Open navigation menu">
            <FaBars className="w-6 h-6" aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={4} className="md:hidden">
          <DropdownMenuItem asChild>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/projects">Projects</Link>
          </DropdownMenuItem>
          {/* Blog hidden until there are posts
          <DropdownMenuItem asChild>
            <Link href="/blog">Blog</Link>
          </DropdownMenuItem>
          */}
          <DropdownMenuItem asChild>
            <Link href="/contact">Contact</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Theme Button */}
      <ThemeToggle />
    </header>
  );
}
