// import ContainerInsideExample from "./ContainerInsideExample";
import HNavbar from "./HNavbar";
import "./index.css";
import Intro from "./Intro";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Market } from "./Market";
import Predict from "./Predict";
import { Portfolio } from "./Portfolio";
// import NavBar from "./NavBar";
// import Navbar from "./Navbar";
function App() {
	return (
		<div className="font-link">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Intro />
					</Route>
					<Route path="/market">
						<Market />
					</Route>
					<Route path="/prediction">
						<Predict />
					</Route>
					<Route path="/portfolio">
						<Portfolio />
					</Route>
				</Switch>
			</BrowserRouter>
			{/* <Market /> */}
		</div>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
