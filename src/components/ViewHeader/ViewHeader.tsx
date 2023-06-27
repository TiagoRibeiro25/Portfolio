import { Link } from "react-router-dom";
import { ViewHeaderProps } from "../../types/interfaces";
import { playPrimaryButtonClickSound } from "../../utils/playSound";

export default function ViewHeader(props: ViewHeaderProps) {
	return (
		<>
			<header>
				<div className="flex flex-row w-full pt-4">
					<div className="w-1/2 pl-6">
						<Link className="inline-flex w-9 h-9" to="/">
							<svg
								className="cursor-pointer w-9 h-9 hover:text-cyan-100"
								fill="none"
								stroke="currentColor"
								strokeWidth={1.8}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								onClick={playPrimaryButtonClickSound}
							>
								<path
									d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</Link>
					</div>
					<div className="w-1/2 pr-6 text-right">
						<h1 className="text-3xl font-bold">{props.title}</h1>
					</div>
				</div>
			</header>

			<footer className="fixed bottom-0 right-0 z-10 flex flex-row justify-end w-full p-6">
				<a
					className="inline-flex mx-6 hover:scale-110 transition-transform duration-150 ease-in-out"
					href="https://github.com/TiagoRibeiro25"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fab fa-github scale-150"></i>
				</a>
				<a
					className="inline-flex hover:scale-110 transition-transform duration-150 ease-in-out"
					href="https://www.linkedin.com/in/tiago-ribeiro-85b121220/"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fab fa-linkedin scale-150"></i>
				</a>
			</footer>
		</>
	);
}
