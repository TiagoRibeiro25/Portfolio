import { useState } from "react";
import { MainButtonProps } from "../../types/interfaces";
import { playMainButtonClickSound } from "../../utils/playSound";

export default function MainButton(props: MainButtonProps) {
	const [isHovered, setIsHovered] = useState(false);

	const handleClick = () => {
		playMainButtonClickSound();
		props.onClick();
	};

	return (
		<div className="flex flex-row items-center justify-center w-full mt-6">
			<div className="flex items-center justify-end w-1/3">
				<img
					alt="Pointing hand"
					className={isHovered ? "isHoveredLeft" : "isNotHovered"}
					loading="lazy"
					src="./imgs/pointing_hand.webp"
					width={40}
				/>
			</div>
			<div className="w-1/3 text-center">
				<button
					className="text-4xl font-bold text-center cursor-pointer hover:text-cyan-100"
					onClick={handleClick}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					{props.name}
				</button>
			</div>
			<div className="flex items-center justify-start w-1/3">
				<img
					alt="Pointing hand"
					className={isHovered ? "isHoveredRight" : "isNotHovered"}
					loading="lazy"
					src="./imgs/pointing_hand.webp"
					width={40}
				/>
			</div>
		</div>
	);
}
