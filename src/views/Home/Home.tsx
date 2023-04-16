import React from "react";
import "../../assets/styles/background.css";
import HomeLink from "../../components/HomeLink/HomeLink";
import MainButton from "../../components/MainButton/MainButton";
import { playBackgroundMusic, stopBackgroundMusic } from "../../utils/playSound";
import { getSessionStorage, setSessionStorage } from "../../utils/sessionStorage";

export default function Home() {
	const buttons = [
		{
			name: "About",
			link: "/about",
			isDisabled: false,
		},
		{
			name: "Projects",
			link: "/projects",
			isDisabled: false,
		},
		{
			name: "Contact",
			link: "/contact",
			isDisabled: false,
		},
		{
			name: "Settings",
			link: "/settings",
			isDisabled: true,
		},
	];

	const fullName = "Tiago Ribeiro";
	const [name, setName] = React.useState("");
	const [showBtns, setShowBtns] = React.useState(getSessionStorage("showBtns") || false);

	const handlePlayClick = () => {
		playBackgroundMusic();
		setShowBtns(true);
	};

	const handleQuitClick = () => {
		stopBackgroundMusic();
		setShowBtns(false);
	};

	React.useEffect(() => {
		let i = 0;
		const interval = setInterval(() => {
			setName(fullName.substring(0, i));
			i++;
			if (i > fullName.length) clearInterval(interval);
		}, 150);
	}, []);

	React.useEffect(() => {
		setSessionStorage("showBtns", showBtns);
	}, [showBtns]);

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="container sm:mx-0 mx-4 max-w-2xl rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 p-1 background-animate">
				<div className="h-full w-full bg-gray-800 rounded-xl p-12">
					<header>
						<h1 className="text-4xl font-bold text-center">
							Hi, I&rsquo;m{" "}
							<span className="animate-text bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent text-5xl font-black">
								{name}
							</span>
						</h1>
					</header>
					<hr className="mt-6" />
					<main className="mt-10">
						{showBtns ? (
							<>
								{buttons.map((button) => (
									<HomeLink
										key={button.name}
										name={button.name}
										link={button.link}
										isDisabled={button.isDisabled}
									/>
								))}
								<MainButton name="Quit" onClick={handleQuitClick} />
							</>
						) : (
							<MainButton name="Play" onClick={handlePlayClick} />
						)}
					</main>
				</div>
			</div>
		</div>
	);
}
