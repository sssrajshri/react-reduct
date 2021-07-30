import React from 'react';
import {
  Container, Col, Row, Button
} from 'react-bootstrap';
import { gotoRoute } from '../../../common/Utility';

const InvalidPageComponent = () => (
  <Container>
    <Row>
      <Col>
        <h1>You are not authorised to view this page</h1>
      </Col>
      <Row>
        <Col>
          <Button type="button" onClick={() => gotoRoute('/')} variant="secondary">Go Back</Button>
        </Col>
      </Row>
    </Row>
  </Container>
);

export default InvalidPageComponent;
