const express = require("express")
const path = require("path")

const app = express();
const coba = path.basename('')

app.get('', (req, res) => {
    res.send('Hello express!')
})
app.get('/weather', (req, res) => {
    res.send("anjay")
})

app.get("*",(req,res)=> {
    res.render("404", {
        title : "404",
        errorMessage : "Page Not Found"
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
}) 