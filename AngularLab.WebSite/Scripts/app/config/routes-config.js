
module.exports = {
    resolve: function($routeProvider) {
        require('./../main/routes')($routeProvider).create();
        //{{INSERTHERE}}
    }
};