var gulp = require('gulp');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var gutil = require('gutil');
var webpack = require('webpack');

var dirs = {
  testBuild : 'test-build',
  sourceBuild : 'source-build'
};

var files = {
  test : 'test/*.js',
  testBuild : dirs.testBuild + '/*.js',
  source: 'source/**/*.js'
};

//Test tasks

gulp.task('test:build', function () {
    return gulp.src(files.test)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(dirs.testBuild));
});

gulp.task('test', ['source:build', 'test:build'], function(){
  return gulp.src(files.testBuild, {read: false})
      .pipe(mocha());
});

//Source file transformation tasks

gulp.task('webpack', function (callback) {
  var webpackConfig = require('./webpack.config');
  webpack(webpackConfig, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[webpack]', stats.toString({
    }));
    callback();
  });
});

gulp.task('source:build', function () {
    return gulp.src(files.source)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(dirs.sourceBuild));
});

gulp.task('watch', function() {
    gulp.watch([files.test, files.source], ['test']);
});

gulp.task('default', ['source:build', 'test', 'watch' ]);
