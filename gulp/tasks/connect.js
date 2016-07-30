var gulp = require('gulp');
var connect = require('gulp-connect');
var paths = require('../config/paths');

// No Linux para funcionar o reload, é preciso instalar a extensão no browser do 'LiveReload'
gulp.task('connect', function() {
  connect.server({
    root: paths.dist.index,
    livereload: true,
    port: 3000
  });
});
