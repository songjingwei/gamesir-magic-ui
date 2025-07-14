import { useState } from "react";
import { motion } from "motion/react";

export const GlowingCard = () => {
	// 定义动画状态（鼠标进入/移出）
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			className="relative w-64 h-40 rounded-xl bg-gray-900 flex items-center justify-center"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			// 整体旋转动画（根据鼠标状态切换）
			animate={{
				rotate: isHovered ? 0 : 45, // 初始状态为45deg（移出后恢复），悬停时0deg
			}}
			transition={{
				rotate: {
					type: "spring", // 或 "tween"（线性）
					stiffness: 300, // 弹簧刚度（仅spring类型有效）
					damping: 10, // 阻尼（仅spring类型有效）
					duration: 0.4, // 动画时长（与参数表400ms匹配）
				},
			}}
		>
			{/* 外发光/描边层（伪元素实现） */}
			<div className="absolute inset-0 rounded-xl overflow-hidden">
				<motion.div
					className="absolute inset-0"
					// 外发光动画（同步旋转+不透明度）
					animate={{
						opacity: isHovered ? 1 : 0, // 悬停时不透明度100%，否则0%
						rotate: isHovered ? 0 : 45, // 同步旋转（与外层容器反向？需调整）
					}}
					transition={{
						opacity: { duration: 0.2 }, // 不透明度动画时长200ms（匹配参数表）
						rotate: {
							type: "tween",
							duration: 0.4, // 旋转时长400ms（匹配参数表）
							ease: "cubic-bezier(0.445,0.05,0.55,0.95)", // 自定义缓动
						},
					}}
					style={{
						// 外发光样式（浅蓝色+24px模糊）
						boxShadow: `0 0 24px rgba(173, 216, 230, 0.7)`,
						// 描边样式（可选，若需要额外描边）
						border: "2px solid rgba(173, 216, 230, 0.7)",
					}}
				/>
			</div>

			{/* 内部内容（文字标签） */}
			<span className="text-white text-lg font-medium z-10">
				外发光24px 透明度70%!
			</span>
		</motion.div>
	);
};
