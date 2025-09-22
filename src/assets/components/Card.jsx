import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="aspect-[2/3] sm:w-1/3 md:w-1/4 lg:w-1/6 w-[350px] h-[350px] my-3">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
            : "https://placehold.co/200x300?text=No+Poster%0ATwT&font=roboto"
        }
        alt={movie.title}
        className="w-full h-full object-contain"
      />
      <div className="title text-white text-center my-2">{movie.title}</div>
    </div>
  );
};

export default Card;
