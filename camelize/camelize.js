function camelize(string) {
  return string.replace(/([A-Z]){1}([A-Z]*)/g, (match, majuscule, convertir) => `${majuscule}${convertir.toLowerCase()}`)
    .replace(/^([A-Z])|[\s-_]([a-zA-Z])/g, (match, premierCaractere, caracteres, index) => {
      return index === 0 ? premierCaractere.toLowerCase() : caracteres.toUpperCase()
    })
 }