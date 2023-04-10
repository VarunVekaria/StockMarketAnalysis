import React, { useState, useEffect } from "react";

export const Slider1 = () => {
	const finnhub = require("finnhub");

	const [prices, setPrices] = useState([]);
	const [index, setIndex] = useState(0);
	const api_key = finnhub.ApiClient.instance.authentications["api_key"];
	api_key.apiKey = "cglbio1r01qjg0jhbqsgcglbio1r01qjg0jhbqt0";
	const finnhubClient = new finnhub.DefaultApi();

	finnhubClient.earningsCalendar(
		{ from: "2021-06-01", to: "2021-06-30" },
		(error, data, response) => {
			console.log(data);
		}
	);
	useEffect(() => {
		// fetch stock prices and update state
		const fetchPrices = async () => {
			const response = await fetch("");
			const data = await response.json();
			setPrices(data);
		};
		fetchPrices();
	}, []);

	// useEffect(() => {
	//   // advance to next stock price every 5 seconds
	//   const interval = setInterval(() => {
	//     setIndex((index + 1) % prices.length);
	//   }, 5000);
	//   return () => clearInterval(interval);
	// }, [index, prices.length]);

	return (
		<div className="stock-price-carousel">
			{prices.map((price, i) => (
				<div
					key={price.symbol}
					className={`stock-price ${i === index ? "active" : ""}`}
				>
					{price.symbol}: {price.price}
				</div>
			))}
		</div>
	);
};

// export default StockPriceCarousel;
