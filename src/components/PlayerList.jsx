import React, { Fragment } from 'react';

// Component to render a list of players each with a delete button
const PlayerList = ({ players, onClick, onClickReset }) => (
  <Fragment>
    <ul className='list-group'>
      { players.map((player, i) => (
        <li className='list-group-item list-group-item-action py-2 pr-1' key={ i }>
          { player.name }
          <button
            onClick={ e => onClick(e, player.id) }
            className='btn btn-outline-danger btn-sm float-right p-1'
          >
            Delete
          </button>     
        </li>
			))}
    </ul>
    <button onClick={ onClickReset }className='btn btn-outline-warning float-right my-3'>Reset</button>
	</Fragment>
);

export default PlayerList;
