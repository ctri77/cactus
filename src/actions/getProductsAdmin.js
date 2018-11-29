export const getProductsAdminBegin = () => ({
  type: 'GET_PRODUCTS_ADMIN_BEGIN'
});

export const getProductsAdminSuccess = produits => ({
  type: 'GET_PRODUCTS_ADMIN_SUCCESS',
  produits
});

export const getProductsAdminFailure = error => ({
  type: 'GET_PRODUCTS_ADMIN_FAILURE',
  error
});

export function getProductsAdmin() {   
  return dispatch => {
    dispatch(getProductsAdminBegin());
    return fetch("http://localhost:3000/admin/produits")
      .then(handleErrors)
      .then(res => res.json())
      .then((produits) => 
        dispatch(getProductsAdminSuccess(produits)))
      .catch(error => dispatch(getProductsAdminFailure(error)));
    
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}