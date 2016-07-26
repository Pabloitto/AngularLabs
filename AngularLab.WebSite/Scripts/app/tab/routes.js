module.exports = function($routeProvider) {
    return {
        create: function() {
            $routeProvider.when('/tab', {
                templateUrl: '../Scripts/app/tab/views/tab-view.html',
                controller: 'tabController'
            });
        }
    }
};