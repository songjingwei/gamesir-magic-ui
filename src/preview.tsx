import "./index.css";
import type React from "react";
import { GlowingCard } from "./components/GlowingCard";

const Preview: React.FC = () => {
	return (
		<div>
			<div className="w-screen h-screen flex items-center justify-center bg-black">
				<GlowingCard width={300} height={200}>
					<div className="w-full h-full flex items-center justify-center z-1 text-green-400 bg-[#131a29]">
						你好哇
					</div>
				</GlowingCard>
			</div>
		</div>
	);
};

export default Preview;
