import React from "react";
import { Link } from "react-router-dom";
import { HomeLinkProps } from "../../types/interfaces";
import { playPrimaryButtonClickSound } from "../../utils/playSound";

export default function HomeLink(props: HomeLinkProps) {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<div className="flex flex-row items-center justify-center w-full mt-6">
			<div className="flex items-center justify-end w-1/4 sm:w-1/3">
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
			<div className="w-1/2 text-center sm:w-1/3">
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

			<div className="flex items-center justify-start w-1/4 sm:w-1/3">
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
