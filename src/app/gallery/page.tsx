const galleryImages = [
    { src: '/gallery/finalscene.png'},
    { src: '/gallery/fboss.png'},
    { src: '/gallery/gameover.png', caption: 'Game Over' },
    { src: '/gallery/ingame4.png', caption: 'In-Game 4' },
    { src: '/gallery/ingame3.png', caption: 'In-Game 3' },
    { src: '/gallery/ingame2.png', caption: 'In-Game 2' },
    { src: '/gallery/storylin2.png', caption: 'Storyline 2' },
    { src: '/gallery/levelcomplete.png', caption: 'Level Complete' },
    { src: '/gallery/ingame.png', caption: 'In-Game' },
    { src: '/gallery/storyline.png', caption: 'Storyline' },
    { src: '/gallery/level_select.png', caption: 'Level Select' },
    { src: '/gallery/skinss.png', caption: 'Skins' },
    { src: '/gallery/maintscn.png', caption: 'Main Screen' },
  ];
  
  export default function GalleryPage() {
    return (
      <div className="container py-20 pt-32">
        <h1 className="retro-title text-4xl md:text-5xl font-bold text-center mb-12">
          Game Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-64 object-contain bg-dark"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }