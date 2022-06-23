const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 3500
const app = express()

app.use("/user", require("./routes/userRoutes"))
app.use("/api/posts", require("./routes/postRouters"))






app.listen(port, () => console.log(`Server running at port: ${port}`))