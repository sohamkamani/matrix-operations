var gulp = require('gulp');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var gutil = require('gutil');

var dirs = {
  testBuild: 'test-build',
  sourceBuild: 'source-build',
  source: 'source',
  dist: 'build'
};

var files = {
  test: 'test/**/*.js',
  testBuild: dirs.testBuild + '/**/*.js',
  source: dirs.source + '/**/*.js',
  sourceBuild : dirs.sourceBuild + '/**/*.js',
  entryPoint: dirs.sourceBuild + '/index.js'
};

//Test tasks

gulp.task('test:build', function () {
  return gulp.src(files.test)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(dirs.testBuild));
});

gulp.task('test', ['source:build', 'test:build'], function () {
  return gulp.src(files.testBuild, {
      read: false
    })
    .pipe(mocha());
});

//Source file transformation tasks
gulp.task('source:build', function () {
  return gulp.src(files.source)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(dirs.sourceBuild));
});

gulp.task('copy:build', ['source:build'], function () {
  return gulp.src(files.sourceBuild)
    .pipe(gulp.dest(dirs.dist));
});

gulp.task('watch', function () {
  gulp.watch([files.test, files.source], ['test']);
});

gulp.task('default', ['source:build', 'test', 'watch']);
gulp.task('build', ['source:build', 'copy:build']);
