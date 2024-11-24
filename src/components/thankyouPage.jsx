import React, { useEffect } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import TagManager from "react-gtm-module"; // Import react-gtm-module
import logo from "../assets/logo.png";
import backgroundImage from "../assets/travel-collage-of-famous-places-and-buildings-JEC038.jpg";

const ThankYouPage = () => {
  useEffect(() => {
  
    // Push data to the GTM data layer
    TagManager.dataLayer({
      dataLayer: {
        event: "page_view",
        page: {
          title: "Thank You Page",
          url: window.location.href,
        },
        customData: {
          submissionStatus: "received",
        },
      },
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background and UI Components */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.4,
          zIndex: -1,
        }}
      ></div>
      <div className="absolute top-[20px] left-[50px] bg-white bg-opacity-50 rounded">
        <img src={logo} alt="Logo" className="w-32 h-8" />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-lg mb-6">
            Your submission has been received. Our team will reach out soon!
          </p>
          <button
            className="px-6 py-3 bg-orange-600 text-white rounded hover:bg-orange-700"
            onClick={() => (window.location.href = "/")}
          >
            Go to Homepage
          </button>
        </div>
        <div className="mt-8 flex space-x-4">
          <a href="https://facebook.com" target="_blank" className="text-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-blue-700">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" className="text-red-600">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" className="text-blue-400">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
