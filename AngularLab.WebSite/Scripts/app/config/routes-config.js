﻿module.exports = {
    resolve: function ($routeProvider) {
        require('./../main/routes')($routeProvider).create();
        require('./../forms/routes')($routeProvider).create();
    }
};