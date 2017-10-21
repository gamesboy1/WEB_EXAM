import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getName, setName } from '../actions/User.actions';

class FetchPage extends React.Component {
  getdata(){
    const dUrl = "http://mysafeinfo.com/api/data?list=presidents&format=json";
  }

  render(){
    
    return (
      <div>
        <div>
        <button onClick={this.getdata}>GET DATA</button>
        <p> </p>
        <button onClick={this.cleardata}>Clear</button>
        </div>
      </div>
    );
  }
}

export default FetchPage