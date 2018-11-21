export const fetchProductsBegin = () => ({
  type: 'FETCH_PRODUCTS_BEGIN'
});

export const fetchProductsSuccess = produits => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  produits
});

export const fetchProductsFailure = error => ({
  type: 'FETCH_PRODUCTS_FAILURE',
  error
});

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch("http://localhost:3000/produits")
      .then(handleErrors)
      .then(res => res.json())
      .then((produits) => 
        dispatch(fetchProductsSuccess(produits)))
      .catch(error => dispatch(fetchProductsFailure(error)));
    
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}