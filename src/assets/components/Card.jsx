import React from "react";

const Card = ({ movie }) => {
  return (
    <div
      className="group relative flex flex-col rounded-2xl overflow-hidden shadow-lg shadow-black/30 bg-[#0f0f0f] hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 ease-out cursor-pointer"
    >
      {/* Poster Image */}
      <div className="relative w-full aspect-[2/3] overflow-hidden">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
              : "https://placehold.co/400x600?text=No+Poster&font=roboto"
          }
          alt={movie.title}
          className="w-full h-full object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Movie Title */}
      <div className="p-3 flex flex-col flex-grow justify-end">
        <h2 className="text-white font-semibold text-base md:text-lg truncate group-hover:text-cyan-400 transition-colors duration-300">
          {movie.title}
        </h2>
        {movie.release_date && (
          <p className="text-gray-400 text-sm mt-1">
            {new Date(movie.release_date).getFullYear()}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
