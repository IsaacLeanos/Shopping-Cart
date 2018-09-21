import React, { Component } from 'react';
import './App.css';
import{Grid}from'react-bootstrap'
import SubTotal from './component/subTotal/SubTotal'

class App extends Component {
  state={
    total:100
  }
  render() {
    return (
      <div className="container App">
      <Grid className='purchase-card'>
      <SubTotal price={this.state.total}/>
      </Grid>
      </div>
    );
  }
}

export default App;
