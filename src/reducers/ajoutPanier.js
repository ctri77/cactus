const initialState = {
  panier: [], 
  qteTotal: 0,
  sommeHT: 0,
  TVA: 0,
  sommeTTC: 0,
};

const ajoutPanier = (state = initialState, action) => {
   let newState;
   let tempTotal = state.qteTotal;
   let tempsommeHT = state.sommeHT;
   let tempTVA = state.TVA;
   let tempTVARound;
   let tempsommeTTC = state.sommeTTC;
   let tempQteTotalAdd = state.qteTotal;
   switch(action.type) {
       case 'ADDPANIER':
           if ((action.qte === undefined) || (action.qte === 0)) {
               newState = {
                   ...state,
               }

           } else {

              let tempPanier = [...state.panier];
              let resultat = tempPanier.find(function(element) {
                  return element.id === action.id;
              })
              if (resultat === undefined) {
                  let tempObj = {};
                  tempObj.id = action.id;
                  tempObj.title = action.title;
                  tempObj.qte = action.qte;                   
                  tempObj.price = action.price;
                  tempObj.prixTotal = action.price * action.qte;
                  tempObj.stock = action.stock;
                  tempTotal = tempTotal + action.qte;   
                  let tempTab = [...state.panier, tempObj];
                  tempsommeHT = tempsommeHT + tempObj.prixTotal;
                  tempTVA = tempsommeHT * 0.2;
                  tempTVARound = Math.round(tempTVA * 100) / 100;
                  tempsommeTTC = tempsommeHT + tempTVARound;
                  newState = {
                      ...state,
                      panier: tempTab,
                      qteTotal: tempTotal,
                      sommeHT: tempsommeHT,
                      TVA: tempTVARound,
                      sommeTTC: tempsommeTTC,
                  } 
              } else {
                  resultat.qte = resultat.qte + action.qte;
                  resultat.prixTotal = resultat.qte * resultat.price;
                  tempTotal = tempTotal + action.qte;
                  tempsommeHT = tempsommeHT + resultat.prixTotal;
                  tempTVA = tempsommeHT * 0.2;
                  tempTVARound = Math.round(tempTVA * 100) / 100;
                  tempsommeTTC = tempsommeHT + tempTVARound;
                  newState = {
                      ...state,
                      qteTotal: tempTotal,
                      sommeHT: tempsommeHT,
                      TVA: tempTVARound,
                      sommeTTC: tempsommeTTC,
                  }
              }                        
           }
           return newState;
      case 'SUBPANIER':
          tempsommeHT = tempsommeHT - action.price * action.qte; 
          tempTVA = tempsommeHT * 0.2;
          tempTVARound = Math.round(tempTVA * 100) / 100;
          tempsommeTTC = tempsommeHT + tempTVARound;
          let tempo = state.panier;
          tempTotal = tempTotal - action.qte;
          let tempFiltre = tempo.filter((item, index) => {
          return index !== action.index;
          });
          newState = {
              ...state,
              panier: tempFiltre,
              qteTotal: tempTotal,
              sommeHT: tempsommeHT,
              TVA: tempTVARound,
              sommeTTC: tempsommeTTC,
          }
          return newState;

 
      case 'ADDQTEPANIER':
  
              let tempPanierAdd = [...state.panier];
              let resultatAdd = tempPanierAdd.find((element) =>
                  element.id === action.id
              )
              console.log(tempTVA);
              
              if (resultatAdd.qte !== action.stock) {
                resultatAdd.qte = resultatAdd.qte + 1;
                tempsommeHT = tempsommeHT + resultatAdd.price;
                tempTVA = tempsommeHT * 0.2;
                tempTVARound = Math.round(tempTVA * 100) / 100;
                tempsommeTTC = tempsommeHT + tempTVARound;
                resultatAdd.prixTotal = resultatAdd.qte * resultatAdd.price;
                tempQteTotalAdd = state.qteTotal + 1;
              }
              

              newState = {
                  ...state,
                  panier: tempPanierAdd,
                  qteTotal: tempQteTotalAdd,
                  sommeHT: tempsommeHT,
                  TVA: tempTVARound,
                  sommeTTC: tempsommeTTC,
              }
          
              return newState;
      case 'SUBQTEPANIER':

          let tempPanierSub = [...state.panier];
          let resultatSub = tempPanierSub.find((element) =>
              element.id === action.id
          )
          tempsommeHT = tempsommeHT - resultatSub.price;
          if (tempsommeHT < 0) {
              tempsommeHT = 0;
          }
          tempTVA = tempsommeHT * 0.2;
          tempTVARound = Math.round(tempTVA * 100) / 100;
          tempsommeTTC = tempsommeHT + tempTVARound;
          resultatSub.qte = resultatSub.qte - 1;
          if (resultatSub.qte < 0) {
              resultatSub.qte = 0;
          }
          resultatSub.prixTotal = resultatSub.qte * resultatSub.price;
          let tempQteTotalSub = state.qteTotal - 1;
          if (tempQteTotalSub < 0) {
              tempQteTotalSub = 0;
          }
          newState = {
              ...state,
              panier: tempPanierSub,
              qteTotal: tempQteTotalSub,
              sommeHT: tempsommeHT,
              TVA: tempTVARound,
              sommeTTC: tempsommeTTC,
          }

          return newState;
      default:
          return state;
  
      }
}

export default ajoutPanier;