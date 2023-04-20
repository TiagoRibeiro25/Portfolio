import React from "react";
import { useNavigate } from "react-router-dom";
import ViewHeader from "../../components/ViewHeader/ViewHeader";
import { playMainButtonClickSound, playSecondaryButtonClickSound } from "../../utils/playSound";
import { getSessionStorage } from "../../utils/sessionStorage";
import { projectsData } from "./projectsData";

export default function Projects() {
	const navigate = useNavigate();
	const [selected, setSelected] = React.useState(projectsData[0]);

	const updateSelected = (id: string) => {
		if (id === selected.id) return;
		const newSelected = projectsData.find((project) => project.id === id);
		if (newSelected) {
			playSecondaryButtonClickSound();
			setSelected(newSelected);
		}
	};

	React.useEffect(() => {
		if (getSessionStorage("showBtns") !== true) navigate("/");
	}, []);

	return (
		<div className="flex flex-col h-screen">
			<ViewHeader title="Projects" />
			<main className="flex-1 flex items-center">
				<div className="container h-2/3 max-h-96 mx-auto flex md:flex-row flex-col">
					<div className="md:w-1/4 w-full h-full md:mx-4 rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 p-1 background-animate">
						<div className="h-full w-full bg-gray-800 rounded-xl p-3 text-center">
							<div className="overflow-y-auto h-full projects-container">
								{projectsData.map((project) => {
									return (
										<h2
											key={project.id}
											className={`text-2xl cursor-pointer my-3${
												project.id === selected.id
													? " animate-text bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent font-black"
													: " hover:text-cyan-100"
											}`}
											onClick={() => updateSelected(project.id)}
										>
											{project.title}
										</h2>
									);
								})}
							</div>
						</div>
					</div>
					<div className="md:w-3/4 w-full h-full md:mx-4 rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 p-1 background-animate mt-4 md:mt-0">
						<div className="w-full h-full bg-gray-800 rounded-xl p-4">
							<div className="w-full h-full flex flex-row">
								<div className="hidden sm:block w-1/2 h-full">
									<img
										src={selected.image}
										alt={selected.title}
										loading="lazy"
										className="h-full w-full object-cover rounded-xl"
									/>
								</div>
								<div className="sm:w-1/2 w-full h-full flex flex-col items-center ml-3">
									<h2 className="text-2xl font-bold text-center">{selected.title}</h2>
									<div className="flex flex-row flex-wrap justify-center lg:mt-6 mt-1">
										{selected.techStack.map((tech) => {
											return (
												<span
													key={tech}
													className="text-sm font-mono mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 mb-2"
												>
													{tech}
												</span>
											);
										})}
									</div>
									<div className="flex flex-col items-center lg:mt-6 mt-1">
										<p className="text-base font-normal text-justify">{selected.description}</p>
									</div>
									<div className="w-full h-full flex flex-row mt-2 justify-center items-end">
										<div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
											<a
												href={selected.liveDemo}
												target="_blank"
												className="text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2"
												rel="noreferrer"
												onClick={playMainButtonClickSound}
											>
												Live
											</a>
										</div>
										<div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
											<a
												href={selected.sourceCode}
												target="_blank"
												className="text-white font-semibold bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2"
												rel="noreferrer"
												onClick={playMainButtonClickSound}
											>
												Github
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
