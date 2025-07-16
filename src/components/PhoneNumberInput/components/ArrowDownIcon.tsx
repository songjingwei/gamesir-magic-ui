import type { SVGProps } from "react";

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 20 20"
			aria-label="Arrow Down Icon"
			role="img"
			{...props}
		>
			<title>Arrow Down Icon</title>
			<desc>Arrow Down 图标</desc>
			<path
				d="M15.2443 6.91076C15.5697 6.58545 16.0969 6.58553 16.4223 6.91076C16.7477 7.23618 16.7477 7.7633 16.4223 8.08874L10.5898 13.9225L10.4628 14.0262C10.3268 14.117 10.1661 14.1666 10.0002 14.1666C9.83427 14.1666 9.67351 14.117 9.53753 14.0262L9.41058 13.9225L3.57806 8.08874C3.25263 7.7633 3.25263 7.2362 3.57806 6.91076C3.90352 6.58559 4.43069 6.58542 4.75604 6.91076L10.0002 12.1549L15.2443 6.91076Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default ArrowDownIcon;
