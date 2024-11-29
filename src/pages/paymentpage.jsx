import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import backgroundImage from "../assets/3420650.jpg";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const PaymentPages = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      {/* Background Image */}
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
      <div className="absolute top-4 left-6 sm:top-6 sm:left-8 bg-white bg-opacity-50 rounded">
        <img
          src={logo}
          alt="Logo"
          className="w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56"
        />
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row  w-full max-w-6xl mx-auto mt-[100px] px-4 sm:px-8 gap-8">
        {/* Left Section: Tour Package Booking */}
        <div className="w-full md:w-1/3 bg-orange-10 bg-opacity-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">
            Tour Package Booking
          </h2>
          <p className="text-gray-700 mb-6">
            <strong>Connect Trip</strong> is known for providing customized{" "}
            <strong>Himachal Pradesh Tour Packages</strong>. Our experienced
            team has in-depth knowledge about the culturally diverse states of
            India. We understand the importance of vacations.
          </p>
          <h4 className="text-lg font-semibold mb-3">Share this on:</h4>
          <div className="flex items-center gap-3 mb-6">
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
              href="https://x.com/VIKRAMV86511273?t=op8lcJGtZcdHVcuEKmc-7g&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-lg sm:text-xl hover:text-blue-600"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="mb-4">
            <h5 className="text-lg font-semibold">Contact Us:</h5>
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:connecttripindia@gmail.com"
                className="text-blue-600"
              >
                connecttripindia@gmail.com
              </a>
            </p>
            <p className="text-gray-700">
              Phone:{" "}
              <a href="tel:+917289030406" className="text-blue-600">
                +91-9630107798
              </a>
            </p>
          </div>
          <div>
            <Link
              to="/Terms-and-Conditions"
              className="text-blue-600 underline"
            >
              Terms & Conditions
            </Link>
          </div>
          <div>
            <Link to="/refund-policy" className="text-blue-600 underline">
              Refund Policy
            </Link>
          </div>
          <div>
            <Link to="/privacy-policy" className="text-blue-600 underline">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Right Section: Payment Details */}
        <div className="w-full md:w-2/3 bg-orange-10 bg-opacity-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-orange-600 mb-4 text-center">
            Payment Details
          </h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="amount"
                className="block text-gray-700 font-medium mb-2"
              >
                Amount
              </label>
              <input
                type="number"
                id="amount"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="₹ Enter Amount"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                UserId
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="transactionId"
                className="block text-gray-700 font-medium mb-2"
              >
                Transaction ID
              </label>
              <input
                type="text"
                id="transactionId"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter transaction ID"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:opacity-90"
            >
              Pay ₹ 0.00
            </button>
          </form>
          {/* <div className="flex items-center gap-4 mt-6">
            <img src="upi-icon.svg" alt="UPI" className="w-10" />
            <img src="visa-icon.svg" alt="Visa" className="w-10" />
            <img src="mastercard-icon.svg" alt="Mastercard" className="w-10" />
            <img src="rupay-icon.svg" alt="RuPay" className="w-10" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PaymentPages;
