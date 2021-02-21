import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router';

function Navigation({ location }) {
    return (
        <Navbar bg='light' variant='pills' expand='md' activeKey={location.pathname}>
            <Navbar.Brand href='/'>Google Books</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav>
                    <Nav.Link href='/'>Search</Nav.Link>
                    <Nav.Link href='/saved'>Saved</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const NavBar = withRouter(Navigation)

export default NavBar;