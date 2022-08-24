import { useContext, useState, useEffect } from "react";
import { ListGroup, Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppContext from "../../store/context";

const Alerts = () => {
	const ctx = useContext(AppContext);
	const data = ctx.data;
	const [search, setSearch] = useState("");
	const [warnLevel, setWarnLevel] = useState(0);

	const searchChangeHandler = (event) => {
		setSearch(event.target.value.toUpperCase());
	};

	const changeWarnLevel = (level) => {
		setWarnLevel(level);
	};

	useEffect(() => {
		let a = data.filter((item) => item.warnLevel === 1);
		let b = data.filter((item) => item.warnLevel === 2);
		let c = data.filter((item) => item.warnLevel === 3);
		console.log(a.length, b.length, c.length);
	}, [data]);

	return (
		<Container>
			<Row className="mt-4 justify-content-center">
				<Col xs={12} md={6}>
					<Form>
						<Form.Label htmlFor="search">Filter results</Form.Label>
						<Form.Control
							type="text"
							id="search"
							value={search}
							onChange={searchChangeHandler}
							size="sm"
						/>
					</Form>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col className="d-flex justify-content-center">
					<Form>
						{["radio"].map((type) => (
							<div key={`inline=${type}`}>
								<Form.Check
									inline
									label="All"
									type={type}
									id={`inline-${type}-0`}
									onChange={() => changeWarnLevel(0)}
									checked={warnLevel === 0}
								/>
								<Form.Check
									inline
									label="Red Alert"
									type={type}
									id={`inline-${type}-1`}
									onChange={() => changeWarnLevel(1)}
									checked={warnLevel === 1}
								/>
								<Form.Check
									inline
									label="Orange Alert"
									type={type}
									id={`inline-${type}-1`}
									onChange={() => changeWarnLevel(2)}
									checked={warnLevel === 2}
								/>
								<Form.Check
									inline
									label="Yellow Alert"
									type={type}
									id={`inline-${type}-3`}
									onChange={() => changeWarnLevel(3)}
									checked={warnLevel === 3}
								/>
							</div>
						))}
					</Form>
				</Col>
			</Row>
			<Row className="mt-2 justify-content-center">
				<Col xs={12} md={9}>
					<ListGroup className="my-2 px-1">
						{data
							.filter((item) => item.title.includes(search))
							.filter((item) => {
								if (warnLevel === 0) {
									return true;
								} else {
									return item.warnLevel === warnLevel;
								}
							})
							.map((city, id) => (
								<ListGroup.Item
									key={id}
									className="py-3 mt-2 rounded d-flex justify-content-between align-items-center"
								>
									<h5 className="my-0">{city.title}</h5>
									<Button
										variant="outline-danger"
										as={Link}
										to={{ pathname: "/alert/create", state: { ...city } }}
									>
										Send alert
									</Button>
								</ListGroup.Item>
							))}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};

export default Alerts;
