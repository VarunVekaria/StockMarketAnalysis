import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import sbi from "./sbi.jpg";
import logo from "./stockk.jpg";
import itc from "./itcc.jpg";
import "./index.css";
import axios from "axios";
import HNavbar from "./HNavbar";

const Predict = () => {
	const [show, setshow] = useState(false);
	const [stock, setStock] = useState("");
	const [stockip, setStockip] = useState("");
	// const stockanalysis = () => {
	// 	setshow(true);
	// };

	// const stockanalysis = () => {
	// 	axios.get("http://127.0.0.1:5000/prediction").then(function (response) {
	// 		console.log(response.data);
	// 		setStock(`data:image/png;base64,${response.data}`);
	// 	});

	// 	setshow(true);
	// };
	const stockanalysis = () => {
		fetch("http://127.0.0.1:5000/prediction", {
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				stock: stockip,
			}),
		})
			.then((response) => response.blob())
			.then((data) => {
				setStock(URL.createObjectURL(data));
				setshow(true);
			})

			.catch((error) => console.log(error));
	};
	// const stockanalysis = () => {
	// 	axios.get("http://127.0.0.1:5000/prediction").then(function (response) {
	// 		console.log(response.data);
	// 		const base64Img = `data:image/png;base64,${response.data}`;
	// 		setStock(base64Img);
	// 		setshow(true);
	// 	});
	// };
	// axios
	// 	.get("http://127.0.0.1:5000/prediction", {
	// 		// params: {
	// 		//   ID: 12345
	// 		// }
	// 	})
	// 	.then(function (response) {
	// 		console.log(response.data);
	// 		setStock(response.data);
	// 	});

	return (
		<>
			<HNavbar />
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					// backgroundColor: "#f0f0f0",
				}}
				className="off-white"
			>
				<Stack spacing={2} direction="row" sx={{ padding: "170px" }}>
					{/* <Button variant="text">Text</Button> */}
					<TextField
						id="outlined-basic"
						label="Enter the stock"
						variant="outlined"
						value={stockip}
						onChange={(event) => setStockip(event.target.value)}
					/>
					{/* <Button variant="contained" onClick={stockanalysis}>
					SUBMIT
				</Button> */}
					{/* <TextField
					id="outlined-basic"
					label="Enter the time(year,month)"
					variant="outlined"
				/> */}
					<Button variant="contained" onClick={stockanalysis}>
						SUBMIT
					</Button>

					{/* <Button variant="outlined">Outlined</Button> */}
				</Stack>
				<div>
					{show && (
						<img
							src={stock}
							height="100%"
							width="100%"
							alt="stock graph"
							style={{
								// display: show ? "block" : "none",
								padding: "30px 50px",
							}}
						/>
					)}
					{console.log(stock)}
				</div>
				{/* <img src={itc} height="500" width="800" alt="stock graph" /> */}
				{/* <img src={logo} alt="hhy" width="400" height="400"></img> */}
			</div>
		</>
	);
};

export default Predict;
