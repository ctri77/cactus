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
     let tempsommeTTC = state.sommeTTC;
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
                    tempObj.titre = action.titre;
                    tempObj.qte = action.qte;
                    tempObj.prix = action.prix;
                    tempObj.prixTotal = action.prix * action.qte;
                    tempTotal = tempTotal + action.qte;   
                    
                    let tempTab = [...state.panier, tempObj];
                    tempsommeHT = tempsommeHT + tempObj.prixTotal;
                    tempTVA = tempsommeHT * 0.2;
                    tempsommeTTC = tempsommeHT + tempTVA;
                    newState = {
                        ...state,
                        panier: tempTab,
                        qteTotal: tempTotal,
                        sommeHT: tempsommeHT,
                        TVA: tempTVA,
                        sommeTTC: tempsommeTTC,
                    } 

                } else {
                    resultat.qte = resultat.qte + action.qte;
                    resultat.prixTotal = resultat.qte * resultat.prix;
                    tempTotal = tempTotal + action.qte;
                    tempsommeHT = tempsommeHT + resultat.prixTotal;
                    tempTVA = tempsommeHT * 0.2;
                    tempsommeTTC = tempsommeHT + tempTVA;
                    newState = {
                        ...state,
                        qteTotal: tempTotal,
                        sommeHT: tempsommeHT,
                        TVA: tempTVA,
                        sommeTTC: tempsommeTTC,
                    }
                }                        
             }
 
             return newState;
        case 'SUBPANIER':
            tempsommeHT = tempsommeHT - action.prix * action.qte; 
            tempTVA = tempsommeHT * 0.2;
            tempsommeTTC = tempsommeHT + tempTVA;
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
                TVA: tempTVA,
                sommeTTC: tempsommeTTC,
            }
        
            return newState;

   
        case 'ADDQTEPANIER':
    
                let tempPanierAdd = [...state.panier];
                let resultatAdd = tempPanierAdd.find(function(element) {
                    return element.id === action.id;
                })
                tempsommeHT = tempsommeHT + resultatAdd.prix;
                tempTVA = tempsommeHT * 0.2;
                tempsommeTTC = tempsommeHT + tempTVA;
                resultatAdd.qte = resultatAdd.qte + 1;
                resultatAdd.prixTotal = resultatAdd.qte * resultatAdd.prix;
                
                newState = {
                    ...state,
                    panier: tempPanierAdd,
                    qteTotal: state.qteTotal + 1,
                    sommeHT: tempsommeHT,
                    TVA: tempTVA,
                    sommeTTC: tempsommeTTC,
                }
            
                return newState;
        case 'SUBQTEPANIER':

            let tempPanierSub = [...state.panier];
            let resultatSub = tempPanierSub.find(function(element) {
                return element.id === action.id;
            })
            tempsommeHT = tempsommeHT - resultatSub.prix;
            tempTVA = tempsommeHT * 0.2;
            tempsommeTTC = tempsommeHT + tempTVA;
            resultatSub.qte = resultatSub.qte - 1;
            resultatSub.prixTotal = resultatSub.qte * resultatSub.prix;
            
            newState = {
                ...state,
                panier: tempPanierSub,
                qteTotal: state.qteTotal - 1,
                sommeHT: tempsommeHT,
                TVA: tempTVA,
                sommeTTC: tempsommeTTC,
            }

            return newState;
        default:
            return state;
    
        }
 }
 
 export default ajoutPanier;