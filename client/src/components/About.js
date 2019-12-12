import React from 'react';
import { Header, } from "semantic-ui-react";
import styled from 'styled-components';

const About = () => (
  <AboutContainer>
  <Header as="h1" textAlign="center" textColor="white" style={{ color: '#4e0080' }} >In Departments you will get to <br/> view Departments as well as a <br />desciption to each department<br />You can also add a new Department </Header>
  
</AboutContainer>
)

const AboutContainer = styled.div`
background: linear-gradient(to bottom right, aliceblue, grey);

`

export default About;