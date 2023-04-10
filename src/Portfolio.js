import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
// import {TextField} from "material-ui-core"
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
// import { makeStyles } from "@material-ui/core/styles";
import "./index.css";
import HNavbar from "./HNavbar";
export const Portfolio = () => {
	var createArr = [];
	const [disp, setdisp] = useState(false);
	const Div = styled("div")(({ theme }) => ({
		...theme.typography.button,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(1),
	}));

	const options = [
		{ label: "High Risk", id: 1 },
		{ label: "Med-Risk", id: 2 },
		{ label: "Low-Risk", id: 3 },
	];

	const [valueOf, setvalueOf] = useState(0);

	const handleChange = (e) => {
		console.log(e.target.value);
		setvalueOf(e.target.value);
		createArr.push(e.target.value);
	};
	const [risk, setrisk] = useState("");
	const change = (e, value) => {
		console.log(e);
		setrisk(value);
		createArr.push(risk);
	};

	// const submit = () => {
	// 	console.log(createArr);
	// };

	return (
		<>
			<HNavbar />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "center",
				}}
			>
				<TextField
					id="outlined-basic"
					label="Amount you want to invest"
					variant="outlined"
					type="number"
					value={valueOf}
					onChange={handleChange}
					sx={{
						width: "25%",
						margin: "5%",
					}}
					InputProps={{
						inputProps: { min: 0, step: valueOf < 9999 ? "500" : "1000" },
					}}
				/>
				<Autocomplete
					disablePortal
					id="combo-box-demo"
					options={options}
					sx={{ width: "25%", marginBottom: "5%" }}
					renderInput={(params) => (
						<TextField {...params} label="Assign Risk" />
					)}
					value={risk}
					onChange={change}
				/>

				<Button
					sx={{ width: "25%", marginBottom: "5%" }}
					variant="contained"
					// onClick={submit}
					onClick={() => {
						setdisp(true);
					}}
				>
					Submit
				</Button>
				<Div sx={{ color: "red" }}>
					{
						"High-Risk : Higher returns with more investment into small-cap companies"
					}
				</Div>
				<Div>{"Medium-Risk: Average returns, Better than FD"}</Div>
				<Div>{"Low-Risk: Comparable to FD interest rate"}</Div>
				<div style={{ display: disp ? "block" : "none", marginTop: "100px" }}>
					{console.log(risk)}
					{risk.label === "High Risk" && (
						<div>
							<h1>The amount can be invested as follows:</h1>
							<p>
								<span style={{ fontStyle: "italic", fontWeight: "800" }}>
									Large Cap Stocks :
								</span>
								<br></br>
								<p>Amount to be Invested: {(30 * valueOf) / 100}</p>
								<p>Reliance, TCS, HDFC Bank, Infosys, HUL, HDFC Housing</p>
							</p>
							<p>
								<span style={{ fontStyle: "italic", fontWeight: "800" }}>
									Mid Cap Stocks :
								</span>{" "}
								<br></br>
								<p>Amount to be Invested: {(20 * valueOf) / 100}</p>
								<p>M&M finance, Godrej Properties, BHEL, LIC Housing Finance</p>
							</p>
							<p>
								<span style={{ fontStyle: "italic", fontWeight: "800" }}>
									Small Cap Stocks :
								</span>{" "}
								<br></br>
								<p>Amount to be Invested {(50 * valueOf) / 100}</p>
								<p>
									PSP Projects, JK paper, Mold-Trek Package, Bajaj Consumer Care
								</p>
							</p>
						</div>
					)}
					{risk.label === "Med-Risk" && (
						<div>
							<h1>The amount can be invested as follows:</h1>
							<p>
								<span style={{ fontStyle: "italic", fontWeight: "800" }}>
									Large Cap Stocks :
								</span>
								<br></br>
								<p>Amount to be Invested: {(40 * valueOf) / 100}</p>
								<p>Reliance, TCS, HDFC Bank, Infosys, HUL, HDFC Housing</p>
							</p>
							<p>
								<span style={{ fontStyle: "italic", fontWeight: "800" }}>
									Mid Cap Stocks :
								</span>{" "}
								<br></br>
								<p>Amount to be Invested: {(30 * valueOf) / 100}</p>
								<p>M&M finance, Godrej Properties, BHEL, LIC Housing Finance</p>
							</p>
							<p>
								<span style={{ fontStyle: "italic", fontWeight: "800" }}>
									Small Cap Stocks :
								</span>{" "}
								<br></br>
								<p>Amount to be Invested {(30 * valueOf) / 100}</p>
								<p>
									PSP Projects, JK paper, Mold-Trek Package, Bajaj Consumer Care
								</p>
							</p>
						</div>
					)}
					{risk.label === "Low-Risk" && (
						<div>
							<h1>The amount can be invested as follows:</h1>
							<p>
								<span style={{ fontStyle: "italic", fontWeight: "800" }}>
									Large Cap Stocks :
								</span>
								<br></br>
								<p>Amount to be Invested: {(70 * valueOf) / 100}</p>
								<p>Reliance, TCS, HDFC Bank, Infosys, HUL, HDFC Housing</p>
							</p>
							<p>
								<span style={{ fontStyle: "italic", fontWeight: "800" }}>
									Mid Cap Stocks :
								</span>{" "}
								<br></br>
								<p>Amount to be Invested: {(20 * valueOf) / 100}</p>
								<p>M&M finance, Godrej Properties, BHEL, LIC Housing Finance</p>
							</p>
							<p>
								<span style={{ fontStyle: "italic", fontWeight: "800" }}>
									Small Cap Stocks :
								</span>{" "}
								<br></br>
								<p>Amount to be Invested {(10 * valueOf) / 100}</p>
								<p>
									PSP Projects, JK paper, Mold-Trek Package, Bajaj Consumer Care
								</p>
							</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
