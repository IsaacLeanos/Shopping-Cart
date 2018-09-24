import React, { Component } from 'react'
import{Row,Col,Tooltip,OverlayTrigger}from'react-bootstrap'

var styles={
    pickupSaving:{
        textDecoration:'underline',
    },
    totalSaving:{
        color:'red',
        fontWeight:800
    }
}

class PickupSaving extends Component {
  render() {
    const tooltip=
    <Tooltip id='tooltip'>
    <p>Picking up your order in the store helps cut your cost, and we pass the savings on to you.</p>
    </Tooltip>
    return (
      <Row                        className='show-grid' style={styles.row}>

      <Col                        md={6}>
      <OverlayTrigger             placement='bottom' overlay={tooltip}>
      <div                        style={styles.pickupSaving}>Pickup Savings</div>
      </OverlayTrigger>
      </Col>

      <Col                        style={styles.totalSaving} md={6}>
      {`$${this.props.price}`}
      </Col>

      </Row>
    )
  }
}

export default PickupSaving