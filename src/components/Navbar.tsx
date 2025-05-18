'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Legends Unbound</Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/gallery" className="hover:text-gray-300">Gallery</Link>
          <Link href="/download" className="hover:text-gray-300">Download</Link>
          <Link href="/leaderboard" className="hover:text-gray-300">Leaderboard</Link>
        </div>
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <Link href="/" className="block hover:text-gray-300">Home</Link>
          <Link href="/about" className="block hover:text-gray-300">About</Link>
          <Link href="/gallery" className="block hover:text-gray-300">Gallery</Link>
          <Link href="/download" className="block hover:text-gray-300">Download</Link>
          <Link href="/leaderboard" className="block hover:text-gray-300">Leaderboard</Link>
        </div>
      )}
    </nav>
  );
} 