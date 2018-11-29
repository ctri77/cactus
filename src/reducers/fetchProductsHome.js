const initialState = {
  articles: [],
  
}

const fetchProductsHome = (state = initialState, action) => {
  let newState;
  switch(action.type) {
      case 'GET_PRODUCTS_HOME_BEGIN':
          newState = {
              ...state,
              loading: true,
              error: null
          };
          return newState;

      case 'GET_PRODUCTS_HOME_SUCCESS':
          newState = {
              ...state,
              loading: false,
              articles: action.produits
          };
          return newState;

      case 'GET_PRODUCTS_HOME_FAILURE':
          newState = {
              ...state,
              loading: false,
              error: action.error,
              articles: []
          };       
          return newState;    
      default:
          return state;

  }

}

export default fetchProductsHome;