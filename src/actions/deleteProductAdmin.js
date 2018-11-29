export const deleteProductIDAdminBegin = () => ({
  type: 'DELETE_PRODUCT_ID__ADMIN_BEGIN'
});

export const deleteProductIDAdminSuccess = () => ({
  type: 'DELETE_PRODUCT_ID_ADMIN_SUCCESS'
});

export const deleteProductIDAdminFailure = error => ({
  type: 'DELETE_PRODUCT_ID_ADMIN_FAILURE',
  error
});

export function deleteProductAdmin(index, id) { 
  return dispatch => {
    if (window.confirm('Voulez-vous vraiment supprimer ?')) {
      dispatch(deleteProductIDAdminBegin());
      return fetch(`http://localhost:3000/admin/produit/${id}`, {
        method: 'DELETE'
      })
        .then(handleErrors)
        .then(() => {          
          dispatch(deleteProductIDAdminSuccess())
          document.location.reload(true);
        })
        .catch(error => dispatch(deleteProductIDAdminFailure(error)));        
    };
  }
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  console.log(response);
  return response;
}