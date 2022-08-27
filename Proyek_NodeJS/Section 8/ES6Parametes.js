const data = (name = "benny", age) => {
    console.log(name);
}
data()
data("yoga")

const data2 = (type,{label, stock = 0} = {}) => {
    console.log(type,label,stock);
}
data2("any",{label : "404", stock :6})