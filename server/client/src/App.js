import React from 'react';
import { withRouter } from "react-router-dom";
import * as actions from './actions';
import { connect } from "react-redux";

const App = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default App;

