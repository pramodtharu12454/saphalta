"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white/70 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Saphalta<span className="text-blue-600">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Hire Me Button */}
        <Button className="hidden md:inline-flex px-6">Hire Me</Button>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="w-7 h-7 text-gray-700" />
          </SheetTrigger>

          <SheetContent side="left" className="w-64 p-6">
            <SheetHeader>
              <SheetTitle className="text-xl">Menu</SheetTitle>
            </SheetHeader>

            <ul className="flex flex-col gap-6 mt-8 text-lg font-medium">
              <li>
                <a href="#home" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-600">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>

            <Button className="mt-10 w-full">Hire Me</Button>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
