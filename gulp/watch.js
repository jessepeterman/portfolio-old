var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs/"
    }
  });

  gulp.watch('./docs/index.html', function() {
    browserSync.reload();
  });

  gulp.watch('./docs/**.css', function() {
    gulp.start('cssInject');
  });

  gulp.watch('./docs/assets/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });

});

gulp.task('cssInject', function(){
  return gulp.src('./docs/styles.css')
    .pipe(broswerSync.stream());
});

  gulp.start('scriptsRefresh', function(){
    browserSync.reload();
  });
