module.exports = function($routeProvider) {
    return {
        create: function() {
            $routeProvider.when('/label', {
                templateUrl: '../Scripts/app/label/views/label-view.html',
                controller: 'labelController'
            });
        }
    }
};