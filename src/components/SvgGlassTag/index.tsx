import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ISvgGlassTagProps {
	children: React.ReactNode;
}

const SvgGlassTag = ({ children }: ISvgGlassTagProps) => {
	const [contentWidth, setContentWidth] = useState(0);
	const [contentHeight, setContentHeight] = useState(0);
	const contentRef = useRef<HTMLDivElement>(null);

	const cornerRadius = 8; // 模拟 rounded-lg
	const borderWidth = 1; // 模拟 border-[1px]

	useEffect(() => {
		if (contentRef.current) {
			const { offsetWidth, offsetHeight } = contentRef.current;
			setContentWidth(offsetWidth);
			setContentHeight(offsetHeight);
		}
	}, []);

	// SVG 的实际宽高需要加上边框
	const svgWidth = contentWidth + borderWidth * 2;
	const svgHeight = contentHeight + borderWidth * 2;

	const pathD = `M ${cornerRadius},${borderWidth / 2}
	                L ${svgWidth - cornerRadius},${borderWidth / 2}
	                A ${cornerRadius},${cornerRadius} 0 0,1 ${svgWidth - borderWidth / 2},${cornerRadius}
	                L ${svgWidth - borderWidth / 2},${svgHeight - cornerRadius}
	                A ${cornerRadius},${cornerRadius} 0 0,1 ${svgWidth - cornerRadius},${svgHeight - borderWidth / 2}
	                L ${cornerRadius},${svgHeight - borderWidth / 2}
	                A ${cornerRadius},${cornerRadius} 0 0,1 ${borderWidth / 2},${svgHeight - cornerRadius}
	                L ${borderWidth / 2},${cornerRadius}
	                A ${cornerRadius},${cornerRadius} 0 0,1 ${cornerRadius},${borderWidth / 2}
	                Z`;

	return (
		<svg
			width={svgWidth}
			height={svgHeight}
			viewBox={`0 0 ${svgWidth} ${svgHeight}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Svg Glass Tag</title> {/* 修复 title 错误 */}
			<defs>
				{/* 边框渐变 (模拟 GlassTag 的 border-box 渐变) */}
				<linearGradient
					id="borderGradient"
					x1="0%"
					y1="0%"
					x2="100%"
					y2="100%"
					gradientUnits="objectBoundingBox"
				>
					{/* 左上角最亮 */}
					<stop offset="0%" stopColor="rgba(187, 215, 245, 0.8)" />
					{/* 左下角、右上角最暗，通过中间点过渡 */}
					<stop offset="50%" stopColor="rgba(187, 215, 245, 0.1)" />
					{/* 右下角亮度比左上角暗一半 */}
					<stop offset="100%" stopColor="rgba(187, 215, 245, 0.4)" />
				</linearGradient>
			</defs>
			{/* 外层渐变边框 */}
			<path
				d={pathD}
				stroke="url(#borderGradient)"
				strokeWidth={borderWidth}
				fill="none"
			/>
			{/* 容纳 React children */}
			<foreignObject
				x={borderWidth}
				y={borderWidth}
				width={contentWidth}
				height={contentHeight}
			>
				<div
					ref={contentRef}
					className={cn(
						"flex items-center justify-center",
						"w-fit h-fit bg-[#bad7f5]/10", // 确保 div 宽度和高度适应内容
						"text-[#bad7f5] text-xs",
						"box-border rounded-lg",
						"px-2.5 py-1.5",
						"relative", // for children with absolute positioning
						"whitespace-nowrap", // 防止文本换行
					)}
				>
					{children}
				</div>
			</foreignObject>
		</svg>
	);
};

export { SvgGlassTag };
