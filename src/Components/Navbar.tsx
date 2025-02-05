"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const { user } = useUser();

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo with Image */}
        <div className="flex items-center text-2xl font-bold">
          <Image
            src="/logo.jpeg"
            alt="Logo"
            width={35}
            height={35}
            className="mr-2 rounded-full"
          />
          <Link href="/" className="hover:text-gray-300">
            Zoshka
          </Link>
        </div>

        {/* Centered Desktop Links */}
        <ul className="hidden md:flex space-x-6 mx-auto">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li> 
          <li><Link href="/shop" className="hover:text-gray-300">Shop</Link></li>
          <li><Link href="/cart" className="hover:text-gray-300">Cart</Link></li>
          <li><Link href="/review" className="hover:text-gray-300">Review</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>

        {/* Right: User and Cart Sections */}
        <div className="flex items-center space-x-6">
          {/* User Authentication */}
          <SignedOut>
            <SignInButton>
              <div className="flex flex-col items-center cursor-pointer">
                <FaUser className="w-6 h-5 mb-1" />
                <span>Login</span>
              </div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center space-x-2">
              <UserButton />
              {user && <span>{user.firstName}</span>}
            </div>
          </SignedIn>

          {/* My Cart - Hidden on mobile and tablet */}
          <div className="hidden md:flex flex-col items-center relative">
            <FaShoppingCart className="w-6 h-5 mb-1" />
            <Link href="/cart">My Cart</Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-300">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 py-2">
          <ul className="space-y-4">
            <li><Link href="/" className="hover:text-[#B88E2F]" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/about" className="hover:text-[#B88E2F]" onClick={toggleMenu}>About</Link></li> 
            <li><Link href="/shop" className="hover:text-[#B88E2F]" onClick={toggleMenu}>Shop</Link></li>
            <li><Link href="/cart" className="hover:text-[#B88E2F]" onClick={toggleMenu}>Cart</Link></li>
            <li><Link href="/review" className="hover:text-gray-300" onClick={toggleMenu}>Review</Link></li>
            <li><Link href="/contact" className="hover:text-[#B88E2F]" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
