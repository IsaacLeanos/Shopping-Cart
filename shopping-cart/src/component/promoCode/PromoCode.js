import React, { Component } from 'react'
import{Button,Collapse,Well,Form,Row,Col,FormGroup,ContraolLabel,FormControl}from'react-bootstrap'

class PromoCode extends Component {
    state={
        open:false,
        value:''
    }
  render() {
    return (
      <div>
        <Button                     className='promo-code-button'
                                    bsStyle='link'
                                    onClick={()=>this.setState({open:!this.state.open})}>
        {this.state.open===false?`Apply `:`Hide `}promo code
        {this.state.open===false?` +`:` -`}
        </Button>
      </div>
    )
  }
}

export default PromoCode