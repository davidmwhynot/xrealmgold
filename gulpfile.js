const gulp = require('gulp');
const compiler = require('webpack');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');

gulp.task('app',
	() => gulp.src('src/public/js/app/index.js').pipe(webpack(webpackConfig, compiler)).pipe(gulp.dest('dist/public')));

gulp.task('default',
	gulp.series('app', () => {
		gulp.watch('src/public/js/app/**/*.js', gulp.series('app'));
	}));
