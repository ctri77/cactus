import { combineReducers } from 'redux';
import listeArticlesReducer from './listeArticles';
import ajoutPanierReducer from './ajoutPanier';
import recupProductReducer from './recupProduct';
import formProductReducer from './formProduct';
import fetchProductsHomeReducer from './fetchProductsHome';

const allReducers = combineReducers({
    listeArticles: listeArticlesReducer,
    ajoutPanier: ajoutPanierReducer,
    recupProduct: recupProductReducer,
    formProduct: formProductReducer,
    fetchProductsHome: fetchProductsHomeReducer

})

export default allReducers;