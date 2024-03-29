import { Link } from "react-router-dom";
import { playMainButtonClickSound } from "../../utils/playSound";

const NotFound: React.FC = (): React.JSX.Element => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="container max-w-2xl p-1 mx-4 sm:mx-0 rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 background-animate">
				<div className="w-full h-full p-12 bg-gray-800 rounded-xl">
					<header>
						<h1 className="text-5xl font-black text-center text-transparent animate-text bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 bg-clip-text">
							Not Found 404
						</h1>
					</header>
					<hr className="mt-6" />
					<main className="mt-10">
						<p className="text-center text-gray-400">Unless you are a developer, you should not be here.</p>
						<p className="text-center text-gray-400">If you are a developer, you should know what to do.</p>
						<p className="text-center text-gray-400">If you don&rsquo;t, you should probably leave.</p>

						<Link className="flex items-center justify-center" to="/">
							<button
								className="w-56 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-800/80 rounded-lg text-sm px-5 py-2.5 text-center font-medium flex flex-row items-center justify-center mt-7"
								type="button"
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
};

export default NotFound;
