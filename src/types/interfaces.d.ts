import { AboutOptions, HomeLinkLinks, HomeLinkName, MainButtonName, ProjectId } from "./types";

export interface HomeLinkProps {
	name: HomeLinkName;
	link: HomeLinkLinks;
	isDisabled: boolean;
}

export interface PlayButtonProps {
	onClick: () => void;
}

export interface QuitButtonProps {
	onClick: () => void;
}

export interface MainButtonProps {
	name: MainButtonName;
	onClick: () => void;
}

export interface ViewHeaderProps {
	title: string;
}

export interface IconsProps {
	name: AboutOptions;
	isSelected: boolean;
	onClick: () => void;
}

export interface SkillGroup {
	title: string;
	skills: string[];
}

export interface Project {
	id: ProjectId;
	title: string;
	description: string;
	techStack: string[];
	image: string;
	sourceCode: string;
	liveDemo: string;
}

export interface SendEmailProps {
	email: string;
	message: string;
}
