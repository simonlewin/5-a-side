import React from 'react';

// team component to render a team name a single list of 
// players from an array of player objects
const Team = ({ children, team }) => (
  <div className='col'>
		<h4 className='text-center'>
      { children }
		</h4>
    <ul className='list-group'>
      { team.map((player, i) => (
				<li className='list-group-item' key={ i }>
					{ player.name }
				</li>
			))}
    </ul>
	</div>
);

export default Team;
