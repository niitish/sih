import { useContext, useState } from "react";
import { ListGroup, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppContext from "../../store/context";

const Alerts = () => {
  const ctx = useContext(AppContext);
  const data = ctx.data;
  const [search, setSearch] = useState("");

  const searchChangeHandler = (event) => {
    setSearch(event.target.value.toUpperCase());
  };

  const cleanHTML = (data) => {};

  return (
    <>
      <ListGroup className="container my-5 px-1">
        <Form>
          <Form.Label>Filter results</Form.Label>
          <Form.Control
            type="text"
            value={search}
            onChange={searchChangeHandler}
          />
        </Form>
        {data
          .filter((item) => item.title.includes(search))
          .map((city, id) => (
            <ListGroup.Item
              key={id}
              className="py-3 mt-2 rounded d-flex justify-content-between align-items-center"
            >
              <h5 className="my-0">{city.title}</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: cleanHTML(city.balloonText),
                }}
              ></div>
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
    </>
  );
};

export default Alerts;
