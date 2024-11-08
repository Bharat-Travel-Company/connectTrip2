import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import SignUpForm from "./components/form"; // Excluded from lazy loading
import WhatsAppButton from "./components/whatsApp";

const PrivacyPolicy = lazy(() => import("./components/privacyPolicy"));
const TermsAndConditions = lazy(() => import("./components/termsAndConditions"));
const MainHome = lazy(() => import("./pages/mainHome"));
const Kashmir = lazy(() => import("./pages/Kashmir"));
const Kerala = lazy(() => import("./pages/Kerala"));
const Himachal = lazy(() => import("./pages/Himachal"));
const Andaman = lazy(() => import("./pages/Andaman"));
const Dubai = lazy(() => import("./pages/Dubai"));
const Thailand = lazy(() => import("./pages/Thailand"));
const Tour = lazy(() => import("./pages/tour"));

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 50000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg relative md:max-w-md max-w-sm w-full">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-2 right-2 text-gray-100 bg-orange-600 hover:text-gray-200 hover:bg-orange-500 rounded-full h-8 w-8 flex items-center justify-center"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-center text-xl font-bold text-orange-600 mb-4">
          Get Upto 30% OFF on Dubai Package
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <input
            type="text"
            placeholder="Departure City"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <select
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
          >
            <option value="">No of Traveler</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* Add more options as needed */}
          </select>
          <textarea
            placeholder="Special Requirement"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-3 rounded-md hover:bg-orange-700 transition"
          >
            Apply For Offer
          </button>
        </form>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          By clicking on "Get Free Quote", you agree to our{" "}
          <a href="#" className="text-orange-600 underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-orange-600 underline">
            Terms of Use
          </a>.
        </p>
      </div>
    </div>
  );
};


function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);



  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* <TruecallerButton></TruecallerButton> */}

      <WhatsAppButton></WhatsAppButton>

      <Router>
        <div className="w-full h-full">
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<MainHome />} />
              <Route path="/kashmir" element={<Kashmir />} />
              <Route path="/kerala" element={<Kerala />} />
              <Route path="/himachal" element={<Himachal />} />
              <Route path="/andamanandnikobar" element={<Andaman />} />
              <Route path="/dubai" element={<Dubai />} />
              <Route path="/thailand" element={<Thailand />} />
              <Route path="/tour" element={<Tour />} />
              <Route path="/form" element={<SignUpForm />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    
    </>
  );
}

export default App;
