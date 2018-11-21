import React from 'react';
import { Container } from 'reactstrap';
import Header from '../containers/Header';
import ListeArticles from '../containers/ListeArticles';




const Accueil = () => (
    <Container>
        <Header />
        <ListeArticles />
  </Container>
);





export default Accueil;