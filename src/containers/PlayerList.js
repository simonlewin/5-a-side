import { connect } from "react-redux";

import { removePlayer } from "../data/actions/state";

import PlayerList from "../components/PlayerList";

// map dispatch to props gets given store's dispatch method as the first argument
// again, we return an object which gets passed in as props to the wrapped component
const mapDispatchToProps = (dispatch, { id }) => ({
  onClick: () => {
    dispatch(removePlayer(id));
  }
});

// mapStateToProps is passed in the current state
// and returns an object, which gets passed in as props to 
// the connected component
const mapStateToProps = state => ({
  players: state.players,
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);