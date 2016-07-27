var app = require("angular").module('angularLabs');
var factory = require("./../component-factory");
app.controller('formsController', factory.createComponent(require('./controllers/forms-controller')));