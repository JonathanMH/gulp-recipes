var gulp = require('gulp');
var fs = require('fs');

gulp.task('one', function (cb) {
    fs.writeFile('one.txt', 'Gulp stuff in series!', function (err) {
        cb(err);
        /*
        if the above callback receives an error, the whole chain will stop right there, try removing the filename.
        */
    });
});

// task two runs when ['one'] is done
gulp.task('two', ['one'], function() {
  console.log('task two running, after task one')
});

// define multiple dependencies with ['one', 'two'], ['two'] works alone too, because of the dependency in task two
gulp.task('default', ['one', 'two']);
