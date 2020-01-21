import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contacts from './components/Contacts';

function Routes() {
  return (
    // <Switch>
    //   <Route exact path='/' component={Home} />
    //   <Route exact path='/about' component={About} />
    //   <Route exact path='/experience' component={Experience} />
    //   <Route exact path='/work' component={Work} />
    //   <Route exact path='/contacts' component={Contacts} />
    // </Switch>

    <Switch>
      <Redirect exact from='/erasmus-final-project' to='/' />
      <Route exact path='/'>
        <Home />
      </Route>
      {/* <Route
        exact
        path={`/`}
        render={routerProps => <Home routerProps={routerProps} />}
      /> */}
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/experience'>
        <Experience />
      </Route>
      <Route path='/work'>
        <Work />
      </Route>
      <Route path='/contacts'>
        <Contacts />
      </Route>
    </Switch>
  );
}

export default Routes;
