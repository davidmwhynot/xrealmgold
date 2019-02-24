const gulp = require('gulp');

const compiler = require('webpack');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


const AUTOPREFIXER_BROWSERS = [
	'> 1%',
	'last 2 versions'
];


gulp.task('sass',
	gulp.series(() => {
		return gulp.src('src/public/sass/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
			.pipe(gulp.dest('dist/public'));
	})
);

gulp.task('app',
	() => gulp.src('src/public/js/app/index.js').pipe(webpack(webpackConfig, compiler)).pipe(gulp.dest('dist/public'))
);

gulp.task('default',
	gulp.series(gulp.parallel('app', 'sass'), () => {
		gulp.watch('src/public/js/app/**/*.js', gulp.series('app'));
		gulp.watch('src/public/sass/**/*.scss', gulp.series('sass'));
	})
);
