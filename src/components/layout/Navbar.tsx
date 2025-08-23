"use client";

import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const BRAND_NAME = "Abhijit Paul";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { setTheme } = useTheme();

  return (
    <div className="fixed top-0 w-full z-10 my-0 md:my-5">
      <div className="mx-auto max-w-4xl rounded-none md:rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-10">
        <div className="flex h-14 items-center justify-between">
          {/* Mobile menu button */}
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Brand + Nav */}
          <div className="flex items-center gap-8">
            <h1 className="text-lg font-bold uppercase">{BRAND_NAME}</h1>
            {/* <div className="hidden md:flex gap-4">
              {NavLinks.map((link) => (
                <NavLink key={link} label={link} />
              ))}
            </div> */}
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-3xl">
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Nav */}
        {/* {isOpen && (
          <div className="pb-4 md:hidden">
            <div className="flex flex-col gap-4">
              {NavLinks.map((link) => (
                <NavLink key={link} label={link} />
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
