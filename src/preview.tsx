import "./index.css";
import React, { useState, useEffect } from "react"; // 导入 useState 和 useEffect
import { GlowingCard } from "./components/GlowingCard";
import { NetworkSpeedVisualizer } from "./components/NetworkSpeedVisualizer"; // 导入 NetworkSpeedVisualizer

const Preview: React.FC = () => {
	const [networkSpeed, setNetworkSpeed] = useState<number>(
		Math.floor(Math.random() * 10000),
	); // 初始化一个随机速度

	useEffect(() => {
		const interval = setInterval(() => {
			setNetworkSpeed(Math.floor(Math.random() * 100000)); // 每 500ms 更新一次随机速度
		}, 500);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="min-h-screen bg-gray-950 text-gray-200 p-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{/* GlowingCard display area */}
				<div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
					<h2 className="text-xl font-bold text-white mb-4">Glowing Card</h2>
					<GlowingCard width={300} height={200}>
						<div className="w-full h-full flex items-center justify-center z-1 text-green-400 bg-[#131a29]">
							你好哇
						</div>
					</GlowingCard>
				</div>
				{/* NetworkSpeedVisualizer display area */}
				<div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
					<h2 className="text-xl font-bold text-white mb-4">
						Network Speed Visualizer
					</h2>
					<NetworkSpeedVisualizer
						speed={networkSpeed}
						maxSpeed={100000}
						width="300px"
						height="200px"
						maxBarHeight={200}
					/>
					{/* 传入随机速度 */}
				</div>
				{/* Placeholder 2 */}
				<div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
					<h2 className="text-xl font-bold text-white mb-4">
						Placeholder Component 2
					</h2>
					<div className="w-full h-full flex items-center justify-center text-gray-500">
						未来组件展示区
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
