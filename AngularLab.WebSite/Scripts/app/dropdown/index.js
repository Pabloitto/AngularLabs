var app = require("angular").module('angularLabs');
var factory = require("./../component-factory");
app.controller('dropdownController', factory.createComponent(require('./controllers/dropdown-controller')));