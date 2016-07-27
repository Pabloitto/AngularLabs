
module.exports = {
    resolve: function($routeProvider) {
        require('./../main/routes')($routeProvider).create();
        require('./../forms/routes')($routeProvider).create();
        require('./../grid/routes')($routeProvider).create();
        require('./../tab/routes')($routeProvider).create();
        require('./../popup/routes')($routeProvider).create();
        require('./../badge/routes')($routeProvider).create();
        require('./../button/routes')($routeProvider).create();
        require('./../breadcrumbs/routes')($routeProvider).create();
        require('./../dropdown/routes')($routeProvider).create();
        require('./../label/routes')($routeProvider).create();
        require('./../alerts/routes')($routeProvider).create();
        //{{INSERTHERE}}
    }
};