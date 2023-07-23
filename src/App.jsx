import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import MainPage from "./paginas/main";
import Ruleta from "./paginas/ruleta";
function App() {

  return (
  <Router>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/ruleta" exact component={Ruleta} />
      <Redirect to="/" />
    </Switch>
  </Router>
  )
}

export default (App);