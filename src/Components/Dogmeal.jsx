import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Dogmeal() {
  return (
    <div style={{ 
       
        backgroundImage: `url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdog-eating&psig=AOvVaw1VIH-ig189HUME6VPP61om&ust=1671907779307000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLjKxPuzkPwCFQAAAAAdAAAAABAE")` 
      }}>
        <h1> A fresh take on dog food </h1>
        <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Text>
        What breed do we get to feed?
        </Card.Text>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Build Your Box</Button>
          </Form>
      </Card.Body>
    </Card>
      </div>
  )
}

export default Dogmeal