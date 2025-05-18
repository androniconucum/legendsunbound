import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
        <div className="container relative z-20 text-center flex flex-col items-center">
          <div className="flex justify-center items-center gap-8 mb-6">
            <img src="/images/KNIGHT_SET.png" alt="Knight" className="w-24 h-24 object-contain" />
            <h1 className="retro-title text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Legends Unbound
            </h1>
            <img src="/images/slime_green.png" alt="Slime" className="w-20 h-20 object-contain" />
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Embark on an epic platformer adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/download" className="btn btn-primary">
              Download Now
            </Link>
            <Link href="/leaderboard" className="btn btn-secondary">
              View Leaderboards
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Game Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-800">
              <h3 className="text-xl font-semibold mb-4">Challenging Levels</h3>
              <p className="text-gray-400">
                Test your skills across multiple unique and challenging levels
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800">
              <h3 className="text-xl font-semibold mb-4">Global Leaderboards</h3>
              <p className="text-gray-400">
                Compete with players worldwide and climb the ranks
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800">
              <h3 className="text-xl font-semibold mb-4">Regular Updates</h3>
              <p className="text-gray-400">
                New content and features added regularly
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 