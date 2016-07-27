module.exports = function($routeProvider) {
    return {
        create: function() {
            $routeProvider.when('/alerts', {
                templateUrl: '../Scripts/app/alerts/views/alerts-view.html',
                controller: 'alertsController'
            });
        }
    }
};