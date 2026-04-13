"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import useCart from "@/hooks/useCart";
import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";

const Navbar = () => {
  const [cart] = useCart();
  const { user, logOut } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  const handleLogOut = () => {
    logOut().catch((error) => console.log(error));
  };

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold tracking-wide">
            Bite<span className="text-accent">wave</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex">
          <DesktopNav />
        </div>

        {/* Right Side */}
        <div className="hidden xl:flex items-center gap-6">
          {user ? (
            <>
              {/* Cart */}
              <Link to="/dashboard/cart" className="relative flex items-center">
                <FaCartShopping className="text-2xl hover:text-accent transition" />

                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-3 bg-accent text-white text-xs px-2 py-[2px] rounded-full"
                >
                  {cart?.length}
                </motion.span>
              </Link>

              {/* Profile */}
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-accent hover:scale-110 transition">
                <img
                  src={user?.photoURL}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>

              <Button onClick={handleLogOut}>Logout</Button>
            </>
          ) : (
            <>
              <FaUserCircle className="text-2xl" />
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
