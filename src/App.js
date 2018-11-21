import React, { Component } from 'react';
import './App.css';
import Accueil from './components/Accueil';
import Panier from './containers/Panier';
import AdminHome from './containers/AdminHome';
import AdminProd from './containers/AdminProd';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/panier" component={Panier} />
        <Route exact path="/adminaccueil" component={AdminHome} />
        <Route exact path="/adminaccueil/produit/" component={AdminProd} />
        <Route exact path="/adminaccueil/produit/:id" component={AdminProd} />
      </Switch>

    );
  }
}

export default App;