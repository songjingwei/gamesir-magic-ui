import "./index.css";
import React, { useState, useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { GlowingCard } from "./components/GlowingCard";
import { NetworkSpeedVisualizer } from "./components/NetworkSpeedVisualizer";
import { PhoneNumberInput } from "./components/PhoneNumberInput"; // 导入 PhoneNumberInput
import { Button } from "./components/ui/button"; // 导入 Button

interface IFormInputs {
	phone: {
		areaCode: string;
		phoneNumber: string;
	};
}

const areaCodes = [
	{ name: "China", code: "+86" },
	{ name: "USA", code: "+1" },
	{ name: "UK", code: "+44" },
];

const Preview: React.FC = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInputs>({
		defaultValues: {
			phone: { areaCode: "+86", phoneNumber: "" },
		},
	});

	const [networkSpeed, setNetworkSpeed] = useState<number>(
		Math.floor(Math.random() * 10000),
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setNetworkSpeed(Math.floor(Math.random() * 100000));
		}, 500);

		return () => clearInterval(interval);
	}, []);

	const onSubmit: SubmitHandler<IFormInputs> = (data) => {
		console.log("Form data submitted:", data);
		alert(`Submitted: ${JSON.stringify(data, null, 2)}`);
	};

	return (
		<div className="min-h-screen bg-gray-950 text-gray-200 p-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{/* GlowingCard display area */}
				<div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-start">
					<h2 className="text-xl font-bold text-white mb-4">Glowing Card</h2>
					<div className="w-full flex justify-center">
						<GlowingCard width={300} height={200}>
							<div className="w-full h-full flex items-center justify-center z-1 text-green-400 bg-[#131a29]">
								你好哇
							</div>
						</GlowingCard>
					</div>
				</div>

				{/* NetworkSpeedVisualizer display area */}
				<div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-start">
					<h2 className="text-xl font-bold text-white mb-4">
						Network Speed Visualizer
					</h2>
					<div className="w-full flex justify-center">
						<NetworkSpeedVisualizer
							speed={networkSpeed}
							maxSpeed={100000}
							width="300px"
							height="200px"
							maxBarHeight={200}
						/>
					</div>
				</div>

				{/* PhoneNumberInput display area */}
				<div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-start">
					<h2 className="text-xl font-bold text-white mb-4">
						Phone Number Input
					</h2>
					<div className="w-full h-[200px] flex justify-center items-center">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="w-[360px] flex flex-col items-center"
						>
							<Controller
								name="phone"
								control={control}
								rules={{
									validate: (value) =>
										(value.phoneNumber && value.phoneNumber.length > 0) ||
										"Phone number is required",
								}}
								render={({ field }) => (
									<PhoneNumberInput
										areaCodes={areaCodes}
										value={field.value}
										onChange={field.onChange}
										placeholder="Enter phone number"
									/>
								)}
							/>
							{errors.phone && (
								<p className="text-red-500 text-xs mt-1">
									{errors.phone.message}
								</p>
							)}
							<Button type="submit" className="mt-4">
								Submit
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
