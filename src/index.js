import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./pages";
import { About } from "./pages/about";
import { Article } from "./pages/article";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { defColor } from "./components/common";

const GlobalStyle = createGlobalStyle`
  	label {
    	max-height:1rem;
		padding: 0.5rem;
		font-size: 0.5rem;
		border-radius: 2rem;
		color: ${defColor.white};
		margin: 0.1rem 0;
		display: inline-block;
		text-transform: uppercase;

		&.sports {
			background: ${defColor.tagSports};
		}

		&.ent {
			background: ${defColor.tagEnt};
		}

		&.tech {
			background: ${defColor.tagTech};
		}
	}

  	h1 {
		font-family: "Staatliches", cursive;
		font-weight: 600;
		font-size: 2rem;
		text-transform: uppercase;
	}

	h2 {
		font-family: "Staatliches", cursive;
		font-weight: 600;
		font-size: 20px;
		line-height: 2rem;
		text-transform: uppercase;
	}
`;

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/about",
		element: <About />
	},
	{
		path: "/article/:id",
		element: <Article />
	}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<GlobalStyle />
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
