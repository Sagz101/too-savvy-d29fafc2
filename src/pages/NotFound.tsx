import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { CosmicPageLayout } from "@/components/layout/CosmicPageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <CosmicPageLayout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">404</h1>
          <p className="text-xl text-white/60 mb-4">Oops! Page not found</p>
          <Link to="/" className="text-purple-400 hover:text-purple-300 underline">
            Return to Home
          </Link>
        </div>
      </div>
    </CosmicPageLayout>
  );
};

export default NotFound;
