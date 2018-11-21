import React from 'react';
import './Bouton.css';

const Bouton = (props) => {
    let clsBtn = props.name === '+' ? 'boutonAjout' : props.name === '-' ? 'boutonSub' : props.name === 'supp article' ? 'boutonSuppArticle' : '';
    let nom = '';
    if ((props.name === '+') || (props.name === '-') || (props.name === 'supp article')) {
        nom = '';
    } else {
        nom = props.name;
    }
    return (
        <button onClick={props.onClickBtn} className={clsBtn}>{nom}</button>
    );
    
}

export default Bouton;