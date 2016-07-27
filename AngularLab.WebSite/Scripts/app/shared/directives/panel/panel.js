module.exports = {
    body: function () {
        return {
            restrict: 'E',
            templateUrl: window.root + "Scripts/app/shared/directives/panel/panel.html",
            transclude: true,
            scope: {
                panelOptions: "=panelOptions"
            },
            controller: function ($scope) {
                $scope.panelType = $scope.panelOptions.panelType || 'panel-primary';
                $scope.title = $scope.panelOptions.title || '';
            }
        };
    }
};