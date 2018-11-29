
const initialState = {
  produits: [],
  loading: false,
  error: null
};

export default function recupProduct(state = initialState, action) {
  switch(action.type) {
    case 'GET_PRODUCTS_ADMIN_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      };

    case 'GET_PRODUCTS_ADMIN_SUCCESS':
      return {
        ...state,
        loading: false,
        produits: action.produits
      };

    case 'GET_PRODUCTS_ADMIN_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
        produits: []
      };
    case 'DELETE_PRODUCT_ID_ADMIN_BEGIN':
      return {
          ...state,
          loading: true,
          error: null
        };
    case 'DELETE_PRODUCT_ID_ADMIN_SUCCESS':
      let tempTab = [...state.produits];
      let newTab = tempTab.filter(item => item.id !== action.index);
      return {
          ...state,
          loading: false,
          produits: newTab,   
      };

    case 'DELETE_PRODUCT_ID_ADMIN_FAILURE':
      return {
          ...state,
          loading: false,
          error: action.error,
          produits:  []
      };     
  
    default:
      return state;
  }
}
