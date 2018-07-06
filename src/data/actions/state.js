// add player action
export const addPlayer = player => ({
  type: 'addPlayer',
  player: player,
});

// remove player action
export const removePlayer = id => ({
  type: 'removePlayer',
  id: id,
});

// reset players action
export const resetPlayers = id => ({
  type: 'resetPlayers',
});
