import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setShowPopup(true);

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_EMAIL_API_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        setResult("Something went wrong ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Network error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl flex flex-col gap-6 mb-10"
      >
        <h2 className="text-3xl font-semibold text-center mb-4 text-cyan-400">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="flex-1 bg-transparent border border-white/40 rounded-full p-3 focus:outline-none focus:border-cyan-400 transition-all"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="flex-1 bg-transparent border border-white/40 rounded-full p-3 focus:outline-none focus:border-cyan-400 transition-all"
            required
          />
        </div>

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message..."
          className="bg-transparent border border-white/40 rounded-2xl p-3 resize-none focus:outline-none focus:border-cyan-400 transition-all"
          required
        ></textarea>

        <button
          type="submit"
          className="self-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full px-8 py-3 font-semibold hover:scale-105 hover:shadow-lg transition-transform duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-white/10 border border-white/20 text-white rounded-2xl p-8 flex flex-col items-center shadow-2xl animate-fadeIn">
            <p className="text-lg font-medium">{result}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
