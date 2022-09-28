import styled from "styled-components";
import { Link } from "react-router-dom";
import { HeaderElem } from "../components/header";
import { FooterElem } from "../components/footer";
import { defColor, btnPrimary } from "../components/common";

import featured from "../img/featured.jpg";
import ent1 from "../img/articles/ent1.jpg";
import ent2 from "../img/articles/ent2.jpg";
import tech1 from "../img/articles/tech1.jpg";
import sports1 from "../img/articles/sports1.jpg";
import tech2 from "../img/articles/tech2.jpg";

const Main = styled.main`
	.banner {
		background: ${defColor.dark};
		position: relative;

		&:before {
			content: "";
			background-image: url(${featured});
			background-position: center center;
			background-size: cover;
			opacity: 0.4;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
		}

		.banner-container {
			display: grid;
			grid-template-columns: 2fr 1fr;
			justify-content: center;
			align-items: center;
			height: 50vh;
			opacity: 1;
			overflow: hidden;

			.content {
				z-index: 1;
				padding: 4rem;
				p,
				h1 {
					color: ${defColor.white};
					line-height: 1.5;
				}

				p {
					margin-bottom: 1.5rem;
				}

				.btn-primary {
					${btnPrimary}
					padding: .5rem 1rem;
				}
			}
		}

		@media (max-width: 768px) {
			.banner-container {
				grid-template-columns: 1fr;
			}
		}
	}
`;

const EditorPick = styled.section`
	max-width: 1100px;
	margin: 2rem auto;

	.article {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1rem;

		.card {
			display: grid;
			background: ${defColor.white};
			padding: 1rem;
			&:not(.row) {
				align-items: center;
			}

			&.col {
				grid-template-columns: repeat(2, 1fr);
				grid-column: auto / span 2;
				grid-gap: 1rem;
			}

			&.row {
				grid-row: auto / span 2;
				grid-gap: 1rem;
			}

			&.dark {
				background: ${defColor.dark};
			}

			&.red {
				background: ${defColor.primary};
			}

			&.dark,
			&.red > div {
				p,
				h3 {
					color: ${defColor.white};
				}
			}

			img {
				width: 100%;
			}

			div {
				h3 {
					font-family: "Staatliches", cursive;
					font-weight: 600;
					font-size: 1.25rem;
					line-height: 2rem;
				}
			}
		}

		@media (max-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
			.card {
				&.col {
					grid-template-columns: initial;
					grid-column: initial;
				}
				&.row {
					grid-row: initial;
				}
			}
		}

		@media (max-width: 600px) {
			grid-template-columns: 1fr;
			.card {
				&.col {
					grid-template-columns: initial;
					grid-column: initial;
				}
				&.row {
					grid-template-rows: initial;
					grid-row: initial;
				}
			}
		}
	}
`;

function App() {
	return (
		<>
			<HeaderElem page="home" />
			<Main>
				<BannerElem />
				<EditorPickElem />
			</Main>
			<FooterElem />
		</>
	);
}

const BannerElem = () => (
	<section className="banner">
		<div className="banner-container">
			<div className="content">
				<div className="tags">
					<label className="sports">SPORTS</label>
				</div>
				<h1>Some Sports Article</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Odit voluptas saepe nemo commodi qui ut explicabo voluptatum
					ex quod. Vitae dolores nobis, corporis temporibus animi
					ratione consequuntur enim rerum quam maxime totam sapiente
					expedita! Doloribus nostrum aspernatur doloremque nesciunt
					suscipit assumenda minima veniam, laudantium quis, quisquam
					placeat dolor expedita harum.
				</p>
				<Link to={`/article/1`} className="btn-primary">
					Read More
				</Link>
			</div>
		</div>
	</section>
);

const EditorPickElem = () => (
	<EditorPick>
		<h1>Editor Pick</h1>
		<div className="article">
			<div className="card col">
				<img src={ent1} alt="Lorem ipsum dolor sit amet." />
				<div>
					<label className="ent">entertainment</label>
					<h3>Lorem ipsum dolor sit amet.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laudantium culpa ipsam ipsa? Vero expedita incidunt quo
						quidem cupiditate! Nemo, quisquam.
					</p>
				</div>
			</div>
			<div className="card dark">
				<div>
					<label className="sports">sports</label>
					<h3>Lorem ipsum dolor sit amet.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laudantium culpa ipsam ipsa? Vero expedita incidunt quo
						quidem cupiditate! Nemo, quisquam.
					</p>
				</div>
			</div>
			<div className="card row">
				<img src={tech1} alt="Lorem ipsum dolor sit amet." />
				<div>
					<label className="tech">Technology</label>
					<h3>Lorem ipsum dolor sit amet.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laudantium culpa ipsam ipsa? Vero expedita incidunt quo
						quidem cupiditate! Nemo, quisquam.
					</p>
				</div>
			</div>

			<div className="card row">
				<div>
					<label className="sports">sports</label>
					<h3>Lorem ipsum dolor sit amet.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laudantium culpa ipsam ipsa? Vero expedita incidunt quo
						quidem cupiditate! Nemo, quisquam.
					</p>
				</div>
				<img src={sports1} alt="Lorem ipsum dolor sit amet." />
			</div>

			<div className="card row">
				<img src={tech2} alt="Lorem ipsum dolor sit amet." />
				<div>
					<label className="tech">Technology</label>
					<h3>Lorem ipsum dolor sit amet.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laudantium culpa ipsam ipsa? Vero expedita incidunt quo
						quidem cupiditate! Nemo, quisquam.
					</p>
				</div>
			</div>

			<div className="card red">
				<div>
					<label className="sports">sports</label>
					<h3>Lorem ipsum dolor sit amet.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laudantium culpa ipsam ipsa? Vero expedita incidunt quo
						quidem cupiditate! Nemo, quisquam.
					</p>
				</div>
			</div>

			<div className="card col">
				<div>
					<label className="ent">entertainment</label>
					<h3>Lorem ipsum dolor sit amet.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laudantium culpa ipsam ipsa? Vero expedita incidunt quo
						quidem cupiditate! Nemo, quisquam.
					</p>
				</div>
				<img src={ent2} alt="Lorem ipsum dolor sit amet." />
			</div>
		</div>
	</EditorPick>
);

export default App;
