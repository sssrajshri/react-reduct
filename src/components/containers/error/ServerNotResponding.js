import React from 'react';
import CommonMessageBlock from '../../shared/CommonMessageBlock';
import CommonView from '../../views/CommonView';

import constants from '../../../common/Constants';

const { SERVER_NOT_RESPONDING } = constants.common;
const content = (
  <CommonMessageBlock
    title={SERVER_NOT_RESPONDING.title}
    description={SERVER_NOT_RESPONDING.description}
  />
);
const ServerNotResponding = () => (
  <CommonView content={content} />
);

export default ServerNotResponding;
