const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'docs/'
    }
  });

  gulp.watch('./docs/index.html', () => {
    browserSync.reload();
  });

  gulp.watch('./docs/**.css', () => {
    gulp.start('cssInject');
  });

  gulp.watch('./docs/assets/**/*.js', () => {
    gulp.start('scriptsRefresh');
  });
});

gulp.task('cssInject', () => {
  return gulp.src('./docs/styles.css').pipe(broswerSync.stream());
});

gulp.start('scriptsRefresh', () => {
  browserSync.reload();
});
