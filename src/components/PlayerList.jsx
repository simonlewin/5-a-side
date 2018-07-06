import React, { Fragment } from 'react';

// player list component renders a list of players each with a delete button
// also renders a reset button
// bootstrap .p-* and .m-* classes for margin and padding
const PlayerList = ({ players, onClickDelete, onClickReset }) => (
  <Fragment>
    <ul className='list-group'>
      { players.map((player, i) => (
        <li className='list-group-item list-group-item-action py-2 pr-1' key={ i }>
          { player.name }
          <button
            onClick={ e => onClickDelete(e, player.id) }
            className='btn btn-outline-danger btn-sm float-right p-1'
          >
            Delete
          </button>     
        </li>
			))}
    </ul>
    {/* reset button */}
    <button 
      onClick={ onClickReset } 
      className='btn btn-outline-warning float-right my-3'
    >
      Reset
    </button>
	</Fragment>
);

export default PlayerList;
