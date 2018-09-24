import React, { Component } from 'react'
import{Col,Row}from'react-bootstrap'

// var styles={
//     row:{
//         border:'1px solid purple',
//         marginTop:'1px'
//     }
// }

class TaxesFee extends Component {
  render() {
    return (
      <Row className='show-grid'>
      <Col md={6}>Est. taxes & fees (Based on 94085)</Col>
      <Col md={6}>{`$${this.props.taxes}`}</Col>
        
      </Row>
    )
  }
}

export default TaxesFee