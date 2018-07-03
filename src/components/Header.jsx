import React from 'react';

// Stateless <Header> component uses { children } prop for header text
// includes Add, Edit and Delete buttons
const Header = ({ children }) => (
	<header className='jumbotron'>
		<h1 className='display-4 text-center'>
      { children }
		</h1>
    <hr className='my-4' />
    <aside className='float-right btn-group'>
      <button className='btn btn-outline-primary'>Add</button>
      <button className='btn btn-outline-secondary'>Edit</button>
      <button className='btn btn-outline-danger'>Delete</button>
    </aside>
	</header>
);

export default Header;
