import React, { useState } from "react";
import { motion } from "motion/react";
import "./index.css";

interface IGlowingCardProps {
	children?: React.ReactElement;
	width: number;
	height: number;
	/**
	 * 圆角半径：支持 px、rem 等 css 单位
	 */
	borderRadius?: string;
}

export const GlowingCard = (props: IGlowingCardProps) => {
	const { children, borderRadius = "16px", width, height } = props;
	// 定义动画状态（鼠标进入/移出）
	const [isHovered, setIsHovered] = useState(false);
	const handleMouseEnter = () => {
		// console.log("mouse enter");
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		// console.log("mouse leave");
		setIsHovered(false);
	};

	return (
		<motion.div
			className="relative cursor-pointer"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{ width, height }}
		>
			<motion.div
				className="rounded-2xl gamesir-glowing-card"
				style={
					{
						"--rim-angle": "0deg",
						"--border-radius": borderRadius,
					} as React.CSSProperties
				}
				initial={{ scale: 1, opacity: 0 }}
				animate={{
					"--rim-angle": isHovered ? "-52deg" : "0deg",
					opacity: isHovered ? 0.75 : 0,
				}}
				transition={{
					opacity: { duration: 0.2, ease: "linear" },
					"--rim-angle": { duration: 0.4, ease: "easeInOut" },
				}}
			></motion.div>
			<div
				className="w-full h-full absolute overflow-hidden"
				style={{ borderRadius }}
			>
				{children}
			</div>
		</motion.div>
	);
};
