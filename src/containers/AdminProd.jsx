import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import './Header.css';
import { bindActionCreators } from 'redux';
import { handleChange } from '../actions';
import Bouton from '../components/Bouton';
import { Link } from 'react-router-dom';
import { postProductAdmin } from "../actions/postProductAdmin";
import { getProductIDAdmin } from "../actions/getProductIDAdmin";
import { putProductAdmin } from "../actions/putProductAdmin";


class AdminProd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeAction: "",
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        let typeAction = this.props.location.state.typeAction;
        this.setState({typeAction : this.props.location.state.typeAction});
        if (typeAction === "M") {
            this.props.getProductIDAdmin(id);
        }   
    }
    
    render() {
        
        let tabSousCategoriePlantes = ["Veuillez sélectionner", "Cactus", "Succulentes", "Orchidées", "Bonzaïs"];
        let tabSousCategorieBijoux = ["Veuillez sélectionner", "Bagues", "Bracelets", "Colliers"];   
        let tabTemp = [];
        if (this.props.formulaire.category === "Plantes") {
            tabTemp = tabSousCategoriePlantes;
        } else if (this.props.formulaire.category === "Bijoux") {
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
                    if (this.state.typeAction === "C") {
                        this.props.postProductAdmin(this.props.formulaire);
                    } else {
                        this.props.putProductAdmin(this.props.formulaire);
                    }
                    }}>
                    <FormGroup row>
                        <Label for="title" sm={2}>Titre : </Label>
                        <Col sm={10}>
                            <Input type="text" name="title" id="title" value={this.props.formulaire.title} onChange={(e) => this.props.handleChange(e)} />
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
                        <Label for="price" sm={2}>Prix en € : </Label>
                        <Col sm={2}>
                            <Input type="number" step="1" name="price" id="price" value={this.props.formulaire.price} onChange={(e) => this.props.handleChange(e)} />
                        </Col>
                        <Label for="stock" sm={2}>Stock : </Label>
                        <Col sm={2}>
                            <Input type="number" step="1" name="stock" id="stock" value={this.props.formulaire.stock} onChange={(e) => this.props.handleChange(e)} />
                        </Col>
                        <Label for="height" sm={2}>Hauteur en cm : </Label>
                        <Col sm={2}>
                            <Input type="number" step="1" name="height" id="height" value={this.props.formulaire.height} onChange={(e) => this.props.handleChange(e)} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="category" sm={2}>Catégorie : </Label>
                        <Col sm={4}>
                            <Input value={this.props.formulaire.category} type="select" name="category" id="category" onChange={(e) => this.props.handleChange(e)} >
                                <option>Veuillez sélectionner</option>
                                <option value="Plantes">Plantes</option>
                                <option value="Bijoux">Bijoux</option>
                            </Input>
                        </Col>
                        <Label for="sub_category" sm={2}>Sous-catégorie : </Label>
                        <Col sm={4}>
                            <Input value={this.props.formulaire.sub_category} type="select" name="sub_category" id="sub_category" onChange={(e) => this.props.handleChange(e)}>
                                {tabTemp.map((item, index) => (                                   
                                    <option value={item} key={index}>{item}</option>
                                ))}
                           </Input>
                        </Col>
    
                    </FormGroup>    
                    <Row className="ligneBoutons">
                        <Bouton name="Valider" />
                        <Link to={{ pathname: '/adminaccueil' }}><Bouton name="Annuler" /></Link>
                    </Row>          
    
                </Form>
        
            </Container>
        )  
    }
    
};

function mdtp(dispatch) {
    return bindActionCreators({postProductAdmin, getProductIDAdmin, putProductAdmin, handleChange}, dispatch);
}
function mstp(state) {
    
    return {
        formulaire: state.formProduct.formulaire,
        loading: state.formProduct.loading,
        error: state.formProduct.error,
    }
}



export default connect(mstp, mdtp) (AdminProd);