import React from 'react';
import { Header, } from "semantic-ui-react";
import styled from 'styled-components';

const Home = () => (
  <HomeContainer>
  <Header as="h1" textAlign="center" textColor="white" style={{ color: '#4e0080' }}>Welcome to My Department Store app</Header>
  </HomeContainer>
)

const HomeContainer = styled.div`
background: linear-gradient(to bottom right, aliceblue, grey);

`

export default Home;