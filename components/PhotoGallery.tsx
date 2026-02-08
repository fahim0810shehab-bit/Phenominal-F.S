import React from 'react';

const PhotoGallery: React.FC = () => {
  const photos = [
    {
      id: 1,
      src: "photo_hacked.jpg",
      caption: "Hacked my heart! 💘",
      rotation: "-rotate-6",
      zIndex: "z-10",
      aspect: "aspect-[3/4]" 
    },
    {
      id: 2,
      src: "photo_sunny.jpg",
      caption: "You are my sunshine ☀️",
      rotation: "rotate-3",
      zIndex: "z-30",
      aspect: "aspect-[4/3]"
    },
    {
      id: 3,
      src: "photo_bookstore.jpg",
      caption: "My beautiful story 📖",
      rotation: "-rotate-3",
      zIndex: "z-20",
      aspect: "aspect-[3/4]"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-12 p-4 max-w-6xl mx-auto mt-12">
      {photos.map((photo) => (
        <div 
          key={photo.id}
          className={`relative group cursor-pointer transition-all duration-500 hover:scale-110 hover:z-50 ${photo.rotation} ${photo.zIndex}`}
        >
          {/* Polaroid Frame */}
          <div className="bg-white p-4 pb-20 shadow-xl rounded-sm w-72 transform transition-transform group-hover:rotate-0 border border-gray-200">
             
             {/* Image Container */}
             <div className={`${photo.aspect} overflow-hidden bg-gray-100 relative z-10 border border-gray-100`}>
                <img 
                  src={photo.src}
                  alt={photo.caption} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to placeholder if image is missing
                    (e.target as HTMLImageElement).src = `https://placehold.co/600x800/ffe4e6/be185d?text=${encodeURIComponent(photo.src)}`;
                  }}
                />
             </div>
             
             {/* Caption */}
             <div className="absolute bottom-0 left-0 right-0 h-20 flex items-center justify-center z-20">
                <p className="font-['Pacifico'] text-gray-600 text-2xl text-center px-2">{photo.caption}</p>
             </div>
             
             {/* Tape Effect */}
             <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-8 bg-pink-100/50 rotate-1 backdrop-blur-sm z-30 shadow-sm"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;