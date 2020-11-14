import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Scrumboard from './apps/scrumboard/Scrumboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/scrumboard">
            <Scrumboard />
          </Route>
          <Route path="/">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <Link to="/scrumboard">Scrumboard</Link>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
