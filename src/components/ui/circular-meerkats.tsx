
import React from 'react';

interface CircularMeerkatsProps {
  className?: string;
}

export const CircularMeerkats: React.FC<CircularMeerkatsProps> = ({ className = "" }) => {
  const meerkats = [
    {
      src: "/lovable-uploads/635996b1-2703-42ea-b9bf-1cd4216e0361.png",
      alt: "Tech Meerkat with laptop and goggles",
      delay: "0s"
    },
    {
      src: "/lovable-uploads/ff79e23b-b902-42a3-a11e-49c11b6b512e.png",
      alt: "Meerkat with VR goggles and wristwatch",
      delay: "2s"
    },
    {
      src: "/lovable-uploads/329a8c68-d4e0-41ff-8f13-1d3935f99ad9.png",
      alt: "Meerkat with tablet showing blockchain interface",
      delay: "4s"
    },
    {
      src: "/lovable-uploads/c2e32ff7-7815-455f-a45e-46f719ed0eec.png",
      alt: "Meerkat with VR goggles sitting",
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
