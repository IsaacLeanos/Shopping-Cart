import React, { Component } from 'react'
import{Button,Collapse,Well,Row,Col,Media}from'react-bootstrap'

export default class ItemDetails extends Component {
    state={
        open:false        
    }
  render() {
    return (
      <div>
        <Button                      className='item-details-button'
                                     bsStyle='link'
                                     onClick={()=>this.setState({open:!this.state.open})}>
        {this.state.open===false?`See`:`Hide `} item details {this.state.open===false?`+`:`-`}
        </Button>

        <Collapse in={this.state.open}>
        <div>
        <Well>
        <Media>
        <Media.Left>
        <img                         width={100}
                                     height={100}
                                     alt='thumbnail'
                                     src='https://i5.walmartimages.com/asr/08e904ae-c7ae-4862-8b2d-ba03bba86afa_1.c526041a45033ac33f78aa3ed315e108.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff'/>
        </Media.Left>
        <Media.Body>
        <p>wal-mart dog food</p>
        <Row                         className='show-grid'>
        <Col                         md={6}>
        <strong>{`$${this.props.price}`}</strong>
        <br/>
        <strong                      className='price-strike'>{`$${this.props.price}`}</strong>
        </Col>
        <Col                         md={6}>Qty: 1</Col>
        </Row>
        </Media.Body>
        </Media>
        </Well>
        </div>
        </Collapse>
      </div>
    )
  }
}
