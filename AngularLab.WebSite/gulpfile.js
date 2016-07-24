(function () {
    var gulp = require("gulp");
    var gutil = require("gulp-util");
    var source = require("vinyl-source-stream");
    var browserify = require("browserify");
    var watchify = require("watchify");
    var browserSync = require('browser-sync').create();
    var env = {
        debug: true,
        url : "http://localhost:57449/"
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

    gulp.task('default', ['bundler','serve']);
}());