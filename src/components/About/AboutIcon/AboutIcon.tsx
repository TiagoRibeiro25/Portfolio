import React from "react";
import { IconsProps } from "../../../types/interfaces";
import { playSecondaryButtonClickSound } from "../../../utils/playSound";

export default function AboutIcon(props: IconsProps) {
	let svgContent;

	if (props.name === "Who am I") {
		svgContent = (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				className="w-10 h-10 hover:text-cyan-100"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
				/>
			</svg>
		);
	} else if (props.name === "Skills") {
		svgContent = (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-10 h-10 hover:text-cyan-100"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
				/>
			</svg>
		);
	} else {
		svgContent = (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-10 h-10 hover:text-cyan-100"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
				/>
			</svg>
		);
	}

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
