var app = require("angular").module('angularLabs');
var factory = require("./../component-factory");
app.controller('breadcrumbsController', factory.createComponent(require('./controllers/breadcrumbs-controller')));