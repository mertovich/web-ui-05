import React, { Component } from 'react'
import NavBar from './components/NavBar'
import { Col } from 'react-bootstrap'
import OneSection from './components/OneSection'

export default class App extends Component {
  render() {
    return (
      <div style={{
        backgroundImage: `url("https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940")`,
        height: '100vh',
        width: '100%',
        overflowX:'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <NavBar />
        <Col style={{
          marginLeft:'5%',
        }} >
          <OneSection />
        </Col>
      </div>
    )
  }
}
