module.exports = function($routeProvider) {
    return {
        create: function() {
            $routeProvider.when('/button', {
                templateUrl: '../Scripts/app/button/views/button-view.html',
                controller: 'buttonController'
            });
        }
    }
};