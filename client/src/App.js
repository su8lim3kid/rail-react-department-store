import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import NoMatch from './components/NoMatch';
import { Container, } from "semantic-ui-react";
import Department from './components/Department'
import DepartmentsForm from './components/DepartmentsForm'
import DepartmentView from './components/DepartmentView'


const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/department" component={Department} />
          <Route exact path="/departments/new" component={DepartmentsForm} />
          <Route exact path="/departments/:id" component={DepartmentView} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </Fragment>
  );
  
  export default App;
