
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Construction, Loader } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="flex justify-center mb-6">
          <Construction className="h-16 w-16 text-amber-500 animate-bounce" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">We are working on this</h1>
        
        <div className="w-full bg-gray-200 h-3 rounded-full mb-6 overflow-hidden">
          <div className="bg-amber-500 h-full animate-pulse" style={{ width: '60%' }}></div>
        </div>
        
        <div className="mb-8 py-6">
          <div className="relative">
            <div className="h-40 bg-gradient-to-r from-amber-100 to-amber-200 rounded-lg shadow-md overflow-hidden">
              <div className="absolute top-4 left-4 flex items-center animate-float">
                <Loader className="h-5 w-5 text-amber-700 mr-2 animate-spin" />
                <span className="text-sm text-amber-800 font-medium">Building...</span>
              </div>
              
              {/* Building Silhouettes */}
              <div className="absolute bottom-0 w-full flex justify-center">
                <div className="relative h-24 w-16 bg-amber-800 rounded-t-md mx-1"></div>
                <div className="relative h-28 w-12 bg-amber-900 rounded-t-md mx-1"></div>
                <div className="relative h-20 w-14 bg-amber-700 rounded-t-md mx-1"></div>
                <div className="relative h-32 w-10 bg-amber-800 rounded-t-md mx-1"></div>
              </div>
              
              {/* Animated Construction Crane */}
              <div className="absolute bottom-28 right-10">
                <div className="h-16 w-1 bg-gray-700"></div>
                <div className="h-1 w-12 bg-gray-700 absolute top-0 right-0 origin-left animate-[float_4s_ease-in-out_infinite]"></div>
                <div className="h-3 w-3 bg-red-500 absolute top-0 right-0 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">
          This page is under construction. Our team is hard at work building something amazing!
        </p>
        
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-5 py-3 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition-colors"
        >
          Return to Home
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
