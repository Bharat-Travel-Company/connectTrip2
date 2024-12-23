import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Phone, MapPin, Mail } from "lucide-react";
import footerLogo1 from "../assets/footer-logo.png";
import footerLogo2 from "../assets/startupLogo.png";


const Footer = () => {
  const socialLinks = [
    { Icon: Facebook, href: "https://www.instagram.com/cm_00006?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: 'Facebook' },
    { Icon: Instagram, href: "https://www.instagram.com/cm_00006?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: 'Instagram' },
    { Icon: Twitter, href: 'https://twitter.com/your-twitter-page-url', label: 'Twitter' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/ctipvtltd/', label: 'LinkedIn' },
    { Icon: Youtube, href: 'https://www.youtube.com/channel/your-youtube-channel-url', label: 'YouTube' }
  ];

  const quickLinks = ['Kashmir', 'Himachal', 'Kerala','Dubai','Thailand', 'AndamanAndNikobar'];
  const legalLinks = ['Privacy Policy', 'Terms & Conditions', 'Refund Policy'];

  return (
    <footer className="w-full bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">CONNECT</span>
              <span className="ml-1 text-white">TRIP</span>
            </h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p className="font-medium text-white">LEVIEN TRAVEL AND TECHNOLOGY PRIVATE LIMITED</p>
                  <p>Near Arvindo College,</p>
                  <p>Old Subhash Nagar,</p>
                  <p>Bhopal-462023</p>
                </div>
              </div>
              <div className="pl-8 space-y-1 text-gray-300">
                <p><span className="font-medium text-white">CIN:</span> U79110MP2024PTC072869</p>
                <p><span className="font-medium text-white">DFN:</span> DIPP177237</p>
                <p><span className="font-medium text-white">GST:</span> 23AAFCL9732Q1ZW</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white after:content-[''] after:block after:w-12 after:h-1 after:bg-gradient-to-r after:from-orange-500 after:to-red-500 after:mt-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-2"></span>
                    {item} Packages
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white after:content-[''] after:block after:w-12 after:h-1 after:bg-gradient-to-r after:from-orange-500 after:to-red-500 after:mt-2">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white after:content-[''] after:block after:w-12 after:h-1 after:bg-gradient-to-r after:from-orange-500 after:to-red-500 after:mt-2">
              Connect With Us
            </h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-start gap-2 px-4 py-2 border border-gray-700 text-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-md transition-colors">
                <Phone className="h-4 w-4" />
                <span>01169262077</span>
              </button>
              <button className="w-full flex items-center justify-start gap-2 px-4 py-2 border border-gray-700 text-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-md transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@connecttrip.in</span>
              </button>
              <button className="w-full flex items-center justify-start gap-2 px-4 py-2 border border-gray-700 text-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-md transition-colors">
                <Mail className="h-4 w-4" />
                <span>Support@connecttrip.in</span>
              </button>

              <div className="flex gap-4 pt-2">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a key={label}
                    href={href}
                    aria-label={label}
                    className="bg-gray-800 p-2 rounded-full text-gray-300 hover:bg-orange-500 hover:text-white transition-all duration-300">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-10 flex justify-center items-center">

          {/* Images */}
          <div className="relative flex gap-8 z-10">
            <img
              src={footerLogo1}
              alt="Footer Logo 1"
              className="w-64 md:w-56 rounded-lg shadow-2xl" // Increased sizes
            />
            <img
              src={footerLogo2}
              alt="Footer Logo 2"
              className="w-64 md:w-56 rounded-lg shadow-2xl" // Increased sizes
            />
          </div>

        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8">
          <strong className="text-sm text-[#F97300] md:text-base">
            © 2024 Copyright: <a href="https://connecttrip.in" className="hover:underline">www.connecttrip.in</a>
          </strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;