var app = require("angular").module('angularLabs');
var factory = require("./../component-factory");
app.controller('popupController', factory.createComponent(require('./controllers/popup-controller')));