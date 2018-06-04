var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app/"
    }
  });

  gulp.watch('./app/index.html', function() {
    browserSync.reload();
  });

  gulp.watch('./app/**.css', function() {
    gulp.start('cssInject');
  });

  gulp.watch('./app/assets/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });

});

gulp.task('cssInject', function(){
  return gulp.src('./app/styles.css')
    .pipe(broswerSync.stream());
});

  gulp.start('scriptsRefresh', function(){
    browserSync.reload();
  });
