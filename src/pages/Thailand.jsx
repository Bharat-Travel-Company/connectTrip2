import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import FAQSection from "../components/faq";
import SalesBanner from "../components/banner";
import SignUpForm from "../components/form";
import Footer from "../components/footer";
import { dubaiPackages, kashmirPackages, thailandPackages, testimonials } from "../data/packagesData";
import { WiStars } from "react-icons/wi";
import { FaTag, FaPhone,FaStar } from "react-icons/fa6";
import { useState } from "react";

const Modal = ({ onClose, selectedPackage }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg relative md:max-w-md max-w-sm w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#FFDA32] bg-[#0F1E32] hover:text-[#0F1E32] hover:bg-[#FFDA32] rounded-full size-8"
        >
          ✕
        </button>
        <section>
          <SignUpForm selectedPackage={selectedPackage} />
        </section>
      </div>
    </div>
  );
};

const Card = ({
  image,
  duration,
  originalPrice,
  discountedPrice,
  discount,
  tag,
  packageName,
  stayDetails,
  handleModalOpen,
}) => {
  const handleCall = () => {
    window.open("tel:+91-963-010-7798", "_blank");
  };

  return (
    <div className="rounded-xl flex flex-col w-full gap-2 shadow-lg transition-shadow duration-300">
      <div className="w-full h-72 relative rounded-xl overflow-hidden">
        <div className="absolute right-0 top-0 rounded-bl-lg bg-[#f57725] text-white px-2.5">
          {discount}
        </div>
        {tag && (
          <div className="absolute left-0 top-0 flex items-center gap-1 text-xs bg-green-600 text-white px-3 py-1 rounded-md ">
            <FaTag />
            <span>{tag}</span>
          </div>
        )}
        <img
          fetchPriority="high"
          loading="lazy"
          decoding="async"
          srcSet={`${image}?width=100 100w, 
           ${image}?width=200 200w, 
           ${image}?width=400 400w, 
           ${image}?width=800 800w`}
          sizes="(max-width: 100px) 100w,
         (max-width: 200px) 200w,
         (max-width: 400px) 400w,
         (max-width: 800px) 800w"

          src={image}
          alt={packageName}
          className="w-full h-full object-cover rounded-t-xl aspect-square"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">{duration}</p>
          {tag && (
            <div className="flex items-center gap-1 text-xs bg-green-600 text-white px-2 py-1 rounded-full">
              < FaStar />
              <span>4.5</span>
            </div>
          )}

          <div className="flex items-center gap-1 text-xs bg-green-600 text-white px-2 py-1 rounded-full">
            < FaStar />
            <span>4.5</span>
          </div>

        </div>
        <h2 className="text-gray-800 text-lg font-semibold">{packageName}</h2>
        <ul className="flex flex-wrap gap-2">
          {stayDetails.map((stay, index) =>
            index <= 2 ? (
              <li key={index} className="flex items-center text-sm">
                <span className="font-bold mr-1">{stay.day}</span>
                <span className="text-gray-600">{stay.location}</span>
              </li>
            ) : index === 3 ? (
              <span
                key={index}
                className="flex items-center justify-center bg-[#f57725] text-white w-6 h-6 rounded-full font-semibold text-xs before:content-['+']"
              >
                {stayDetails.length - 3}
              </span>
            ) : null
          )}
        </ul>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-green-600">
            {discountedPrice}
          </span>
          <span className="text-gray-500 line-through">{originalPrice}</span>
          <span className="text-sm font-semibold text-green-600 bg-green-100 px-2">
            SAVE ₹
            {(
              Number(originalPrice.replace(/[^\d.]/g, "")) -
              Number(discountedPrice.replace(/[^\d.]/g, ""))
            ).toLocaleString("en-IN")}
          </span>
        </div>
        <div className="flex gap-x-2">
          <button
            className="w-12 border-2 border-[#f37002] text-[#f37002] py-2 rounded-lg my-2 flex items-center justify-center"
            onClick={handleCall}
          >
            <FaPhone />
          </button>
          <button
            className="w-full bg-[#f37002] text-white py-2 rounded-lg my-2"
            onClick={() => handleModalOpen()}
          >
            Request a Callback
          </button>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial, author, image }) => {
  return (
    <div className="rounded-xl flex flex-col items-center p-4 bg-white shadow-lg">
      <img
        loading="lazy"
         decoding="async"
        srcSet={`
           ${image}?width=100 100w, 
           ${image}?width=200 200w, 
           ${image}?width=400 400w, 
           ${image}?width=800 800w`}
        sizes="(max-width: 100px) 100w,
         (max-width: 200px) 200w,
         (max-width: 400px) 400w,
         (max-width: 800px) 800w"
          fetchPriority="high"
        src={image}
        alt={author}
        className="w-16 h-16 rounded-full mb-4" />
      <img
        loading="lazy"
        decoding="async"
        fetchPriority="high"
        src={image}
        alt={author}
        className="w-16 h-16 rounded-full mb-4" />
      <p className="text-gray-700 italic">"{testimonial}"</p>
      <p className="text-gray-900 font-semibold mt-2">- {author}</p>
    </div>
  );
};

const Thailand = () => {
  const [modalState, setModalState] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleModalOpen = (pkg) => {
    setSelectedPackage(pkg);
    setModalState(true);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <Navbar />
        <Carousel data={thailandPackages} />
        <section className="flex items-center justify-center flex-col py-16 max-w-[1200px] w-full">
          <div className="w-full pl-4 mb-4 space-y-0.5">
            <h1 className="text-2xl font-semibold text-[#fcaf17] w-full text-start flex">
              Best Packages <WiStars className="text-[#f57725]" />
            </h1>
            <p className="text-start w-full text-gray-700 font-semibold">
              Tailor-Made Best Price Packages Just for You
            </p>
          </div>
          <div className="max-w-[1200px] w-full px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {thailandPackages.map((pkg, index) => (
              <Card
                key={index}
                image={pkg.image}
                duration={pkg.duration}
                discount={pkg.discount}
                discountedPrice={pkg.discountedPrice}
                originalPrice={pkg.originalPrice}
                inclusions={pkg.inclusions}
                tag={pkg.tag}
                packageName={pkg.packageName}
                stayDetails={pkg.stayDetails}
                handleModalOpen={() => handleModalOpen(pkg)}
              />
            ))}
          </div>
        </section>
        <section className="flex items-center justify-center flex-col py-16 max-w-[1200px] w-full">
          <div className="w-full pl-4 mb-4 space-y-0.5">
            <h1 className="text-2xl font-semibold text-[#fcaf17] w-full text-start flex">
              Testimonials <WiStars className="text-[#f57725]" />
            </h1>
            <p className="text-start w-full text-gray-700 font-semibold">
              See what our customers have to say
            </p>
          </div>
          <div className="max-w-[1200px] w-full px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial.text}
                author={testimonial.author}
                image={testimonial.image}
              />
            ))}
          </div>
        </section>
        <section className="max-w-[1200px] w-full">
          <FAQSection />
        </section>
        <section className="pb-16">
          <SalesBanner />
        </section>
        <Footer />
      </div>
      {modalState && (
        <Modal
          onClose={() => setModalState(false)}
          selectedPackage={selectedPackage}
        />
      )}
    </>
  );
};

export default Thailand;