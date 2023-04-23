import { AboutOptions, ProjectId } from "./types";

export interface HomeLinkProps {
	name: string;
	link: string;
	isDisabled: boolean;
}

export interface PlayButtonProps {
	onClick: () => void;
}

export interface QuitButtonProps {
	onClick: () => void;
}

export interface MainButtonProps {
	name: string;
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
