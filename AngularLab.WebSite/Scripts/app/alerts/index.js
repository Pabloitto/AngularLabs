var app = require("angular").module('angularLabs');
var factory = require("./../component-factory");
app.controller('alertsController', factory.createComponent(require('./controllers/alerts-controller')));