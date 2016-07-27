module.exports = function($routeProvider) {
    return {
        create: function() {
            $routeProvider.when('/forms', {
                templateUrl: '../Scripts/app/forms/views/forms-view.html',
                controller: 'formsController'
            });
        }
    }
};