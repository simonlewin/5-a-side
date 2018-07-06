// add new player to list of players
// add player id property using max id already in array + 1 or 0 if empty
const addPlayer = (state, { player }) => {
  player.id = state.players.length ? Math.max(...state.players.map(el => el.id)) + 1 : 0;

  return {
    ...state,
    players: state.players.concat([player]),
  };
};

// remove player with id = id from list of players
// return a filtered array with the object with the matching id removed 
const removePlayer = (state, { id }) => {
  return {
    ...state,
    players: state.players.filter(el => el.id !== id),
  };
};

// reset players
// return the initial state
const resetPlayers = (state) => {
  return {
    ...state,
    players: [],
  };
};

// reducer returns a new state object based on the action type
const reducer = (state, action) => {
  switch (action.type) {
    case "addPlayer": return addPlayer(state, action);
    case "removePlayer": return removePlayer(state, action);
    case "resetPlayers": return resetPlayers(state, action);
    default: return state;
  }
};

export default reducer;
