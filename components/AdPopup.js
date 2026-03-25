'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';

export default function AdPopup() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 5 minutes (300000 milliseconds)
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 300);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <>
      {/* Clickable Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Full Image Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full h-full max-w-4xl max-h-[90vh] animate-scale-in"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute -top-12 right-0 z-10 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Close ad"
          >
            <IoMdClose className="w-6 h-6 text-gray-700" />
          </button>

          {/* Full Image */}
          <Image
            src="/images/ad.jpg"
            alt="Special Offer"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
