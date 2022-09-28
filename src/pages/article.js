import styled from "styled-components";
import { useParams } from "react-router-dom";
import { HeaderElem } from "../components/header";
import { FooterElem } from "../components/footer";
import ent1 from "../img/articles/ent1.jpg";
import { defColor, btnDark } from "../components/common";

const Main = styled.main`
	max-width: 1100px;
	margin: 2rem auto;
	section:first-child,
	.side-bar > div {
		background: ${defColor.white};
	}

	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-gap: 2rem;

	p {
		line-height: 1.5rem;
	}

	section:first-child {
		padding: 1rem;
		img {
			width: 100%;
		}

		h1 {
			line-height: 4rem;
		}

		.author {
			display: flex;
			justify-content: space-between;
			background: ${defColor.lightGrey};
			align-items: center;
			padding: 0 0.5rem;
			margin-bottom: 0.5rem;

			span {
				line-height: 2.5rem;
			}
		}
	}

	.side-bar {
		> div {
			padding: 1rem;
		}

		display: grid;
		grid-template-rows: auto auto 1fr;
		grid-gap: 1.5rem;
		ul {
			li {
				&:before {
					content: ">";
					margin-right: 0.5rem;
				}
				line-height: 2.5rem;
				border-bottom: 1px dotted;
			}
		}

		div:nth-child(2) {
			button {
				${btnDark}
				line-height:2rem;
				width: 100%;
				margin-top: 0.5rem;
			}
		}
	}

	@media (max-width: 600px) {
		grid-template-columns: initial;

		section:first-child .author {
			flex-direction: column;
			padding-bottom: 0.5rem;
		}
	}
`;

export function Article() {
	const { id } = useParams();
	return (
		<>
			<HeaderElem />
			<Main>
				<section>
					<img src={ent1} alt="Lorem ipsum dolor sit."></img>
					<h1>Lorem ipsum dolor sit.</h1>
					<div className="author">
						<span>Written by Harsh Narayan 8th May 2020</span>
						<label className="ent">Entertainment</label>
					</div>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Officia impedit rerum repellendus eligendi
						reprehenderit eos illum iure laboriosam quia sapiente
						corrupti error, quae modi minima sed id dolore
						temporibus magni sunt, voluptate laudantium! Esse
						debitis reiciendis ducimus nostrum, praesentium vitae,
						ad ipsum temporibus omnis, beatae quae iusto error
						veniam animi?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Fugiat magni nisi ex assumenda officia esse ipsa iure
						doloribus. Voluptatem aperiam saepe sed possimus?
						Excepturi minus quaerat repellendus ex nobis id fuga,
						repellat eos sunt nulla ratione, corrupti laborum culpa
						pariatur delectus neque itaque, ea voluptate! Eligendi,
						rerum repellat nisi nemo fuga architecto explicabo
						repudiandae neque voluptatibus illum quos sed.
						Voluptates delectus qui sapiente doloremque vero
						incidunt minima quibusdam hic praesentium quos?
						Necessitatibus accusantium error placeat cupiditate
						aliquam culpa exercitationem voluptatum ex quas
						perspiciatis, cumque autem accusamus sunt veritatis
						nesciunt, provident atque soluta fuga explicabo
						excepturi nemo. Eligendi nihil optio minus earum
						dignissimos temporibus illum obcaecati dicta non
						deleniti assumenda iste ex quae explicabo inventore cum,
						impedit quas fuga officiis ea recusandae. Labore atque,
						ipsum, sint sunt, unde maiores commodi necessitatibus
						minus culpa earum dicta at laborum numquam voluptatum
						quas maxime aspernatur natus. Cum voluptate accusamus
						similique asperiores quae consequatur unde!
					</p>
				</section>
				<section className="side-bar">
					<div>
						<h2>Categories</h2>
						<ul>
							<li>Sports</li>
							<li>Entertainment</li>
							<li>Technology</li>
							<li>Media</li>
							<li>Reddit</li>
						</ul>
					</div>
					<div>
						<h2>Join Our Club</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Vel, vitae.
						</p>
						<button>Join Now</button>
					</div>
				</section>
			</Main>
			<FooterElem />
		</>
	);
}
