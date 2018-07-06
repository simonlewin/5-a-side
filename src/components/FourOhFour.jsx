import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

// a simple 404 'page not found' component
// with a link to the home page
const FourOhFour = () => (
  <Fragment>
    <h3 className='alert alert-warning text-center'>
      Sorry page not found
    </h3>
    <div className="d-flex justify-content-center">
      <Link to='/' className='btn btn-primary btn-lg'>Home</Link>
    </div> 
  </Fragment>
);

export default FourOhFour;
