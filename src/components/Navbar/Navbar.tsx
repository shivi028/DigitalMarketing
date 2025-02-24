'use client'
import { useState, useEffect } from "react";
import { ShoppingCart, UserRound, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-5xl px-6 py-1 transition-all duration-300 backdrop-blur-lg border border-white/20 shadow-md
      ${isScrolled ? "bg-purple-300/20 shadow-lg" : "bg-purple-200/10"} 
      ${isMobileMenuOpen ? "rounded-none" : "rounded-full md:rounded-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-12 sm:h-14">
          {/* Logo */}
          <div className="flex gap-3 items-center">
            <Image src={'/Image/demo.png'} alt="Logo" width={30} height={20} />
            <Link href={'/'} className="text-white text-lg sm:text-xl font-semibold">
              HiredEasy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-purple-200 hover:text-white hover:underline text-sm font-medium transition-all">
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white/80 hover:text-white transition-all">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="text-white/80 hover:text-white transition-all">
              <UserRound className="w-5 h-5" />
            </button>
            <button className="px-4 py-1 border border-white/30 text-sm font-medium rounded-full text-white bg-purple-500/30 hover:bg-purple-500/50 transition-all flex items-center">
              <span>Book Demo</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-gray-200 transition-all" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="mx-2 mb-2 px-4 pt-2 pb-3 bg-purple-300/20 backdrop-blur-md border border-white/20 shadow-lg rounded-none">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block px-3 py-2 text-white/80 hover:text-white hover:bg-purple-400/30 rounded-md transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 px-3 py-3">
              <button className="text-white/80 hover:text-white transition-all">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="text-white/80 hover:text-white transition-all">
                <UserRound className="w-5 h-5" />
              </button>
            </div>
            <div className="px-3 py-2">
              <button className="w-full px-4 py-2 border border-white/30 text-sm font-medium text-white bg-purple-500/30 hover:bg-purple-500/50 transition-all flex items-center">
                <span>Book Demo</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
