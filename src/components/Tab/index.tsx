import React, { useState, useRef, useEffect } from "react";
import "./tab.css";

interface Tab {
	title: string;
	content: React.ReactNode;
}

interface TabContainerProps {
	tabs: [Tab, Tab]; // 限定为两个 Tab
	width?: number;
	height?: number;
}

const TAB_HEIGHT = 40;
const TAB_CORNER_RADIUS = 8;
const CONTAINER_CORNER_RADIUS = 12;

export const TabContainer: React.FC<TabContainerProps> = ({
	tabs,
	width = 800,
	height = 400,
}) => {
	const [selectedTab, setSelectedTab] = useState(0);
	const [tabWidths, setTabWidths] = useState<number[]>([]);
	const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const widths = tabRefs.current.map((ref) => ref?.offsetWidth || 0);
		setTabWidths(widths);
	}, [tabs, selectedTab]);

	const getPathD = () => {
		if (tabWidths.length === 0) return "";

		const tabIndex = selectedTab;
		const tabWidth = tabWidths[tabIndex];
		const tabOffset = tabWidths
			.slice(0, tabIndex)
			.reduce((acc, w) => acc + w, 0);

		let path = "";
		if (selectedTab === 0) {
			// Left tab selected
			path = `
        M0,${TAB_HEIGHT}
        H${tabOffset}
        v-${TAB_HEIGHT - TAB_CORNER_RADIUS}
        a${TAB_CORNER_RADIUS},${TAB_CORNER_RADIUS} 0 0 1 ${TAB_CORNER_RADIUS},-${TAB_CORNER_RADIUS}
        h${tabWidth - 2 * TAB_CORNER_RADIUS}
        a${TAB_CORNER_RADIUS},${TAB_CORNER_RADIUS} 0 0 1 ${TAB_CORNER_RADIUS},${TAB_CORNER_RADIUS}
        v${TAB_HEIGHT - TAB_CORNER_RADIUS}
        H${width - CONTAINER_CORNER_RADIUS}
        a${CONTAINER_CORNER_RADIUS},${CONTAINER_CORNER_RADIUS} 0 0 1 ${CONTAINER_CORNER_RADIUS},${CONTAINER_CORNER_RADIUS}
        V${height - CONTAINER_CORNER_RADIUS}
        a${CONTAINER_CORNER_RADIUS},${CONTAINER_CORNER_RADIUS} 0 0 1 -${CONTAINER_CORNER_RADIUS},${CONTAINER_CORNER_RADIUS}
        H0
        V${TAB_HEIGHT}
        Z
      `;
		} else {
			// Right tab selected
			path = `
        M0,${TAB_HEIGHT}
        H${tabOffset}
        v-${TAB_HEIGHT - TAB_CORNER_RADIUS}
        a${TAB_CORNER_RADIUS},${TAB_CORNER_RADIUS} 0 0 1 ${TAB_CORNER_RADIUS},-${TAB_CORNER_RADIUS}
        h${tabWidth - 2 * TAB_CORNER_RADIUS}
        a${TAB_CORNER_RADIUS},${TAB_CORNER_RADIUS} 0 0 1 ${TAB_CORNER_RADIUS},${TAB_CORNER_RADIUS}
        v${TAB_HEIGHT - TAB_CORNER_RADIUS}
        H${width}
        V${height - CONTAINER_CORNER_RADIUS}
        a${CONTAINER_CORNER_RADIUS},${CONTAINER_CORNER_RADIUS} 0 0 1 -${CONTAINER_CORNER_RADIUS},${CONTAINER_CORNER_RADIUS}
        H0
        V${TAB_HEIGHT}
        Z
      `;
		}
		return path.replace(/\s+/g, " ").trim();
	};

	return (
		<div className="tab-container-wrapper" style={{ width, height }}>
			<svg className="tab-container-svg" width={width} height={height}>
				<title>Tab Container</title>
				<defs>
					<linearGradient id="tab-fill" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#2E3A4D" />
						<stop offset="100%" stopColor="#1C2533" />
					</linearGradient>
					<filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
						<feDropShadow
							dx="0"
							dy="2"
							stdDeviation="4"
							floodColor="#000000"
							floodOpacity="0.3"
						/>
					</filter>
				</defs>
				<path
					d={getPathD()}
					fill="url(#tab-fill)"
					stroke="#4A5568"
					strokeWidth="1"
					filter="url(#shadow)"
				/>
			</svg>
			<div className="tabs-list" style={{ height: TAB_HEIGHT }}>
				{tabs.map((tab, index) => (
					<button
						key={tab.title}
						ref={(el) => {
							tabRefs.current[index] = el;
						}}
						className={`tab-button ${selectedTab === index ? "selected" : ""}`}
						onClick={() => setSelectedTab(index)}
						type="button"
					>
						{tab.title}
					</button>
				))}
			</div>
			<div
				className="tab-content-wrapper"
				style={{ top: TAB_HEIGHT, height: height - TAB_HEIGHT }}
			>
				{tabs[selectedTab].content}
			</div>
		</div>
	);
};
