
import React, { Component, useState,Fragment } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './messages.css';
// import { response } from 'express';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      showing: true,
      messages: [],
      activeIndex: null,
      hide: 'none',
      messageID: '',
      bgColor:'green'
    };
    
    this.handleClick = this.handleClick.bind(this)
  }
  

 
  componentDidMount() {
    fetch('/api/messages') 
      .then(res => res.json()) 
      .then(messages => this.setState({messages}, () => console.log('Customers fetched...', messages)));
  }
  handleClick(){
    
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state.messages)
    .then(response =>{
      console.log(response.data)
      
      
    })
    .catch(error =>{
      console.log(error)
    })
    
  }
  
  
  render() {
    const {showing, block} = this.state;
    return (
      <Container>
        <Row>
          <Col><button onClick={this.handleClick}>Click</button></Col>
         
        </Row>
        <br/>
        <Row>
          <Col><button onClick={() => this.setState({showing: !showing})}>Toggle</button></Col>
        </Row>
        <Row>
          <Col> <h2>Customers</h2></Col>
        </Row>
       
        {showing
              ?<Container>
                 {this.state.messages.map((message, index) => 
                 <Container id="main" style={ message.id === this.state.messageID ? { display: this.state.hide } : null}>
                  <Row style={ message.id === this.state.messageID ? { display: this.state.hide } : null}>
                    <Col md={2}><h4>Name:</h4></Col>
                     <Col md={3}>
                          <h3 className="name">{message.firstName} {message.lastName}</h3>
                     </Col>
                     <Col md={7}>
                          <button onClick={() => this.setState({ messageID: message.id }, console.log(this.state.messageID))}
                            style={ index === this.state.activeIndex ? { backgroundColor: this.state.bgColor } : null}
                          >Block</button>
                     </Col>
                   </Row>
                 <Row style={ message.id === this.state.messageID ? { display: this.state.hide } : null}>
                   <Col md={2}>
                     <h4>Message:</h4>
                   </Col>
                   <Col md={8}>
                     <h5 className="message">{message.txt}</h5>
                   </Col>
                 </Row>
                 </Container>
                  
                  )}
                  
                </Container> 
            :null
  }
  
        
      </Container>
      
    );
  }
}

export default Customers;