var gulp = require('gulp');
var gm = require('gulp-gm');

gulp.task('default', function () {
  gulp.src('images/*')
    .pipe(gm(function (gmfile) {
      gmfile.setFormat('jpg').quality(100);
      return gmfile.resize(1080, 1080);
    }))
    .pipe(gulp.dest('dist'));
});
