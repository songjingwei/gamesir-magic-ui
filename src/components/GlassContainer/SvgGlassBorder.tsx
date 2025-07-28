import React from 'react';

interface SvgGlassBorderProps {
  width: number;
  height: number;
  borderRadius: number;
  strokeWidth?: number;
}

const SvgGlassBorder: React.FC<SvgGlassBorderProps> = ({
	width,
	height,
	borderRadius,
	strokeWidth = 1,
}) => {
	const halfStroke = strokeWidth / 2;

	// A more readable and maintainable path definition, inspired by SvgGlassTag.
	// It positions the path precisely within the SVG canvas, considering the stroke width.
	const pathD = `M ${borderRadius},${halfStroke}
                   L ${width - borderRadius},${halfStroke}
                   A ${borderRadius},${borderRadius} 0 0 1 ${width - halfStroke},${borderRadius}
                   L ${width - halfStroke},${height - borderRadius}
                   A ${borderRadius},${borderRadius} 0 0 1 ${width - borderRadius},${height - halfStroke}
                   L ${borderRadius},${height - halfStroke}
                   A ${borderRadius},${borderRadius} 0 0 1 ${halfStroke},${height - borderRadius}
                   L ${halfStroke},${borderRadius}
                   A ${borderRadius},${borderRadius} 0 0 1 ${borderRadius},${halfStroke}
                   Z`;

	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="absolute top-0 left-0"
		>
			<title>Glass Container Border</title>
			<defs>
				{/*
          This simplified gradient uses 'objectBoundingBox' units, which makes it
          independent of the component's absolute width and height. The gradient
          direction from top-left (0% 0%) to bottom-right (100% 100%) is
          more intuitive and aligns with the visual design.
        */}
				<linearGradient
					id="glass-border-gradient"
					x1="0%"
					y1="0%"
					x2="100%"
					y2="100%"
					gradientUnits="objectBoundingBox"
				>
					{/* Top-left: Brightest */}
					<stop offset="0%" stopColor="#BAD7F5" stopOpacity="0.8" />
					{/* Mid-point: Darkest, creating the illusion of depth at corners */}
					<stop offset="50%" stopColor="#bad7f5" stopOpacity="0.1" />
					{/* Bottom-right: Medium brightness */}
					<stop offset="100%" stopColor="#BAD7F5" stopOpacity="0.4" />
				</linearGradient>
			</defs>
			<path
				d={pathD}
				stroke="url(#glass-border-gradient)"
				strokeWidth={strokeWidth}
			/>
		</svg>
	);
};

export default SvgGlassBorder;
