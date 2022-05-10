const express = require('express');
let router = express.Router();
const app = express();
app.use(express.json());
const path = require("path");
const cors = require('cors');