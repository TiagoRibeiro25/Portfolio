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
	name: string;
	isSelected: boolean;
	onClick: () => void;
}

export interface Project {
	id: `${string}-${string}-${string}-${string}-${string}`;
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
