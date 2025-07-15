import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface NetworkSpeedVisualizerProps {
	/**
	 * 当前下载速度 (kbps)
	 */
	speed: number;
	/**
	 * 可视化区域的宽度
	 */
	width?: string;
	/**
	 * 可视化区域的高度
	 */
	height?: string;
	/**
	 * 柱子的最大高度 (px)
	 */
	maxBarHeight?: number;
	/**
	 * 柱子的固定宽度 (px)
	 */
	barWidth?: number;
	/**
	 * 柱子之间的间距 (px)
	 */
	barGap?: number;
	/**
	 * 柱子保留的数量
	 */
	maxBars?: number;
	/**
	 * 柱子的颜色，从右往左会逐渐变淡
	 */
	barColor?: string;
	/**
	 * 更新柱子的间隔时间 (ms)
	 */
	updateInterval?: number;
	/**
	 * 最高速度 (kbps)，用于计算柱子高度的基准
	 */
	maxSpeed?: number;
}

interface BarData {
	id: string;
	height: number;
	opacity: number;
}

const NetworkSpeedVisualizer: React.FC<NetworkSpeedVisualizerProps> = ({
	speed,
	width = "100%",
	height = "120px",
	maxBarHeight = 150,
	barWidth = 4,
	barGap = 6,
	maxBars = 32,
	barColor = "#97FDE6", // 接近 Figma 截图中的青绿色
	updateInterval = 300, // 每300ms更新一次柱子
	maxSpeed = 1000000, // 默认最大速度为 1000M/s (转换为 kbps)
}) => {
	const [bars, setBars] = useState<BarData[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// 根据速度计算柱子高度
		const calculateBarHeight = (currentSpeed: number): number => {
			return Math.min((currentSpeed / maxSpeed) * maxBarHeight, maxBarHeight);
		};

		// 根据柱子位置计算透明度
		const calculateOpacity = (index: number, totalBars: number): number => {
			// 从左到右，透明度逐渐提高（越靠左越暗）
			const normalizedIndex = index / (totalBars - 1); // 0 (最左) 到 1 (最右)
			return 0.3 + (1 - 0.3) * normalizedIndex; // 最左边透明度为0.3，最右边完全不透明
		};

		const interval = setInterval(() => {
			setBars((prevBars) => {
				const newBars = [...prevBars];

				// 添加新柱子
				const newBarHeight = calculateBarHeight(speed);
				const newId = Date.now().toString(); // 唯一ID
				newBars.push({ id: newId, height: newBarHeight, opacity: 1 }); // 初始透明度为1

				// 移除超出最大数量的柱子
				if (newBars.length > maxBars) {
					newBars.shift();
				}

				// 更新所有柱子的透明度
				const updatedBars = newBars.map((bar, index) => ({
					...bar,
					opacity: calculateOpacity(index, newBars.length),
				}));

				return updatedBars;
			});
		}, updateInterval);

		return () => clearInterval(interval);
	}, [speed, maxBars, updateInterval, maxBarHeight, maxSpeed]); // 添加 maxSpeed 到依赖项

	return (
		<div
			ref={containerRef}
			className="relative flex items-end overflow-hidden"
			style={{ width, height }}
		>
			<AnimatePresence>
				{bars.map((bar, index) => (
					<motion.div
						key={bar.id}
						className="absolute bottom-0"
						style={{
							width: barWidth,
							backgroundColor: barColor,
							left: `calc(100% - ${barWidth * (bars.length - index) + barGap * (bars.length - index - 1)}px)`, // 从右到左定位
							// 初始位置在最右边，然后向左移动
							opacity: bar.opacity,
						}}
						initial={{ x: barWidth + barGap, height: 0 }} // 初始位置在右侧，高度为0
						animate={{ x: 0, height: bar.height }} // 移动到最终位置，高度动画
						exit={{ x: -(barWidth + barGap), opacity: 0 }} // 移出屏幕时动画
						transition={{
							type: "spring",
							stiffness: 500,
							damping: 30,
							duration: updateInterval / 1000,
						}} // 动画平滑
					/>
				))}
			</AnimatePresence>
		</div>
	);
};

export { NetworkSpeedVisualizer };
