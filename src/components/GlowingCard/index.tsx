import { useState } from "react";
import { motion, useAnimationControls } from "motion/react";
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
	const [isHovered, setIsHovered] = useState(false);
	const controls = useAnimationControls();

	// 解析角度值
	const rimAngleValue = parseFloat(rimAngle);
	const leaveAngle = `${rimAngleValue * 2}deg`;

	const handleMouseEnter = () => {
		setIsHovered(true);
		controls.start({
			"--rim-angle": rimAngle,
			opacity: 0.75,
			transition: {
				duration: 0.2,
				ease: "easeInOut",
			},
		});
	};

	const handleMouseLeave = async () => {
		setIsHovered(false);
		await controls.start({
			"--rim-angle": leaveAngle,
			transition: {
				duration: 0.2,
				ease: "linear",
			},
		});
		await controls.start({
			opacity: 0,
			transition: {
				duration: 0.2,
				ease: "linear",
			},
		});
		// 关键：在动画完成后重置
		controls.set({ "--rim-angle": "0deg" });
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
			transition={{
				scale: {
					duration: 1.1,
					ease: "easeInOut",
				},
			}}
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
				animate={controls}
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
