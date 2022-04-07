import { Suspense } from "react";
import { useEffect, useContext } from "react";
import AppContext from "./store/context";
import { Switch, Route } from "react-router-dom";
import "./static/scss/app.scss";
import { Spinner } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Map from "./pages/map";
import Alerts from "./pages/alerts";
import About from "./pages/about";
import Home from "./pages/home";
import CreateAlert from "./pages/createAlert";
import data from "./store/data/data.json";

const App = () => {
  const ctx = useContext(AppContext);

  useEffect(() => {
    let transformedData = data.filter((item) => item.color !== "#7CFC00");

    const transform = (data) => {
      const val = { id: data.id, title: data.title };
      if (data.balloonText.includes("01.png")) val.warning = 1;
      if (data.balloonText.includes("02.png")) val.warning = 2;
      if (data.balloonText.includes("03.png")) val.warning = 3;
      if (data.balloonText.includes("04.png")) val.warning = 4;
      if (data.balloonText.includes("05.png")) val.warning = 5;
      if (data.balloonText.includes("06.png")) val.warning = 6;
      if (data.balloonText.includes("07.png")) val.warning = 7;
      if (data.balloonText.includes("08.png")) val.warning = 8;
      if (data.balloonText.includes("09.png")) val.warning = 9;
      if (data.balloonText.includes("10.png")) val.warning = 10;
      if (data.balloonText.includes("11.png")) val.warning = 11;
      if (data.balloonText.includes("12.png")) val.warning = 12;
      if (data.balloonText.includes("13.png")) val.warning = 13;
      if (data.balloonText.includes("14.png")) val.warning = 14;

      if (data.color === "#FF0000") val.color = "warning";
      if (data.color === "#FFA500") val.color = "alert";
      if (data.color === "#FFCC33") val.color = "watch";

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
          <Route exact path="/sih">
            <Home />
          </Route>
          <Route exact path="/sih/map">
            <Map />
          </Route>
          <Route exact path="/sih/about">
            <About />
          </Route>
          <Route exact path="/sih/alert">
            <Alerts />
          </Route>
          <Route exact path="/sih/alert/create">
            <CreateAlert />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
