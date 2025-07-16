import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import ArrowDownIcon from "./components/ArrowDownIcon";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type AreaCode = {
	name: string;
	code: string;
};

type PhoneNumber = {
	areaCode: string;
	phoneNumber: string;
};

type PhoneNumberInputProps = {
	areaCodes: AreaCode[];
	value: PhoneNumber;
	onChange: (value: PhoneNumber) => void;
	className?: string;
	placeholder?: string;
	activeColor?: string;
	hoverColor?: string;
	isError?: boolean; // 新增属性，表示是否处于错误状态
	errorColor?: string; // 新增属性，错误颜色
};

/**
 * 将 Hex 颜色转换为带透明度的 RGBA 字符串
 * @param {string} hex - Hex 颜色（支持 #RRGGBB、#RGB 或无 # 号的 RRGGBB/RGB）
 * @param {number} alpha - 透明度（0-1，可选，默认 0.5）
 * @returns {string} RGBA 字符串（如 rgba(255, 0, 0, 0.5)）
 */
function hexToRgba(hex: string, alpha = 0.5) {
	// 清理输入：去除 # 号，统一为小写
	hex = hex.replace(/^#/, "").toLowerCase();

	// 处理 3 位 Hex（扩展为 6 位）
	if (hex.length === 3) {
		hex = hex
			.split("")
			.map((c) => c + c)
			.join("");
	}

	// 验证 Hex 有效性（必须是 6 位十六进制字符）
	if (!/^[0-9a-f]{6}$/.test(hex)) {
		throw new Error("无效的 Hex 颜色值");
	}

	// 提取 RGB 分量并转换为十进制
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	// 验证透明度范围
	if (alpha < 0 || alpha > 1) {
		throw new Error("透明度必须在 0-1 之间");
	}

	// 返回 RGBA 字符串
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
	areaCodes,
	value,
	onChange,
	placeholder = "输入手机号码",
	activeColor = "#BAD7F5",
	hoverColor = "#92D6FF",
	isError = false, // 默认不为错误状态
	errorColor = "#ff614c", // 默认错误颜色
}) => {
	const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
	const [isPhoneNumberHovered, setIsPhoneNumberHovered] = useState(false);

	const handleAreaCodeChange = (areaCode: string) => {
		onChange({ ...value, areaCode });
	};

	const handlePhoneNumberFocus = () => {
		setIsPhoneNumberFocused(true);
	};

	const handlePhoneNumberBlur = () => {
		setIsPhoneNumberFocused(false);
	};

	const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange({ ...value, phoneNumber: e.target.value });
	};

	const selectedAreaCode = areaCodes.find((ac) => ac.code === value.areaCode);

	return (
		<div className="box-border flex flex-row items-center justify-start p-0 relative shrink-0 w-full">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div
						className="bg-[rgba(186,215,245,0.05)] box-border flex flex-row gap-2.5 items-center justify-start px-2.5 py-[9px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 cursor-pointer w-[80px] border border-solid focus:border-[var(--hover-color)] border-[rgba(186,215,245,0.3)] data-[state=open]:border-[var(--hover-color)]"
						style={
							{
								"--hover-color": hoverColor,
								borderRightColor: isError
									? errorColor
									: isPhoneNumberFocused
										? hoverColor
										: isPhoneNumberHovered
											? hoverColor
											: undefined,
								boxShadow: isError
									? "2px 0 0 0 rgba(255, 0, 0, 0.2)"
									: isPhoneNumberFocused
										? `2px 0 0 0 ${hexToRgba(hoverColor, 0.3)}`
										: undefined,
							} as React.CSSProperties
						}
					>
						<div className="absolute inset-0 pointer-events-none rounded-bl-[8px] rounded-tl-[8px]" />
						<div className="flex flex-col font-['Noto_Sans_SC:Regular',_sans-serif] font-normal justify-center items-center leading-[22px] relative shrink-0 text-[#bad7f5] text-base! text-left text-nowrap align-middle">
							{selectedAreaCode?.code || areaCodes[0].code}
						</div>
						<ArrowDownIcon />
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					sideOffset={5}
					align="start"
					className="bg-[#161a25] w-[352px] border border-[rgba(186,215,245,0.3)] rounded-lg shadow-lg text-[#bad7f5] p-1"
				>
					{areaCodes.map((area) => (
						<DropdownMenuItem
							key={area.code}
							onClick={() => handleAreaCodeChange(area.code)}
							className="font-noto font-normal leading-[22px] text-4 text-left text-nowrap cursor-pointer focus:bg-[var(--active-color)]/15 focus:text-[var(--hover-color)] px-2 py-1 rounded"
							style={
								{
									"--active-color": activeColor,
									"--hover-color": hoverColor,
								} as React.CSSProperties
							}
						>
							{area.name} {area.code}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
			<Input
				onMouseEnter={() => setIsPhoneNumberHovered(true)}
				onMouseLeave={() => setIsPhoneNumberHovered(false)}
				className="backdrop-blur-[15px] px-[10px] py-[9px] backdrop-filter basis-0 bg-[rgba(186,215,245,0.05)] grow h-[42px] relative rounded-r-[8px] rounded-l-none shrink-0 border-[1px] text-[16px]! text-[var(--active-color)] placeholder-[rgba(186,215,245,0.3)] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:outline-none focus:border-[var(--hover-color)] border-l-0  border-[rgba(186,215,245,0.3)]"
				style={
					{
						"--active-color": activeColor,
						"--hover-color": hoverColor,
						borderColor: isError
							? errorColor
							: isPhoneNumberFocused
								? hoverColor
								: isPhoneNumberHovered
									? hoverColor
									: undefined,
						boxShadow: isError
							? `0 0 0 2px rgba(255, 0, 0, 0.2)`
							: isPhoneNumberFocused
								? `0 0 0 2px ${hexToRgba(hoverColor, 0.3)}`
								: undefined,
					} as React.CSSProperties
				}
				placeholder={String(isPhoneNumberFocused)}
				onChange={handlePhoneNumberChange}
				onFocus={handlePhoneNumberFocus}
				onBlur={handlePhoneNumberBlur}
			/>
		</div>
	);
};

export { PhoneNumberInput };
