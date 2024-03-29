const gulp = require("gulp");
const watch = require("gulp-watch");
const imagemin = require("gulp-imagemin");
const del = require("del");
const cleanCSS = require("gulp-clean-css");

gulp.task("deleteDistFolder", () => {
  return del("./dist");
});

gulp.task("build-styles", () => {
  return gulp
    .src("./app/temp/styles/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("./docs/temp/styles"));
});

gulp.task("build-scripts", () => {
  return gulp.src("./app/*.js").pipe(gulp.dest("./docs"));
});

gulp.task("build-html", () => {
  return gulp.src("./app/index.html").pipe(gulp.dest("./docs/"));
});

gulp.task("build-image-assets", () => {
  return gulp
    .src("./app/assets/images/**/*.**")
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task("build", ["deleteDistFolder"], () => {
  gulp.start("build-styles");
  gulp.start("build-scripts");
  gulp.start("build-html");
  gulp.start("build-image-assets");
});

gulp.task("optimizeImages", ["deleteDistFolder"], () => {
  // return gulp
  //   .src(["./app/assets/images/**/*"])
  //   .pipe(
  //     imagemin({
  //       progressive: true,
  //       interlaced: true,
  //       multipass: true
  //     })
  //   )
  //   .pipe(gulp.dest("./dist/assets/images"));
});

// gulp.task("build", ["deleteDistFolder", "optimizeImages"]);
