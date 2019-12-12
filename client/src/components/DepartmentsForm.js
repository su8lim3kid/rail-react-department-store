import React from 'react';
import { Form, Header, } from "semantic-ui-react";
import axios from "axios";

class DepartmentsForm extends React.Component {
  defaultValues = { name: "", description: "", };
  state = { ...this.defaultValues, };
  
  handleChange = (e, { name, value, }) => {
    this.setState({ [name]: value, });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/departments", { ...this.state, })
      .then( res => {
        this.props.history.push("/departments");
      })
    this.setState({ ...this.defaultValues, });
  };



  render() {
    const { name, description, } = this.state;

    return (
      <div>
        <Header as="h1">New Department</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
            />
          </Form.Group>
         
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default DepartmentsForm;