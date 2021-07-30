import React from 'react';
import {
  Container, Col, Row, Button
} from 'react-bootstrap';
import { gotoRoute } from '../../../common/Utility';


const VerifyDetailsView = (props) => {
  const { pageInfo, setPageTitle } = props;

  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello world</h1>
          {pageInfo.title}
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Button type="button" onClick={() => gotoRoute('/')} variant="secondary">Home</Button>
          &nbsp;
          <Button type="button" onClick={setPageTitle} variant="success">Redux Store Call</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default VerifyDetailsView;
