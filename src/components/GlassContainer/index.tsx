import type React from "react";
import { useRef, useState, useEffect } from "react";
import SvgGlassBorder from "./SvgGlassBorder";
import { cn } from "../../lib/utils";

interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	borderRadius?: number;
}

const GlassContainer: React.FC<GlassContainerProps> = ({
	children,
	className,
	style,
	borderRadius = 8,
	onClick,
	onKeyDown,
	tabIndex,
	role,
	...rest
}) => {
	const divRef = useRef<HTMLDivElement>(null);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const currentRef = divRef.current;
		if (!currentRef) return;

		const observer = new ResizeObserver((entries) => {
			for (const _entry of entries) {
				setDimensions({
					width: currentRef.offsetWidth,
					height: currentRef.offsetHeight,
				});
			}
		});

		observer.observe(currentRef);

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: <explanation>
		<div
			ref={divRef}
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>); // Cast to unknown first
				}
				onKeyDown?.(e);
			}}
			tabIndex={tabIndex ?? (onClick ? 0 : undefined)}
			role={role ?? (onClick ? "button" : undefined)}
			className={cn(
				"p-2",
				"rounded-lg",
				"relative overflow-hidden",
				onClick ? "cursor-pointer" : "", // Only apply cursor-pointer if onClick is present
				"bg-[#bad7f5]/10 hover:bg-[#bad7f5]/15 active:bg-[#bad7f5]/20 backdrop-filter backdrop-blur-lg",
				"text-[#bad7f5]",
				"shadow-[0_0_5px_rgba(186,215,245,0.1)]", // 调整阴影效果，使其更柔和
				className || "",
			)}
			style={{
				...style,
				borderRadius: `${borderRadius}px`,
			}}
			{...rest}
		>
			{dimensions.width > 0 && dimensions.height > 0 && (
				<SvgGlassBorder
					width={dimensions.width}
					height={dimensions.height}
					borderRadius={borderRadius}
				/>
			)}
			<div className="relative h-full z-10">{children}</div>
		</div>
	);
};

export { GlassContainer };
