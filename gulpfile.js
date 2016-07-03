var gulp = require("gulp");
var concat =require("gulp-concat");
var less = require("gulp-less");
 
gulp.task("concat", function () {
	gulp.src([
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/bootstrap/dist/js/bootstrap.min.js'
		])
	  .pipe(concat('bundle.js'))
	  .pipe(gulp.dest('assets/js'));

});

gulp.task("less", function () {
	gulp.src('node_modules/bootstrap/less/bootstrap.less')
	  .pipe(less())
	  .pipe(concat('bundle.css'))
	  .pipe(gulp.dest('assets/css'));

});



