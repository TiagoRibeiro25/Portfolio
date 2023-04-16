import React from "react";
import { Link } from "react-router-dom";
import { HomeLinkProps } from "../../types/interfaces";
import { playPrimaryButtonClickSound } from "../../utils/playSound";

export default function HomeLink(props: HomeLinkProps) {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<div className="w-full flex flex-row justify-center items-center mt-6">
			<div className="sm:w-1/3 w-1/4 flex justify-end items-center">
				{!props.isDisabled && (
					<img
						src="./imgs/pointing_hand.webp"
						alt="Pointing hand"
						loading="lazy"
						className={isHovered ? "isHoveredLeft" : "isNotHovered"}
						width={40}
					/>
				)}
			</div>
			<div className="sm:w-1/3 w-1/2 text-center">
				<Link
					to={props.link}
					className={`text-4xl font-bold text-center cursor-pointer hover:text-cyan-100
					${props.isDisabled ? " disabled text-gray-400" : ""}`}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					onClick={playPrimaryButtonClickSound}
				>
					{props.name}
				</Link>
			</div>

			<div className="sm:w-1/3 w-1/4 flex justify-start items-center">
				{!props.isDisabled && (
					<img
						src="./imgs/pointing_hand.webp"
						alt="Pointing hand"
						loading="lazy"
						className={isHovered ? "isHoveredRight" : "isNotHovered"}
						width={40}
					/>
				)}
			</div>
		</div>
	);
}
