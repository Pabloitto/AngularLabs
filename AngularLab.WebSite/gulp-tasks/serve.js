var gulp = require("gulp");
var browserSync = require('browser-sync').create();
gulp.task("serve", function () {
    browserSync.init({
        proxy: {
            target: "http://localhost:57449/",
        }
    });

    gulp.watch("Scripts/app/**/*.html").on('change', browserSync.reload);
    gulp.watch("Scripts/app/main.js").on('change', browserSync.reload);
});