import "./index.css";
import type React from "react";
import { GlowingCard } from "./components/GlowingCard";

const Preview: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-950 text-gray-200 p-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{/* GlowingCard display area */}
				<div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
					<h2 className="text-xl font-bold text-white mb-4">Glowing Card</h2>
					<GlowingCard width={300} height={200}>
						<div className="w-full h-full flex items-center justify-center z-1 text-green-400 bg-[#131a29]">
							你好哇
						</div>
					</GlowingCard>
				</div>
				{/* Placeholder 1 */}
				<div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
					<h2 className="text-xl font-bold text-white mb-4">
						Placeholder Component 1
					</h2>
					<div className="w-full h-full flex items-center justify-center text-gray-500">
						未来组件展示区
					</div>
				</div>
				{/* Placeholder 2 */}
				<div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
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
