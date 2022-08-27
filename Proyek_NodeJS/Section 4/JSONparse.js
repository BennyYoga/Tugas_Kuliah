const book = [
    {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
    },
    {
        title: 'Superhero is Friend',
        author: 'Asep Barbar'
    }
]
// // Covert JavaScript object into JSON string
const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// // Covert JSON string into object
const bookObject = JSON.parse(bookJSON)
console.log(bookObject);
module.export = bookObject
// console.log(bookObject) // Print: Ego is the Enem