const dataset = require("./CallbackAbs1")

// param1 of dataset = users,posts,comments,todos
dataset("users", (error, data) => {
    console.table(data);
    dataset("posts", (error, data) => {
        console.log(data[1]);
        return 
    })
})