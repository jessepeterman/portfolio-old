const gulp = require("gulp");
const watch = require("gulp-watch");
const postcss = require("gulp-postcss");
const cssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const cssvars = require("postcss-simple-vars");
const nested = require("postcss-nested");

gulp.task("copy-styles", () => {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"))
    .pipe(gulp.dest("./docs/temp/styles"));
});

gulp.task("styles", () => {
  gulp.watch("./app/assets/styles/**/*.css", () => {
    gulp.start("copy-styles");
  });
});

// gulp.task('html', () => {
//   return gulp.src('./app/index.html').pipe(gulp.dest('./docs/'));
// });

// gulp.task('watch-html', () => {
//   gulp.watch('./app/*.html', () => {
//     gulp.start('html');
//   });
// });
