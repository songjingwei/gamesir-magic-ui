import React from 'react';

interface SvgCircleBorderProps {
  size: number;
  strokeWidth?: number;
}

const SvgCircleBorder: React.FC<SvgCircleBorderProps> = ({
  size,
  strokeWidth = 1,
}) => {
  const radius = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0"
    >
      <title>Circle Glass Container Border</title>
      <defs>
        <linearGradient
          id="circle-glass-border-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#BAD7F5" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#bad7f5" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#BAD7F5" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        stroke="url(#circle-glass-border-gradient)"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default SvgCircleBorder;