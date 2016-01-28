var gulp = require("gulp");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("default", function () {
  return gulp.src("js/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});
