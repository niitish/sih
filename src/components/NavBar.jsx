import { Link, useHistory } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import AppContext from "../store/context";
import LoginModal from "./LoginModal";

const NavBar = () => {
	const ctx = useContext(AppContext);
	const [show, setShow] = useState(false);
	const history = useHistory();

	const showModal = () => {
		setShow(!show);
	};

	const logoutHandler = () => {
		ctx.logout();
		history.push("/");
	};

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Link to="/">
					<Navbar.Brand>Weather Alerts</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						{ctx.isLoggedIn && (
							<>
								<Nav.Link as={Link} to="/alert">
									Current alerts
								</Nav.Link>
								<Nav.Link as={Link} to="/add-people">
									Add People
								</Nav.Link>
							</>
						)}
						{/* <Nav.Link as={Link} to="/faq">
							FAQ
						</Nav.Link>
						<Nav.Link as={Link} to="/about">
							About us
						</Nav.Link>
						<Nav.Link as={Link} to="/contact">
							Contact
						</Nav.Link>
						<Nav.Link as={Link} to="/map">
							View data
						</Nav.Link> */}
					</Nav>
					<Nav>
						{ctx.isLoggedIn ? (
							<Button
								variant="primary"
								className="my-2"
								onClick={logoutHandler}
							>
								Logout
							</Button>
						) : (
							<Button variant="primary" className="my-2" onClick={showModal}>
								Login
							</Button>
						)}
						{show && (
							<LoginModal show={show} showModal={showModal} setShow={setShow} />
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
