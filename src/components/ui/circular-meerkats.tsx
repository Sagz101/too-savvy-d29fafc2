
import React from 'react';

interface CircularMeerkatsProps {
  className?: string;
}

export const CircularMeerkats: React.FC<CircularMeerkatsProps> = ({ className = "" }) => {
  const meerkats = [
    {
      src: "/lovable-uploads/f1073674-f4fa-4377-adeb-edacb2ce0dce.png",
      alt: "Tech Meerkat with VR goggles and tablet",
      delay: "0s"
    },
    {
      src: "/lovable-uploads/20e2529d-8f00-43bd-880d-468848cb0ba1.png",
      alt: "Meerkat with VR goggles and laptop",
      delay: "2s"
    },
    {
      src: "/lovable-uploads/b23de48a-9198-4249-ab8e-626bb2271b73.png",
      alt: "Meerkat with VR goggles and smartwatch",
      delay: "4s"
    },
    {
      src: "/lovable-uploads/78aaa0dc-715b-45ac-94bb-b85bbeabfcbb.png",
      alt: "Meerkat with VR goggles and blockchain laptop",
      delay: "6s"
    }
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      {meerkats.map((meerkat, index) => (
        <div
          key={index}
          className="absolute top-1/2 left-1/2 w-24 h-24 animate-meerkat-orbit"
          style={{
            animationDelay: meerkat.delay,
            transform: `translate(-50%, -50%) rotate(${index * 90}deg) translateX(300px) rotate(-${index * 90}deg)`
          }}
        >
          <img
            src={meerkat.src}
            alt={meerkat.alt}
            className="w-full h-full object-contain drop-shadow-lg hover:scale-110 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};
