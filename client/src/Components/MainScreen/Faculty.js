import React,{useState} from 'react'
import { Container ,Form,Row,Col,InputGroup,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Faculty = () => {
    const [validated, setValidated] = useState(false);
    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //       event.preventDefault();
    //       event.stopPropagation();
    //     }
    
    //     setValidated(true);
    //   };

        
   
  return (
    <Container className="pt-5">
    <h2 className="text-center pb-5">Login Here</h2>
<Row><Col md={6} className="m-auto" >
<Form>
<Form.Group controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" />
<Form.Text className="text-muted">
We'll never share your email with anyone else.
</Form.Text>
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Row>
<Col md={6}>
<Button variant="primary" type="submit" className="ml-5">
Submit
</Button>
</Col>
<Col md={6} >
<Link to="/Register">

<h6 className="mt-3">
For Register ,Click Here !
</h6>
</Link>
</Col>

</Row>
</Form>
</Col></Row>
</Container>
    
);
      }
export default Faculty
