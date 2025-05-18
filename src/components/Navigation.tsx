import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary retro-title">
            Legends Unbound
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/download" className="text-gray-300 hover:text-white transition-colors">
              Download
            </Link>
            <Link href="/leaderboard" className="text-gray-300 hover:text-white transition-colors">
              Leaderboards
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
              Gallery
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-300 hover:text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
} 