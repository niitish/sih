import { Suspense } from "react";
import { useEffect, useContext } from "react";
import AppContext from "./store/context";
import { Switch, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Map from "./pages/map";
import Alerts from "./pages/alerts";
import About from "./pages/about";
import Home from "./pages/home";
import CreateAlert from "./pages/createAlert";
import AddPeople from "./pages/add-people";
import data from "./store/data/data.json";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	const ctx = useContext(AppContext);

	useEffect(() => {
		let transformedData = data.filter((item) => item.color !== "#7CFC00");

		// some dist have multiple warnings, use an array instead

		const transform = (data) => {
			const val = {
				id: data.id,
				title: data.title,
				warnCode: [],
				warnLevel: null,
				color: data.color,
			};
			if (data.balloonText.toLowerCase().includes("heavy snow"))
				val.warnCode.push(1);
			if (data.balloonText.toLowerCase().includes("hailstorm"))
				val.warnCode.push(2);
			if (data.balloonText.toLowerCase().includes("dust storm"))
				val.warnCode.push(3);
			if (data.balloonText.toLowerCase().includes("dust raising winds"))
				val.warnCode.push(4);
			if (data.balloonText.toLowerCase().includes("heat wave"))
				val.warnCode.push(5);
			if (data.balloonText.toLowerCase().includes("hot day"))
				val.warnCode.push(6);
			if (data.balloonText.toLowerCase().includes("warm night"))
				val.warnCode.push(7);
			if (data.balloonText.toLowerCase().includes("cold wave"))
				val.warnCode.push(8);
			if (data.balloonText.toLowerCase().includes("ground frost"))
				val.warnCode.push(9);
			if (data.balloonText.toLowerCase().includes("fog")) val.warnCode.push(10);
			if (data.balloonText.toLowerCase().includes("heavy rain"))
				val.warnCode.push(11);
			if (data.balloonText.toLowerCase().includes("thunderstorm & lightning"))
				val.warnCode.push(12);
			if (data.balloonText.toLowerCase().includes("strong surface winds"))
				val.warnCode.push(13);
			if (data.balloonText.toLowerCase().includes("cold day"))
				val.warnCode.push(14);

			if (data.color === "#FF0000") val.warnLevel = 1; // red
			else if (data.color === "#FFA500") val.warnLevel = 2; // orange
			else if (data.color === "#FFFF00") val.warnLevel = 3; // yellow

			return val;
		};

		transformedData = transformedData.map((item) => transform(item));

		ctx.setData(transformedData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<NavBar />
			<Suspense
				fallback={
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				}
			>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/add-people">
						<AddPeople />
					</Route>
					<Route exact path="/map">
						<Map />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/alert">
						<Alerts />
					</Route>
					<Route exact path="/alert/create">
						<CreateAlert />
					</Route>
				</Switch>
			</Suspense>
		</>
	);
};

export default App;
