import React, { Fragment } from 'react';

import Add from '../containers/Add';
import PlayerList from '../containers/PlayerList';

// build and render a list of players
const Players = ({ players }) => (
  <Fragment>
  <h4>Add a player</h4>
  <Add />
  {/* if there are players then render a list otherwise output nothing */}
  { players.length !== 0 
    ? <Fragment> 
        <h4 className='my-3'>Players
          {/* if there's a minimum of four players render button */}
          {/* if there's an odd number of players disable button */}
          { players.length >= 4
            ? (players.length % 2 === 0 
              ? <button className='btn btn-outline-secondary float-right'>Pick Teams</button>
              : <button className='btn btn-outline-secondary float-right' disabled>Pick Teams</button> )
            : null
          }
        </h4>
        <PlayerList />
      </Fragment>
    : null
  }  
  </Fragment>      
);

export default Players;
