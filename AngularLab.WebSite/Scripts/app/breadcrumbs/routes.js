module.exports = function($routeProvider) {
    return {
        create: function() {
            $routeProvider.when('/breadcrumbs', {
                templateUrl: '../Scripts/app/breadcrumbs/views/breadcrumbs-view.html',
                controller: 'breadcrumbsController'
            });
        }
    }
};