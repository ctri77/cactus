export const subQte = (id) => ({
  type: 'SUBQTE',
  id
})

export const addQte = (id) => ({
  type: 'ADDQTE',
  id
})

export const ajoutPanier = (id, titre, qte, prix) => ({
  type: 'ADDPANIER',
  id, titre, qte, prix
})

export const subQtePanier = (id) => ({
  type: 'SUBQTEPANIER',
  id
})

export const addQtePanier = (id) => ({
  type: 'ADDQTEPANIER',
  id
})

export const subPanier = (index, qte, prix) => ({
  type: 'SUBPANIER',
  index, qte, prix
})

export const addProd = (id) => ({
type: 'ADDPROD',
id
})

export const modifProd = (id) => ({
type: 'MODIFPROD',
id
})

export const supProd = (id) => ({
type: 'SUPPROD',
id
})

export const handleChange = (e) => ({
  type: 'CHANGE',
  e
})  

export const handleSelect = (e) => ({
  type: 'SELECT',
  e
})  