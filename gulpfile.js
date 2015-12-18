// require gulp
var gulp = require('gulp');

// require other packages
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

// scripts task
gulp.task('scripts', function() {
  return gulp.src('./node_modules/foundation-sites/js/**/*.js')
  .pipe(concat('foundation.js'))
  .pipe(gulp.dest('./node_modules/foundation-sites/dist/js/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./node_modules/foundation-sites/dist/js/'));
});

// styles task
gulp.task('styles', function() {
  return gulp.src('./node_modules/foundation-sites/*.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('./node_modules/foundation-sites/dist/css/'))
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./node_modules/foundation-sites/dist/css/'));
});

// watch task
gulp.task('watch', function() {
  gulp.watch('./node_modules/foundation-sites/js/*.js', ['scripts']);
  gulp.watch('./node_modules/foundation-sites/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
