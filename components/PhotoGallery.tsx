import React from 'react';

const PhotoGallery: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full mt-12 mb-8 px-4">
      <div className="bg-white/60 backdrop-blur-md p-8 md:p-16 rounded-full shadow-2xl border-4 border-pink-200 transform hover:scale-105 transition-transform duration-500 animate-float">
        <h1 className="font-['Pacifico'] text-center leading-tight">
          <span className="text-5xl md:text-7xl text-rose-400 block mb-2">I love you</span>
          <span className="text-6xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 drop-shadow-sm">
            KOTHA ❤️
          </span>
        </h1>
      </div>
    </div>
  );
};

export default PhotoGallery;