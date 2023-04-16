import React from "react";
import { Link } from "react-router-dom";
import { ViewHeaderProps } from "../../types/interfaces";
import { playPrimaryButtonClickSound } from "../../utils/playSound";

export default function ViewHeader(props: ViewHeaderProps) {
	return (
		<header>
			<div className="w-full flex flex-row pt-4">
				<div className="w-1/2 pl-6">
					<Link to="/" className="inline-flex w-9 h-9">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.8}
							stroke="currentColor"
							className="w-9 h-9 cursor-pointer hover:text-cyan-100"
							onClick={playPrimaryButtonClickSound}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						</svg>
					</Link>
				</div>
				<div className="w-1/2 text-right pr-6">
					<h1 className="text-3xl font-bold">{props.title}</h1>
				</div>
			</div>
		</header>
	);
}
