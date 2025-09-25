
const express = require("express");
const dotenv = require("dotenv");
const chats = require("./DATA/data")

const app = express();
dotenv.config()

// Add CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("app is running");
})

app.get("/api/chat", (req, res) => {
    res.send(chats);
})

app.get("/api/chat/:id", (req, res) => {
    // console.log(req);
    const singleChat = chats.find((c) => c._id === req.params.id);
    // console.log(singleChat);
    res.send(singleChat)
})


app.listen(PORT, () => console.log(`server is running on port ${PORT}`));