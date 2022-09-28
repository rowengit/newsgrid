import styled from "styled-components";
import { defColor, btnPrimary, btnSecondary } from "./common";

import wLogo from "../img/logo_light.png";

const Footer = styled.footer`
	background: ${defColor.dark};
	color: ${defColor.white};
	display: grid;
	grid-template-rows: auto 2rem;
	grid-gap: 1.5rem;
	padding-bottom: 2rem;
	section {
		padding: 2rem 3rem 1rem 3rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 3rem;

		div {
			font-size: 1rem;

			p {
				margin: 1rem 0;
				line-height: 1.5;
			}

			&:nth-child(1) {
				img {
					width: 150px;
				}
			}

			&:nth-child(2) {
				input {
					box-sizing: border-box;
					width: 100%;
					line-height: 1.25rem;
					padding: 0.5rem;
					font-size: 1rem;
				}

				button {
					${btnPrimary}
					margin-top:.5rem;
					line-height: 2rem;
					width: 100%;
				}
			}

			&:nth-child(3) {
				display: grid;
				grid-template-rows: 1fr 4fr;

				ul {
					display: flex;
					flex-direction: column;
					justify-content: space-around;

					li {
						border-bottom: 1px dotted ${defColor.grey};
						line-height: 2rem;
					}
				}
			}

			&:nth-child(4) {
				button {
					${btnSecondary}
					margin-top:.5rem;
					line-height: 2rem;
					width: 100%;
					white-space: nowrap;
					max-width: 160px;
				}
			}
		}
	}

	> p {
		margin: auto 3rem;
		line-height: 3rem;
		font-size: 12px;
		text-align: center;
		background: ${defColor.grey};
	}

	@media (max-width: 600px) {
		grid-template-rows: initial;
		padding-bottom: 1rem;
		section {
			grid-template-columns: initial;
		}
	}
`;

export const FooterElem = () => (
	<Footer>
		<section>
			<div>
				<img src={wLogo} alt="light logo" />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolorum voluptate rem ipsam eveniet corporis voluptatum
					magni temporibus eos eum id.
				</p>
			</div>
			<div>
				<h2>Email Newsletter</h2>
				<p>voluptatum magni temporibus eos eum id.</p>
				<input placeholder="Enter email..."></input>
				<button className="btn-primary">Subscribe</button>
			</div>
			<div>
				<h2>Site Links</h2>
				<ul>
					<li>Help & Support</li>
					<li>Privacy Policy</li>
					<li>About Us</li>
					<li>Contact</li>
				</ul>
			</div>
			<div>
				<h2>Join Our Club</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Placeat, perspiciatis.
				</p>
				<button className="btn-secondary">Join Now</button>
			</div>
		</section>
		<p>Copyright © 2022, All Rights Reserved</p>
	</Footer>
);
