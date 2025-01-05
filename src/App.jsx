import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import MainPage from "./paginas/main";
import Ruleta from "./paginas/ruleta";
import Parejas from "./paginas/parejas";
import Cronometro from "./paginas/cronometro";
import Snake from "./paginas/snake";
import AdivinaNumero from "./paginas/adivinaNumero";

function App() {

  return (
  <Router>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/ruleta" exact component={Ruleta} />
      <Route path="/parejas" exact component={Parejas} />
      <Route path="/cronometro" exact component={Cronometro} />
      <Route path="/snake" exact component={Snake} />
      <Route path="/adivinaNumero" exact component={AdivinaNumero} />
      <Redirect to="/" />
    </Switch>
  </Router>
  )
}

export default (App);