const express = require  ("express");
const mongoose = require("mongoose");
require ("dotenv").config();
const userRoutes = require("./routes/user")


const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api',userRoutes);


//routes
app.get("/", (req, res) => {
    res.send("WELCOME MY FIRTS API");
});

//mongodb conecction//
mongoose
.connect( process.env.MONGODB_URI)
.then(()=> console.log('conectado a Mongodb'))
.catch((error)=> console.error("error al conectar"));

app.listen(port, ()=> console.log('servidor corriendo en el puerto', port));
