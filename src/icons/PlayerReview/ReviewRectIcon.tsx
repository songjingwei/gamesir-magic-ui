import type { SVGProps } from "react";

const ReviewRectIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="202"
			height="32"
			viewBox="0 0 202 32"
			aria-label="Review Rect Icon"
			role="img"
			{...props}
		>
			<title>Review Rect Icon</title>
			<desc>Review Rect 图标</desc>
			<path
				d="M0 8C0 3.58172 3.58172 0 8 0H199.483C200.785 0 201.74 1.22483 201.422 2.4878L194.38 30.4878C194.157 31.3768 193.357 32 192.441 32H8C3.58172 32 0 28.4183 0 24V8Z"
				fill="url(#paint0_linear_2824_10924)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_2824_10924"
					x1="0"
					y1="16"
					x2="198"
					y2="16"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#10131D" />
					<stop offset="1" stop-color="#626C8F" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default ReviewRectIcon;
