import React from 'react';

interface ProgressBarProps {
  maxValue: number;
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ maxValue, value }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="relative h-4 w-full bg-gray-200 rounded-lg ">
      <div
        className="absolute top-0 left-0 h-full bg-green-500 rounded-lg"
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="absolute top-0 right-0 h-full px-2 flex items-center text-xs text-gray-700">
        {percentage.toFixed(0)}%
      </div>
    </div>
  );
};

export default ProgressBar;
