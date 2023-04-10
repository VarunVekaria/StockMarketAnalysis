/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import HNavbar from "./HNavbar";
// import HomeCard from "./HomeCard";
import homebg from "./home-bg.jpg";

import { ReactComponent as Logo } from "./stock.svg";
// import "stock.svg";
import "./index.css";
import { Slider1 } from "./Slider1";
const Intro = () => {
	return (
		<div style={{ backgroundColor: "332d2d" }}>
			<HNavbar />

			<div
				className="flex-item document"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					alignContent: "center",
				}}
			>
				<div className=" heading multiline">
					<p>
						<span>
							<b style={{ color: "#ffcc00" }}>UP</b>
						</span>
						<b>WORTH</b>
						<br></br>
						<p style={{ fontSize: "1.5rem" }}>Predict, Analyse and Learn</p>
					</p>
				</div>

				<Logo style={{ width: "50%", padding: "50px" }} />
			</div>
			<div>
				<Slider1 />
			</div>
		</div>
	);
};

export default Intro;
