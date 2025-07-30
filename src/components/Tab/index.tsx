import React, { useState } from "react";
import "./tab.css";
import { cn } from "../../lib/utils";

import LeftSelectedSvg from "../../assets/left_selected.svg";
import RightSelectedSvg from "../../assets/right_selected.svg";

interface Tab {
	title: string;
	content: React.ReactNode;
}

interface TabContainerProps {
	tabs: [Tab, Tab]; // 限定为两个 Tab
	width?: number;
	height?: number;
}

export const TabContainer: React.FC<TabContainerProps> = ({ tabs }) => {
	const [selectedTab, setSelectedTab] = useState(0);

	return (
		<div className="relative rounded-2xl w-full h-full">
			{selectedTab === 0 && (
				<>
					<img
						src={LeftSelectedSvg}
						alt="左侧tab被选中"
						className="absolute inset-0 w-full h-full"
					/>
					<div
						className={cn(
							"absolute left-1/4 -translate-x-1/2 top-1/15 -translate-y-1/2",
							"text-[#dfefff] text-xl font-bold",
						)}
					>
						{tabs[0].title}
					</div>
					{/** biome-ignore lint/a11y/noStaticElementInteractions: <explanation> */}
					{/** biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div
						className={cn(
							"w-1/2 text-center",
							"cursor-pointer",
							"font-bold text-[#dfefff]/65",
							"absolute right-1/4 translate-x-1/2 top-1/15 -translate-y-1/2",
						)}
						onClick={() => setSelectedTab(1)}
					>
						{tabs[1].title}
					</div>
				</>
			)}

			{selectedTab === 1 && (
				<>
					<img
						src={RightSelectedSvg}
						alt="右侧tab被选中"
						className="absolute inset-0 w-full h-full"
					/>
					{/** biome-ignore lint/a11y/noStaticElementInteractions: <explanation> */}
					{/** biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div
						className={cn(
							"w-1/2 text-center",
							"text-[#dfefff] font-bold cursor-pointer",
							"absolute left-1/4 -translate-x-1/2 top-1/15 -translate-y-1/2",
						)}
						onClick={() => setSelectedTab(0)}
					>
						{tabs[0].title}
					</div>
					<div
						className={cn(
							"font-bold text-[#dfefff] text-xl",
							"absolute right-1/4 translate-x-1/2 top-1/15 -translate-y-1/2",
						)}
					>
						{tabs[1].title}
					</div>
				</>
			)}
			<div
				className={cn(
					"absolute top-1/10 left-4 p-5",
					selectedTab === 0 ? "opacity-100" : "opacity-0",
				)}
			>
				{tabs[0].content}
			</div>
			<div
				className={cn(
					"absolute top-1/10 left-4 p-5",
					selectedTab === 1 ? "opacity-100" : "opacity-0",
				)}
			>
				{tabs[1].content}
			</div>
		</div>
	);
};
