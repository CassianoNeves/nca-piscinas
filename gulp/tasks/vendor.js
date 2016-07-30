var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');

var paths = require('../config/paths');

gulp.task('vendor_scripts', ['bower'], function() {
  return gulp.src([
    './web/app/app.vendor/js/modernizr-2.6.2.min.js',
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/datatables/media/js/jquery.dataTables.min.js',
    './bower_components/angular/angular.min.js',
    './bower_components/angular-base64/angular-base64.min.js',
    './bower_components/angular-slimscroll/angular-slimscroll.js',
    './bower_components/angular-translate/angular-translate.min.js',
    './bower_components/angular-ui-router/release/angular-ui-router.min.js',
    './bower_components/bootstrap/dist/js/bootstrap.min.js',
    './bower_components/moment/moment.js',
    './bower_components/moment/locale/pt-br.js',
    './bower_components/moment/locale/en.js',
    './bower_components/pickadate/lib/picker.js',
    './bower_components/pickadate/lib/picker.date.js',
    './bower_components/toastr/toastr.min.js',
    './bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
    './bower_components/angular-animate/angular-animate.min.js',
    './bower_components/angular-datatables/dist/angular-datatables.min.js',
    './bower_components/angular-smart-table/dist/smart-table.js',
    './bower_components/bootbox/bootbox.js',
    './bower_components/ngBootbox/dist/ngBootbox.min.js',
    './bower_components/angular-locale-pt-br/index.js',
    './bower_components/lodash/dist/lodash.min.js',
    './bower_components/angular-google-maps/dist/angular-google-maps.min.js',
    './bower_components/angular-simple-logger/dist/angular-simple-logger.min.js',
    './bower_components/ng-file-upload/ng-file-upload.min.js',
    './bower_components/angular-img-cropper/dist/angular-img-cropper.min.js',
    './bower_components/angular-img-cropper/dist/angular-img-cropper.min.js',
    './bower_components/ng-cropper/dist/ngCropper.all.js',
    './bower_components/ng-tags-input/ng-tags-input.min.js',
    './bower_components/textAngular/dist/textAngular-rangy.min.js',
    './bower_components/textAngular/dist/textAngular-sanitize.min.js',
    './bower_components/textAngular/dist/textAngular.min.js',

    './web/app/app.vendor/sha1/sha1.js',
    './web/app/app.vendor/chosen/js/chosen.jquery.js',
    './web/app/app.vendor/js/jquery-1.11.1.min.js',
    './web/app/app.vendor/js/jquery.singlePageNav.min.js',
    './web/app/app.vendor/js/owl.carousel.min.js',
    './web/app/app.vendor/js/jquery.easing.min.js',
    './web/app/app.vendor/js/jquery.slitslider.js',
    './web/app/app.vendor/js/jquery.ba-cond.min.js',
    './web/app/app.vendor/js/wow.min.js',
    './web/app/app.vendor/js/jquery.fancybox.pack.js',

  ])
  .pipe(concat('vendor_scripts_bundle.min.js'))
  // .pipe(uglify())
  .pipe(gulp.dest(paths.dist.vendor));
});

gulp.task('vendor_styles', function() {
  return gulp.src([
    './bower_components/font-awesome/css/font-awesome.min.css',
    './web/app/app.vendor/css/jquery.fancybox.css',
    './bower_components/bootstrap/dist/css/bootstrap.min.css',

    // './bower_components/angular-datatables/dist/css/angular-datatables.min.css',
    // './bower_components/datatables/media/css/dataTables.bootstrap.min.css',
    // './bower_components/toastr/toastr.min.css',
    // './bower_components/ng-cropper/dist/ngCropper.all.css',
    // './bower_components/ng-tags-input/ng-tags-input.bootstrap.min.css',
    // './bower_components/ng-tags-input/ng-tags-input.min.css',
    // './bower_components/textAngular/dist/textAngular.css',

    './web/app/app.vendor/css/owl.carousel.css',
    './web/app/app.vendor/css/slit-slider.css',
    './web/app/app.vendor/css/animate.css',
    // './web/app/app.vendor/css/jquery.fs.boxer.min.css',
    // './web/app/app.vendor/css/lightview.css',
    './web/app/app.vendor/css/main.css',
  ])
  // .pipe(cssmin({
  //   keepSpecialComments: 0
  // }))
  .pipe(concat('vendor_styles_bundle.min.css'))
  .pipe(gulp.dest(paths.dist.vendor));
});

gulp.task('vendor', ['vendor_styles', 'vendor_scripts']);
