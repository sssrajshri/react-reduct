import React, { useState } from 'react';
import {
  Container, Col, Row, Button, Alert
} from 'react-bootstrap';
import { gotoRoute } from '../../../common/Utility';


const HomeView = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello world</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert show={show} variant="success">
            <Alert.Heading>How is it going?!</Alert.Heading>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
              lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
              fermentum.
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me all!
              </Button>
            </div>
          </Alert>
          <br />
          {!show && <Button onClick={() => setShow(true)} variant="primary">Show Alert</Button>}
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="fexDiv">
          <Button type="button" onClick={() => gotoRoute('/')} variant="secondary">Home</Button>
          <Button type="button" onClick={() => gotoRoute('hello-world')} variant="success">Hello World</Button>
          <Button type="button" onClick={() => gotoRoute('invalidpage')} variant="danger">Invalid Page</Button>
          <Button type="button" onClick={() => gotoRoute('server-not-responding')} variant="warning">Server not responding</Button>
          <Button type="button" onClick={() => gotoRoute('technical-error')} variant="info">Technical Error</Button>
          <Button type="button" onClick={() => gotoRoute('404')} variant="dark">404 not found</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeView;
