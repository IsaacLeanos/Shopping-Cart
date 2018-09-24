import React, { Component } from 'react'
import{Row,Col}from'react-bootstrap'

// var styles={
//   row:{
//     border:'1px solid green'
//   }
// }

class SubTotal extends Component {
  render() {
    return (
      <Row className='show-grid'>
        <Col md={6}>SubTotal</Col>
        <Col md={6}>{`$${this.props.total}`}</Col>
      </Row>
    )
  }
}

export default SubTotal
