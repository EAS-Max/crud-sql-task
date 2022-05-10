const express = require('express');
let router = express.Router();
const app = express();
app.use(express.json());
const path = require("path");

const { init: initDB } = require('./utils/db.js');

initDB();
app.use(express.json());

//app.get('/api/items', require(''));

// app.get('/api/items/:id', require(''));

app.get('/api/categories', require('./categoryActions/getCategories.js').get);

app.get('/api/categories/:id', require('./categoryActions/getByID.js').get);

// app.post('/api/items', require(''));

app.post('/api/categories', require('./categoryActions/create.js').post);

// app.patch('/api/items/:id', require(''));

// app.patch('/api/categories/:id', require('./categoryActions/update.js'));

// app.delete('/api/items/:id', require(''));

// app.delete('/api/categories/:id', require('./categoryActions/remove.js'));




app.listen(3000, () => {
    console.log('listening http://localhost:3000');
});