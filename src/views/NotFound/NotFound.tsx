import React from "react";
import { Link } from "react-router-dom";
import { playMainButtonClickSound } from "../../utils/playSound";

export default function NotFound() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="container sm:mx-0 mx-4 max-w-2xl rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 p-1 background-animate">
				<div className="h-full w-full bg-gray-800 rounded-xl p-12">
					<header>
						<h1 className=" text-center animate-text bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent text-5xl font-black">
							Not Found 404
						</h1>
					</header>
					<hr className="mt-6" />
					<main className="mt-10">
						<p className="text-center text-gray-400">Unless you are a developer, you should not be here.</p>
						<p className="text-center text-gray-400">If you are a developer, you should know what to do.</p>
						<p className="text-center text-gray-400">If you don&rsquo;t, you should probably leave.</p>

						<Link to="/" className="flex justify-center items-center">
							<button
								type="button"
								className="w-56 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-800/80 rounded-lg text-sm px-5 py-2.5 text-center font-medium flex flex-row items-center justify-center mt-7"
								onClick={playMainButtonClickSound}
							>
								Return Home
							</button>
						</Link>
					</main>
				</div>
			</div>
		</div>
	);
}
