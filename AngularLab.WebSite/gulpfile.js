(function () {
    var gulp = require("gulp");
    var task = require('require-dir')('./gulp-tasks');

    gulp.task('default', ['bundler', 'serve']);
}());