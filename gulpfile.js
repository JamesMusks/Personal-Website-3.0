// npm install  gulp --save-dev

var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssnano=require('gulp-cssnano');

// 任务
gulp.task('css',function(){
  gulp.src(['css/index.css'])
  .pipe(cssnano('index.css'))
  .pipe(gulp.dest('./dist'))
});