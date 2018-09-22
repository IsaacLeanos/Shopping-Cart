import React, { Component } from 'react';
import './App.css';
import{Grid}from'react-bootstrap'
import SubTotal from './component/subTotal/SubTotal'
import PickupSaving from './component/saving/PickupSaving'
import TaxesFee from './component/taxesFee/TaxesFee'


class App extends Component {
  state={
    total:100,
    pickupSaving:-3.85,
    taxes:0
  }

  render() {
    return (
      <div                             className="container App">
      <Grid                            className='purchase-card grid'>
      <SubTotal                        total={this.state.total.toFixed(2)}/>
      <PickupSaving                    price={this.state.pickupSaving}/>
      <TaxesFee                        taxes={this.state.taxes.toFixed(2)}/>
      </Grid>
      </div>
    );
  }
}

export default App;
