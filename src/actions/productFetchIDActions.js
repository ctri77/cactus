export const fetchProductIDBegin = () => ({
  type: 'FETCH_PRODUCT_ID_BEGIN'
});

export const fetchProductIDSuccess = produit => ({
  type: 'FETCH_PRODUCT_ID_SUCCESS',
  produit
});

export const fetchProductIDFailure = error => ({
  type: 'FETCH_PRODUCT_ID_FAILURE',
  error
});

export function fetchProductID(id) {
  return dispatch => {
    dispatch(fetchProductIDBegin());
    return fetch(`http://localhost:3000/produit/${id}`)
      .then(handleErrors)
      .then(res => res.json())
      .then((produit) => {          
        dispatch(fetchProductIDSuccess(produit))})
      .catch(error => dispatch(fetchProductIDFailure(error)));
    
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}