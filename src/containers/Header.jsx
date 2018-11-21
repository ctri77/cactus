import React from 'react';
import { connect } from 'react-redux';
import { Row, Badge } from 'reactstrap';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = ({totalQte}) => {
    let imgSrc = "";
    if (totalQte === 0) {
        imgSrc = "https://i.postimg.cc/Sx1VS7dw/shopping-basket-1.png";
    } else {
        imgSrc = "https://i.postimg.cc/4NRn6xRF/shopping-basket.png";
    }
    return(
        <Row className="ligne">
            <Link to="/panier">
                <img src={imgSrc} alt="panier" />
            
            </Link>
            <Badge className="badge" color="danger">{totalQte}</Badge>
    
        </Row>
    )
};


function mstp(state) {

    return {

        totalQte: state.ajoutPanier.qteTotal,
    }
}



export default connect(mstp) (Header);