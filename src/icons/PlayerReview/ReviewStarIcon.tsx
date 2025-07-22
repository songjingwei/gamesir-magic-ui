import type { SVGProps } from "react";

const ReviewStarIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="19"
			height="16"
			viewBox="0 0 19 16"
			aria-label="Review Star Icon"
			role="img"
			{...props}
		>
			<title>Review Star Icon</title>
			<desc>Review Star 图标</desc>
			<path
				d="M13.5732 1.47302C14.0203 0.791299 15.0374 0.791228 15.4844 1.47302L15.5713 1.63025L16.0527 2.67322L17.1855 2.81189C18.1609 2.93119 18.5386 4.13502 17.8301 4.79822L16.9912 5.5824L17.2119 6.71521C17.3971 7.66687 16.3878 8.42544 15.5244 7.94177L14.5283 7.38318L13.5332 7.94177C12.6698 8.42544 11.6605 7.66689 11.8457 6.71521L12.0654 5.5824L11.2275 4.79822C10.519 4.13497 10.8965 2.93103 11.8721 2.81189L13.0039 2.67322L13.4863 1.63025L13.5732 1.47302Z"
				fill="currentColor"
				stroke="url(#paint0_linear_2976_12660)"
				stroke-width="1.3"
			/>
			<path
				d="M4.11028 5.58536C4.1365 4.37893 5.55913 3.75972 6.45988 4.56273L7.86618 5.81662C7.89698 5.84408 7.93765 5.85188 7.97288 5.84154L9.76948 5.30775C10.9264 4.96367 11.9457 6.1343 11.4716 7.23166L10.7252 8.9571C10.7094 8.9936 10.7132 9.03817 10.7374 9.07321L11.8076 10.6267C12.4848 11.6113 11.7157 12.9592 10.5078 12.8379L8.64023 12.6507C8.60267 12.647 8.56641 12.6628 8.54352 12.6928L7.40784 14.1872C6.67343 15.1539 5.16284 14.7981 4.90383 13.6315L4.49533 11.79C4.48611 11.7484 4.45614 11.7152 4.41866 11.7019L2.6481 11.072C1.52187 10.6711 1.35983 9.1274 2.40011 8.51517L4.0142 7.5645C4.04595 7.54581 4.06867 7.51044 4.06957 7.46904L4.11028 5.58536Z"
				fill="currentColor"
				stroke="url(#paint1_linear_2976_12660)"
				stroke-width="1.3"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_2976_12660"
					x1="157.889"
					y1="6.42973"
					x2="-36.8432"
					y2="6.42973"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#626C8F" />
					<stop offset="1" stop-color="#10131D" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_2976_12660"
					x1="209.067"
					y1="-75.7753"
					x2="-63.84"
					y2="43.0036"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#626C8F" />
					<stop offset="1" stop-color="#10131D" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default ReviewStarIcon;
