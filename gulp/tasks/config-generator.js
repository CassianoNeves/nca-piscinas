var gulp = require('gulp');
var file = require('gulp-file');


var configurationTemplate =
    'module.exports = {\n' +
    '   "appName": "{appName}",\n' +
    '   "appVersion": {appVersion},\n' +
    '   "apiUrl": "{apiUrl}",\n' +
    '   "apiAuthUrl": "{apiAuthUrl}",\n' +
    '   "dataBaseName": "{dataBaseName}",\n' +
    '   "SessionTimeoutSeconds": {SessionTimeoutSeconds},\n' +
    '   "urlAmazonPhotos": "{urlAmazonPhotos}",\n' +
    '   "urlAmazonFiles": "{urlAmazonFiles}"\n' +
    '};\n';

gulp.task('config-generator', function () {
    var config = global.config;
    var buildedTemplate = configurationTemplate;

    for (var prop in config) {
        buildedTemplate = buildedTemplate.replace('{'+prop+'}', config[prop]);
    }

    var targetDir = './web/app/app.constants/';

    return file('configYouMovin.constant.js', buildedTemplate, { src: true })
            .pipe(gulp.dest(targetDir));
});
