import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import "./index.css";

interface IGlowingCardProps {
	children?: React.ReactElement;
	className?: string;
	width?: number;
	height?: number;
	/**
	 * 光晕旋转角度
	 */
	rimAngle?: string;
	/**
	 * 光晕模糊半径
	 */
	blurRadius?: string;
	/**
	 * hover 时放大倍数
	 */
	hoverScale?: number;
	/**
	 * 圆角半径：支持 px、rem 等 css 单位
	 */
	borderRadius?: string;
}

export const GlowingCard = (props: IGlowingCardProps) => {
	const {
		children,
		width,
		height,
		hoverScale = 1.0,
		borderRadius = "16px",
		rimAngle = "-52deg",
		blurRadius = "24px",
	} = props;
	// 定义动画状态（鼠标进入/移出）
	const [isHovered, setIsHovered] = useState(false);
	const [isEntering, setIsEntering] = useState(false);
	const [isLeaving, setIsLeaving] = useState(false);

	const handleMouseEnter = () => {
		// console.log("mouse enter");
		setIsLeaving(false);
		setIsEntering(true);
		setIsHovered(true);
		setTimeout(() => {
			setIsEntering(false);
		}, 400);
	};
	const handleMouseLeave = () => {
		// console.log("mouse leave");
		setIsEntering(false);
		setIsLeaving(true);
		setIsHovered(false);
		setTimeout(() => {
			setIsLeaving(false);
		}, 400);
	};

	return (
		<motion.div
			className={cn("relative cursor-pointer w-full h-full", props.className)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{
				...(width && { width }),
				...(height && { height }),
			}}
			animate={{ scale: isHovered ? hoverScale : 1 }}
		>
			<motion.div
				className="gamesir-glowing-card"
				style={
					{
						"--rim-angle": "0deg",
						"--border-radius": borderRadius,
						"--blur-radius": blurRadius,
					} as React.CSSProperties
				}
				initial={{ opacity: 0 }}
				animate={{
					"--rim-angle": isHovered ? rimAngle : "0deg",
					opacity: isHovered ? 0.75 : 0,
				}}
				transition={{
					scale: {
						duration: 1.1,
						ease: "easeInOut",
					},
					opacity: {
						duration: (isEntering && 0.2) || (isLeaving && 0.2) || 0.2,
						ease: "linear",
					},
					"--rim-angle": {
						duration: 0.2,
						ease:
							(isEntering && "easeInOut") ||
							(isLeaving && "linear") ||
							"easeInOut",
					},
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
