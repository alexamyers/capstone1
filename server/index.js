const PORT = 4001

require('dotenv').config()
const express = require('express'); 
const cors = require('cors');

const {SERVER_PORT} = process.env

const {seed} = require('./seed.js')
const { getRoutes, getMeadowRoutes, getSummersvilleRoutes, updateTicklist, getTicklist, /*deleteRoute*/ } = require('./controller.js')
const app = express()

app.use(express.json());
app.use(cors());

app.post('/seed', seed);
app.get('/api/routes', getRoutes);
app.get('/api/meadowroutes', getMeadowRoutes);
app.get('/api/summersvilleroutes', getSummersvilleRoutes);
app.post('/api/ticklist', updateTicklist);
app.get('/api/ticklist', getTicklist);
// app.delete('/api/ticklist/:route_id', deleteRoute);

app.listen(SERVER_PORT, () => console.log(`all good on port ${SERVER_PORT}`));


