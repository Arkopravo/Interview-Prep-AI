
import React from "react";

const SpinnerLoader = () => {
  return (
    <div role="status" className="flex items-center">
      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SpinnerLoader;
