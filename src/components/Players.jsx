import React, { Fragment } from 'react';

// List players component
const Players = ({ players }) => (
  <Fragment>
    <ul className='list-group'>
      { players.map((player, i) => (
        <li className='list-group-item list-group-item-action' key={ i }>
          { player.name }
        </li>
			))}
    </ul>
	</Fragment>
);

export default Players;