import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Row, Col, CardDeck, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import Bouton from '../components/Bouton';
import { subQte, addQte, ajoutPanier} from '../actions';


const ListeArticles = ({articles, liste, subQte, addQte, ajoutPanier}) => (
    <Row className="ligne">
        {articles.map(item => (
            <Col xs="3" key={item.id}>
                <CardDeck>
                    <Card >
                        <CardImg src={item.src} alt={item.titre} />
                        <CardBody>
                            <CardTitle>{item.titre}</CardTitle>
                            <CardText>
                                {item.prix} €
                            </CardText>
                            <div>
                                <div>
                                    <Bouton onClickBtn={(e) => {
                                        e.preventDefault();
                                        subQte(item.id)}} name="-" />
                                    <span className="qte">
                                        {liste.map(itemListe => {
                                            if (itemListe.id === item.id) {
                                                item.qte = itemListe.qte;
                                                return item.qte;
                                            } else {
                                                return "";  
                                            }    

                                        })}
                                    
                                    </span>
                                    
                                    <Bouton onClickBtn={(e) => {
                                        e.preventDefault();
                                        addQte(item.id)}}
                                        name="+" />
                                </div>
                                <Bouton onClickBtn={(e) => {
                                    e.preventDefault();
                                    ajoutPanier(item.id, item.titre, item.qte, item.prix);
                                }}
                                     name="Ajouter au panier" />
                            </div>

                        </CardBody>
                    </Card>
                </CardDeck>        
            </Col>        
        ))}
    </Row>
);


function mstp(state) {
    return {
        articles: state.articles,
        liste: state.listeArticles.liste,
 
    }
}

function mdtp(dispatch) {
    return bindActionCreators({subQte, addQte, ajoutPanier}, dispatch);
}

export default connect(mstp, mdtp) (ListeArticles);