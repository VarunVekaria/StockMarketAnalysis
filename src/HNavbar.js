import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function HNavbar() {
	// const here = () => {
	// 	window.location = "/market";
	// };
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">💹UPWORTH💹</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/market">Market News</Nav.Link>
						<Nav.Link href="/prediction">Predict</Nav.Link>
						<Nav.Link href="/portfolio">Portfolio</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default HNavbar;
