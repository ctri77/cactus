const initialState = {
  formulaire: {
     title: "",
     image1: "",
     image2: "",
     description: "",
     height: 0,
     price: 0,
     stock: 0,
     category: "",
     sub_category: "" 
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
      case 'POST_PRODUCT_ADMIN_BEGIN':
          newState = {
              ...state,
              loading: true,
              error: null
            };
          return newState;
    
      case 'POST_PRODUCT_ADMIN_SUCCESS':
          let tempFormSubmit = {
              title: "",
              image1: "",
              image2: "",
              description: "",
              price: 0,
              stock: 0,
              height: 0,
              category: "",
              sub_category: "" 
          }
          newState = {
              ...state,
              loading: false,
              formulaire: tempFormSubmit,   
          };
          return newState;
    
      case 'POST_PRODUCT_ADMIN_FAILURE':
      newState = {
          ...state,
          loading: false,
          error: action.error,
          formulaire:  {}
        };     
          return newState; 

      case 'GET_PRODUCT_ID_ADMIN_BEGIN':
          newState = {
              ...state,
              loading: true,
              error: null
            };    
          return newState;
      case 'GET_PRODUCT_ID_ADMIN_SUCCESS':
          newState = {
              ...state,
              loading: false,
              formulaire: action.produit[0]
            };
            
          return newState;
    
      case 'GET_PRODUCT_ID_ADMIN_FAILURE':
          newState = {
              ...state,
              loading: false,
              error: action.error,
              formulaire: {}
            };    
          return newState;
      case 'PUT_PRODUCT_ADMIN_BEGIN':
          newState = {
              ...state,
              loading: true,
              error: null
            };
          return newState;
    
      case 'PUT_PRODUCT_ADMIN_SUCCESS':
          let tempFormPut = {
              title: "",
              image1: "",
              image2: "",
              description: "",
              price: 0,
              stock: 0,
              height: 0,
              category: "",
              sub_category: "" 
          }
          newState = {
              ...state,
              loading: false,
              formulaire: tempFormPut,   
          };
          return newState;
    
      case 'PUT_PRODUCT_ADMIN_FAILURE':
      newState = {
          ...state,
          loading: false,
          error: action.error,
          formulaire:  {}
        };     
          return newState; 
  
      default:

          return state;
  }
}

export default formProduct;