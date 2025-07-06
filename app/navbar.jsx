import React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
function NavBar() {
  return (
    <div className="flex justify-between items-center p-1  border-b-2 border-secondary/10 bg-background z-50">
      <div className="title h-full p-2 pr-6 bg-secondary-foreground">
        <h1 className="text-4xl font-bold font-bokor">
          Port<span className="text-primary">folio</span>
        </h1>
      </div>

      <ul className=" gap-4 hidden md:flex">
        <li>
          <Link
            href="/"
            className="text-secondary hover:text-muted font-semibold text-base font-roboto"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="#About"
            className="text-secondary hover:text-muted font-semibold text-base font-roboto"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            href="#Projects"
            className="text-secondary hover:text-muted font-semibold text-base font-roboto"
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            href="#Contact"
            className="text-secondary hover:text-muted font-semibold text-base font-roboto"
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <Link href="#Contact" className="hidden md:block pr-4">
        <button className=" bg-primary/80 p-2 w-40 rounded-tl-xl rounded-br-xl text-base font-medium font-roboto ">
          Contact Me
        </button>
      </Link>

      <Sheet className="md:hidden">
        <SheetTrigger className="md:hidden pr-4">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription className="mt-10">
              <div className="flex flex-col gap-0">
                <Link
                  href="/"
                  className="text-secondary text-center p-2 border-b-2 border-secondary/20 bg-secondary-foreground hover:bg-secondary hover:text-background"
                >
                  <p className="  font-semibold text-base font-roboto">HOME</p>
                </Link>
                <Link
                  href="#About"
                  className="text-secondary text-center p-2 border-b-2 border-secondary/20 bg-secondary-foreground hover:bg-secondary hover:text-background"
                >
                  <p className="  font-semibold text-base font-roboto">ABOUT</p>
                </Link>
                <Link
                  href="#Projects"
                  className="text-secondary text-center p-2 border-b-2 border-secondary/20 bg-secondary-foreground hover:bg-secondary hover:text-background"
                >
                  <p className="font-semibold text-base font-roboto">
                    PROJECTS
                  </p>
                </Link>
                <Link
                  href="#Contact"
                  className="text-secondary text-center p-2 border-b-2 border-secondary/20 bg-secondary-foreground hover:bg-secondary hover:text-background"
                >
                  <p className=" font-semibold text-base font-roboto">
                    CONTACT
                  </p>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default NavBar;
