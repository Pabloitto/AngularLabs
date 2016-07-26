var app = require("angular").module('angularLabs');
var factory = require("./../component-factory");
app.controller('gridController', factory.createComponent(require('./controllers/grid-controller')));