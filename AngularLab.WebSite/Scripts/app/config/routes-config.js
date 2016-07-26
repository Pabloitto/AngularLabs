
module.exports = {
    resolve: function($routeProvider) {
        require('./../main/routes')($routeProvider).create();
        require('./../forms/routes')($routeProvider).create();
        require('./../grid/routes')($routeProvider).create();
        require('./../tab/routes')($routeProvider).create();
        require('./../popup/routes')($routeProvider).create();
        require('./../badge/routes')($routeProvider).create();
        //{{INSERTHERE}}
    }
};