import React, { Component } from 'react';
import './App.css';
import{Grid}from'react-bootstrap'
import SubTotal from './component/subTotal/SubTotal'
import PickupSaving from './component/saving/PickupSaving'
import TaxesFee from './component/taxesFee/TaxesFee'
import EstimatedTotal from './component/estimatedTotal/EstimatedTotal'
import ItemDetail from './component/itemDetails/ItemDetails'
import PromoCode from './component/promoCode/PromoCode'


class App extends Component {
  state={
    total:100,
    pickupSaving:-3.85,
    taxes:0,
    estimatedTotal:0
  }

  render() {
    return (
      <div                             className="container App">
      <Grid                            className='purchase-card grid'>
      <SubTotal                        total={this.state.total.toFixed(2)}/>
      <PickupSaving                    price={this.state.pickupSaving}/>
      <TaxesFee                        taxes={this.state.taxes.toFixed(2)}/>
      <hr/>
      <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
      <ItemDetail price={this.state.estimatedTotal.toFixed(2)}/>
      <hr/>
      <PromoCode/>
      </Grid>
      </div>
    );
  }
}

export default App;
