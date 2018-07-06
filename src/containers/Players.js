import { connect } from 'react-redux';

// import Players component
import Players from '../components/Players';

// mapStateToProps is passed in the current state
// and returns an object, which gets passed in as props to 
// the connected component
const mapStateToProps = state => ({
  players: state.players,
});

export default connect(mapStateToProps)(Players);
