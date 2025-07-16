import React from "react";
import "./index.css"; // 导入样式文件

interface ILightScanEffectProps {
	width?: string;
	height?: string;
	rotate180?: boolean; // 新增属性
	backgroundImage?: string; // 背景图URL
	lightEffect1Image?: string; // 光效1图URL
	lightEffect2Image?: string; // 光效2图URL
}

export const LightScanEffect: React.FC<ILightScanEffectProps> = (props) => {
	const {
		width = "100%",
		height = "100%",
		rotate180 = false,
		backgroundImage,
		lightEffect1Image,
		lightEffect2Image,
	} = props;

	const containerStyle: React.CSSProperties = {
		width: width,
		height: height,
		transform: rotate180 ? "rotate(180deg)" : "none",
		// 使用 CSS 变量来设置背景图片，如果传入了图片 URL
		"--gamesir-background-image": backgroundImage
			? `url(${backgroundImage})`
			: undefined,
		"--gamesir-light-effect-1-image": lightEffect1Image
			? `url(${lightEffect1Image})`
			: undefined,
		"--gamesir-light-effect-2-image": lightEffect2Image
			? `url(${lightEffect2Image})`
			: undefined,
	} as React.CSSProperties; // 类型断言以避免 TypeScript 错误

	// 移除单独的 backgroundStyle, lightEffect1Style, lightEffect2Style

	return (
		<div className="gamesir-light-scan-container" style={containerStyle}>
			<div className="gamesir-background-image"></div>
			<div className="gamesir-light-effect-1"></div>
			<div className="gamesir-light-effect-2"></div>
		</div>
	);
};
