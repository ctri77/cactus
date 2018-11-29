const initialState = {
  liste: [],
  qte: 0,
  
}

const listeArticles = (state = initialState, action) => {
  let newState;
  switch(action.type) {
      case 'SUBQTE':
      let tempListeSub = [...state.liste];

      if (tempListeSub.length === 0) {
          let tempObjSub = {};
          tempObjSub.id = action.id;
          tempObjSub.qte = state.qte - 1;
          if (tempObjSub.qte < 0) {
              tempObjSub.qte = 0;
          }

          let tempTabSub = [...state.liste, tempObjSub];
          newState = {
              ...state,
              liste: tempTabSub,
             
          }
      } else {

          tempListeSub.map(itemListeSub => {
              if (itemListeSub.id === action.id) {
                  itemListeSub.qte = itemListeSub.qte - 1;
                  if (itemListeSub.qte < 0) {
                      itemListeSub.qte = 0;
                  }
                  return newState = {
                      ...state,
                      liste: tempListeSub,
                     
                  }
                  
              } else {
                  let tempObjSubBis = {};
                  tempObjSubBis.id = action.id;
                  tempObjSubBis.qte = state.qte - 1;
                  if (tempObjSubBis.qte < 0) {
                      tempObjSubBis.qte = 0;
                  }
                  let tempTabSubBis = [...state.liste, tempObjSubBis];
                  return newState = {
                      ...state,
                      liste: tempTabSubBis,
                     
                  }
              }
          })
          

      }

      return newState; 
      case 'ADDQTE':
      let tempListeAdd = [...state.liste];
      if (tempListeAdd.length === 0) {
          let tempObjAdd = {};
          tempObjAdd.id = action.id;
          tempObjAdd.stockreached = false;
          if (state.qte === action.stock) {
            tempObjAdd.qte = state.qte;
            tempObjAdd.stockreached = true;
          } else {
            
            if (tempObjAdd.stockreached === false) {
              tempObjAdd.qte = state.qte + 1;
              if (tempObjAdd.qte === action.stock) {
                tempObjAdd.stockreached = true;
              }
              
            }

          }
          tempObjAdd.stock = action.stock; 
          let tempTabAdd = [...state.liste, tempObjAdd];
          newState = {
              ...state,
              liste: tempTabAdd,             
          }
          
      } else {
          tempListeAdd.map(itemListeAdd => {
              if (itemListeAdd.id === action.id) {
                console.log('a');
                if (itemListeAdd.qte !== action.stock) {
                  console.log('b');
                  if (itemListeAdd.stockreached === false) {
                    console.log('c');
                    itemListeAdd.qte = itemListeAdd.qte + 1;
                    if (itemListeAdd.qte === action.stock) {
                      itemListeAdd.stockreached = true;
                    }
                  }

                } else {
                  console.log('d');
                  itemListeAdd.stockreached = true;
                }
                
                return newState = {
                    ...state,
                    liste: tempListeAdd,                   
                }
                  
              } else {
                  console.log('e');
                  let tempObjAddBis = {};
                  tempObjAddBis.id = action.id;
                  tempObjAddBis.stockreached = false;
                  if (state.qte === action.stock) {
                    tempObjAddBis.qte = state.qte;
                    tempObjAddBis.stockreached = true;
                  } else {
                      if (tempObjAddBis.stockreached === false) {
                        tempObjAddBis.qte = state.qte + 1;
                      }

                  }
                  
                  let tempTabAddBis = [...state.liste, tempObjAddBis];
                  return newState = {
                      ...state,
                      liste: tempTabAddBis,
                     
                  }
              }
          })          
      }
      console.log(newState);
      return newState; 
      case 'ADDPANIER':

          let tempListeAddPanier = [...state.liste];

          tempListeAddPanier.map(itemListe => {
              if (itemListe.id === action.id) {
                  itemListe.qte = 0;                        
              } 
              return newState = {
                  ...state,
                  liste: tempListeAddPanier,                        
              }
          })
      console.log(newState);    
      return newState;  
          
      default:
          return state;

  }

}

export default listeArticles;