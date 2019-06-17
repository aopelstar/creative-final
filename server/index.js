const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require ('nodemailer');
const cors = require( 'cors' );
const cloudinary_controller = require('./cloudinary_cont');
require('dotenv').config();

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

app.post('/api/cloudinary', cloudinary_controller.getGallery)

const port = process.env.SERVER_PORT || 9876;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
