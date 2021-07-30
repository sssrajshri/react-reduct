import React from 'react';
import PropTypes from 'prop-types';

const CommonMessageBlock = (props) => {
  const {
    title, description, className, pClassName
  } = props;
  let content = description;
  if (description.indexOf('<br>') > -1) {
    content = description.split('<br>').map((item, i) => (
      <span className="inline-block" key={i}>
        {item}
        <br />
      </span>
    ));
  } else {
    content = description;
  }
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p className={pClassName}>{content}</p>
    </div>
  );
};

// acceptable propTypes
CommonMessageBlock.propTypes = {
  className: PropTypes.string,
  pClassName: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

// defaultProps
CommonMessageBlock.defaultProps = {
  className: '',
  pClassName: 'font-20 padding-t30'
};

export default CommonMessageBlock;
