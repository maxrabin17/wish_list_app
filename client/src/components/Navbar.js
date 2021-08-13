import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar className="navbar" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Wishlist App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/signup">Sign up</Nav.Link>
                        <Nav.Link href="/login">Log in</Nav.Link>
                        <Nav.Link href="/wishes">Wishes</Nav.Link>
                        <Nav.Link href="/logout">Log Out</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
