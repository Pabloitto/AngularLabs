(function () {

    var app = require("angular").module('angularLabs');
    var factory = require("./../component-factory");

    /*services*/
    app.factory('commonService', factory.createComponent(require('./services/common-service')));


    /*directives*/
    app.directive('menu', factory.createComponent(require('./directives/menu/menu')));
    app.directive('panel', factory.createComponent(require('./directives/panel/panel')));
}());