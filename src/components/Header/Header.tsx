"use client";

import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { dataHeader } from "./Header.data";
import { MotionTransition } from "../MotionTransition";
import { useState } from "react";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <MotionTransition>
      <nav className="flex flex-wrap items-center justify-between max-w-6xl mx-auto px-5 py-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="Logo bank"
            width="120"
            height="30"
            className="h-auto w-auto"
            priority={true}
          />
        </Link>
        <RiMenu3Line
          className="text-3xl md:hidden"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />
        <div
          className={`${
            openMobileMenu ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <div className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:p-0 md:mt-0 md:border-0">
            {dataHeader.map(({ id, name, idLink }) => (
              <div
                key={id}
                className="px-4 transition-all duration-500 ease-in-out"
              >
                <Link
                  href={idLink}
                  className="text-sm lg:text-sm hover:text-[#02e99b]"
                >
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </MotionTransition>
  );
}
