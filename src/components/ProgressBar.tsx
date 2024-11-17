import React from "react";

const ProgressBar: React.FC<{progress: number}> = ({progress}) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-3">
      <div
        className="bg-blue-500 h-3 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
