import React, { Component } from 'react'
import {Navbar,Container,Nav } from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar variant="dark" >
                    <Container>
                        <Navbar.Brand href="#home">CUBES</Navbar.Brand>
                        <Nav className="me-right">
                            <Nav.Link href="#Paces">Paces</Nav.Link>
                            <Nav.Link href="#Stories">Stories</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
