import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { useEffect, useRef } from "react";

const d = [
	{
		title: "NICOBAR",
		id: "573",
	},
	{
		title: "WEST SIANG",
		id: "517",
	},
	{
		title: "AGRA",
		id: "442",
	},
	{
		title: "FIROZABAD",
		id: "445",
	},
	{
		title: "MAINPURI",
		id: "444",
	},
	{
		title: "LEH",
		id: "703",
	},
	{
		title: "HARDA",
		id: "229",
	},
	{
		title: "ETAWAH",
		id: "427",
	},
	{
		title: "NORTH GOA",
		id: "98",
	},
	{
		title: "SOUTH GOA",
		id: "95",
	},
];

const AddPeople = () => {
	const userRef = useRef({
		name: null,
		mobile: null,
		district: null,
	});
	useEffect(() => {}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(userRef.current);
	};

	return (
		<Container>
			<Row className="mt-4 justify-content-center">
				<Col xs={12} md={6}>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3">
							<Form.Label htmlFor="name">Enter Name</Form.Label>
							<Form.Control
								type="text"
								id="name"
								placeholder="name of the person to notify"
								onChange={(e) => (userRef.current["name"] = e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label htmlFor="mobile">Enter Mobile No.</Form.Label>
							<Form.Control
								type="number"
								id="mobile"
								placeholder="mobile number of person to notify"
								onChange={(e) => (userRef.current["mobile"] = e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor="district">Select District</Form.Label>
							<Form.Select
								id="district"
								onChange={(e) => (userRef.current["district"] = e.target.value)}
								defaultValue={0}
								className="mb-3"
							>
								{d.map((item, index) => (
									<option key={index} value={item.id}>
										{item.title}
									</option>
								))}
							</Form.Select>
						</Form.Group>
						<Button type="submit" className="px-3">
							Add
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default AddPeople;
