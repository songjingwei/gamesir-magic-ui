import "./index.css";
import React from "react";
import { GlowingCard } from "./components/GlowingCard";

const Preview: React.FC = () => {
	return (
		<div>
			<div className="text-red-600">
				<h2>GlowingCard</h2>
				<GlowingCard />
			</div>
		</div>
	);
};

export default Preview;
