module.exports = function($routeProvider) {
    return {
        create: function() {
            $routeProvider.when('/dropdown', {
                templateUrl: '../Scripts/app/dropdown/views/dropdown-view.html',
                controller: 'dropdownController'
            });
        }
    }
};