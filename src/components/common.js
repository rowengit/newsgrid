import { css } from "styled-components";

export const defColor = {
	primary: "#c72727",
	secondary: "#f99500",
	lightGrey: "#eee",
	grey: "#555",
	dark: "#333",
	light: "#f3f3f3",
	white: "#fff",
	tagSports: "#f99500",
	tagEnt: "#a66bbe",
	tagTech: "#009cff"
};

export const btnPrimary = css`
	background-color: ${defColor.primary};
	color: ${defColor.light};

	&:active {
		opacity: 0.6;
	}
`;

export const btnSecondary = css`
	background-color: ${defColor.secondary};
	color: ${defColor.light};

	&:active {
		opacity: 0.6;
	}
`;

export const btnDark = css`
	background-color: ${defColor.dark};
	color: ${defColor.light};

	&:active {
		opacity: 0.6;
	}
`;
