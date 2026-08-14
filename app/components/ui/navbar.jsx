"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { motion } from "motion/react";
import {
  Sheet,
  SheetContent,

  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet";
import Button from "@/app/components/ui/button";

const navLinks = [
  { href: "/", label: "Home", key: "home" },
  { href: "#About", label: "About", key: "about" },
  { href: "#Experience", label: "Experience", key: "experience" },
  { href: "#Projects", label: "Projects", key: "projects" },
];

function NavBar() {
  const pathname = usePathname();
  const [activeKey, setActiveKey] = useState("home");

  useEffect(() => {
    const resolveFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) {
        setActiveKey("home");
        return;
      }
      const match = navLinks.find(
        (link) => link.href.replace("#", "") === hash,
      );
      if (match) setActiveKey(match.key);
    };

    resolveFromHash();
    window.addEventListener("hashchange", resolveFromHash);
    return () => window.removeEventListener("hashchange", resolveFromHash);
  }, [pathname]);

  return (
    <div className="flex justify-between items-center p-1 border-b-2 border-secondary/10 bg-background z-50">
      <div className="title h-full p-2 px-3 bg-secondary-foreground">
        <h1 className="text-4xl font-bold font-bokor">
          A<span className="text-primary">C</span>
        </h1>
      </div>

      <ul className="gap-6 hidden md:flex">
        {navLinks.map((link) => {
          const isActive = activeKey === link.key;
          return (
            <li key={link.key} className="relative">
              <Link
                href={link.href}
                onClick={() => setActiveKey(link.key)}
                className="relative inline-block"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`inline-block font-semibold text-base font-roboto transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-secondary hover:text-muted"
                  }`}
                >
                  {link.label}
                </motion.span>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link href="#Contact" className="hidden md:block pr-4">
        <Button
          variant="outline"
          size="medium"
          className="rounded-md font-roboto font-semibold text-base"
        >
          Contact Me
        </Button>
      </Link>

      <Sheet className="md:hidden">
        <SheetTrigger className="md:hidden pr-4">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{ }</SheetTitle>
            <SheetDescription className="mt-10">
              <div className="flex flex-col gap-0">
                {[...navLinks, { href: "#Contact", label: "Contact", key: "contact" }].map(
                  (link) => {
                    const isActive = activeKey === link.key;
                    return (
                      <Link
                        key={link.key}
                        href={link.href}
                        onClick={() => setActiveKey(link.key)}
                        className={`text-center p-2 border-b-2 border-secondary/20  transition-colors ${
                          isActive
                            ? "text-background bg-secondary"
                            : "text-secondary hover:bg-secondary hover:text-background"
                        }`}
                      >
                        <p className="font-semibold text-base font-roboto">
                          {link.label}
                        </p>
                      </Link>
                    );
                  },
                )}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default NavBar;