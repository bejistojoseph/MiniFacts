
import React from 'react';

const ModelLoader = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600">Loading 3D model...</p>
      </div>
    </div>
  );
};

export default ModelLoader;
