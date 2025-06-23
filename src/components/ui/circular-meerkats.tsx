
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
      delay: "3s"
    },
    {
      src: "/lovable-uploads/b23de48a-9198-4249-ab8e-626bb2271b73.png",
      alt: "Meerkat with VR goggles and smartwatch",
      delay: "6s"
    },
    {
      src: "/lovable-uploads/78aaa0dc-715b-45ac-94bb-b85bbeabfcbb.png",
      alt: "Meerkat with VR goggles and blockchain laptop",
      delay: "9s"
    }
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      {meerkats.map((meerkat, index) => (
        <div
          key={index}
          className="absolute top-1/2 left-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
          style={{
            transform: `translate(-50%, -50%)`,
            animation: `meerkat-hero-orbit 16s linear infinite`,
            animationDelay: meerkat.delay
          }}
        >
          <div
            className="w-full h-full"
            style={{
              animation: `meerkat-gentle-float 4s ease-in-out infinite`,
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
      
      <style>{`
        @keyframes meerkat-hero-orbit {
          0% {
            transform: translate(-50%, -50%) translateX(-320px) translateY(-80px);
          }
          25% {
            transform: translate(-50%, -50%) translateX(320px) translateY(-80px);
          }
          50% {
            transform: translate(-50%, -50%) translateX(320px) translateY(80px);
          }
          75% {
            transform: translate(-50%, -50%) translateX(-320px) translateY(80px);
          }
          100% {
            transform: translate(-50%, -50%) translateX(-320px) translateY(-80px);
          }
        }
        
        @keyframes meerkat-gentle-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(3deg);
          }
        }
        
        @media (max-width: 1024px) {
          @keyframes meerkat-hero-orbit {
            0% {
              transform: translate(-50%, -50%) translateX(-250px) translateY(-60px);
            }
            25% {
              transform: translate(-50%, -50%) translateX(250px) translateY(-60px);
            }
            50% {
              transform: translate(-50%, -50%) translateX(250px) translateY(60px);
            }
            75% {
              transform: translate(-50%, -50%) translateX(-250px) translateY(60px);
            }
            100% {
              transform: translate(-50%, -50%) translateX(-250px) translateY(-60px);
            }
          }
        }
        
        @media (max-width: 768px) {
          @keyframes meerkat-hero-orbit {
            0% {
              transform: translate(-50%, -50%) translateX(-180px) translateY(-40px);
            }
            25% {
              transform: translate(-50%, -50%) translateX(180px) translateY(-40px);
            }
            50% {
              transform: translate(-50%, -50%) translateX(180px) translateY(40px);
            }
            75% {
              transform: translate(-50%, -50%) translateX(-180px) translateY(40px);
            }
            100% {
              transform: translate(-50%, -50%) translateX(-180px) translateY(-40px);
            }
          }
        }
      `}</style>
    </div>
  );
};
