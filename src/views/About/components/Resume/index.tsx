import { useState } from "react";
import { playMainButtonClickSound } from "../../../../utils/playSound";
import { downloadSvg, downloadedSvg, downloadingSvg } from "./icons";

export default function Resume() {
	const [iconSvg, setIconSvg] = useState<JSX.Element>(downloadSvg);
	const [downloading, setDownloading] = useState(false);

	const downloadResume = async () => {
		setDownloading(true);
		setIconSvg(downloadingSvg);
		playMainButtonClickSound();
		setTimeout(async () => {
			const response = await fetch("/resume.pdf");
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = "resume.pdf";
			a.click();
			setIconSvg(downloadedSvg);
			setDownloading(false);
		}, 500);
	};

	return (
		<div className="h-full text-white">
			<div className="flex flex-col items-center h-full">
				<header>
					<h1 className="text-2xl font-bold">Resume</h1>
				</header>
				<main className="flex flex-col items-center justify-center w-full h-full mb-3">
					<button
						className="w-56 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-800/80 rounded-lg text-sm px-5 py-2.5 text-center font-medium flex flex-row items-center justify-center mt-7"
						disabled={downloading}
						type="button"
						onClick={downloadResume}
					>
						{iconSvg}
						Download Resume
					</button>
					<span className="mt-5 text-sm text-gray-500">Last Updated: 29th August 2023</span>
				</main>
			</div>
		</div>
	);
}
