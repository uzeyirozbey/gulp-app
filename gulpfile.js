var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-html-minifier'),
    image = require('gulp-image');

gulp.task('connect', function() {
    connect.server({
        root: './',
        port: 8080,
        livereload: true
    });
});

gulp.task('minify', function() {
    gulp.src('./**.html')
      .pipe(htmlmin())
      .pipe(gulp.dest('./build'))
  });

  gulp.task('image', function () {
    gulp.src('./img/*')
      .pipe(image())
      .pipe(gulp.dest('./build/img'));
  });

gulp.task('scss-concat', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('js-concat', function () {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});

gulp.task('reload-html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./*.html'], ['reload-html']);
});

gulp.task('default', ['connect', 'scss-concat', 'js-concat', 'image', 'minify', 'watch']);