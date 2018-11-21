import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import './Header.css';
import { bindActionCreators } from 'redux';
import { handleChange } from '../actions';
import Bouton from '../components/Bouton';
import { Link } from 'react-router-dom';
import { postProducts } from "../actions/productPostActions";
import { fetchProductID } from "../actions/productFetchIDActions";



class AdminProd extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        if (id !== undefined) {
            this.props.fetchProductID(id);
        }
   
       
    }
    render() {
        
        let tabSousCategoriePlantes = ["Veuillez sélectionner", "Cactus", "Succulentes", "Orchidées", "Bonzaïs"];
        let tabSousCategorieBijoux = ["Veuillez sélectionner", "Bagues", "Bracelets", "Colliers"];   
        let tabTemp = [];
        if (this.props.formulaire.categorie === "Plantes") {
            tabTemp = tabSousCategoriePlantes;
        } else if (this.props.formulaire.categorie === "Bijoux") {
            tabTemp = tabSousCategorieBijoux;
        } else {
            tabTemp = [];
        }
       
        if (this.props.error) {
          return <div>Error! {this.props.error.message}</div>;
        }
    
        if (this.props.loading) {
          return <div>Loading...</div>;
        }

        return(
            <Container>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.postProducts(this.props.formulaire, e)}}>
                    <FormGroup row>
                        <Label for="titre" sm={2}>Titre : </Label>
                        <Col sm={10}>
                            <Input type="text" name="titre" id="titre" value={this.props.formulaire.titre} onChange={(e) => this.props.handleChange(e)} />
                        </Col>
                    </FormGroup>    
                    <FormGroup row>
                        <Label for="image1" sm={2}>Image 1 : </Label>
                        <Col sm={4}>
                            <Input type="url" name="image1" id="image1" value={this.props.formulaire.image1} onChange={(e) => this.props.handleChange(e)} />
                        </Col>
                        <Label for="image2" sm={2}>Image 2 : </Label>
                        <Col sm={4}>
                            <Input type="url" name="image2" id="image2" value={this.props.formulaire.image2} onChange={(e) => this.props.handleChange(e)} />
                        </Col>
                    </FormGroup>   
                    <FormGroup row>
                        <Label for="desc" sm={2}>Description : </Label>
                        <Col sm={10}>
                            <Input type="textarea" name="description" id="desc" value={this.props.formulaire.description} onChange={(e) => this.props.handleChange(e)} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="prix" sm={2}>Prix en € : </Label>
                        <Col sm={2}>
                            <Input type="number" step="1" name="prix" id="prix" value={this.props.formulaire.prix} onChange={(e) => this.props.handleChange(e)} />
                        </Col>
                        <Label for="stock" sm={2}>Stock : </Label>
                        <Col sm={2}>
                            <Input type="number" step="1" name="stock" id="stock" value={this.props.formulaire.stock} onChange={(e) => this.props.handleChange(e)} />
                        </Col>
                        <Label for="hauteur" sm={2}>Hauteur en cm : </Label>
                        <Col sm={2}>
                            <Input type="number" step="1" name="hauteur" id="hauteur" value={this.props.formulaire.hauteur} onChange={(e) => this.props.handleChange(e)} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="categorie" sm={2}>Catégorie : </Label>
                        <Col sm={4}>
                            <Input value={this.props.formulaire.categorie} type="select" name="categorie" id="categorie" onChange={(e) => this.props.handleChange(e)} >
                                <option>Veuillez sélectionner</option>
                                <option value="Plantes">Plantes</option>
                                <option value="Bijoux">Bijoux</option>
                            </Input>
                        </Col>
                        <Label for="sous_categorie" sm={2}>Sous-catégorie : </Label>
                        <Col sm={4}>
                            <Input value={this.props.formulaire.sous_categorie} type="select" name="sous_categorie" id="sous_categorie" onChange={(e) => this.props.handleChange(e)}>
                                {tabTemp.map((item, index) => (                                   
                                    <option value={item} key={index}>{item}</option>
                                ))}
                           </Input>
                        </Col>
    
                    </FormGroup>    
                    <Row className="ligneBoutons">
                        <Bouton name="Valider" />
                        <Link to={{ pathname: '/adminaccueil' }}><Bouton name="Annuler" /></Link>
                        <Link to={{ pathname: '/adminaccueil' }}><Bouton name="Retour" /></Link>
                    </Row>          
    
                </Form>
        
            </Container>
        )  
    }
    
};

function mdtp(dispatch) {
    return bindActionCreators({postProducts, fetchProductID, handleChange}, dispatch);
}
function mstp(state) {
    
    return {
        formulaire: state.formProduct.formulaire,
        loading: state.formProduct.loading,
        error: state.formProduct.error,
    }
}



export default connect(mstp, mdtp) (AdminProd);