export const putProductAdminBegin = () => ({
  type: 'PUT_PRODUCT_ADMIN_BEGIN'
});

export const putProductAdminSuccess = () => ({
  type: 'PUT_PRODUCT_ADMIN_SUCCESS'
});

export const putProductAdminFailure = error => ({
  type: 'PUT_PRODUCT_ADMIN_FAILURE',
  error
});

export function putProductAdmin(form) {
  return dispatch => {
    dispatch(putProductAdminBegin());
    return fetch(`http://localhost:3000/admin/produits/${form.id}`, {
        method: 'PUT',
        body: JSON.stringify(form),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(handleErrors)
        .then(() => dispatch(putProductAdminSuccess()))
        .catch(error => dispatch(putProductAdminFailure(error)));
    
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
