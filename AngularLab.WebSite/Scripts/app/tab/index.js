var app = require("angular").module('angularLabs');
var factory = require("./../component-factory");
app.controller('tabController', factory.createComponent(require('./controllers/tab-controller')));