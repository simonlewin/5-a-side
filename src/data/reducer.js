// add new player to list of players
// create id property using length of array
const addPlayer = (state, { player }) => {
  player.id = state.players.length;
  return {
    ...state,
    players: state.players.concat([player]),
  };
};

const removePlayer = (state, { id }) => {
  console.log(id);
  return {
    ...state,
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