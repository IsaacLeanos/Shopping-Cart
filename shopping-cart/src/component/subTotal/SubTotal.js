import React, { Component } from 'react'
import{Row,Column}from'react-bootstrap'

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
