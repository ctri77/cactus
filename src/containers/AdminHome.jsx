import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Bouton from '../components/Bouton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProducts } from "../actions/productFetchActions";
import {addProd, supProd, modifProd} from '../actions';
import { Link } from 'react-router-dom';

class AdminHome extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { error, loading, produits } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return(
      <Container>
        <h1>Page Administration</h1>
        <Link to={{ pathname: '/adminaccueil/produit' }}>
          <Bouton name="Ajouter"/>
        </Link>
        <div>
          {produits.map((produit, index) =>
            <Row key={index}>
     
              <Col sm="3"><img src={produit.image1} alt={produit.titre} /></Col>
              <Col sm="3">{produit.titre}</Col>

              <Link to={{ pathname: `/adminaccueil/produit/${produit.id}`}}>
                <Bouton onClickBtn={() => {this.props.modifProd()} }
                  name="Modification"/>
              </Link>
              
                <Bouton onClickBtn={() => {this.props.supProd()} }
                  name="Suppression"/>

            </Row>
          )}
        </div>
      </Container>
    )
  }

}
function mstp(state) {
  return {
    produits: state.recupProduct.produits,
    loading: state.recupProduct.loading,
    error: state.recupProduct.error,
    
  }
}
function mdtp(dispatch) {
  return bindActionCreators({addProd, supProd, modifProd, fetchProducts}, dispatch);
}
export default connect(mstp, mdtp)(AdminHome);