import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Project from './routes/Project';
import About from './routes/About';
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      <Header mode="project" />

      <Switch>
        <Route exact path="/project" component={Project} />
        <Route exact path="/project/:id" component={Detail} />
        <Route exact path="/about" component={About} />

        <Route path="/">
          <Redirect to="/project" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
