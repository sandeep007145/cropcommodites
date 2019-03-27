const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),

 commodityRoute = require('./src/app/router/route');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/crop', commodityRoute);
const port = process.env.PORT || 5000;

const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});