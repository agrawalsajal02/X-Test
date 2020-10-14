import React from 'react'
import { Col, Container, Row,Image, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Mainscreen = () => {
    return (
        <Container className="mt-4">
        <Row>
            <Col md={6} className="text-center py-3">
            <h2>
                For Students
            </h2>
            <Image fluid src={require("./student.jpg")} className="py-3"></Image>
            <LinkContainer to="/students">
        <Button className="mt-4">Click Here</Button>
        </LinkContainer>

            </Col>
     
     
            <Col md={6}  className="text-center py-3">
            <h2>
               For Faculties
            </h2>
            <Image fluid src={require("./Faculties.jpg")} className="py-3"></Image>
        <LinkContainer to="/faculties">
        <Button>Click Here</Button>
        </LinkContainer>
            </Col>


      </Row>
        </Container>
    )
}

export default Mainscreen
