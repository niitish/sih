import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router";
// import twilio from "twilio";
// import sendTweet from "./utils/Tweet";

const CreateAlert = () => {
  const location = useLocation();
  const formData = useRef();
  const { title, warning } = location.state;

  const message = {
    1: "Heavy Rain",
    2: "Heavy snow",
    3: "Thunderstorm & lightning",
    4: "Hailstorm",
    5: "Dust storm",
    6: "Dust raising winds",
    7: "Strong surface winds",
    8: "Heat wave",
    9: "Hot day",
    10: "Warm night",
    11: "Cold wave",
    12: "Cold day",
    13: "Ground frost",
    14: "Fog",
  };

  const AppFormControl = (props) => {
    const { sm = 12 } = props;
    return (
      <Col sm={sm} {...props}>
        {props.children}
      </Col>
    );
  };

  const alertHandler = (event) => {
    event.preventDefault();
    const tweetText = formData.current.value;
    console.log(tweetText);
    // sendTweet(tweetText);

    fetch("https://roomtemp.github.io/alert/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://roomtemp.github.io",
      },
      body: JSON.stringify({ message: tweetText }),
    });

    // const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
    // const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
    // const client = twilio(accountSid, authToken);

    // client.messages
    //   .create({ body: "Hi there", from: "+17609653387", to: "+919602067327" })
    //   .then((message) => console.log(message.sid))
    //   .catch((err) => console.log(err));
  };

  const formGroupRowClass = "mt-3";

  return (
    <Container className="mt-4">
      Form
      <Form onSubmit={alertHandler}>
        <Row className={`${formGroupRowClass}`}>
          <Form.Label>District to Alert</Form.Label>
          <AppFormControl>
            <Form.Label className="p-2 border rounded">{title}</Form.Label>
          </AppFormControl>
        </Row>
        {/* <Row className={`${formGroupRowClass}`}>
          <Form.Label>Date and time</Form.Label>
          <AppFormControl sm={6}>
            <Form.Control type="date" className="col-6" />
          </AppFormControl>
          <AppFormControl sm={6}>
            <Form.Control type="time" className="col-6" />
          </AppFormControl>
        </Row> */}
        <Row className={`${formGroupRowClass}`}>
          <Form.Label>Alert message</Form.Label>
          <AppFormControl>
            <Form.Control
              name="message"
              as="textarea"
              rows={5}
              defaultValue={message[warning]}
              ref={formData}
            />
          </AppFormControl>
        </Row>
        <Row className={`${formGroupRowClass}`}>
          <Form.Label>Platforms</Form.Label>
          <AppFormControl>
            <Form.Check type="checkbox" label={`SMS`} />
            <Form.Check type="checkbox" label={`Twitter`} />
            <Form.Check type="checkbox" label={`WhatsApp`} />
          </AppFormControl>
        </Row>
        <Row className={`${formGroupRowClass}`}>
          <AppFormControl>
            <Button variant="danger" type="submit" className="w-25 float-end">
              Send Alert
            </Button>
          </AppFormControl>
        </Row>
      </Form>
    </Container>
  );
};

export default CreateAlert;
