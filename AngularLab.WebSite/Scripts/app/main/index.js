var app = require("angular").module('angularLabs');
var factory = require("./../component-factory");
app.controller('mainController', factory.createComponent(require('./controllers/main-controller')));