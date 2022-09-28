import styled from "styled-components";
import { HeaderElem } from "../components/header";
import { FooterElem } from "../components/footer";
import { defColor, btnDark } from "../components/common";

const Main = styled.main`
	max-width: 1100px;
	margin: 2rem auto;

	section:first-child > div {
		background: ${defColor.white};
	}

	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-gap: 2rem;

	section:first-child {
		display: grid;
		grid-template-rows: auto 1fr;
		min-height: calc(100vh - 386px);

		> div {
			padding: 1rem;
		}

		h1 {
			line-height: 4rem;
		}
	}

	.side-bar {
		> div {
			padding: 1rem;
			background: ${defColor.primary};
			color: ${defColor.white};
		}

		display: grid;
		grid-template-rows: auto 1fr;

		button.btn-dark {
			${btnDark}
			line-height:2rem;
			width: 100%;
			margin-top: 0.5rem;
			max-width: 235px;
		}
	}

	@media (max-width: 600px) {
		grid-template-columns: initial;

		section:first-child {
			min-height: auto;
		}
	}
`;

export function About() {
	return (
		<>
			<HeaderElem page="about" />
			<Main>
				<section>
					<div>
						<h1>About Our Organisation</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Officia impedit rerum repellendus eligendi
							reprehenderit eos illum iure laboriosam quia
							sapiente corrupti error, quae modi minima sed id
							dolore temporibus magni sunt, voluptate laudantium!
							Esse debitis reiciendis ducimus nostrum, praesentium
							vitae, ad ipsum temporibus omnis, beatae quae iusto
							error veniam animi?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Fugiat magni nisi ex assumenda officia esse
							ipsa iure doloribus. Voluptatem aperiam saepe sed
							possimus? Excepturi minus quaerat repellendus ex
							nobis id fuga, repellat eos sunt nulla ratione,
							corrupti laborum culpa pariatur delectus neque
							itaque, ea voluptate! Eligendi, rerum repellat nisi
							nemo fuga architecto explicabo repudiandae neque
							voluptatibus illum quos sed. Voluptates delectus qui
							sapiente doloremque vero incidunt minima quibusdam
							hic praesentium quos? Necessitatibus accusantium
							error placeat cupiditate aliquam culpa
							exercitationem voluptatum ex quas perspiciatis,
							cumque autem accusamus sunt veritatis nesciunt,
							provident atque soluta fuga explicabo excepturi
							nemo. Eligendi nihil optio minus earum dignissimos
							temporibus illum obcaecati dicta non deleniti
							assumenda iste ex quae explicabo inventore cum,
							impedit quas fuga officiis ea recusandae. Labore
							atque, ipsum, sint sunt, unde maiores commodi
							necessitatibus minus culpa earum dicta at laborum
							numquam voluptatum quas maxime aspernatur natus. Cum
							voluptate accusamus similique asperiores quae
							consequatur unde!
						</p>
					</div>
				</section>
				<section className="side-bar">
					<div>
						<h2>Join Our Club</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Vel, vitae.
						</p>
						<button className="btn-dark">Join Now</button>
					</div>
				</section>
			</Main>
			<FooterElem />
		</>
	);
}
