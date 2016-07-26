var app = require("angular").module('angularLabs');
var factory = require("./../component-factory");
app.controller('badgeController', factory.createComponent(require('./controllers/badge-controller')));