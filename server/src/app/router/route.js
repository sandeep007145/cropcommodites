
const express = require('express');
const cropCommodity = express.Router();
const crops = require('../model/commodity.json')

// get crops from server
cropCommodity.route('/').get(function (req, res) {
    res.status(200).send(crops)
});

module.exports = cropCommodity;