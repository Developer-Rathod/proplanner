import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route path='/project/:id' component={ProjectDetails}></Route>
          <Route path='/createproject' component={CreateProject}></Route>
          <Route path='/signin' component={SignIn}></Route>
          <Route path='/signup' component={SignUp}></Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
