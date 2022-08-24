const express = require("express")
const app = express()
const path = require("path")
app.listen(8000)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/html/index.html'))
})
app.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/html/404easter.html'))
})
let e = 0


function eas() {
    if (e == 10) { express.response.redirect("/404") } else { e++ }
}
