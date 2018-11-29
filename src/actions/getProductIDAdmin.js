export const getProductIDAdminBegin = () => ({
  type: 'GET_PRODUCT_ID_ADMIN_BEGIN'
});

export const getProductIDAdminSuccess = produit => ({
  type: 'GET_PRODUCT_ID_ADMIN_SUCCESS',
  produit
});

export const getProductIDAdminFailure = error => ({
  type: 'GET_PRODUCT_ID_ADMIN_FAILURE',
  error
});

export function getProductIDAdmin(id) {
  return dispatch => {
    dispatch(getProductIDAdminBegin());
    return fetch(`http://localhost:3000/admin/produit/${id}`)
      .then(handleErrors)
      .then(res => res.json())
      .then((produit) => {          
        dispatch(getProductIDAdminSuccess(produit))})
      .catch(error => dispatch(getProductIDAdminFailure(error)));
    
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}