const users = [
    {
        name : "Benny",
        age : "19"
    },
    {
        name : "Yoga",
        age : "20"
    },
    {
        name : "Suhardi",
        age : "21"
    },
]

const user = users.find((props) => {
    return props.name === "Yoga"
})
console.log(user);