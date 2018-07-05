import React, { Fragment } from 'react';

// List players component
const PlayerList = ({ players, onClick }) => (
  <Fragment>
    <ul className='list-group'>
      { players.map((player, i) => (
        <li className='list-group-item list-group-item-action py-2' key={ i }>
          { player.name }
          <button
            onClick={ e => onClick(e, player.id) }
            className='btn btn-outline-danger btn-sm float-right p-1'>
              Delete
            </button>     
        </li>
			))}
    </ul>
	</Fragment>
);

export default PlayerList;