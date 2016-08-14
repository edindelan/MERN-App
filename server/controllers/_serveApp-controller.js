'use strict';
const path = require('path');
const indexPath = path.resolve('../client/index.html');

exports.serveApp = function (req, res, next) {
    res.sendFile(indexPath);
};