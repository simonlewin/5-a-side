import React from 'react';

// Stateless <Header> component uses { children } prop for header text
const Header = ({ children }) => (
	<header className='jumbotron'>
		<h1 className='display-4 text-center'>
      { children }
		</h1>
    <hr className='my-4' />
	</header>
);

export default Header;
