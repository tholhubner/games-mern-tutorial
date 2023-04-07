const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const db = require("./db")
const app = express()

db.on("error", console.error.bind(console, "MongoDB Error :: "))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
	res.send("Hello, world!")
})

app.listen(3000, () => console.log("Server is now running on port 3000"))