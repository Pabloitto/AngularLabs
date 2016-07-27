module.exports = {
    imports: ['$scope'],
    body: function($scope) {
        $scope.layoutOptions = {
            title: 'FORMS',
            breadCrumbsOptions: {
                IsActive: false,
                Text: 'FORMS',
                CssIcon: 'glyphicon-plus'
            }
        };
    }
};