//short hand
let name = "Benny Yoga"
let age = 27

const user = {
    name : name,
    age : age,
    location : "bandung"
}

const userShortHand = {
    name,
    age,
    location : "bandung"
}

// console.table(userShortHand);

//Destrukturing
const user2 = {
    nama : "ben",
    umur : 12,
    lokasi : "rancaekek"
}
// const {nama,umur,lokasi:address} = user2

//Destrukturing Function Parameter
const film = {
    namaFilm : "Startsup",
    rating : 5,
}

const printFilm = (comment,{namaFilm,rating}) => {
    console.log(comment,namaFilm,rating);
}

printFilm("sangat bagus", film)