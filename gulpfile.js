var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  gulp.watch('./app/index.html', function() {
    browserSync.reload();
  });

  gulp.watch('./app/assets/**/*.css', function() {
    browserSync.reload();
  });

});
