import React from "react";
import { skillsData } from "./skillsData";

export default function Skills() {
	return (
		<div className="h-full text-white">
			<div className="flex flex-col items-center h-full">
				<header>
					<h1 className="text-2xl font-bold">Skills</h1>
				</header>
				<main className="flex flex-col w-full my-3 overflow-x-hidden overflow-y-auto skills-container max-h-80 lg:flex-row lg:my-0">
					{skillsData.map((section) => (
						<React.Fragment key={section.title}>
							{<hr className="mx-auto border-gray-300 border-opacity-50 lg:hidden w-96" />}
							<div className="flex flex-col items-center w-full h-full mx-2 mt-1 mb-3 lg:w-1/4 lg:mb-0 lg:mt-0">
								<h2 className="mb-2 text-xl font-bold">{section.title}</h2>
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
					<hr className="mx-auto border-gray-300 border-opacity-50 lg:hidden w-96" />
				</main>
			</div>
		</div>
	);
}
