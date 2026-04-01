import React from "react";
import Card from "../assets/components/Card";

const Home = ({
  handleClick,
  handleKeypress,
  handleChange,
  searchResults,
  likedMovies,
  activeFilter,
  setActiveFilter,
  toggleLike,
}) => {
  return (
    <div>
      {/* Search Bar */}
      <div className="search flex w-full flex-col gap-4 p-2 sm:p-4 lg:p-6">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search for movies..."
            className="w-full max-w-md bg-white/10 text-white placeholder-gray-400 px-5 py-3 rounded-l-full outline-none border border-transparent focus:border-cyan-500/50 focus:bg-white/20 transition-all backdrop-blur-md"
            onChange={handleChange}
            onKeyDown={handleKeypress}
          />

          <button
            className="bg-gray-600 rounded-r-full px-3 sm:px-4 py-1 outline-0 text-white"
            onClick={handleClick}
          >
            Search
          </button>
        </div>

        <div className="flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-300 text-md italic">
            Showing{" "}
            <span className="text-cyan-400 font-semibold">
              {searchResults.length}
            </span>{" "}
            movies
            <span className="ml-3 text-pink-400">
              {likedMovies.length} liked
            </span>
          </p>

          <div className="flex items-center gap-3">
            <label
              htmlFor="movie-filter"
              className="text-sm font-medium text-gray-300"
            >
              Filter
            </label>
            <select
              id="movie-filter"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white outline-none backdrop-blur-md focus:border-cyan-500/50"
            >
              <option value="all" className="bg-gray-900">
                All Movies
              </option>
              <option value="top-rated" className="bg-gray-900">
                Top Rated
              </option>
              <option value="recent" className="bg-gray-900">
                Recent Releases
              </option>
              <option value="liked" className="bg-gray-900">
                Liked Movies
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Movie Area */}
      <div className="movie-area grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center px-2 pb-6 sm:px-4 lg:px-6">
        {searchResults.length === 0 ? (
          <div className="text-center text-2xl text-white">
            No movies match this filter
          </div>
        ) : (
          searchResults.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              isLiked={likedMovies.includes(movie.id)}
              toggleLike={toggleLike}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
