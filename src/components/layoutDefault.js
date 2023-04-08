import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

const LayoutDefault = (props) => (
  <Fragment>
    <Route {...props} />
  </Fragment>
);

export default LayoutDefault;
