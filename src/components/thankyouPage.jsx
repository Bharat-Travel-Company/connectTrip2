import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.webp";
import backgroundImage from "../assets/travel-collage-of-famous-places-and-buildings-JEC038.webp";

const ThankYouPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with opacity */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.4,
          zIndex: -1,
        }}
      ></div>

      {/* Top-left orange triangle */}
      <div className="absolute top-0 left-0 w-0 h-0 border-t-[80px] sm:border-t-[120px] md:border-t-[180px] border-t-orange-600 border-r-[80px] sm:border-r-[120px] md:border-r-[180px] border-r-transparent"></div>

      {/* Bottom-right black triangle */}
      <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[80px] sm:border-b-[120px] md:border-b-[180px] border-b-black border-l-[80px] sm:border-l-[120px] md:border-l-[180px] border-l-transparent"></div>

      {/* Logo */}
      <div className="absolute top-[20px] sm:top-[30px] left-[50px] sm:left-[100px] md:left-[145px] bg-white bg-opacity-50 rounded">
        <img
          src={logo}
          alt="Logo"
          className="w-25 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 h-8"
        />
      </div>


      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl text-center">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
            Thank You!
          </h1>
          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
            Your submission has been received. We appreciate your time and
            effort!
            <br />
            Our team will reach out soon!
          </p>
          <button
            className="px-4 sm:px-6 py-2 sm:py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
            onClick={() => (window.location.href = "/")}
          >
            Go to Homepage
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center space-x-3 sm:space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61557248154319&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-lg sm:text-xl hover:text-blue-800"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/posts/connect-trip_mptourism-bundelkhandhackathon-tourismpromotion-activity-7263206882167672833-aJvT?utm_source=share&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-lg sm:text-xl hover:text-blue-900"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/connecttripindia/profilecard/?igsh=ZjQyMXhsdW05NDUz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 text-lg sm:text-xl hover:text-red-800"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/VIKRAMV86511273?t=op8lcJGtZcdHVcuEKmc-7g&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-lg sm:text-xl hover:text-blue-600"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;