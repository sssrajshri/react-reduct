import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Col, Row, Button
} from 'react-bootstrap';
import { gotoRoute } from '../../common/Utility';


const CommonView = (props) => {
  const { header, content, secondaryContent } = props;
  return (
    <Container>
      <Row>
        <Col>
          {header}
        </Col>
      </Row>
      <Row>
        <Col>
          {content}
          {secondaryContent}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type="button" onClick={() => gotoRoute('/')} variant="secondary">Go Back</Button>
        </Col>
      </Row>
    </Container>
  );
};
// acceptable propTypes
CommonView.propTypes = {
  header: PropTypes.node,
  content: PropTypes.node,
  secondaryContent: PropTypes.node
};

// defaultProps
CommonView.defaultProps = {
  header: '',
  content: '',
  secondaryContent: ''
};
export default CommonView;
