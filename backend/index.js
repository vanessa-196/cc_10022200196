const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db")

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("tiny"))

//routes
app.get("/", (req, res) => {
    res.send("hello world")
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async() => {
    await connectDB();
    console.log(`Server running on http://localhost:${PORT}`);
})
