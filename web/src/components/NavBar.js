import React, { Component } from 'react'
import { Navbar, Nav, Col } from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar variant="dark" >
                    <Col style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginLeft: '3%',
                        marginRight: '10%'
                    }}>
                        <Navbar.Brand href="#home">CUBES</Navbar.Brand>
                        <Nav className="me-right">
                            <Nav.Link href="#Paces">Paces</Nav.Link>
                            <Nav.Link href="#Stories">Stories</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>
                    </Col>
                </Navbar>
            </div>
        )
    }
}
