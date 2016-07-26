(function () {
    var gulp = require("gulp");
    var gutil = require("gulp-util");
    var source = require("vinyl-source-stream");
    var browserify = require("browserify");
    var watchify = require("watchify");
    var browserSync = require('browser-sync').create();
    var argv = require('yargs').argv;
    var inquirer = require('inquirer');
    var fs = require('fs');
    var path = require('path');
    var beautify = require('js-beautify').js_beautify;
    var prettify = require('js-beautify').html;
    var _ = require('lodash');
    var env = {
        debug: true,
        url: "http://localhost:57449/"
    };

    gulp.task("bundler", function () {
        var bundler = watchify(browserify({
            entries: ['./Scripts/app/app.js'],
            extensions: ['.js'],
            debug: env.debug,
            packageCache: {},
            fullPaths: true
        }));


        function build(file) {
            return bundler.bundle()
                .on('error', gutil.log.bind(gutil, "browserify error"))
                .pipe(source('main.js'))
                .pipe(gulp.dest('./Scripts/app/'));
        };

        build();
        bundler.on('update', build);
    });

    gulp.task("serve", function () {
        browserSync.init({
            proxy: {
                target: env.url,
            }
        });

        gulp.watch("Scripts/app/**/*.html").on('change', browserSync.reload);
        gulp.watch("Scripts/app/main.js").on('change', browserSync.reload);
    });

    gulp.task("controller", function () {

        var root = "Scripts/app/";

        var questions = [{
            type: 'input',
            name: 'controller_name',
            message: 'What\'s your controller name'
        }, {
            type: 'input',
            name: 'route',
            message: 'What\'s the route'
        }];

        inquirer.prompt(questions).then(function (answers) {
            var newControllerPath = root + answers.controller_name;
            fs.mkdirSync(newControllerPath);
            fs.mkdirSync(newControllerPath + "/controllers");
            fs.mkdirSync(newControllerPath + "/views");

            var viewFileName = answers.controller_name + "-view";

            var controllerFileName = answers.controller_name + "-controller";

            var viewFilePath = newControllerPath + "/views/" + viewFileName + ".html";

            var controllerTemplate = beautify(getControllerTemplate(), { indent_size: 4 });

            fs.writeFile(newControllerPath + "/controllers/" + controllerFileName + ".js", controllerTemplate,
                function (err) {
                    if (err) {
                        return console.log(err);
                    }
                });

            fs.writeFile(viewFilePath, getViewTemplate(answers.controller_name),
                function (err) {
                    if (err) {
                        return console.log(err);
                    }
                });

            var indexContent = beautify(getIndexTemplate(controllerFileName), { indent_size: 4 });

            fs.writeFile(newControllerPath + "/index.js", indexContent,
                function (err) {
                    if (err) {
                        return console.log(err);
                    }
                });

            var routesContent = beautify(getRoutesTemplate(controllerFileName, answers.route, viewFilePath), { indent_size: 4 });

            fs.writeFile(newControllerPath + "/routes.js", routesContent,
                function (err) {
                    if (err) {
                        return console.log(err);
                    }
                });

            insertRequireIndexTemplate(root, answers.controller_name);
            insertRequireRouteTemplate(root, answers.controller_name);

        });
    });

    function getControllerTemplate() {
        var sb = "module.exports = {" +
                 "        imports: ['$scope']," +
                 "        body: function ($scope) {" +
                 "        }" +
                 "    };";
        return sb;
    }

    function getViewTemplate(controllerName) {
        var title = controllerName.toUpperCase();
        var html = "<panel panel-options='{title : \"" + title + "\"}'> <div> " + title + " </div></panel>"
        var template = prettify(html, { indent_size: 4 });
        return template.toString();
    }

    function getIndexTemplate(controllerName) {

        var camelCaseName = _.camelCase(controllerName);

        var sb = "var app = require(\"angular\").module('angularLabs');" +
                 "var factory = require(\"./../component-factory\");" +
                 "app.controller('" + camelCaseName + "', factory.createComponent(require('./controllers/" + controllerName + "')));";

        return sb;
    }

    function getRoutesTemplate(controllerName, routeName, viewFilePath) {

        var camelCaseName = _.camelCase(controllerName);

        var sb = "module.exports = function ($routeProvider) {" +
                    "    return {" +
                    "        create: function () {" +
                    "            $routeProvider.when('/" + routeName + "', {" +
                    "                templateUrl: '../" + viewFilePath + "'," +
                    "                controller: '" + camelCaseName + "'" +
                    "            });" +
                    "        }" +
                    "    }" +
                    "};";

        return sb;
    }

    function insertRequireRouteTemplate(root, controllerName) {
        var template = "require('./../" + controllerName + "/routes')($routeProvider).create();";
        var path = root + 'config/routes-config.js';
        fs.readFile(path, function (err, data) {
            if (err) {
                return console.error(err);
            }
            var jsContent = data.toString();
            jsContent = jsContent.replace("//{{INSERTHERE}}", template + "\n //{{INSERTHERE}}");
            jsContent = beautify(jsContent, { indent_size: 4 });
            fs.writeFile(path, jsContent,
                function (err) {
                    if (err) {
                        return console.log(err);
                    }
                });
        });
    }

    function insertRequireIndexTemplate(root, controllerName) {
        var template = "require('./../" + controllerName + "/index');";
        var path = root + 'config/dependencies-config.js';
        fs.readFile(path, function (err, data) {
            if (err) {
                return console.error(err);
            }
            var jsContent = data.toString();
            jsContent = jsContent.replace("//{{INSERTHERE}}", template + "\n //{{INSERTHERE}}");
            jsContent = beautify(jsContent, { indent_size: 4 });
            fs.writeFile(path, jsContent,
                function (err) {
                    if (err) {
                        return console.log(err);
                    }
                });
        });
    }

    gulp.task('default', ['bundler', 'serve']);
}());