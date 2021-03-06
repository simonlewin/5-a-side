import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

// import add and playerlist components
import Add from '../containers/Add';
import PlayerList from '../containers/PlayerList';

// add player names and render a list of players
const Players = ({ players }) => (
  <Fragment>
    <h4>Add a player</h4>
    {/* add player component */}
    <Add />
    
    {/* if there are players then render a list otherwise output nothing */}
    { players.length !== 0 
      ? <Fragment> 
          <h4 className='my-3'>Players
            {/* if a minimum of four players then render pick teams button */}
            { players.length >= 4
              ? <Link 
                  to='/teams' 
                  // if an odd number of players use template literal to 
                  // disable pick teams button
                  className={`btn btn-outline-secondary float-right 
                    ${ players.length % 2 === 0 ? '' : 'disabled' }`}
                >
                Pick Teams
                </Link>
              : null
            }
          </h4>
          {/* render list of players */}
          <PlayerList />
        </Fragment>
      : null
    }  
  </Fragment>      
);

export default Players;
