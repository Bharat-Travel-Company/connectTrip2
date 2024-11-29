import { FaPhone } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleCall = () => {
    window.open("tel:+91-963-010-7798", "_self"); // Opens in the same tab
  };

  const handlePayment = () => {
    navigate("/payment");
  };

  return (
    <nav className="w-full">
      <div className="flex absolute z-40 w-full lg:px-24 md:px-4 px-2 py-2 bg-gradient-to-b from-gray-50/10 to-transparent backdrop-blur-lg">
        {/* Left Section: Logo */}
        <div className="flex items-center justify-start flex-grow">
          <Link to="/" className="pl-1 font-semibold">
            <img
              fetchPriority="high"
              loading="lazy"
              srcSet={`${logo}?width=100 100w, 
                       ${logo}?width=200 200w, 
                       ${logo}?width=400 400w, 
                       ${logo}?width=800 800w`}
              sizes="(max-width: 100px) 100w,
                     (max-width: 200px) 200w,
                     (max-width: 400px) 400w,
                     (max-width: 800px) 800w"
              src={logo}
              alt="Logo"
              className="md:w-44 w-28 h-9"
            />
          </Link>
        </div>

        {/* Center Section: Navigation Links (future use) */}
        <div className="flex items-center justify-center flex-grow">
          <ul className="flex justify-center gap-x-4">
            {/* Uncomment and populate this section if you add routes */}
          </ul>
        </div>

        {/* Right Section: Call to Action Buttons */}
        <div className="flex items-center justify-end gap-x-2">
          <div className="flex items-center gap-x-1 bg-[#F37002] md:px-4 px-2.5 rounded-2xl md:py-1 py-2 md:text-base text-[0.65rem]">
            <FaPhone className="text-[#F7F7F7]" />
            <button
              onClick={handleCall}
              aria-label="Call an expert"
              className="text-[#F7F7F7] font-semibold uppercase"
            >
              Talk to an Expert
            </button>
          </div>
          <div className="flex items-center gap-x-2 bg-[#F37002]  md:px-5 px-2.5 rounded-2xl md:py-1 py-2 md:text-base text-[0.65rem]">
            <MdPayment className="text-[#F7F7F7]" />
            <button
              onClick={handlePayment}
              aria-label="Make a payment"
              className="text-[#F7F7F7] font-semibold uppercase"
            >
              Payment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;