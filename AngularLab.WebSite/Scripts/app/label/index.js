var app = require("angular").module('angularLabs');
var factory = require("./../component-factory");
app.controller('labelController', factory.createComponent(require('./controllers/label-controller')));