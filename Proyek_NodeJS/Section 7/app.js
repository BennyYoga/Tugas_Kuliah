const express = require("express")
const hbs = require("hbs")
const path = require("path")
const app = express();
// fetch = require('node-fetch')

const viewPath = path.join((__dirname,"./templates/views"))
const partialsPath = path.join(__dirname,"./templates/partials")
app.set("views",viewPath)
hbs.registerPartials(partialsPath)


const data = [
    {nama : "mantap", no_kursi : 20},
    {nama : "keren", no_kursi : 21},
    {nama : "somad", no_kursi : 22},
    {nama : "dobleh", no_kursi : 23}
]
 
app.set('view engine', 'hbs')
app.get("",(req,res) => {
    res.render('index',{
        title: "my title",
        name : "andrew"
    })
})

app.get('/weather', (req, res) => {
    res.render('weather',{
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ducimus minus at est a incidunt repellendus omnis recusandae laboriosam aut.",
        judul : "Ini",
        unit : "indo",
        isi_data : data[1]
    })
    res.send("you provied " + req.query.judul + " as the address")
})

app.get("*", (req,res) => {
    res.render("404",{
        title : "404",
        errorMessage : "Page Not Found"
    })
})

app.listen(3001, () => {
    console.log('Server is up on port 3001.')
}) 