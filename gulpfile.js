'use strict';
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var istanbul = require('gulp-babel-istanbul');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
// var istanbul = require('gulp-istanbul');
var path = require('path');
var isparta = require('isparta');
var mergeStream = require('merge-stream');

require('babel-core/register');

var dirs = {
  source: 'source',
  dist: 'build',
  sourceRoot: path.join(__dirname, 'source'),
  testRoot: path.join(__dirname, 'test'),
  testBuild : 'build/test',
  sourceBuild : 'build/source'
 };

var files = {
  test: 'test/**/*.js',
  testBuild: path.join(dirs.testBuild, '/**/*.js'),
  source: path.join(dirs.source, '/**/*.js'),
  sourceBuild: path.join(dirs.sourceBuild, '/**/*.js'),
  entryPoint: dirs.sourceBuild + '/index.js'
};

//Test tasks
gulp.task('source:build', function () {
  return gulp.src(files.source)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write('.', // (C)
      {
        sourceRoot: dirs.sourceRoot
      }))
    .pipe(gulp.dest('build/source'));
});

gulp.task('test:build', function () {
  return gulp.src(files.test)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write('.', // (C)
      {
        sourceRoot: dirs.testRoot
      }))
    .pipe(gulp.dest('build/test'));
});

gulp.task('build:all', ['source:build', 'test:build']);


gulp.task('pre-test',['build:all'], function () {
  return gulp.src([files.sourceBuild])
    .pipe(istanbul({
      instrumenter: isparta.Instrumenter
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['build:all','pre-test'], function () {
  return gulp.src(files.testBuild, {
      read: false
    })
    .pipe(mocha())
    .pipe(istanbul.writeReports());
});


gulp.task('clean:all', function () {
  return gulp.src('build', {
      read: false
    })
    .pipe(clean());
});

gulp.task('build', function(){
  return gulp.src(files.source)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch([files.test, files.source], ['test']);
});

gulp.task('default', ['clean:all'], function () {
  return gulp.start.apply(this, ['test', 'watch']);
});
