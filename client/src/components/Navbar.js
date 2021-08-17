import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const NavBar = ({ user }) => {
    return (
        <div>
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">Wishlist App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Dropdown"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                                <NavDropdown.Item href="/wishes">Your Wishes</NavDropdown.Item>
                                <NavDropdown.Item href="/wishes/new">Create Wish</NavDropdown.Item>
                                <NavDropdown.Item href="/group/new">Create Group</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="/login">{user ? `${user.username}` : "Not Signed In"}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
