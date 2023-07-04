import { useState } from "react";
import AboutIcon from "../../components/About/AboutIcon/AboutIcon";
import Resume from "../../components/About/Resume/Resume";
import Skills from "../../components/About/Skills/Skills";
import WhoAmI from "../../components/About/WhoAmI/WhoAmI";
import ViewHeader from "../../components/ViewHeader/ViewHeader";
import { AboutOptions } from "../../types/types";

export default function About() {
	const [selected, setSelected] = useState<AboutOptions>("whoAmI");

	return (
		<div className="flex flex-col h-screen">
			<ViewHeader title="About" />
			<main className="flex items-center flex-1">
				<div className="container flex flex-col mx-auto md:flex-row">
					<div className="flex items-center justify-center space-x-10 md:w-1/6 md:flex-col md:space-x-0">
						<AboutIcon isSelected={selected === "whoAmI"} name="whoAmI" onClick={() => setSelected("whoAmI")} />
						<AboutIcon isSelected={selected === "skills"} name="skills" onClick={() => setSelected("skills")} />
						<AboutIcon isSelected={selected === "resume"} name="resume" onClick={() => setSelected("resume")} />
					</div>
					<div className="p-1 mx-2 md:w-5/6 lg:w-3/4 rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 background-animate">
						<div className="w-full h-full p-3 bg-gray-800 rounded-xl">
							{selected === "whoAmI" && <WhoAmI />}
							{selected === "skills" && <Skills />}
							{selected === "resume" && <Resume />}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
