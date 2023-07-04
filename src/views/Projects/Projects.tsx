import { useState } from "react";
import ViewHeader from "../../components/ViewHeader/ViewHeader";
import { playMainButtonClickSound, playSecondaryButtonClickSound } from "../../utils/playSound";
import { projectsData } from "./projectsData";

export default function Projects() {
	const [selected, setSelected] = useState(projectsData[0]);

	const updateSelected = (id: string) => {
		if (id === selected.id) return;
		const newSelected = projectsData.find((project) => project.id === id);
		if (newSelected) {
			playSecondaryButtonClickSound();
			setSelected(newSelected);
		}
	};

	return (
		<div className="flex flex-col h-screen">
			<ViewHeader title="Projects" />
			<main className="flex items-center flex-1">
				<div className="container flex flex-col mx-auto h-2/3 max-h-96 lg:flex-row">
					<div className="p-1 lg:w-1/4 lg:mx-4 rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 background-animate">
						<div className="p-3 text-center bg-gray-800 rounded-xl">
							<div className="h-full overflow-y-auto projects-container">
								{projectsData.map((project) => {
									return (
										<h2
											key={project.id}
											className={`text-2xl cursor-pointer my-3 ${
												project.id === selected.id
													? "animate-text bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent font-black"
													: "hover:text-cyan-100"
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
					<div className="p-1 mt-4 lg:w-3/4 lg:mx-4 rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 background-animate lg:mt-0">
						<div className="w-full h-full p-4 bg-gray-800 rounded-xl">
							<div className="flex flex-row w-full h-full">
								<div className="hidden w-1/2 h-full sm:block">
									<img
										alt={selected.title}
										className="object-cover w-full h-full rounded-xl"
										loading="lazy"
										src={selected.image}
									/>
								</div>
								<div className="flex flex-col items-center ml-3 sm:w-1/2">
									<h2 className="text-2xl font-bold text-center">{selected.title}</h2>
									<div className="flex flex-row flex-wrap justify-center mt-1 lg:mt-6">
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
									<div className="flex flex-col items-center mt-1 lg:mt-6">
										<p className="text-base font-normal text-justify">{selected.description}</p>
									</div>
									<div className="flex flex-row items-end justify-center w-full h-full mt-2">
										<div className="flex flex-col items-center justify-center w-full lg:w-1/2">
											<a
												className="text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2"
												href={selected.liveDemo}
												rel="noreferrer"
												target="_blank"
												onClick={playMainButtonClickSound}
											>
												Live
											</a>
										</div>
										<div className="flex flex-col items-center justify-center w-full lg:w-1/2">
											<a
												className="text-white font-semibold bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2"
												href={selected.sourceCode}
												rel="noreferrer"
												target="_blank"
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
