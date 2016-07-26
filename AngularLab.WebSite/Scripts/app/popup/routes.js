module.exports = function($routeProvider) {
    return {
        create: function() {
            $routeProvider.when('/popup', {
                templateUrl: '../Scripts/app/popup/views/popup-view.html',
                controller: 'popupController'
            });
        }
    }
};