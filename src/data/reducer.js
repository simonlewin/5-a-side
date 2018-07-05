// add new player to list of players
// create id property using length of array
const addPlayer = (state, { player }) => {
  player.id = state.players.length ? Math.max(...state.players.map(el => el.id)) + 1 : 0;
  // player.id = state.players.length;
  return {
    ...state,
    players: state.players.concat([player]),
  };
};

// remove player with id = id from list of players
const removePlayer = (state, { id }) => {
  return {
    ...state,
    players: state.players.filter(el => el.id !== id),
  };
};

// reducer returns a new state object 
const reducer = (state, action) => {
  switch (action.type) {
    case "addPlayer": return addPlayer(state, action);
    case "removePlayer": return removePlayer(state, action);
    default: return state;
  }
};

export default reducer