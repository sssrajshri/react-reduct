import React from 'react';

import CommonMessageBlock from '../../shared/CommonMessageBlock';
import CommonView from '../../views/CommonView';
import constants from '../../../common/Constants';

const { PAGE_NOT_FOUND } = constants.common;
const content = (
  <CommonMessageBlock
    title={PAGE_NOT_FOUND.title}
    description={PAGE_NOT_FOUND.description}
  />
);

const PageNotFound = () => (
  <CommonView content={content} />
);

export default PageNotFound;
