import React, { useState } from "react";
import "./Home.css";
import { Button, Table } from "react-bootstrap";
import Read from "../Read/Read";
import { Link } from "react-router-dom";

const Home = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
    { id: 2, name: "Shuvo", position: "Data Scientist", salary: 26000 },
    { id: 3, name: "Mahadi", position: "Full Stack Dev", salary: 27000 },
  ]);

  return (
    <div>
      <Link to="/create"><Button className="create__btn" variant="primary">Create Item</Button></Link>

      <Table striped bordered>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.position}</td>
              <td>{item.salary}</td>
              <td>
                <Link to="/read"><Button className="action__btn" variant="success">Read</Button></Link>
                <Button className="action__btn" variant="info">Edit</Button>
                <Button className="action__btn" variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
