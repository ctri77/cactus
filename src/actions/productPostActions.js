export const postProductsBegin = () => ({
  type: 'POST_PRODUCTS_BEGIN'
});

export const postProductsSuccess = () => ({
  type: 'POST_PRODUCTS_SUCCESS'
});

export const postProductsFailure = error => ({
  type: 'POST_PRODUCTS_FAILURE',
  error
});

export function postProducts(form, data) {
  return dispatch => {
    dispatch(postProductsBegin());
    return fetch("http://localhost:3000/produits", {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(handleErrors)
        .then(() => dispatch(postProductsSuccess()))
        .catch(error => dispatch(postProductsFailure(error)));
    
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
