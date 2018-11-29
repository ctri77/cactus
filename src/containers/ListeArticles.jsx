import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Row, Col, CardDeck, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import Bouton from '../components/Bouton';
import { subQte, addQte, ajoutPanier} from '../actions';
import { getProductsHome } from '../actions/getProductsHome';


class ListeArticles extends Component {
    componentDidMount() {
        this.props.getProductsHome();       
    }

    render() {
        const { error, loading, articles, liste, subQte, addQte, ajoutPanier } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
        if (loading) {
            return <div>Loading...</div>;
        }
        return (
            <Row className="ligne">
                {articles.map(item => (
                    <Col xs="3" key={item.id}>
                        <CardDeck>
                            <Card >
                                <CardImg src={item.image1} alt={item.title} />
                                <CardBody>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardText>
                                        {item.price} €
                                        <br />
                                        En stock : {item.stock}
                                    </CardText>
                                    <div>
                                        <div>
                                            <Bouton onClickBtn={() => subQte(item.id, item.stock)} name="-" />
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
                                            
                                            <Bouton onClickBtn={() => addQte(item.id, item.stock)} name="+" />
                                        </div>
                                        <Bouton onClickBtn={() => ajoutPanier(item.id, item.title, item.qte, item.price, item.stock)}
                                            name="Ajouter au panier" />
                                    </div>

                                </CardBody>
                            </Card>
                        </CardDeck>        
                    </Col>        
                ))}
            </Row>
        )
    } 
};


function mstp(state) {
    return {
        articles: state.fetchProductsHome.articles,
        loading: state.fetchProductsHome.loading,
        error: state.fetchProductsHome.error,
        liste: state.listeArticles.liste,
 
    }
}

function mdtp(dispatch) {
    return bindActionCreators({subQte, addQte, ajoutPanier, getProductsHome}, dispatch);
}

export default connect(mstp, mdtp) (ListeArticles);