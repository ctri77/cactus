const initialState = {
  formulaire: {
     titre: "",
     image1: "",
     image2: "",
     description: "",
     hauteur: 0,
     prix: 0,
     stock: 0,
     categorie: "",
     sous_categorie: "" 
  },
  loading: false,
  error: null

}

const formProduct = (state = initialState, action) => {
  let newState;
  switch(action.type) {
      case 'CHANGE': 
          let tempFormChange = {...state.formulaire};
          tempFormChange[action.e.target.name] = action.e.target.value;
          newState = {                
              formulaire: tempFormChange,    
          }
          return newState;
      case 'POST_PRODUCTS_BEGIN':
          newState = {
              ...state,
              loading: true,
              error: null
            };
          return newState;
    
      case 'POST_PRODUCTS_SUCCESS':
          let tempFormSubmit = {
              titre: "",
              image1: "",
              image2: "",
              description: "",
              prix: 0,
              stock: 0,
              hauteur: 0,
              categorie: "",
              sous_categorie: "" 
          }
          newState = {
              ...state,
              loading: false,
              formulaire: tempFormSubmit,   
          };
          return newState;
    
      case 'POST_PRODUCTS_FAILURE':
      newState = {
          ...state,
          loading: false,
          error: action.error,
          formulaire:  {}
        };     
          return newState; 

      case 'FETCH_PRODUCT_ID_BEGIN':
          newState = {
              ...state,
              loading: true,
              error: null
            };    
          return newState;
      case 'FETCH_PRODUCT_ID_SUCCESS':
          newState = {
              ...state,
              loading: false,
              formulaire: action.produit[0]
            };
            
          return newState;
    
      case 'FETCH_PRODUCT_ID_FAILURE':
          newState = {
              ...state,
              loading: false,
              error: action.error,
              formulaire: {}
            };    
          return newState;
      default:

          return state;
  }
}

export default formProduct;