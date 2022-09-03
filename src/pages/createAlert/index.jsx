import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router";

const CreateAlert = () => {
	const location = useLocation();
	const formData = useRef();
	const { title, warnLevel, warnCode } = location.state;
	const [btnTxt, setBtnTxt] = useState("Send Alert");

	const message = [
		"Heavy Snow",
		"Hailstorm",
		"Dust Storm",
		"Dust Raising Winds",
		"Heat Wave",
		"Hot Day",
		"Warm Night",
		"Cold Wave",
		"Ground Frost",
		"Fog",
		"Heavy Rain",
		"Thunderstorm & Lightning",
		"Strong Surface Winds",
		"Cold Day",
	];

	const alertLevels = ["Red Alert", "Orange Alert", "Yellow Alert"];

	const alertMessage = alertLevels[warnLevel - 1] + " at " + title;

	const alertHandler = (event) => {
		setBtnTxt("Sending...");
		event.preventDefault();
		const tweetText = formData.current.value;

		fetch("http://10.30.69.19:5050/send-sms", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ message: tweetText }),
		})
			.then(() => {
				setBtnTxt("Sent!");
			})
			.catch((e) => {
				setBtnTxt("Error");
			});

		fetch("http://10.30.69.19:5050/send-tweet", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ message: tweetText }),
		});
	};

	return (
		<Container className="mt-4">
			<Row className="mt-4 justify-content-center">
				<Col xs={12} md={6}>
					<Form onSubmit={alertHandler}>
						<Form.Group className="d-flex flex-column">
							<Form.Label>District to Alert</Form.Label>
							<Form.Label
								className="p-2 px-4 border rounded fw-bold"
								style={{ width: "fit-content" }}
							>
								{title}
							</Form.Label>
						</Form.Group>
						<Form.Group className="mt-3">
							<Form.Label>Active alerts for this district:</Form.Label>
							<ul>
								{warnCode.map((code) => (
									<li key={code}>{message[code - 1]}</li>
								))}
							</ul>
						</Form.Group>
						<Form.Group className="d-flex flex-column mt-3">
							<Form.Label>Alert Level</Form.Label>
							<Form.Label
								className="p-2 px-4 border rounded fw-bold"
								style={{ width: "fit-content" }}
							>
								{alertLevels[warnLevel - 1]}
							</Form.Label>
						</Form.Group>
						<Form.Group className="mt-3">
							<Form.Label>Alert message</Form.Label>
							<Form.Control
								name="message"
								as="textarea"
								rows={5}
								defaultValue={alertMessage}
								ref={formData}
							/>
						</Form.Group>
						{/* <Form.Group className="mt-3">
							<Form.Label>Platforms</Form.Label>
							<Form.Check type="checkbox" label={`SMS`} />
							<Form.Check type="checkbox" label={`Twitter`} />
						</Form.Group> */}
						<Button
							variant="danger"
							type="submit"
							className="w-25 mt-3 float-end"
						>
							{btnTxt}
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default CreateAlert;
