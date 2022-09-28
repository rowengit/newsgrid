import styled from "styled-components";
import Logo from "../img/logo.png";
import { useState } from "react";
import { defColor, btnPrimary } from "./common";
import { Link } from "react-router-dom";

const Header = styled.header`
	background: ${defColor.white};

	.content {
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;

		padding: 1rem 2rem;

		div,
		ul {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		li {
			margin: 0 0.25rem;
			color: ${defColor.grey};
			padding: 1rem;

			&.active {
				${btnPrimary}
			}
		}

		.logo {
			width: 180px;
		}

		@media (max-width: 768px) {
			display: block;
			> div:first-child {
				margin-bottom: 1rem;
			}
		}
	}
`;

export const HeaderElem = () => {
	const [page, setPage] = useState("home");
	return (
		<Header>
			<div className="content">
				<Link to="/">
					<img className="logo" src={Logo} alt="logo" />
				</Link>
				<div>
					<ul>
						<li
							className={page === "home" ? "active" : ""}
							onClick={() => setPage("home")}>
							Home
						</li>
						<li
							className={page === "about" ? "active" : ""}
							onClick={() => setPage("about")}>
							About
						</li>
					</ul>
				</div>
			</div>
		</Header>
	);
};
