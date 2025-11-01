import React from "react";
import Card from "../assets/components/Card";

const Home = ({ handleClick, handleKeypress, handleChange, searchResults }) => {
  // console.log(searchResults)
  return (
    <div>
      {/* Search Bar */}
      <div className="search flex w-full p-2 sm:p-4 lg:p-6 justify-center">
        <input
          type="text"
          placeholder="Search for movies..."
          className="w-full max-w-md bg-white/10 text-white placeholder-gray-400 px-5 py-3 rounded-l-full outline-none border border-transparent focus:border-cyan-500/50 focus:bg-white/20 transition-all backdrop-blur-md"
          onChange={handleChange}
          onKeyDown={handleKeypress}
        />

        <button
          className="bg-gray-600 rounded-r-full px-3 sm:px-4 py-1 outline-0"
          onClick={handleClick}
        >
          Search
        </button>
        

      </div>
        <p className="text-gray-300 text-md mb-2 italic justify-self-end">
          🎬 Showing <span className="text-cyan-400 font-semibold">{searchResults.length}</span>
        </p>

      {/* Movie Area */}
      {/* <div className="movie-area flex flex-wrap justify-between w-full gap-12 p-2 sm:p-4 lg:p-6"> */}
      <div className="movie-area grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {searchResults.length === 0 ? (
          <div className="text-2xl text-white">No movie found</div>
        ) : (
          searchResults.map((movie) => <Card key={movie.id} movie={movie} />)
        )}
      </div>
      {/* <div className="movie-area flex flex-wrap justify-between w-full gap-12 p-2 sm:p-4 lg:p-6">
        {searchResults.length === 0 ? (
          <div className="text-2xl text-white">No movie found</div>
        ) : (
          searchResults.map((movie) => <Card key={movie.id} movie={movie} />)
        )}
      </div> */}
    </div>
  );
};

export default Home;
