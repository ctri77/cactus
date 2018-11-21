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

            let tempTabSub = [...state.liste, tempObjSub];
            newState = {
                ...state,
                liste: tempTabSub,
               
            }
        } else {

            tempListeSub.map(itemListeSub => {
                if (itemListeSub.id === action.id) {
                    itemListeSub.qte = itemListeSub.qte - 1;
                    return newState = {
                        ...state,
                        liste: tempListeSub,
                       
                    }
                    
                } else {
                    let tempObjSubBis = {};
                    tempObjSubBis.id = action.id;
                    tempObjSubBis.qte = state.qte - 1;
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
                tempObjAdd.qte = state.qte + 1;
                let tempTabAdd = [...state.liste, tempObjAdd];
                newState = {
                    ...state,
                    liste: tempTabAdd,
                   
                }
            } else {

                let resultat = tempListeAdd.find(function(element) {
                    return element.id === action.id;
                })
                if (resultat === undefined) {
                    let tempObjAddBis = {};
                    tempObjAddBis.id = action.id;
                    tempObjAddBis.qte = state.qte + 1;
                    let tempTabAddBis = [...state.liste, tempObjAddBis];
                    newState = {
                        ...state,
                        liste: tempTabAddBis,
                       
                    }

                } else {
                    resultat.qte = resultat.qte + 1;
                    newState = {
                        ...state,

                    }

                }                        

            }
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

            return newState;            
        default:
            return state;

    }

}

export default listeArticles;