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
            var newControllerPath = root + "/" + answers.controller_name;
            fs.mkdirSync(newControllerPath);
            fs.mkdirSync(newControllerPath + "/controllers");
            fs.mkdirSync(newControllerPath + "/views");

            var controllerTemplate = beautify(getControllerTemplate(answers.controller_name),{ indent_size: 4 });

            fs.writeFile(newControllerPath + "/controllers/" + answers.controller_name + "-controller.js", controllerTemplate, function (err) {
                if (err) {
                    return console.log(err);
                }
            });

            fs.writeFile(newControllerPath + "/views/" + answers.controller_name + "-view.html", "", function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        });
    });

    function getControllerTemplate(controllerName) {
        var sb = " var " + controllerName + " = {" +
                    "        imports: ['$scope']," +
                    "        body: function ($scope) {" +
                    "        }" +
                    "    };";
        return sb;
    }

    gulp.task('default', ['bundler', 'serve']);
}());