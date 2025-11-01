// import React from 'react'

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#0b1320] to-black text-white text-white text-center">

//       <p>I am the About page!!</p>
//     </div>
//   )
// }

// export default About

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          About JSON-Flix
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          <span className="text-cyan-300 font-semibold">JSON-Flix</span> is a
          modern, interactive web app designed to explore and visualize data
          from APIs. Whether you’re experimenting with movie databases or custom
          endpoints, it turns raw JSON into a cinematic experience.
        </p>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
            Built With 💻
          </h2>
          <p className="text-gray-300">
            React • TailwindCSS • Vite • Web3Forms • Deployed on Vercel
          </p>
        </div>

        <p className="mt-10 text-gray-400">
          Crafted with ❤️ by{" "}
          <span className="text-cyan-300 font-semibold">Abhimanyu</span>
        </p>
      </div>
    </div>
  );
};

export default About;
