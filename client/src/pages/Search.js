import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Search() {
    return (
        <Container fluid>
            <Row className='text-center'>
                <h1>(React) Google Books Search</h1>
            </Row>
            <Row>
                <h3>Search for and Save Books of Interest</h3>
            </Row>
        </Container>
    )
}
