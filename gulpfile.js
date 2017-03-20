var gulp = require('gulp');
var postcss = require('gulp-postcss');
var browserSync = require('browser-sync').create();
var precss = require('precss');
var cssnext = require('cssnext');
var autoprefixer = require('autoprefixer');
var fontMagician = require('postcss-font-magician');
var postcssCssReset = require('postcss-css-reset');

gulp.task('default', ['watch']);

gulp.task('watch', function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('style/*', ['postcss']);
});

gulp.task('postcss', function () {
  var processors = [
    precss,
    cssnext,
    autoprefixer,
    fontMagician,
    postcssCssReset
  ];
  return gulp.src('style/*')
    .pipe(postcss(processors))
    .pipe(gulp.dest('post-css'));
});