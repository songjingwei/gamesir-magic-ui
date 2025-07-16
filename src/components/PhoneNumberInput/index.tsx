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
};

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
	areaCodes,
	value,
	onChange,
	placeholder = "输入手机号码",
	activeColor = "#BAD7F5",
	hoverColor = "#92D6FF",
}) => {
	const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);

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
								borderRightColor: isPhoneNumberFocused ? hoverColor : undefined,
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
				className="backdrop-blur-[15px] px-[10px] py-[9px] backdrop-filter basis-0 bg-[rgba(186,215,245,0.05)] grow h-[42px] relative rounded-r-[8px] rounded-l-none shrink-0 border-[1px] border-[rgba(186,215,245,0.3)] text-[16px]! text-[var(--active-color)] placeholder-[rgba(186,215,245,0.3)] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:outline-none focus:border-[var(--hover-color)] border-l-0"
				style={
					{
						"--active-color": activeColor,
						"--hover-color": hoverColor,
					} as React.CSSProperties
				}
				placeholder={placeholder}
				onChange={handlePhoneNumberChange}
				onFocus={handlePhoneNumberFocus}
				onBlur={handlePhoneNumberBlur}
			/>
		</div>
	);
};

export { PhoneNumberInput };
