import React from "react";
import axios from "axios"
import { Button, Card, Header, Icon } from "semantic-ui-react";
import { Link, } from "react-router-dom";


class departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
      axios.get("/api/departments")
      .then( res =>{
          this.setState({ departments: res.data})
      })
     
  }

  deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
      .then(res => {
        const { departments, } = this.state;
        this.setState({ departments: departments.filter(t => t.id !== id), })
      })
  }

  renderDepartments = () => {
    const { departments, } = this.state;
    if (departments.length <= 0)
      return <Header as="h2" textAlign="center">No Departments</Header>

    return departments.map( departments => (
      <Card>
        <Card.Content>
          <Card.Header>{ departments.name }</Card.Header>
          <Card.Description>{ departments.description }</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/departments/${departments.id}`} color='blue'>
            View
          </Button>
          <Button icon color='red' onClick={() => this.deleteDepartment(departments.id)}> <Icon name='trash' /> </Button>
        </Card.Content>
      </Card>
    ))
  }
  render() {
    return (
      <div>
        <Header as="h1" textAlign="center">Departments</Header>
        <br />
        <Card.Group>
          { this.renderDepartments() }
        </Card.Group>
      </div>
    );
  };
};


export default departments;