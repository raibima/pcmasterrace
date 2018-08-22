import React from 'react';

const MAX_LENGTH = 50;

export default str => {
  if (typeof str !== 'string') {
    throw new Error('truncateString only accepts string as only argument.');
  }
  if (str.length > MAX_LENGTH) {
    return (
      <React.Fragment>
        {`${str.substr(0, MAX_LENGTH)} ... `}
        <a href="https://www.google.com">read more</a>
      </React.Fragment>
    );
  }
  return str;
};
