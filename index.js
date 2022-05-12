const express = require('express');
let router = express.Router();
const app = express();
app.use(express.json());
const path = require("path");

const { init: initDB } = require('./utils/db.js');

initDB();
app.use(express.json());

app.get('/api/items', require('./itemsActions/getItems.js').get);

app.get('/api/items/:id', require('./itemsActions/getByID.js').get);

app.get('/api/categories', require('./categoryActions/getCategories.js').get);

app.get('/api/categories/:id', require('./categoryActions/getByID.js').get);

app.post('/api/items', require('./itemsActions/create.js').post);

app.post('/api/categories', require('./categoryActions/create.js').post);

app.patch('/api/items/:id', require('./itemsActions/update.js').patch);

app.patch('/api/categories/:id', require('./categoryActions/update.js').patch);

app.delete('/api/items/:id', require('./itemsActions/remove.js').del);

app.delete('/api/categories/:id', require('./categoryActions/remove.js').del);




app.listen(4000, () => {
    console.log('listening http://localhost:4000');
});