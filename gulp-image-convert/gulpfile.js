var gulp = require('gulp');
var gm = require('gulp-gm');

gulp.task('default', function () {
  gulp.src('./images/*.png')
    .pipe(gm(function (gmfile) {
      return gmfile.setFormat('jpg').quality(90);
    }))
    .pipe(gulp.dest('dist'));
});
