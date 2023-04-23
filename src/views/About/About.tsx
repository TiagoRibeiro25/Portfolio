import React from "react";
import { useNavigate } from "react-router-dom";
import AboutIcon from "../../components/About/AboutIcon/AboutIcon";
import Resume from "../../components/About/Resume/Resume";
import Skills from "../../components/About/Skills/Skills";
import WhoAmI from "../../components/About/WhoAmI/WhoAmI";
import ViewHeader from "../../components/ViewHeader/ViewHeader";
import { AboutOptions } from "../../types/types";
import { getSessionStorage } from "../../utils/sessionStorage";

export default function About() {
	const [selected, setSelected] = React.useState<AboutOptions>("whoAmI");
	const navigate = useNavigate();

	React.useEffect(() => {
		if (!getSessionStorage("showBtns")) navigate("/");
	}, []);

	return (
		<div className="flex flex-col h-screen">
			<ViewHeader title="About" />
			<main className="flex items-center flex-1">
				<div className="container flex flex-row mx-auto">
					<div className="flex flex-col items-center justify-center w-1/6">
						<AboutIcon name="whoAmI" isSelected={selected === "whoAmI"} onClick={() => setSelected("whoAmI")} />
						<AboutIcon name="skills" isSelected={selected === "skills"} onClick={() => setSelected("skills")} />
						<AboutIcon name="resume" isSelected={selected === "resume"} onClick={() => setSelected("resume")} />
					</div>
					<div className="w-5/6 p-1 mx-2 lg:w-3/4 rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 background-animate">
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
