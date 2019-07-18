import React from 'react';
import MainNavbar from './MainNavbar'
import Home from './pages/Home'
import About from './pages/About'
import ListPresidents from './pages/ListPresidents'
import ListPresidents2 from './pages/ListPresidents2'
import { Route, Switch } from 'react-router-dom'
import PresidentDetail from './pages/PresidentDetail';

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <div className="container">
        {/* Switch renders the 1st Route that can be rendered */}
        <Switch>
          <Route path="/" exact component={Home} /> {/* Render the component Home when the URL is exactly "/" */}
          <Route path="/about" component={About} /> {/* Render the component About when the URL starts with "/about" */}
          <Route path="/list-presidents" component={ListPresidents} /> {/* Render the component ListPresidents when the URL starts with "/list-presidents" */}
          <Route path="/president-detail/:number" component={PresidentDetail} />{/* Render the component PresidentDetail when the URL starts with "/president-detail/anyValue" and define a props.match.params.number */}
          <Route path="/list-presidents2" component={ListPresidents2} /> {/* Render the component ListPresidents when the URL starts with "/list-presidents" */}
          <Route render={() => <h1>404</h1>} /> {/* Render "404" */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
