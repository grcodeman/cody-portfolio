"use client"

import Image from "next/image";
import pfp from "../public/pfp.png";
import ThemeToggle from "./ui/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-12">
      {/* PFP */}
      <div className="w-20 h-20 rounded-full overflow-hidden">
        <Image src={pfp} alt="profile picture" className="cursor-pointer transition-all duration-300 hover:scale-110"></Image>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-4">
        <Link href="/" className="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-zinc-800 hover:scale-105">
          Home
        </Link>
        <Link href="/blog" className="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-zinc-800 hover:scale-105">
          Blog
        </Link>
        <Link href="/contact" className="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-zinc-800 hover:scale-105">
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
            <Link href="/blog">Blog</Link>
          </DropdownMenuItem>
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
