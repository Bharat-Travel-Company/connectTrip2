import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Modal } from "../pages/Kashmir";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalState, setModalState] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleModalOpen = (pkg) => {
    setSelectedPackage(pkg);
    setModalState(true);
  };

  const handleModalClose = () => {
    setModalState(false);
    setSelectedPackage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full lg:h-[calc(100vh)] md:h-[calc(100vh-2.5rem)] h-[calc(100vh-16rem)] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          loading="lazy"
          fetchPriority="high"
          srcSet={`${data[currentIndex].image}?width=100 100w, 
           ${data[currentIndex].image}?width=200 200w, 
           ${data[currentIndex].image}?width=400 400w, 
           ${data[currentIndex].image}?width=800 800w`}
          sizes="(max-width: 100px) 100w,
         (max-width: 200px) 200w,
         (max-width: 400px) 400w,
         (max-width: 800px) 800w"
          className="w-full h-full object-cover"
          src={data[currentIndex].image}
          alt="Carousel"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center bg-black bg-opacity-40">
          <div className="flex flex-col items-center justify-center absolute md:top-[40%] top-[35%]">
            <h1 className="text-white lg:text-6xl md:text-4xl text-3xl font-bold mb-4">
              {data[currentIndex].packageName}
            </h1>
            <h3 className="text-white text-2xl font-semibold">
              {data[currentIndex].duration}
            </h3>
            <div className="flex items-center my-[15px] min-h-[1px] min-w-[70vw] bg-gradient-to-r from-[hsla(0,0%,100%,.05)] via-white to-[hsla(0,0%,88%,.05)]"></div>
            <div className="font-semibold flex items-center gap-2">
              <span className="text-3xl text-red-300 font-semibold line-through decoration-current my-auto">
                {data[currentIndex].originalPrice}
              </span>
              <span className="text-3xl text-white">
                {data[currentIndex].discountedPrice}
              </span>
            </div>
            <div className="flex items-center gap-x-1 bg-[#F37002] md:px-4 px-2.5 rounded-3xl md:py-2 py-2 md:text-base text-xs mt-4">
              <button
                className="text-[#F7F7F7] font-semibold uppercase"
                onClick={() => handleModalOpen(data[currentIndex])}
              >
                Check Offers
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 cursor-pointer"
        onClick={prevImage}
      >
        <div className="flex items-center justify-center box-border bg-black/50 border border-[#e0e0e0] rounded-full lg:size-12 size-8">
          <FaChevronLeft className="text-white lg:text-2xl md:text-xl text-lg" />
        </div>
      </div>
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 cursor-pointer"
        onClick={nextImage}
      >
        <div className="flex items-center justify-center box-border bg-black/50 border border-[#e0e0e0] rounded-full lg:size-12 size-8">
          <FaChevronRight className="text-white lg:text-2xl md:text-xl text-lg" />
        </div>
      </div>

      {/* Render Modal */}
      {modalState && (
        <Modal
          isOpen={modalState}
          onClose={handleModalClose}
          packageDetails={selectedPackage}
        />
      )}
    </div>
  );
};

export default Carousel;