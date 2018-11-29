export const subQte = (id) => ({
  type: 'SUBQTE',
  id
})

export const addQte = (id, stock) => ({
  type: 'ADDQTE',
  id, stock
})

export const ajoutPanier = (id, title, qte, price, stock) => ({
  type: 'ADDPANIER',
  id, title, qte, price, stock
})

export const subQtePanier = (id) => ({
  type: 'SUBQTEPANIER',
  id
})

export const addQtePanier = (id, stock) => ({
  type: 'ADDQTEPANIER',
  id, stock
})

export const subPanier = (index, qte, price) => ({
  type: 'SUBPANIER',
  index, qte, price
})

export const handleChange = (e) => ({
  type: 'CHANGE',
  e
})  

export const handleSelect = (e) => ({
  type: 'SELECT',
  e
})  

