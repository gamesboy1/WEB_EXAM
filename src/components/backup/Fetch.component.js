import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { createStore } from 'redux';

import { getName, setName } from '../actions/User.actions';

const presidentint = {id: 0,nm: "" ,pp: "",tm: ""};

const president = (state = presidentint , actions) =>{
  switch(actions.type){
    case 'GET_NM':
      state = { ...state,
                nm: actions.payload
              };
      break;
    case 'GET_PP':
      state = { ...state,
                pp: actions.payload
              };
      break;
    case 'GET_TM':
      state = { ...state,
                tm: actions.payload
              };
      break;
    case 'DEL':
      state = { ...state,
                id: 0,
                nm: "",
                pp: "",
                tm: ""
              };
      break;
    default:
      break;
  }
}

const store = createStore(president);

store.subscribe(() => { console.log (store.getState()); });

store.dispatch({type: "GET_NM", payload:"1"})

class FetchPage extends React.Component {

  render() {
    return (
      <div>
      {/*  <button onClick={store.dispatch({type: "GET_NM", payload:"1"})}>Get Data</button> */}
        <p>   </p>
      {/*  <button onClick={store.dispatch({type: "DEL"})}>Clear</button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getName: () => {
      dispatch(getName());
    },
    setName: (name) => {
      dispatch(setName(name));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FetchPage));
