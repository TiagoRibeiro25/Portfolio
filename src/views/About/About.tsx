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
	const [selected, setSelected] = React.useState<AboutOptions>("Who am I");
	const navigate = useNavigate();

	React.useEffect(() => {
		if (getSessionStorage("showBtns") !== true) navigate("/");
	}, []);

	return (
		<div className="flex flex-col h-screen">
			<ViewHeader title="About" />
			<main className="flex-1 flex items-center">
				<div className="container mx-auto flex flex-row">
					<div className="w-1/6 flex items-center justify-center flex-col">
						<AboutIcon
							name="Who am I"
							isSelected={selected === "Who am I"}
							onClick={() => setSelected("Who am I")}
						/>
						<AboutIcon name="Skills" isSelected={selected === "Skills"} onClick={() => setSelected("Skills")} />
						<AboutIcon name="Resume" isSelected={selected === "Resume"} onClick={() => setSelected("Resume")} />
					</div>
					<div className="lg:w-3/4 w-5/6 mx-2 rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 p-1 background-animate">
						<div className="h-full w-full bg-gray-800 rounded-xl p-3">
							{selected === "Who am I" && <WhoAmI />}
							{selected === "Skills" && <Skills />}
							{selected === "Resume" && <Resume />}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
