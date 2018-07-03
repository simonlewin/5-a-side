import { connect } from "react-redux";

import { addPlayer } from "../data/actions/state";

import Add from "../components/Add";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => {
      dispatch(addPlayer(data));
    },
  }
};

// connect up mapDispatchToProps with the Add component
// has to be the second argument - the first is for mapStateToProps
// Add's props are now controlled by this file
export default connect(null, mapDispatchToProps)(Add);