const addPlayer = (state, { player }) => {
  return {
    ...state,
    players: state.players.concat([player]),
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addPlayer": return addPlayer(state, action);
    default: return state;
  }
};

export default reducer