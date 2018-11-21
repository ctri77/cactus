import { combineReducers } from 'redux';
import articlesReducer from './articles';
import listeArticlesReducer from './listeArticles';
import ajoutPanierReducer from './ajoutPanier';
import recupProductReducer from './recupProduct';
import formProductReducer from './formProduct';

const allReducers = combineReducers({
    articles: articlesReducer,
    listeArticles: listeArticlesReducer,
    ajoutPanier: ajoutPanierReducer,
    recupProduct: recupProductReducer,
    formProduct: formProductReducer

})

export default allReducers;