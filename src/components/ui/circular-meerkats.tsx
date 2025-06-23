
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
          className="absolute top-1/2 left-1/2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
          style={{
            transform: `translate(-50%, -50%)`,
            animation: `meerkat-horizontal-orbit 12s linear infinite`,
            animationDelay: meerkat.delay
          }}
        >
          <div
            className="w-full h-full"
            style={{
              animation: `meerkat-gentle-float 3s ease-in-out infinite`,
              animationDelay: meerkat.delay
            }}
          >
            <img
              src={meerkat.src}
              alt={meerkat.alt}
              className="w-full h-full object-contain drop-shadow-lg hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes meerkat-horizontal-orbit {
          0% {
            transform: translate(-50%, -50%) translateX(-400px);
          }
          25% {
            transform: translate(-50%, -50%) translateX(0px) translateY(-100px);
          }
          50% {
            transform: translate(-50%, -50%) translateX(400px);
          }
          75% {
            transform: translate(-50%, -50%) translateX(0px) translateY(100px);
          }
          100% {
            transform: translate(-50%, -50%) translateX(-400px);
          }
        }
        
        @keyframes meerkat-gentle-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        
        @media (max-width: 768px) {
          @keyframes meerkat-horizontal-orbit {
            0% {
              transform: translate(-50%, -50%) translateX(-250px);
            }
            25% {
              transform: translate(-50%, -50%) translateX(0px) translateY(-80px);
            }
            50% {
              transform: translate(-50%, -50%) translateX(250px);
            }
            75% {
              transform: translate(-50%, -50%) translateX(0px) translateY(80px);
            }
            100% {
              transform: translate(-50%, -50%) translateX(-250px);
            }
          }
        }
      `}</style>
    </div>
  );
};
