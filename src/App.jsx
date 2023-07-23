import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import MainPage from "./paginas/main";

function App() {

  return (
  <Router>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
  )
}

export default (App);