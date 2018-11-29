import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Bouton from '../components/Bouton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProductsAdmin } from '../actions/getProductsAdmin';
import { deleteProductAdmin } from '../actions/deleteProductAdmin';
import { Link } from 'react-router-dom';

class AdminHome extends Component {
  componentDidMount() {
    this.props.getProductsAdmin();
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
        <Link to={{ pathname: '/adminaccueil/produit', state: {typeAction: "C"} }}>
          <Bouton name="Ajouter"/>
        </Link>
        <div>
          {produits.map((produit, index) =>
            <Row key={index}>
     
              <Col sm="3"><img src={produit.image1} alt={produit.title} /></Col>
              <Col sm="3">{produit.title}</Col>

              <Link to={{ pathname: `/adminaccueil/produit/${produit.id}`, state: {typeAction: "M"}}}>
                <Bouton name="Modification"/>
              </Link>
              
                <Bouton onClickBtn={() => this.props.deleteProductAdmin(index, produit.id)} name="Suppression"/>

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
  return bindActionCreators({deleteProductAdmin, getProductsAdmin}, dispatch);
}
export default connect(mstp, mdtp)(AdminHome);