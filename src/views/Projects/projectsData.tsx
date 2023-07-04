import { Project } from "../../types/interfaces";

export const projectsData: Project[] = [
	{
		id: crypto.randomUUID(),
		title: "Ecoly",
		description:
			"A web application that helps schools manage their eco-schools subjects. It allows schools to easily create new activities, schedule meetings, and track progress towards eco-friendly goals.",
		techStack: ["Vue 3", "Bootstrap", "Scss", "Node.js", "Express", "MySQL", "Pinia", "Vite", "JWT"],
		image: "./imgs/ecoly-pic.webp",
		sourceCode: "https://github.com/TiagoRibeiro25/Ecoly-FrontEnd",
		liveDemo: "https://ecoly.pages.dev/",
	},
	{
		id: crypto.randomUUID(),
		title: "My Portfolio",
		description: "My personal portfolio website made with React and TypeScript.",
		techStack: ["React", "Typescript", "Tailwindcss", "Vite"],
		image: "./imgs/portfolio-pic.webp",
		sourceCode: "https://github.com/TiagoRibeiro25/Portfolio",
		liveDemo: "https://tiagoribeiro.tech/",
	},
	{
		id: crypto.randomUUID(),
		title: "Only Foods (Under Development)",
		description: "Platform to share thoughts and recipes, make discussions, create and join groups about food",
		techStack: ["React", "Typescript", "Tailwindcss", "Node.js", "Express", "MongoDB", "JWT", "Prisma", "Socket.io"],
		image: "./imgs/only-foods-pic.webp",
		sourceCode: "https://github.com/TiagoRibeiro25/Only-Foods-BE",
		liveDemo: "https://onlyfoods.netlify.app/",
	},
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
		title: "Jumper VR",
		description:
			"A school project made with A-Frame, where the theme was a VR project that had to be playable in a browser.",
		techStack: ["A-Frame", "JavaScript", "HTML"],
		image: "./imgs/jumper-pic.webp",
		sourceCode: "https://github.com/xnm-sdksdk/jumper_CPM",
		liveDemo: "https://jumper-cpm.netlify.app/",
	},
	{
		id: crypto.randomUUID(),
		title: "Junk King",
		description: "A school project made with HTML Canvas and JavaScript.",
		techStack: ["HTML", "CSS", "JavaScript"],
		image: "./imgs/junk-king-pic.webp",
		sourceCode: "https://github.com/pedromst2000/PROJETO-01-Eco-Escolas-CPG",
		liveDemo: "https://junk-king.netlify.app/",
	},
];
