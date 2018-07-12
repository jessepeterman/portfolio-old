const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app/'
    }
  });

  gulp.watch('./app/index.html', () => {
    browserSync.reload();
  });

  gulp.watch('./app/**/**.css', () => {
    gulp.start('cssInject');
  });

  gulp.watch('./app/assets/**/*.js', () => {
    gulp.start('scriptsRefresh');
  });
});

gulp.task('cssInject', () => {
  return gulp.src('./temp/styles/styles.css').pipe(browserSync.stream());
});

gulp.start('scriptsRefresh', () => {
  browserSync.reload();
});
