'use client'
import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi"; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">MyWebsite</div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <FiMenu className="w-6 h-6" /> {/* React Icon for the Menu */}
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-400">
            Home
            
          </Link>
          <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
          <Link href="/portfolio" className="text-white hover:text-gray-400">
            Portfolio
          </Link>
          <Link href="/blog" className="text-white hover:text-gray-400">
            Blog
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-2">
            <Link href="/" className="text-white hover:text-gray-400">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-400">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
            <Link href="/portfolio" className="text-white hover:text-gray-400">
              Portfolio   
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-400">
              Blog
            </Link>
          </div>
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;
