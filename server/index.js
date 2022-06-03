const PORT = 4000

require('dotenv').config()
const express = require('express'); 
const cors = require('cors');

const {SERVER_PORT} = process.env

const {seed} = require('./seed.js')
const { getRoutes } = require('./controller.js')
const app = express()

app.use(express.json());
app.use(cors());

app.post('/seed', seed);
app.get('/api/routes', getRoutes);

app.listen(SERVER_PORT, () => console.log(`all good on port ${SERVER_PORT}`));


