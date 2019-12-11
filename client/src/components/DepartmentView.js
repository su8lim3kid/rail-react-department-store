import React from "react";
import axios from "axios";
import { Button, Header, Segment, } from "semantic-ui-react";

class DepartmentView extends React.Component {
  state = { department: {}, };

  componentDidMount() {
    const { id, } = this.props.match.params;

    axios.get(`/api/departmentss/${id}`)
    .then( res => {
      this.setState({ product: res.data, });
    })
}

  render() {
    const { name, description, } = this.state.department;

    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
         
          <p>{ description }</p>
          <Header as="p">{ description }</Header>  
        </Segment>
        <br />
        <br />
        <Button 
          color="black" 
          onClick={this.props.history.goBack}
        >
          Back
        </Button>
      </div>
    )
  }
}

export default DepartmentView;