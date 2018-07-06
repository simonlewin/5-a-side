import React from 'react';

// stateless header component uses children prop for header text
// bootstrap .py-4 and .my-4 classes change padding and margin
const Header = ({ children }) => (
	<header className='jumbotron py-4'>
		<h1 className='display-4 text-center'>
      { children }
		</h1>
    <hr className='my-4' />
	</header>
);

export default Header;
