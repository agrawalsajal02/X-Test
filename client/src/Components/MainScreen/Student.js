import React from 'react'
import { Container,Form,Button ,Row,Col} from 'react-bootstrap'
import colleges from "./Form/colleges"
const Student = () => {
    return (
        <Container className="mt-5" >
         <Form>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Name"  required/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email"  required/>
    </Form.Group>

 
  </Form.Row>

  <Form.Row className="mt-4">
  <Form.Group as={Col} controlId="formGridCollege">
      <Form.Label>College</Form.Label>
      <Form.Control as="select" custom required>
    {colleges.map(college=>(
        <option>{college.college}</option>
    ))}
    </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="TestId">
      <Form.Label>TestId</Form.Label>
      <Form.Control type="text" placeholder="Test Id"  required/>
    </Form.Group>

 
  </Form.Row>

  <Form.Group id="formGridCheckbox" className="my-5">
    <Form.Check type="checkbox" label="Above all Info Are Correct"  required/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </Container>
    )
}

export default Student
