import { Project } from "../../types/interfaces";

export const projectsData: Project[] = [
	{
		id: crypto.randomUUID(),
		title: "Easy Wallet (WIP)",
		description: "Easy Wallet is a web application that allows you to manage your expenses and incomes.",
		techStack: ["Vue 3", "Tailwind", "Typescript", "Vite", "Goolang", "Echo"],
		image: "./imgs/easy-wallet-pic.webp",
		sourceCode: "https://github.com/TiagoRibeiro25/Easy-Wallet-FE",
		liveDemo: "https://easy-wallet-fe.onrender.com/",
	},
	{
		id: crypto.randomUUID(),
		title: "Only Foods",
		description: "Platform to share thoughts and recipes, make discussions, create and join groups about food",
		techStack: [
			"React",
			"Tailwind",
			"Typescript",
			"Express",
			"Postgresql",
			"Redis",
			"MongoDB",
			"Prisma",
			"Socket.io",
		],
		image: "./imgs/only-foods-pic.webp",
		sourceCode: "https://github.com/TiagoRibeiro25/Only-Foods-docs",
		liveDemo: "https://onlyfoods.onrender.com/",
	},
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
		title: "Junk King II",
		description:
			"A school project made with Three.js, where the theme was a 3D animation that had to be playable in a browser.",
		techStack: ["A-Frame", "JavaScript", "HTML"],
		image: "./imgs/junk-king-ii-pic.png",
		sourceCode: "https://github.com/TiagoRibeiro25/Junk-King-II",
		liveDemo: "https://junkkingii.netlify.app/",
	},
];
