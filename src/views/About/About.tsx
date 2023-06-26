import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutIcon from "../../components/About/AboutIcon/AboutIcon";
import Resume from "../../components/About/Resume/Resume";
import Skills from "../../components/About/Skills/Skills";
import WhoAmI from "../../components/About/WhoAmI/WhoAmI";
import ViewHeader from "../../components/ViewHeader/ViewHeader";
import { AboutOptions } from "../../types/types";
import { getSessionStorage } from "../../utils/sessionStorage";

export default function About() {
	const [selected, setSelected] = useState<AboutOptions>("whoAmI");
	const navigate = useNavigate();

	useEffect(() => {
		if (!getSessionStorage("showBtns")) navigate("/");
	}, []);

	return (
		<div className="flex flex-col h-screen">
			<ViewHeader title="About" />
			<main className="flex items-center flex-1">
				<div className="container flex md:flex-row flex-col mx-auto">
					<div className="md:w-1/6 flex md:flex-col items-center justify-center md:space-x-0 space-x-10">
						<AboutIcon isSelected={selected === "whoAmI"} name="whoAmI" onClick={() => setSelected("whoAmI")} />
						<AboutIcon isSelected={selected === "skills"} name="skills" onClick={() => setSelected("skills")} />
						<AboutIcon isSelected={selected === "resume"} name="resume" onClick={() => setSelected("resume")} />
					</div>
					<div className="md:w-5/6 p-1 mx-2 lg:w-3/4 rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 background-animate">
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
