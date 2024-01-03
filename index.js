require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const commentRoutes = require('./routes/comments-routes'); 
const episodeRoutes = require('./routes/episodes-routes');
const userRoutes = require('./routes/users-routes'); 
const app = express();
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 8004;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
app.use(express.json());

app.use('/api/comments', commentRoutes); 
app.use('/api/users', userRoutes); 
app.use('/api/episodes', episodeRoutes); 


app.listen(PORT, function(){
    console.log("Listening on " + PORT);
});