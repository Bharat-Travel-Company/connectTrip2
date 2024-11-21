import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/stock-photo-world-map-57019793.jpg";

const PaymentPage = () => {
  return (
    <div className="relative min-h-screen flex">

      {/* Left Section - Company Details and Payment Policy */}
      <div className="relative w-1/2 h-full bg-cover bg-center bg-no-repeat z-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}>

        {/* Top-left orange triangle */}
        <div className="absolute top-0 left-0 w-0 h-0 border-t-[80px] sm:border-t-[120px] md:border-t-[180px] border-t-orange-600 border-r-[80px] sm:border-r-[120px] md:border-r-[180px] border-r-transparent z-10"></div>

        {/* Bottom-right black triangle */}
        <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[80px] sm:border-b-[120px] md:border-b-[180px] border-b-black border-l-[80px] sm:border-l-[120px] md:border-l-[180px] border-l-transparent z-10"></div>

        {/* Logo */}
        <div className="absolute top-[20px] sm:top-[30px] left-[50px] sm:left-[100px] md:left-[145px] bg-white bg-opacity-50 rounded z-10">
          <img
            src={logo}
            alt="Logo"
            className="w-25 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 h-8"
          />
        </div>

        {/* Left Content - Company Details */}
        <div className="absolute top-32 left-10 sm:left-20 text-white z-20">
          <h2 className="text-xl sm:text-2xl font-bold">Connect Trip</h2>
          <p className="text-sm sm:text-base mb-2">Holiday Packages for Himachal Pradesh</p>
          <p className="text-sm sm:text-base mb-2">
            Experience the beauty of Himachal Pradesh with our customized tour packages.
          </p>
          <h3 className="font-semibold mt-4">Contact Us:</h3>
          <p className="text-sm sm:text-base mb-2">Email: booking@connecttrip.com</p>
          <p className="text-sm sm:text-base mb-4">Phone: +91-7289030406</p>
          <p className="text-sm sm:text-base mb-2">Payment Policy:</p>
          <ul className="text-sm sm:text-base">
            <li>- Full payment required at the time of booking.</li>
            <li>- Refundable up to 30 days before the tour start date.</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="absolute bottom-10 left-10 sm:left-20 flex space-x-4 z-20">
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

      {/* Right Section - Payment Card */}
      {/* <div className="w-1/2 bg-white bg-opacity-90 p-8 shadow-lg flex flex-col items-center justify-center z-20">
        <div className="max-w-lg w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4 text-center">
            Payment Details
          </h1> */}

          {/* Payment Form */}
          {/* <form className="space-y-4">
            <div className="flex flex-col mb-4">
              <label htmlFor="amount" className="text-sm sm:text-base font-semibold">
                Enter Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="₹ 0.00"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-sm sm:text-base font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-sm sm:text-base font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="phone" className="text-sm sm:text-base font-semibold">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>

            Payment Method
            <div className="mb-6">
              <label className="block text-sm sm:text-base font-semibold mb-2">Payment Method</label>
              Razorpay payment button or any other method can be integrated here
              <button
                type="submit"
                className="w-full py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
              >
                Pay ₹ 0.00
              </button>
            </div>
          </form> */}
        {/* </div>
      </div> */}

    </div>
  );
};

export default PaymentPage;
