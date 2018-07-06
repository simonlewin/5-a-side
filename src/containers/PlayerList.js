import { connect } from 'react-redux';

import { removePlayer, resetPlayers } from '../data/actions/state';

// import PlayerList component
import PlayerList from '../components/PlayerList';

// mapDispatchtoProps gets given store's dispatch method as the first argument
// and returns an object which gets passed in as props to the wrapped component
// one for Delete dispatch action and one for Reset dispatch action
const mapDispatchToProps = dispatch => ({
  onClickDelete: (e, id) => {
    dispatch(removePlayer(id));
  },
  onClickReset: () => {
    dispatch(resetPlayers());
  }
});

// mapStateToProps is passed in the current state and returns an object, 
// which gets passed in as props to the connected component
const mapStateToProps = state => ({
  players: state.players,
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);