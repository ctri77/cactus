export const postProductAdminBegin = () => ({
  type: 'POST_PRODUCT_ADMIN_BEGIN'
});

export const postProductAdminSuccess = () => ({
  type: 'POST_PRODUCT_ADMIN_SUCCESS'
});

export const postProductAdminFailure = error => ({
  type: 'POST_PRODUCT_ADMIN_FAILURE',
  error
});

export function postProductAdmin(form) {
  return dispatch => {
    dispatch(postProductAdminBegin());
    return fetch("http://localhost:3000/admin/produits", {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(handleErrors)
        .then(() => dispatch(postProductAdminSuccess()))
        .catch(error => dispatch(postProductAdminFailure(error)));
    
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
