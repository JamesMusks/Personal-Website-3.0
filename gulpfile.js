// npm install  gulp --save-dev

var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssnano=require('gulp-cssnano');
var htmlmin=require('gulp-htmlmin');


// 任务
gulp.task('html',function(){
  gulp.src(['index.html'])
  .pipe(htmlmin())
  .pipe(gulp.dest('./dist'))
});