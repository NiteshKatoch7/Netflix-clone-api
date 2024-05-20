const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 5000;
const userRoutes = require("./routes/UserRoutes");

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/netflix").then(()=>{
    console.log("DB Connected")
});

app.use("/api/user", userRoutes);

app.listen(port, ()=>{
    console.log("server Started on: ", port);
})