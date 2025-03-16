"use client";

import logo from "@/assets/navLogo.png";
import { handleOverflow } from "@/utils/handleOverflow";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Burger, Menu } from "./components";
import Link from "next/link";

export default function Navbar() {
  // * Hooks
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // * Methods
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > 50;

    setIsHidden(isScrollingDown);
    setLastScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 0);
  };

  // * Life Cycle
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return isClient ? (
    <nav className="w-screen">
      {/* Navbar content  */}
      <div className="container mx-auto px-4 flex justify-center relative">
        <motion.div
          className={`w-full h-[46px] 2xs:h-[62px] sm:h-[70px] md:h-[84px] lg:h-[106px] flex justify-between items-center fixed top-0 left-0 z-20 px-6 md:px-10 ${
            isScrolled ? "navbar-vapor" : "bg-transparent"
          }`}
          animate={{ y: isHidden ? "-200%" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="w-16 md:w-20 lg:w-28">
            <Link href="/">
              <img
                className="w-full h-full object-contain"
                src={logo.src}
                alt="pdm-logo"
              />
            </Link>
          </div>
          <div className="w-10 md:w-20 lg:w-[112px] flex justify-end">
            <Burger
              setIsOpen={() => {
                setIsOpen(true);
                handleOverflow();
              }}
            />
            <Menu
              isOpen={isOpen}
              setIsOpen={() => {
                setIsOpen(false);
                handleOverflow();
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Black layout */}
      <motion.div
        transition={{ duration: 0.6, ease: "backOut" }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className={`w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-[2px] z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={() => {
          setIsOpen(false);
          handleOverflow();
        }}
      />
    </nav>
  ) : null;
}
