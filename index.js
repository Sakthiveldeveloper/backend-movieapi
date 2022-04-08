const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/user-routes');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movies-routes');
const PORT = process.env.PORT || 5000;


const app = express();
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send("Welcome to Node Api1")
})

mongoose
    .connect(
        "mongodb+srv://edureka:1234@cluster0.t9dwc.mongodb.net/movie?retryWrites=true&w=majority",
        {
            useUnifiedTopology: true, 
            useNewUrlParser: true, 
        })
    .then(() => {
        app.listen(PORT, () => console.log(`server is running ${PORT}`))
    })
    .catch(err => {
        console.log(err);
        console.log('hii')
    });

app.use('/api/users', usersRoutes);
app.use('/api/movie', movieRoutes);
