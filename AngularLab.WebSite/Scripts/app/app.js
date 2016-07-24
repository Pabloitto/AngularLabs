(function init() {

    var angular = require("angular");
    var routes = require("angular-route");
    var app = angular.module('angularLabs', ['ngRoute']);
    var routes = require("./config/routes-config");
    var dependencies = require("./config/dependencies-config");

    app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        routes.resolve($routeProvider);
    }]);

    dependencies.resolve();
}());