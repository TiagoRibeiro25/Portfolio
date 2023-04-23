import React from "react";
import { IconsProps } from "../../../types/interfaces";
import { playSecondaryButtonClickSound } from "../../../utils/playSound";
import { options } from "./options";

export default function AboutIcon(props: IconsProps) {
	const svgContent = options[props.name];

	const handleIconClick = () => {
		playSecondaryButtonClickSound();
		props.onClick();
	};

	return (
		<div
			className={`scale-110 w-16 h-16 my-5 rounded-full cursor-pointer  flex items-center justify-center${
				props.isSelected
					? " bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 background-animate"
					: " bg-gray-800"
			}`}
			onClick={handleIconClick}
		>
			<div className="w-14 h-14 my-2 rounded-full bg-gray-800 flex items-center justify-center background-animate">
				{svgContent}
			</div>
		</div>
	);
}
