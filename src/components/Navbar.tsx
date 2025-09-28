"use client";

import React, { useState } from "react";
import AppLogo from "./AppLogo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Documentation", href: "https://docs.elementpay.net" },
    { label: "API Reference", href: "https://console.elementpay.net" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <AppLogo />
            <span className="text-xl font-bold text-gray-900">ElementPay</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://console.elementpay.net" target="_blank">
              <button className="bg-[#4339CA] hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300">
                Get Started
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-purple-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <a
                  href="https://console.elementpay.net"
                  target="_blank"
                  className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-300"
                >
                  <button className="bg-[#4339CA] hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300 w-full">
                    Get Started
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
