import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Bouton from '../components/Bouton';
import { bindActionCreators } from 'redux';
import { subQtePanier, addQtePanier, subPanier} from '../actions';
import './Panier.css';



class Panier extends Component {
   
    render() {
        return (
            <Container>
                <Row className="lignex">
    
                    <Col className="encadre" sm="7">
                        <h2>Mon panier</h2>
                        <ul>
                        {this.props.liste.map((item, index) => (
                            <li key={index}>
                                <h4>{item.titre}</h4>
                                <p className="prix">Prix : {item.prix} €</p>
                                <p className="ligneQte">Quantité : {' '}
    
                                    <Bouton onClickBtn={(e) => {
                                        e.preventDefault();
                                        this.props.subQtePanier(item.id)}} name="-" />{' '}
                                    <span>{' '}
                                        {item.qte}
                                    </span>{' '}
                                    
                                    <Bouton onClickBtn={(e) => {
                                        e.preventDefault();
                                        this.props.addQtePanier(item.id)}}
                                        name="+" />
                                    <Bouton onClickBtn={(e) => {
                                        e.preventDefault();
                                        this.props.subPanier(index, item.qte, item.prix)}}
                                        name="supp article" />
                                </p>
                                <p>Total : {item.prixTotal} €</p>

                            </li>
                            
                        ))}
                        </ul>
                    </Col>
                    <Col className="encadre" sm="5">
                        <h2>Ma commande</h2>
                        <p>Nombre d'articles : {this.props.qteTotal}</p>
                        <p>Sous-Total HT : {this.props.sommeHT} €</p>
                        <p>TVA (20%) : {this.props.TVA} €</p>
                        <hr />
                        <p>TOTAL TTC : {this.props.sommeTTC} €</p>
                    </Col>
                </Row>
    
            </Container>
        )

    }
    
};


function mstp(state) {

    return {
        liste: state.ajoutPanier.panier,
        qteTotal: state.ajoutPanier.qteTotal,
        sommeHT: state.ajoutPanier.sommeHT,
        TVA: state.ajoutPanier.TVA,
        sommeTTC: state.ajoutPanier.sommeTTC,
    }
}

function mdtp(dispatch) {
    return bindActionCreators({subQtePanier, addQtePanier, subPanier}, dispatch);
}

export default connect(mstp, mdtp) (Panier);