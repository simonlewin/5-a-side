import React, { Component, Fragment } from 'react';

import { Link } from "react-router-dom";

import Team from './Team'

// Fisher–Yates algorithm to shuffle array
const shuffle = array => {
  let m = array.length, t, i;

  // while there remain elements to shuffle…
  while (m) {

      // pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // and swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
  }      
  return array;
}

// shows teams - two lists of players
class Teams extends Component {
	render () {
    const { players } = this.props;

    // copy the props array
    const copy = players.map(a => ({...a}));

    // shuffle the array
    let shuffled = shuffle(copy);
    let l = shuffled.length;

    // slice the array into two equal parts 
    let team1 = shuffled.slice(0, l / 2);
    let team2 = shuffled.slice(l / 2 , l);

		return (
			<Fragment>
				{ /* check there are players to show otherwise show warning */ }
        { players.length ?
          <Fragment>
            <div className='row'>
              <Team team={ team1 }>Team 1</Team>
              <Team team={ team2 }>Team 2</Team>
            </div>
            <Link to='/teams' className='btn btn-outline-primary float-right my-3'>Pick Again</Link>
            <Link to='/' className='btn btn-outline-warning float-right m-3'>Edit Players</Link>
          </Fragment>
					:
					<p className='alert alert-warning text-center' role='alert'>
            No players found - to get started <Link to='/'>add some players</Link>
          </p>
				}
			</Fragment>
		);
	}
}

export default Teams;
