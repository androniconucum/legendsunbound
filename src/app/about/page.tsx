export default function AboutPage() {
  return (
    <div className="container py-10 md:py-20 pt-32 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">About Legends Unbound</h1>

      {/* Game Story */}
      <section className="mb-16 md:mb-20">
        <h2 className="text-xl sm:text-2xl text-primary mb-6 text-left font-bold">Game Story</h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto text-left leading-relaxed">
          In a peaceful kingdom, a curious princess yearned to explore beyond the castle walls. Despite her parents' warnings, she snuck out one night to visit the enchanted lake. As she enjoyed the moonlit waters, a sinister shadow figure emerged from the darkness and kidnapped her. A vigilant villager witnessed the abduction and rushed to alert the royal guards. The kingdom's elite spartan warrior was immediately dispatched to the lake, only to find it deserted. His keen eyes spotted a massive underground tunnel, and with unwavering determination, he descended into its depths. Through treacherous paths and fierce battles, the spartan fought his way through countless enemies. Finally, he reached the heart of the underground lair where the princess was held captive. In an epic confrontation, he faced and defeated the evil shadow figure, rescuing the princess and restoring peace to the kingdom. Will you join the spartan on this perilous rescue mission?
        </p>
      </section>

      {/* Mechanics */}
      <section className="mb-16 md:mb-20">
        <h2 className="text-xl sm:text-2xl text-primary mb-6 text-left font-bold">Game Mechanics</h2>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 max-w-3xl mx-auto space-y-4 text-left">
          <li>Classic platformer controls: run, jump, and jump attack</li>
          <li>Multiple unique levels with increasing difficulty</li>
          <li>Global leaderboards for fastest completion times</li>
          <li>Pixel-perfect collision and retro-inspired physics</li>
          <li>Challenging boss fights and enemy types</li>
        </ul>
      </section>

      {/* Team Information */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl text-primary mb-8 text-left font-bold">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center">
            <img src="/gallery/nico.jpg" alt="Nico - Lead Developer" className="w-32 h-32 md:w-40 md:h-40 mb-6 object-cover rounded-full" />
            <h3 className="text-xl font-bold text-white">Nico</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center">
            <img src="/gallery/aaron.jpg" alt="Aaron - Pixel Artist" className="w-32 h-32 md:w-40 md:h-40 mb-6 object-cover rounded-full" />
            <h3 className="text-xl font-bold text-white">Aaron</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center">
            <img src="/gallery/jenny.jpg" alt="Jenny - Game Designer" className="w-32 h-32 md:w-40 md:h-40 mb-6 object-cover rounded-full" />
            <h3 className="text-xl font-bold text-white">Jenny</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center">
            <img src="/gallery/brian.jpg" alt="Brian - Composer" className="w-32 h-32 md:w-40 md:h-40 mb-6 object-cover rounded-full" />
            <h3 className="text-xl font-bold text-white">Brian</h3>
          </div>
        </div>
      </section>
    </div>
  )
} 