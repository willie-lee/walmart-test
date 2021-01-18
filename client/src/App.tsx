import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from './components/Layout';
import Home from './containers/Home';
import Add from './containers/Add';

const App: React.FC = () => {

  return (
    <Layout>
      <Router>
        <Switch>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </Layout>
  );
}

export default App;
