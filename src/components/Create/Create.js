import React from "react";
import "./Create.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div className="create">
      <Form>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control type="text" placeholder="Enter Position" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control type="text" placeholder="Enter Salary" />
        </Form.Group>
        <Button className="action_btn" variant="primary" type="submit">
          Create User
        </Button>
        <Link to="/"><Button  className="action_btn" variant="info">
          Back to Home
        </Button> </Link>
      </Form>
    </div>
  );
};

export default Create;
