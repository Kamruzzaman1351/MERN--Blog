const path = require("path")
const express = require("express")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const port = process.env.PORT || 3500
connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/posts", require("./routes/postRouters"))
app.use("/api/admin", require("./routes/adminRouters"))

// Serving Frontend
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")))
    app.get("*", (req, res) => {
        res.sendFile(
           path.resolve(__dirname, "../", "frontend", "build", "index.html") 
        )
    })
}

app.use(errorHandler)



app.listen(port, () => console.log(`Server running at port: ${port}`))