var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');


gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css') // css source
		.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer])) // css manipuations
		.on('error', function(msg){ // error checking function on error
			console.log(msg.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles')); // temp css save location

});