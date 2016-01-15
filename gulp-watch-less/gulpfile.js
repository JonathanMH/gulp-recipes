var gulp = require('gulp');
var sass = require('gulp-less');

gulp.task('styles', function() {
  gulp.src('./scss/test.less')
    .pipe(gulp.dest('./css'))
});

// Watch task
gulp.task('default',function() {
  // run task initially, after that watch
  gulp.start('styles');
  gulp.watch('./less/*.less',['styles']);
});
