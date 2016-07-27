var app = require("angular").module('angularLabs');
var factory = require("./../component-factory");
app.controller('buttonController', factory.createComponent(require('./controllers/button-controller')));