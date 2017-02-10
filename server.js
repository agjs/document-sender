const express = require('express');
const path = require('path');
const mailer = require('nodemailer');
const docx = require('docxtemplater');
const jszip = require('jszip');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let app = express();

app.use(express.static('public'));
app.use('/libs', express.static('./node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/document', (req, res, next) => {
    // you will get req.body and use it with docx lib to format a document
    // then you will send that document via nodemailer
    res.status(201).json(req.body);

});

app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Express running on port ${process.env.PORT || 8080}`);
});