var gulp   = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Watch task
gulp.task('default',function() {
  // run task initially, after that watch
  gulp.start('jshint');
  gulp.watch('./js/*.js',['jshint']);
});
