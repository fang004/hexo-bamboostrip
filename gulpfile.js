var gulp = require('gulp'),
    del = require('del'),
    runSequence = require('run-sequence'),
    plugins = require('gulp-load-plugins')();

gulp.task('copy', function () {
    gulp.src('app/fonts/**/*')
      .pipe(gulp.dest('source/fonts/'));
})

gulp.task('css', function () {
  gulp.src('app/scss/**/*.scss')
    .pipe(plugins.sass().on('error', function (error) {
      console.log('scssError:', error);
      }))
//    .pipe(plugins.cssmin())
    .pipe(gulp.dest('source/css'));
})

gulp.task('js', function () {
  gulp.src('app/js/**/*.js')
    .pipe(plugins.babel({
        presets: ['es2015']
      }).on('error', function (error) {
        console.log('jsError:', error);
      }))
    .pipe(plugins.concat({path: 'scripts.js'}))
//    .pipe(plugins.uglify({output: {comments: true}}))
 //       .on('error', function(err){console.log(err)})
    .pipe(gulp.dest('source/js'));
})

gulp.task('clean', function () {
  del('css/**/*',{cwd: 'source'})
  del('js/**/*',{cwd: 'source'})
})

gulp.task('build', function () {
  runSequence('clean', 'copy', 'css', 'js');
});

gulp.task('watch', function () {
  var watcher = gulp.watch(['app/**/*', 'layout/**/*'], function () {
    runSequence('build');
  });
})

gulp.task('default', function () {
  runSequence('build', 'watch');
});
