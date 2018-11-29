export const getProductsHomeBegin = () => ({
  type: 'GET_PRODUCTS_HOME_BEGIN'
});

export const getProductsHomeSuccess = produits => ({
  type: 'GET_PRODUCTS_HOME_SUCCESS',
  produits
});

export const getProductsHomeFailure = error => ({
  type: 'GET_PRODUCTS_HOME_FAILURE',
  error
});

export function getProductsHome() {   
  return dispatch => {
    dispatch(getProductsHomeBegin());
    return fetch("http://localhost:3000/accueil/produits")
      .then(handleErrors)
      .then(res => res.json())
      .then((produits) => 
        dispatch(getProductsHomeSuccess(produits)))
      .catch(error => dispatch(getProductsHomeFailure(error)));
    
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}