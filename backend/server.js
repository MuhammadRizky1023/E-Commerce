const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { dbConnect } = require('./utilities/DB.JS');
require('dotenv').config();

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));

app.use(bodyParser.json());
app.use(cookieParser)
dbConnect()
app.use('/api', require('./routes/authroutes'))



const port = process.env.PORT
app.listen(port, () => console.log(`Server is rnning on port ${port}`));