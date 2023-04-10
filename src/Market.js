import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./index.css";
import HNavbar from "./HNavbar";
// const bull = (
// 	<Box
// 		component="span"
// 		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
// 	></Box>
// );

export const Market = () => {
	const stockcard = (j) => {
		return (
			<div
				style={{ display: "flex", justifyContent: "space-evenly" }}
				className={j % 2 ? "offwhite" : "blue"}
			>
				<Card
					sx={{
						minWidth: 275,
						maxWidth: 500,
						padding: "20px 0 20px 0",
						margin: "20px",
					}}
				>
					<CardContent>
						<Typography
							sx={{ fontSize: 40 }}
							color="text.secondary"
							gutterBottom
						>
							{stockinfo[j]}
						</Typography>
						{/* <Typography variant="h5" component="div">
						be{bull}nev{bull}o{bull}lent
					</Typography> */}

						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ fontSize: 20 }}
						>
							{stockd[j]}
							<br />
						</Typography>
					</CardContent>
				</Card>
			</div>
		);
	};
	const api = "eWG4f9JXqweiG0rhcCWaOSUThG4fGBCop4oz0vdz";
	const [stockinfo, setStockInfo] = useState("");
	const [stockd, setStockd] = useState("");

	const getstockInfo = () => {
		const sortFuncTit = (a) => {
			const stocktitle = a.title;

			return stocktitle;
		};

		const sortFuncDesc = (a) => {
			const stockdesc = a.description;
			return stockdesc;
		};

		axios
			.get(
				`https://api.marketaux.com/v1/news/all?symbols=TSLA%2CAMZN%2CMSFT&filter_entities=true&limit=8&language=en&api_token=${api}`
			)
			.then((res) => {
				const info = res.data.data;
				const sortinfo = info.map(sortFuncTit);
				const sortDesc = info.map(sortFuncDesc);
				console.log(sortinfo);
				console.log(sortDesc);
				setStockInfo(sortinfo);
				setStockd(sortDesc);
			})

			.catch((err) => {
				console.log(err);
			});
	};

	// const printdes = (a) =
	const printit = (a) => {
		return <p>{a}</p>;
	};
	// let i = stockinfo.length;
	// let j = i - i;
	const rows = [];
	for (let i = 0; i < stockinfo.length; i++) {
		rows.push(stockcard(i));
		// console.log(rows);
	}

	useEffect(() => {
		getstockInfo();
		console.log("hello");
	}, []); // <-- empty dependency array

	return (
		<>
			<HNavbar />
			<div style={{ backgroundColor: "#3098f3" }}>
				{/* <button onClick={getstockInfo}>get info</button> */}

				<div>{rows.map(printit)}</div>
			</div>
		</>
	);
};
