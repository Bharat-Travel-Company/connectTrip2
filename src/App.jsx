import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import SignUpForm from "./components/form"; // Excluded from lazy loading
import WhatsAppButton from "./components/whatsApp";

const PrivacyPolicy = lazy(() => import("./components/privacyPolicy"));
const PaymentPolicy = lazy(() => import("./components/refundPolicy"));
const TermsAndConditions = lazy(() => import("./components/termsAndConditions"));
const MainHome = lazy(() => import("./pages/mainHome"));
const Kashmir = lazy(() => import("./pages/Kashmir"));
const Kerala = lazy(() => import("./pages/Kerala"));
const Himachal = lazy(() => import("./pages/Himachal"));
const Andaman = lazy(() => import("./pages/Andaman"));
const Dubai = lazy(() => import("./pages/Dubai"));
const Thailand = lazy(() => import("./pages/Thailand"));
const Tour = lazy(() => import("./pages/tour"));
const ThankYou = lazy(() => import("./components/thankyouPage"));
const PaymentPages = lazy(() => import("./pages/paymentpage"));
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
        {/* <h2 className="text-center text-xl font-bold text-orange-600 mb-4">
          Get Upto 30% OFF on Dubai Package
        </h2> */}

        {/* Form */}
        <section>
          <SignUpForm></SignUpForm>
        </section>
        {/* Disclaimer */}

      </div>
    </div>
  );
};


function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <Router>
      <RouterContent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Router>
  );
}

function RouterContent({ isModalOpen, setIsModalOpen }) {
  const location = useLocation(); 
  const showModal = location.pathname === "/" // Show modal only on the home page

  return (
    <>
      {showModal && (<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}

      {/* <TruecallerButton></TruecallerButton> */}

      <WhatsAppButton></WhatsAppButton>

      
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
              <Route path="/refund-policy" element={<PaymentPolicy/>}/>
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/payment" element={<PaymentPages/>}/>
            </Routes>
          </Suspense>
        </div>
    
    </>
  );
}

export default App;
