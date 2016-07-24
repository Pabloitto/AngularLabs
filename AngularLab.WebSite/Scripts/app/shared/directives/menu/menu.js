(function () {

    var Menu = {
        imports: ["$location", "commonService"],
        body: function ($location, commonService) {
            return {
                restrict: 'E',
                templateUrl: window.root + "Scripts/app/shared/directives/menu/menu.html",
                scope: {
                    menuOptions: "=menuOptions"
                },
                controller: function ($scope) {
                    $scope.menu = [];
                    $scope.titleLabel = $scope.menuOptions.titleLabel;
                    $scope.signOutLabel = $scope.menuOptions.signOutLabel;

                    $scope.init = function () {
                        $scope.access = true;//TODO:Change by access from server
                        $scope.fetchMenu().then(function (data) {
                            $scope.menu = data;
                        });
                    };

                    $scope.fetchMenu = function () {
                        return commonService.doGet({
                            url : "/Main/GetMenu"
                        });
                    }
                }
            };
        }
    };

    module.exports = Menu;
}());