import { useRef, useContext } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AppContext from "../store/context";

const handleAuth = async (mail, pass) => {
	const req = await fetch(
		`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FBK}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: mail,
				password: pass,
				returnSecureToken: true,
			}),
		}
	);

	const res = await req.json();

	if (req.ok) {
		return res;
	} else {
		throw new Error("Invalid Email/Password");
	}
};

const LoginModal = ({ show, showModal, setShow }) => {
	const emailRef = useRef();
	const passRef = useRef();
	const ctx = useContext(AppContext);
	const history = useHistory();

	const loginHandler = (event) => {
		event.preventDefault();

		const mail = emailRef.current.value;
		const pass = passRef.current.value;

		console.log(mail);
		console.log(pass);

		// handleAuth(mail, pass)
		//   .then((res) => {
		//     ctx.login(res.idToken);
		//     setShow(!show);
		//     history.push("/alert");
		//   })
		//   .catch((err) => alert(err));

		if (mail === "test@test.com" && pass === "password") {
			ctx.login("rugtuqbourqt784t");
			setShow(!show);
			history.push("/alert");
		}
	};

	return (
		<Modal show={show} onHide={showModal}>
			<Modal.Header closeButton>
				<Modal.Title>Please enter credentials</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={loginHandler}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							ref={emailRef}
							type="email"
							placeholder="Enter email"
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							ref={passRef}
							type="password"
							placeholder="Password"
							required
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Login
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default LoginModal;
