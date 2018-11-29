import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Bouton from '../components/Bouton';
import { bindActionCreators } from 'redux';
import { subQtePanier, addQtePanier, subPanier} from '../actions';
import './Panier.css';



const Panier = ({subQtePanier, addQtePanier, subPanier, liste, qteTotal, sommeHT, TVA, sommeTTC}) => (

    <Container>
        <Row className="lignex">

            <Col className="encadre" sm="7">
                <h2>Mon panier</h2>
                <ul>
                {liste.map((item, index) => (
                    <li key={index}>
                        <h4>{item.title}</h4>
                        <p className="prix">Prix : {item.price} €</p>
                        <p>En stock : {item.stock}</p>
                        <p className="ligneQte">Quantité : {' '}

                            <Bouton onClickBtn={() => {subQtePanier(item.id)}} name="-" />{' '}
                            <span>{' '}
                                {item.qte}
                            </span>{' '}
                            
                            <Bouton onClickBtn={() => {addQtePanier(item.id, item.stock)}}
                                name="+" />
                            <Bouton onClickBtn={() => {subPanier(index, item.qte, item.price)}}
                                name="supp article" />
                        </p>
                        <p>Total : {item.prixTotal} €</p>

                    </li>
                    
                ))}
                </ul>
            </Col>
            <Col className="encadre" sm="5">
                <h2>Ma commande</h2>
                <p>Nombre d'articles : {qteTotal}</p>
                <p>Sous-Total HT : {sommeHT} €</p>
                <p>TVA (20%) : {TVA} €</p>
                <hr />
                <p>TOTAL TTC : {sommeTTC} €</p>
            </Col>
        </Row>

    </Container>
)
   
 

   

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