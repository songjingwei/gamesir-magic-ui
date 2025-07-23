import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { hexToRgba } from "../PhoneNumberInput";

interface IGlowingButtonProps {
	primaryColor: string;
	children: React.ReactNode;
	gapColor?: string;
}

const GlowingButton = ({
	primaryColor,
	gapColor = "#222",
	children,
}: IGlowingButtonProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const startColor = hexToRgba(primaryColor, 0.3);
	const endColor = hexToRgba(primaryColor, 0.6);

	return (
		<motion.div
			className={cn(
				"w-full flex items-center",
				"cursor-pointer p-0.5",
				"text-[#131a29] font-black",
				"border-2 border-solid border-transparent rounded-[20px]",
			)}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			initial={{ "--angle": "0deg" }}
			animate={{
				"--angle": isHovered ? "360deg" : "0deg",
			}}
			transition={{ duration: 2, ease: "linear", repeat: Infinity }}
			style={{
				backgroundClip: "padding-box, border-box",
				backgroundOrigin: "padding-box, border-box",
				boxShadow: "0px 0px 60px 2px rgba(152, 255, 232, 0.30)",
				backgroundColor: "transparent",
				backgroundImage: isHovered
					? `linear-gradient(to right, ${gapColor}, ${gapColor}), conic-gradient(from var(--angle), ${startColor}, ${endColor})`
					: `linear-gradient(to right, ${gapColor}, ${gapColor}), conic-gradient(from 0deg, ${startColor}, ${startColor})`,
			}}
		>
			{children}
		</motion.div>
	);
};

export { GlowingButton };
