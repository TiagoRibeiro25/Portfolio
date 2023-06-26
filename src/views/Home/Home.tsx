import { useEffect, useState } from "react";
import "../../assets/styles/background.css";
import HomeLink from "../../components/HomeLink/HomeLink";
import MainButton from "../../components/MainButton/MainButton";
import { playBackgroundMusic, stopBackgroundMusic } from "../../utils/playSound";
import { getSessionStorage, setSessionStorage } from "../../utils/sessionStorage";
import { buttons } from "./buttons";

export default function Home() {
	const fullName = "Tiago Ribeiro";
	const [name, setName] = useState("");
	const [showBtns, setShowBtns] = useState(getSessionStorage("showBtns") || false);

	const handlePlayClick = () => {
		playBackgroundMusic();
		setShowBtns(true);
	};

	const handleQuitClick = () => {
		stopBackgroundMusic();
		setShowBtns(false);
	};

	useEffect(() => {
		let i = 0;
		const interval = setInterval(() => {
			setName(fullName.substring(0, i));
			i++;
			if (i > fullName.length) clearInterval(interval);
		}, 150);
	}, []);

	useEffect(() => {
		setSessionStorage("showBtns", showBtns);
	}, [showBtns]);

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="container max-w-2xl p-1 mx-4 sm:mx-0 rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 background-animate">
				<div className="w-full h-full p-12 bg-gray-800 rounded-xl">
					<header>
						<h1 className="text-4xl font-bold text-center">
							Hi, I&rsquo;m{" "}
							<span className="text-5xl font-black text-transparent animate-text bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 bg-clip-text">
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
										isDisabled={button.isDisabled}
										link={button.link}
										name={button.name}
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
