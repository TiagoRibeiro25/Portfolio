import React from "react";
import { skillsData } from "./skillsData";

export default function Skills() {
	return (
		<div className="text-white h-full">
			<div className="flex flex-col h-full items-center">
				<header>
					<h1 className="text-2xl font-bold">Skills</h1>
				</header>
				<main className="skills-container w-full max-h-80 flex lg:flex-row flex-col lg:my-0 my-3 overflow-y-auto overflow-x-hidden">
					{skillsData.map((section) => (
						<React.Fragment key={section.title}>
							{<hr className="lg:hidden w-96 mx-auto border-gray-300 border-opacity-50" />}
							<div className="w-full lg:w-1/4 h-full flex flex-col items-center lg:mb-0 lg:mt-0 mb-3 mt-1 mx-2">
								<h2 className="text-xl font-bold mb-2">{section.title}</h2>
								<ul className="max-w-md space-y-1.5 text-white list-disc list-inside">
									{section.skills.map((skill) => (
										<li key={skill} className="font-light">
											{skill}
										</li>
									))}
								</ul>
							</div>
						</React.Fragment>
					))}
					<hr className="lg:hidden w-96 mx-auto border-gray-300 border-opacity-50" />
				</main>
			</div>
		</div>
	);
}
