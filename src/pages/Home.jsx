import React from "react";
import Card from "../assets/components/Card";

const Home = ({ handleClick, handleKeypress, handleChange, searchResults }) => {
  return (
    <div>
      {/* Search Bar */}
      <div className="search flex w-full p-2 sm:p-4 lg:p-6 justify-center">
        <input
          type="text"
          className="bg-white rounded-l-full px-3 sm:px-5 w-2/3 sm:w-1/2 lg:w-1/3 outline-0"
          onChange={handleChange}
          onKeyDown={handleKeypress}
        />
        <button
          className="bg-gray-600 rounded-r-full px-3 sm:px-4 py-1 outline-0"
          onClick={handleClick}
        >
          Search
        </button>
        
        <div className="hidden lg:block absolute right-6 text-white">
          Results: {searchResults.length}
        </div>
      </div>

      {/* Movie Area */}
      <div className="movie-area flex flex-wrap justify-between w-full gap-12 p-2 sm:p-4 lg:p-6">
        {searchResults.length === 0 ? (
          <div className="text-2xl text-white">No movie found</div>
        ) : (
          searchResults.map((movie) => <Card key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default Home;
