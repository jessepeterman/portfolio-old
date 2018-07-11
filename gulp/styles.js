const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const cssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');

gulp.task('styles', () => {
  return gulp
    .src('./assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./temp/styles'));
});

gulp.task('styles-watch', () => {
  watch('index.html', () => {
    gulp.start('html');
  });
  gulp.watch('./assets/styles/**/*.css', () => {
    gulp.start('styles');
  });
});
