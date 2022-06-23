const express = require("express")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middleware/errorMiddleware")
const port = process.env.PORT || 3500
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/user", require("./routes/userRoutes"))
app.use("/api/posts", require("./routes/postRouters"))


app.use(errorHandler)



app.listen(port, () => console.log(`Server running at port: ${port}`))