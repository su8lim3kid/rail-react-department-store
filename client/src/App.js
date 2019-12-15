import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Departments from "./components/Departments";
import DepartmentsForm from "./components/DepartmentsForm";
import DepartmentView from "./components/DepartmentView";
import { Route, Switch, } from "react-router-dom";
import { Container, } from "semantic-ui-react";
import styled from 'styled-components';

const App = () => (
  <AppContainer>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentsForm} />        
        <Route exact path="/departments/:id" component={DepartmentView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </AppContainer>
);

const AppContainer = styled.div`
 margin: 0;
	width: 100%;
	height: 100vh;
	color: #fff;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradientBG 15s ease infinite;
  @keyframes gradientBG {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`;



export default App;
