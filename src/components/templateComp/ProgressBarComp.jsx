import React from 'react';

const ProgressBarComp = ({
  progressPercentage,
  innerColor,
  outerColor,
  text,
}) => {
  const circumference = 2 * Math.PI * 50;
  const strokeDashoffset =
    circumference - (progressPercentage / 100) * circumference;

  const textX = 60; // Center of the circle
  const textY = 60;

  return (
    <>
      <div className='mb-2'>
        <div className='flex items-center justify-center'>
          <svg className="flex items-center justify-center" width="120" height="120">
            <circle
              stroke={innerColor}
              fill="transparent"
              strokeWidth="10"
              r="50"
              cx="60"
              cy="60"
            />
            <circle
              className="rounded-lg"
              stroke={outerColor}
              fill="transparent"
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              r="50"
              cx="60"
              cy="60"
            />
            <text
              x={textX}
              y={textY}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="20"
              fill="black"
            >
              {progressPercentage}%
            </text>
          </svg>
        </div>
        <div className="text-center text-sm font-semibold text-gray-600">{text}</div>
      </div>
    </>
  );
};

export default ProgressBarComp;
