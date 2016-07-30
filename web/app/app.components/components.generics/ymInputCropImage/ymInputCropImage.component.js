var controller = require('./ymInputCropImage.controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/app.components/components.generics/ymInputCropImage/ymInputCropImage.html',
  controllerAs: 'ctrl',
  bindings: {
    imageSourceCropped: '=',
    file: '=',
    optionsCropper: '=',
    idCropper: '@',
    imgUploaded: '=',
    change: '='
  },
  controller: controller
};
