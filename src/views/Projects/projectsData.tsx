import { Project } from "../../types/interfaces";

export const projectsData: Project[] = [
	{
		id: crypto.randomUUID(),
		title: "Manage Quotes",
		description:
			"A simple web app made with React and TypeScript, with a Node.js (Express) backend. It allows you to create, edit, and delete quotes.",
		techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
		image: "./imgs/manage-quotes-pic.webp",
		sourceCode: "https://github.com/TiagoRibeiro25/Manage-Quotes-API-FrontEnd",
		liveDemo: "https://manage-quotes-api.netlify.app/",
	},
	{
		id: crypto.randomUUID(),
		title: "Online Game Shop",
		description:
			"A school project made with HTML, CSS and Javascript, where the theme was an online E-commerce store.",
		techStack: ["HTML", "CSS", "JavaScript"],
		image: "./imgs/online-game-shop-pic.webp",
		sourceCode: "https://github.com/TiagoRibeiro25/TW-Project-2223",
		liveDemo: "https://tsiw-tw-project-2223.netlify.app/",
	},
	{
		id: crypto.randomUUID(),
		title: "Ecoly",
		description:
			"A web application that helps schools manage their eco-schools subjects. It allows schools to easily create new activities, schedule meetings, and track progress towards eco-friendly goals.",
		techStack: ["Vue 3", "Bootstrap", "Scss", "Node.js", "Express", "MySQL"],
		image: "./imgs/ecoly-pic.webp",
		sourceCode: "https://github.com/TiagoRibeiro25/EC-Update",
		liveDemo: "https://ecoly-2023.netlify.app/",
	},
	{
		id: crypto.randomUUID(),
		title: "Guess The Country",
		description: "A simple hangman style game which the objective is to guess the country name.",
		techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
		image: "./imgs/guess-the-country-pic.webp",
		sourceCode: "https://github.com/TiagoRibeiro25/guess",
		liveDemo: "https://guess-country.cyclic.app/",
	},
	{
		id: crypto.randomUUID(),
		title: "Text Translator",
		description: "An online text translator made with React, Express.js and the DEEPL API.",
		techStack: ["React", "Node.js", "Express", "DEEPL API"],
		image: "./imgs/text-translator-pic.webp",
		sourceCode: "https://github.com/TiagoRibeiro25/Translator",
		liveDemo: "https://text-translator.up.railway.app/",
	},
	{
		id: crypto.randomUUID(),
		title: "Email REST API",
		description: "A REST API for sending emails built with Express in Node.js.",
		techStack: ["Node.js", "Express", "MailJet API"],
		image: "./imgs/email-rest-api-pic.webp",
		sourceCode: "https://github.com/TiagoRibeiro25/Send-Email-REST-API",
		liveDemo: "https://send-email-rest-api.onrender.com",
	},
	{
		id: crypto.randomUUID(),
		title: "ER Auto Save",
		description: "An Elden Ring Automatic Backup Save program made with Python and Tkinter.",
		techStack: ["Python", "Tkinter"],
		image: "./imgs/ER-Auto-Save-Pic.webp",
		sourceCode: "https://github.com/TiagoRibeiro25/ER-backup-save",
		liveDemo: "https://github.com/TiagoRibeiro25/ER-backup-save/releases/tag/Release",
	},
];
